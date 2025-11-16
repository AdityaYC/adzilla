# 🔌 AdSensei Backend - Now Running & Connected!

## ✅ Current Status

### Backend Server
- **Status**: ✅ **RUNNING**
- **URL**: `http://localhost:8080`
- **Port**: 8080
- **CORS**: Enabled for all origins
- **Process**: Running in development mode with hot-reload

### Test Frontend
- **Status**: ✅ **OPENED**
- **File**: `test-frontend.html`
- **Features**: Full UI for testing all API endpoints

---

## 🎯 What's Running

```
┌─────────────────────────────────────┐
│   AdSensei Backend API Server       │
│   http://localhost:8080             │
│                                     │
│   ✅ Health Check                   │
│   ✅ Ingest Endpoints               │
│   ✅ Analysis Endpoints             │
│   ✅ Insights Endpoints             │
│   ✅ Export Endpoints               │
│   ✅ CORS Enabled                   │
└─────────────────────────────────────┘
```

---

## 🚀 Quick Test

### 1. Test Backend Health
```bash
curl http://localhost:8080/
# Should return: "Ad Analytics API is running."
```

### 2. Test with Frontend
- Open `test-frontend.html` in your browser (already opened!)
- You should see a green "Connected" status
- Try ingesting sample URLs
- Analyze ads and view results

### 3. Test with curl
```bash
# Ingest sample ads
curl -X POST http://localhost:8080/ingest/json \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://picsum.photos/800/600"]}'

# List assets
curl http://localhost:8080/assets
```

---

## 🔗 Connect Your Frontend

### Option 1: Use the Test Frontend
The test frontend (`test-frontend.html`) is already open and connected!

### Option 2: Connect Your Own Frontend

**Update your frontend's API configuration:**

```javascript
// React/Next.js
const API_BASE_URL = 'http://localhost:8080';

// Vue.js
const API_BASE_URL = 'http://localhost:8080';

// Angular
environment.apiUrl = 'http://localhost:8080';
```

**Example API calls:**

```javascript
// Ingest ads
const response = await fetch('http://localhost:8080/ingest/json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    urls: ['https://example.com/ad.jpg'] 
  })
});

// Analyze ad
const analysis = await fetch('http://localhost:8080/analyzeAd/ASSET_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
});

// Get insights
const insights = await fetch('http://localhost:8080/allAdInsights', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
});
```

---

## 📡 Available Endpoints

### Core Endpoints (As Per Spec)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/analyzeAd/:id` | ⭐ Analyze single ad |
| POST | `/allAdInsights` | ⭐ Get batch insights |

### Additional Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/ingest/json` | Ingest ads from JSON |
| POST | `/ingest/excel` | Ingest ads from Excel |
| GET | `/assets` | List all assets |
| POST | `/analyseAll` | Analyze all pending |
| GET | `/ad/:adId` | Get single ad result |
| GET | `/export.csv` | Export to CSV |

---

## 🎨 Frontend Integration Examples

### React Hook Example

```typescript
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8080';

export function useAdAnalytics() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  const ingestAds = async (urls: string[]) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/ingest/json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
      const data = await res.json();
      setAssets(data.assets);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const analyzeAd = async (assetId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/analyzeAd/${assetId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      return await res.json();
    } finally {
      setLoading(false);
    }
  };

  const getInsights = async () => {
    const res = await fetch(`${API_URL}/allAdInsights`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    return await res.json();
  };

  return { assets, loading, ingestAds, analyzeAd, getInsights };
}
```

### Vue Composable Example

```typescript
import { ref } from 'vue';

const API_URL = 'http://localhost:8080';

export function useAdAnalytics() {
  const assets = ref([]);
  const loading = ref(false);

  const ingestAds = async (urls: string[]) => {
    loading.value = true;
    try {
      const res = await fetch(`${API_URL}/ingest/json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
      const data = await res.json();
      assets.value = data.assets;
      return data;
    } finally {
      loading.value = false;
    }
  };

  return { assets, loading, ingestAds };
}
```

---

## 🔧 Configuration

### Backend Environment (.env)
```env
PORT=8080
LAVA_API_KEY=your_key_here
LAVA_BEARER=your_token_here
CORS_ORIGIN=
```

**Note**: CORS is currently set to allow all origins. To restrict:
```env
CORS_ORIGIN=http://localhost:3000,http://localhost:5173
```

### Frontend Environment
```env
# Next.js
NEXT_PUBLIC_API_URL=http://localhost:8080

