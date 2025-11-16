# AdSensei API Documentation

## Base URL
```
http://localhost:8080
```

## Endpoints

### 1. Health Check
**GET** `/`

Returns server status.

**Response:**
```
Ad Analytics API is running.
```

---

### 2. Ingest Ads from Excel
**POST** `/ingest/excel`

Upload an Excel file with ad URLs in the first column.

**Request:**
- Content-Type: `multipart/form-data`
- Field: `file` (Excel file)

**Response:**
```json
{
  "ingested": 10,
  "assets": [
    {
      "id": "uuid",
      "url": "https://example.com/ad.jpg",
      "type": "image",
      "status": "pending"
    }
  ]
}
```

---

### 3. Ingest Ads from JSON
**POST** `/ingest/json`

Submit ad URLs as JSON array.

**Request:**
```json
{
  "urls": [
    "https://example.com/ad1.jpg",
    "https://example.com/ad2.mp4"
  ]
}
```

**Response:**
```json
{
  "ingested": 2,
  "assets": [
    {
      "id": "uuid",
      "url": "https://example.com/ad1.jpg",
      "type": "image",
      "status": "pending"
    }
  ]
}
```

---

### 4. List All Assets
**GET** `/assets`

Get all ingested assets with their status.

**Response:**
```json
{
  "count": 10,
  "assets": [
    {
      "id": "uuid",
      "url": "https://example.com/ad.jpg",
      "type": "image",
      "status": "done",
      "result": { ... }
    }
  ]
}
```

---

### 5. Analyze Single Ad ⭐
**POST** `/analyzeAd/:id`

Analyze a single ad by its ID. This is the main endpoint specified in the project requirements.

**Parameters:**
- `id` (path): Asset UUID

**Request Body (optional):**
```json
{
  "url": "https://example.com/ad.jpg",
  "metadata": {
    "campaign": "Spring 2024"
  }
}
```

**Response:**
```json
{
  "id": "uuid",
  "url": "https://example.com/ad.jpg",
  "type": "image",
  "status": "done",
  "result": {
    "asset_type": "image",
    "summary": "Eye-catching product ad featuring...",
    "catchiness_level": 85,
    "aesthetics_score": 90,
    "readability_score": 88,
    "brand_fit_score": 92,
    "memorability_score": 87,
    "sentiment": "positive",
    "tone": "energetic",
    "product_category": "consumer electronics",
    "detected_text": ["Buy Now", "50% Off"],
    "detected_logos": ["Brand X"],
    "objects": ["smartphone", "person", "background"],
    "audio_visual_signals": {
      "color_palette": ["#FF5733", "#33FF57"],
      "composition_notes": "Rule of thirds, centered subject",
      "style_keywords": ["modern", "minimalist", "vibrant"]
    },
    "target_audience": {
      "age_ranges": ["18-24", "25-34"],
      "interests": ["technology", "gadgets"],
      "regions": ["North America", "Europe"]
    },
    "best_platforms": ["Instagram", "TikTok", "YouTube"],
    "improvement_suggestions": [
      "Increase contrast for better readability",
      "Add stronger call-to-action"
    ],
    "reasons_for_scores": [
      "High visual appeal due to color contrast",
      "Clear product focus"
    ],
    "dimension_profile": {
      "creative_attention": 88,
      "aesthetics": 90,
      "readability": 88,
      "brandFit": 92,
      "memorability": 87
    }
  }
}
```

---

### 6. Analyze All Pending Ads
**POST** `/analyseAll`

Analyze all assets with `pending` or `error` status in parallel.

**Response:**
```json
{
  "analysed_now": 10,
  "total_done": 15
}
```

---

### 7. Get Single Ad Result
**GET** `/ad/:adId`

Retrieve analysis result for a specific ad.

**Response:**
```json
{
  "id": "uuid",
  "url": "https://example.com/ad.jpg",
  "type": "image",
  "status": "done",
  "result": { ... }
}
```

