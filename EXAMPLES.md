# AdSensei API Examples

Quick reference for common API operations.

## Setup

```bash
export BASE_URL="http://localhost:8080"
```

---

## 1. Ingest Ads

### From JSON Array

```bash
curl -X POST "$BASE_URL/ingest/json" \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://example.com/ad1.jpg",
      "https://example.com/ad2.mp4",
      "https://example.com/ad3.png"
    ]
  }'
```

### From Excel File

```bash
curl -X POST "$BASE_URL/ingest/excel" \
  -F "file=@ads.xlsx"
```

---

## 2. List All Assets

```bash
curl "$BASE_URL/assets"
```

**With jq (pretty print):**

```bash
curl -s "$BASE_URL/assets" | jq '.'
```

---

## 3. Analyze Single Ad

Replace `<ASSET_ID>` with actual asset ID:

```bash
curl -X POST "$BASE_URL/analyzeAd/<ASSET_ID>" \
  -H "Content-Type: application/json"
```

**Example with metadata:**

```bash
curl -X POST "$BASE_URL/analyzeAd/5966b1e8" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/ad.jpg",
    "metadata": {
      "campaign": "Spring 2024",
      "brand": "TechCorp"
    }
  }'
```

---

## 4. Analyze All Pending Ads

```bash
curl -X POST "$BASE_URL/analyseAll" \
  -H "Content-Type: application/json"
```

---

## 5. Get Batch Insights

```bash
curl -X POST "$BASE_URL/allAdInsights" \
  -H "Content-Type: application/json"
```

**Save to file:**

```bash
curl -X POST "$BASE_URL/allAdInsights" \
  -H "Content-Type: application/json" \
  -o insights.json
```

**Pretty print with jq:**

```bash
curl -s -X POST "$BASE_URL/allAdInsights" | jq '.'
```

---

## 6. Get Single Ad Result

```bash
curl "$BASE_URL/ad/<ASSET_ID>"
```

---

## 7. Export to CSV

```bash
curl "$BASE_URL/export.csv" -o ad_metrics.csv
```

---

## Complete Workflow Example

```bash
#!/bin/bash

# 1. Ingest ads
echo "Ingesting ads..."
RESPONSE=$(curl -s -X POST "$BASE_URL/ingest/json" \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://example.com/ad1.jpg",
      "https://example.com/ad2.jpg"
    ]
  }')

echo "$RESPONSE" | jq '.'

# 2. Extract asset IDs
ASSET_ID=$(echo "$RESPONSE" | jq -r '.assets[0].id')
echo "First asset ID: $ASSET_ID"

# 3. Analyze single ad
echo "Analyzing ad $ASSET_ID..."
curl -s -X POST "$BASE_URL/analyzeAd/$ASSET_ID" | jq '.'

# 4. Analyze all remaining
echo "Analyzing all pending ads..."
curl -s -X POST "$BASE_URL/analyseAll" | jq '.'

# 5. Get insights
echo "Getting batch insights..."
curl -s -X POST "$BASE_URL/allAdInsights" | jq '.' > insights.json

# 6. Export CSV
echo "Exporting to CSV..."
curl -s "$BASE_URL/export.csv" -o ad_metrics.csv

echo "✅ Complete! Check insights.json and ad_metrics.csv"
```

---

## Using with JavaScript/TypeScript

```typescript
const BASE_URL = 'http://localhost:8080';

// Ingest ads
async function ingestAds(urls: string[]) {
  const response = await fetch(`${BASE_URL}/ingest/json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ urls })
  });
  return response.json();
}