# Vite
VITE_API_URL=http://localhost:8080

# Create React App
REACT_APP_API_URL=http://localhost:8080
```

---

## 🧪 Testing Workflow

### 1. Ingest Sample Ads
```bash
curl -X POST http://localhost:8080/ingest/json \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://picsum.photos/800/600",
      "https://picsum.photos/800/601"
    ]
  }'
```

**Response:**
```json
{
  "ingested": 2,
  "assets": [
    {
      "id": "abc123...",
      "url": "https://picsum.photos/800/600",
      "type": "image",
      "status": "pending"
    }
  ]
}
```

### 2. Analyze an Ad
```bash
curl -X POST http://localhost:8080/analyzeAd/abc123 \
  -H "Content-Type: application/json"
```

**Note**: Analysis takes 30-90 seconds. Poll the `/ad/:id` endpoint to check status.

### 3. Get Batch Insights
```bash
curl -X POST http://localhost:8080/allAdInsights \
  -H "Content-Type: application/json"
```

---

## 📊 Response Examples

### Single Ad Analysis
```json
{
  "id": "abc123",
  "url": "https://example.com/ad.jpg",
  "type": "image",
  "status": "done",
  "result": {
    "asset_type": "image",
    "summary": "Eye-catching product ad...",
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
    "objects": ["smartphone", "person"],
    "audio_visual_signals": {
      "color_palette": ["#FF5733", "#33FF57"],
      "composition_notes": "Rule of thirds",
      "style_keywords": ["modern", "vibrant"]
    },
    "target_audience": {
      "age_ranges": ["18-24", "25-34"],
      "interests": ["technology"],
      "regions": ["North America"]
    },
    "best_platforms": ["Instagram", "TikTok"],
    "improvement_suggestions": [
      "Increase contrast",
      "Add stronger CTA"
    ],
    "reasons_for_scores": [
      "High visual appeal",
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

### Batch Insights
```json
{
  "totals": { "analyzed": 40 },
  "averages": {
    "aesthetics": 85,
    "catchiness": 82,
    "readability": 88,
    "brandFit": 90,
    "memorability": 84
  },
  "top_categories": [
    { "key": "consumer electronics", "count": 15 }
  ],
  "sentiment_distribution": [
    { "key": "positive", "count": 25 }
  ],
  "asset_summary_top10": [
    {
      "id": "abc123",
      "score": 92.5,
      "title": "Eye-catching product ad..."
    }
  ]
}
```

---

## 🎯 Next Steps

### For Development
1. ✅ Backend is running at `http://localhost:8080`
2. ✅ Test frontend is open in your browser
3. ✅ CORS is configured for all origins
4. 📝 Add your `LAVA_API_KEY` and `LAVA_BEARER` to `.env` to enable analysis
5. 🔗 Connect your frontend using the examples above

### For Production
1. Deploy backend to Render/Heroku/Railway
2. Update `CORS_ORIGIN` with your frontend URL
3. Update frontend API URL to production backend
4. Set environment variables in deployment platform

---

## 🆘 Troubleshooting

### Backend Not Responding
```bash
# Check if server is running
curl http://localhost:8080/

# Restart server
npm run dev
```

### CORS Errors
- Backend CORS is set to allow all origins
- If issues persist, check browser console for specific error
- Verify frontend is making requests to `http://localhost:8080`

### Analysis Fails
- Ensure `LAVA_API_KEY` and `LAVA_BEARER` are set in `.env`
- Check backend logs for error messages
- Verify image URLs are publicly accessible

### Port Already in Use
```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Or change port in .env
PORT=8081
```

---

## 📚 Documentation

- **[API.md](./API.md)** - Complete API reference
- **[FRONTEND_INTEGRATION.md](./FRONTEND_INTEGRATION.md)** - Detailed integration guide
- **[EXAMPLES.md](./EXAMPLES.md)** - More code examples
- **[SETUP.md](./SETUP.md)** - Deployment guide

---

## 🎉 You're All Set!

✅ Backend running at `http://localhost:8080`  
✅ Test frontend open and connected  
✅ CORS configured for all origins  
✅ All endpoints available  
✅ Ready to analyze ads!

**Start analyzing:**
1. Use the test frontend (already open)
2. Or connect your own frontend
3. Or use curl/Postman for API testing

**Need help?** Check the documentation files listed above!