---

### 8. Get All Ad Insights ⭐
**POST** `/allAdInsights`

Get batch roll-up insights across all analyzed ads. This is the main batch endpoint specified in the project requirements.

**Response:**
```json
{
  "totals": {
    "analyzed": 40
  },
  "averages": {
    "aesthetics": 85,
    "catchiness": 82,
    "readability": 88,
    "brandFit": 90,
    "memorability": 84
  },
  "top_categories": [
    { "key": "consumer electronics", "count": 15 },
    { "key": "fashion", "count": 10 }
  ],
  "sentiment_distribution": [
    { "key": "positive", "count": 25 },
    { "key": "neutral", "count": 10 },
    { "key": "very_positive", "count": 5 }
  ],
  "tone_distribution": [
    { "key": "energetic", "count": 20 },
    { "key": "professional", "count": 15 }
  ],
  "top_colors": [
    { "key": "#ff5733", "count": 30 },
    { "key": "#33ff57", "count": 25 }
  ],
  "audience_age_ranges": [
    { "key": "25-34", "count": 35 },
    { "key": "18-24", "count": 28 }
  ],
  "best_platforms": [
    { "key": "Instagram", "count": 38 },
    { "key": "Facebook", "count": 32 }
  ],
  "dimension_profile": {
    "creative_attention": [
      { "id": "uuid1", "score": 95 },
      { "id": "uuid2", "score": 92 }
    ],
    "aesthetics": [ ... ],
    "readability": [ ... ],
    "brandFit": [ ... ],
    "memorability": [ ... ]
  },
  "asset_summary_top10": [
    {
      "id": "uuid",
      "score": 92.5,
      "title": "Eye-catching product ad featuring..."
    }
  ]
}
```

---

### 9. Export to CSV
**GET** `/export.csv`

Download all analyzed ads as CSV file.

**Response:**
- Content-Type: `text/csv`
- File: `ad_metrics.csv`

**CSV Columns:**
- id
- url
- asset_type
- catchiness_level
- aesthetics_score
- readability_score
- brand_fit_score
- memorability_score
- sentiment
- tone
- product_category
- best_platforms

---

## Error Responses

All endpoints return appropriate HTTP status codes:

- `200` - Success
- `400` - Bad Request (invalid input)
- `404` - Not Found (asset doesn't exist)
- `500` - Internal Server Error (analysis failed)

**Error Format:**
```json
{
  "error": "Error message description"
}
```

---

## Analysis Schema

The analysis result follows a strict JSON schema with the following fields:

- **asset_type**: `"image" | "video" | "unknown"`
- **summary**: Brief description of the ad
- **Scores** (0-100):
  - catchiness_level
  - aesthetics_score
  - readability_score
  - brand_fit_score
  - memorability_score
- **sentiment**: `"very_negative" | "negative" | "neutral" | "positive" | "very_positive"`
- **tone**: Descriptive tone (e.g., "energetic", "professional")
- **product_category**: Detected product category
- **detected_text**: Array of text found in the ad
- **detected_logos**: Array of detected brand logos
- **objects**: Array of detected objects
- **audio_visual_signals**: Color palette, composition notes, style keywords
- **target_audience**: Age ranges, interests, regions
- **best_platforms**: Recommended social media platforms
- **improvement_suggestions**: Array of actionable recommendations
- **reasons_for_scores**: Rationale for the given scores
- **dimension_profile**: Detailed breakdown of key dimensions

---

## Rate Limiting & Performance

- Parallel processing controlled by `BATCH_CONCURRENCY` (default: 5)
- Maximum batch size: `MAX_BATCH_SIZE` (default: 50)
- Analysis timeout: 90 seconds per asset
- Expected processing time: <5 minutes for 40-50 assets

---

## Authentication

Currently, the API uses Lava Payments for LLM access. Configure `LAVA_API_KEY` in your `.env` file.

Future versions may include API key authentication for the AdSensei endpoints themselves.