// Analyze single ad
async function analyzeAd(assetId: string) {
  const response = await fetch(`${BASE_URL}/analyzeAd/${assetId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
}

// Get all insights
async function getAllInsights() {
  const response = await fetch(`${BASE_URL}/allAdInsights`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
}

// Usage
const { assets } = await ingestAds([
  'https://example.com/ad1.jpg',
  'https://example.com/ad2.jpg'
]);

const result = await analyzeAd(assets[0].id);
console.log(result);

const insights = await getAllInsights();
console.log(insights);
```

---

## Using with Python

```python
import requests
import json

BASE_URL = "http://localhost:8080"

# Ingest ads
def ingest_ads(urls):
    response = requests.post(
        f"{BASE_URL}/ingest/json",
        json={"urls": urls}
    )
    return response.json()

# Analyze single ad
def analyze_ad(asset_id):
    response = requests.post(
        f"{BASE_URL}/analyzeAd/{asset_id}",
        headers={"Content-Type": "application/json"}
    )
    return response.json()

# Get all insights
def get_all_insights():
    response = requests.post(
        f"{BASE_URL}/allAdInsights",
        headers={"Content-Type": "application/json"}
    )
    return response.json()

# Usage
result = ingest_ads([
    "https://example.com/ad1.jpg",
    "https://example.com/ad2.jpg"
])

assets = result["assets"]
print(f"Ingested {len(assets)} ads")

# Analyze first ad
analysis = analyze_ad(assets[0]["id"])
print(json.dumps(analysis, indent=2))

# Get batch insights
insights = get_all_insights()
print(f"Total analyzed: {insights['totals']['analyzed']}")
```

---

## Testing with Sample Images

Use placeholder services for testing:

```bash
curl -X POST "$BASE_URL/ingest/json" \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://picsum.photos/800/600",
      "https://picsum.photos/800/601",
      "https://picsum.photos/800/602"
    ]
  }'
```

---

## Advanced: Batch Processing Script

```bash
#!/bin/bash

# Process a large batch of ads
URLS_FILE="urls.txt"  # One URL per line

# Read URLs from file
URLS=$(cat "$URLS_FILE" | jq -R . | jq -s .)

# Ingest
echo "Ingesting $(cat $URLS_FILE | wc -l) ads..."
curl -X POST "$BASE_URL/ingest/json" \
  -H "Content-Type: application/json" \
  -d "{\"urls\": $URLS}"

# Wait a moment
sleep 2

# Analyze all
echo "Starting batch analysis..."
curl -X POST "$BASE_URL/analyseAll"

# Poll for completion
while true; do
  ASSETS=$(curl -s "$BASE_URL/assets")
  PENDING=$(echo "$ASSETS" | jq '[.assets[] | select(.status == "pending" or .status == "processing")] | length')
  
  if [ "$PENDING" -eq 0 ]; then
    echo "✅ All ads analyzed!"
    break
  fi
  
  echo "⏳ $PENDING ads still processing..."
  sleep 10
done

# Get insights
curl -s -X POST "$BASE_URL/allAdInsights" | jq '.' > final_insights.json
curl -s "$BASE_URL/export.csv" -o final_metrics.csv

echo "📊 Results saved to final_insights.json and final_metrics.csv"
```

---

## Monitoring & Debugging

### Check Server Health

```bash
curl -i "$BASE_URL/"
```

### View Asset Status Distribution

```bash
curl -s "$BASE_URL/assets" | jq '[.assets[].status] | group_by(.) | map({status: .[0], count: length})'
```

### Find Failed Analyses

```bash
curl -s "$BASE_URL/assets" | jq '.assets[] | select(.status == "error")'
```

### Get Top Performing Ads

```bash
curl -s -X POST "$BASE_URL/allAdInsights" | jq '.asset_summary_top10'
```

---

## Rate Limiting Considerations

When processing large batches:

1. **Ingest in chunks** (50-100 at a time)
2. **Monitor processing** with `/assets` endpoint
3. **Wait between batches** to avoid overwhelming the API
4. **Use `/analyseAll`** for parallel processing

```bash
# Process 200 ads in chunks of 50
for i in {0..3}; do
  START=$((i * 50))
  END=$((START + 50))
  
  # Extract chunk of URLs
  CHUNK=$(sed -n "${START},${END}p" urls.txt | jq -R . | jq -s .)
  
  # Ingest chunk
  curl -X POST "$BASE_URL/ingest/json" \
    -H "Content-Type: application/json" \
    -d "{\"urls\": $CHUNK}"
  
  # Analyze chunk
  curl -X POST "$BASE_URL/analyseAll"
  
  # Wait for completion
  sleep 60
done
```
