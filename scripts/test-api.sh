#!/bin/bash

# AdSensei API Test Script
# Usage: ./scripts/test-api.sh

BASE_URL="${BASE_URL:-http://localhost:8080}"

echo "🧪 Testing AdSensei API at $BASE_URL"
echo ""

# Test 1: Health Check
echo "1️⃣  Health Check..."
curl -s "$BASE_URL/" && echo "" || echo "❌ Failed"
echo ""

# Test 2: Ingest Sample Ads
echo "2️⃣  Ingesting sample ads..."
RESPONSE=$(curl -s -X POST "$BASE_URL/ingest/json" \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://picsum.photos/800/600",
      "https://picsum.photos/800/601"
    ]
  }')

echo "$RESPONSE" | jq '.' 2>/dev/null || echo "$RESPONSE"
echo ""

# Extract first asset ID
ASSET_ID=$(echo "$RESPONSE" | jq -r '.assets[0].id' 2>/dev/null)

if [ "$ASSET_ID" != "null" ] && [ -n "$ASSET_ID" ]; then
  echo "✅ Ingested assets. First ID: $ASSET_ID"
  echo ""
  
  # Test 3: List Assets
  echo "3️⃣  Listing all assets..."
  curl -s "$BASE_URL/assets" | jq '.' 2>/dev/null || curl -s "$BASE_URL/assets"
  echo ""
  
  # Test 4: Analyze Single Ad
  echo "4️⃣  Analyzing single ad (ID: $ASSET_ID)..."
  echo "⏳ This may take 30-90 seconds..."
  curl -s -X POST "$BASE_URL/analyzeAd/$ASSET_ID" \
    -H "Content-Type: application/json" | jq '.' 2>/dev/null || \
    curl -s -X POST "$BASE_URL/analyzeAd/$ASSET_ID"
  echo ""
  
  # Test 5: Get All Insights
  echo "5️⃣  Getting batch insights..."
  curl -s -X POST "$BASE_URL/allAdInsights" \
    -H "Content-Type: application/json" | jq '.' 2>/dev/null || \
    curl -s -X POST "$BASE_URL/allAdInsights"
  echo ""
  
  echo "✅ All tests completed!"
else
  echo "❌ Failed to ingest assets"
fi
