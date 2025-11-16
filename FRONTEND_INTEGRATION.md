# Frontend Integration Guide

## 🔌 Connecting Your Frontend to AdSensei Backend

This guide shows you how to integrate the AdSensei backend with your frontend application.

---

## 🚀 Quick Setup

### 1. Start the Backend

```bash
# In the backend directory
npm run dev
```

Backend runs at: **http://localhost:8080**

### 2. Configure Frontend

Update your frontend's API base URL to point to the backend:

```javascript
const API_BASE_URL = 'http://localhost:8080';
```

---

## 🌐 CORS Configuration

The backend is configured to accept requests from any origin by default. If you need to restrict origins:

**Edit `.env`:**
```env
# Allow all origins (default)
CORS_ORIGIN=

# Or allow specific origins
CORS_ORIGIN=http://localhost:3000,http://localhost:5173,https://your-frontend.com
```

---

## 📡 Frontend API Integration

### React/Next.js Example

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export interface AdAsset {
  id: string;
  url: string;
  type: 'image' | 'video' | 'unknown';
  status: 'pending' | 'processing' | 'done' | 'error';
  result?: AdAnalysisResult;
  error?: string;
}

export interface AdAnalysisResult {
  asset_type: string;
  summary: string;
  catchiness_level: number;
  aesthetics_score: number;
  readability_score: number;
  brand_fit_score: number;
  memorability_score: number;
  sentiment: string;
  tone: string;
  product_category: string;
  detected_text: string[];
  detected_logos: string[];
  objects: string[];
  audio_visual_signals: {
    color_palette: string[];
    composition_notes: string;
    style_keywords: string[];
  };
  target_audience: {
    age_ranges: string[];
    interests: string[];
    regions: string[];
  };
  best_platforms: string[];
  improvement_suggestions: string[];
  reasons_for_scores: string[];
  dimension_profile: {
    creative_attention: number;
    aesthetics: number;
    readability: number;
    brandFit: number;
    memorability: number;
  };
}

// Ingest ads
export async function ingestAds(urls: string[]): Promise<{ ingested: number; assets: AdAsset[] }> {
  const response = await fetch(`${API_BASE_URL}/ingest/json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ urls })
  });
  
  if (!response.ok) {
    throw new Error(`Failed to ingest ads: ${response.statusText}`);
  }
  
  return response.json();
}

// List all assets
export async function listAssets(): Promise<{ count: number; assets: AdAsset[] }> {
  const response = await fetch(`${API_BASE_URL}/assets`);
  
  if (!response.ok) {
    throw new Error(`Failed to list assets: ${response.statusText}`);
  }
  
  return response.json();
}

// Analyze single ad
export async function analyzeAd(assetId: string): Promise<AdAsset> {
  const response = await fetch(`${API_BASE_URL}/analyzeAd/${assetId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to analyze ad: ${response.statusText}`);
  }
  
  return response.json();
}

// Analyze all pending ads
export async function analyzeAll(): Promise<{ analysed_now: number; total_done: number }> {
  const response = await fetch(`${API_BASE_URL}/analyseAll`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to analyze all: ${response.statusText}`);
  }
  
  return response.json();
}

// Get single ad result
export async function getAd(assetId: string): Promise<AdAsset> {
  const response = await fetch(`${API_BASE_URL}/ad/${assetId}`);
  
  if (!response.ok) {
    throw new Error(`Failed to get ad: ${response.statusText}`);
  }
  
  return response.json();
}

// Get all insights
export async function getAllInsights(): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/allAdInsights`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to get insights: ${response.statusText}`);
  }
  
  return response.json();
}

// Export to CSV
export function exportCSV(): string {
  return `${API_BASE_URL}/export.csv`;
}
```

### React Component Example

```tsx
// components/AdAnalyzer.tsx
import { useState } from 'react';
import { ingestAds, analyzeAd, getAllInsights } from '@/lib/api';

export function AdAnalyzer() {
  const [urls, setUrls] = useState<string[]>(['']);
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState<any[]>([]);
  const [insights, setInsights] = useState<any>(null);

  const handleIngest = async () => {
    setLoading(true);
    try {
      const result = await ingestAds(urls.filter(u => u.trim()));
      setAssets(result.assets);
      alert(`Ingested ${result.ingested} ads!`);
    } catch (error) {
      console.error('Failed to ingest:', error);
      alert('Failed to ingest ads');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (assetId: string) => {
    setLoading(true);
    try {
      const result = await analyzeAd(assetId);
      setAssets(prev => prev.map(a => a.id === assetId ? result : a));
      alert('Analysis complete!');
    } catch (error) {
      console.error('Failed to analyze:', error);
      alert('Failed to analyze ad');
    } finally {
      setLoading(false);
    }
  };

  const handleGetInsights = async () => {
    setLoading(true);
    try {
      const result = await getAllInsights();
      setInsights(result);
    } catch (error) {
      console.error('Failed to get insights:', error);
      alert('Failed to get insights');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ad Analyzer</h1>
      
      {/* URL Input */}
      <div className="mb-4">
        <label className="block mb-2">Ad URLs:</label>
        {urls.map((url, i) => (
          <input
            key={i}
            type="text"
            value={url}
            onChange={(e) => {
              const newUrls = [...urls];
              newUrls[i] = e.target.value;
              setUrls(newUrls);
            }}
            className="w-full p-2 border rounded mb-2"
            placeholder="https://example.com/ad.jpg"
          />
        ))}
        <button
          onClick={() => setUrls([...urls, ''])}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Add URL
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleIngest}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Ingest Ads
        </button>
        <button
          onClick={handleGetInsights}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          Get Insights
        </button>
      </div>

      {/* Assets List */}
      {assets.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Assets</h2>
          {assets.map(asset => (
            <div key={asset.id} className="border p-4 mb-2 rounded">
              <p><strong>URL:</strong> {asset.url}</p>
              <p><strong>Status:</strong> {asset.status}</p>
              {asset.status === 'pending' && (
                <button
                  onClick={() => handleAnalyze(asset.id)}
                  className="mt-2 px-4 py-2 bg-purple-500 text-white rounded"
                >
                  Analyze
                </button>
              )}
              {asset.result && (
                <div className="mt-2">
                  <p><strong>Catchiness:</strong> {asset.result.catchiness_level}</p>
                  <p><strong>Aesthetics:</strong> {asset.result.aesthetics_score}</p>
                  <p><strong>Summary:</strong> {asset.result.summary}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Insights */}
      {insights && (
        <div>
          <h2 className="text-xl font-bold mb-2">Batch Insights</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(insights, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
```

---

## 🔄 Polling for Updates

Since analysis takes time, implement polling to check status:

```typescript
async function pollAssetStatus(assetId: string, maxAttempts = 60): Promise<AdAsset> {
  for (let i = 0; i < maxAttempts; i++) {
    const asset = await getAd(assetId);
    
    if (asset.status === 'done' || asset.status === 'error') {
      return asset;
    }
    
    // Wait 2 seconds before next check
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  throw new Error('Analysis timeout');
}

// Usage
const asset = await analyzeAd(assetId);
const result = await pollAssetStatus(assetId);
console.log('Analysis complete:', result);
```

---

## 🎨 Vue.js Example

```typescript
// composables/useAdAnalytics.ts
import { ref } from 'vue';

const API_BASE_URL = 'http://localhost:8080';

export function useAdAnalytics() {
  const loading = ref(false);
  const assets = ref<any[]>([]);
  const insights = ref<any>(null);

  async function ingestAds(urls: string[]) {
    loading.value = true;
    try {
      const response = await fetch(`${API_BASE_URL}/ingest/json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
      const data = await response.json();
      assets.value = data.assets;
      return data;
    } finally {
      loading.value = false;
    }
  }

  async function analyzeAd(assetId: string) {
    loading.value = true;
    try {
      const response = await fetch(`${API_BASE_URL}/analyzeAd/${assetId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      return await response.json();
    } finally {
      loading.value = false;
    }
  }

  async function getAllInsights() {
    loading.value = true;
    try {
      const response = await fetch(`${API_BASE_URL}/allAdInsights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      insights.value = await response.json();
      return insights.value;
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    assets,
    insights,
    ingestAds,
    analyzeAd,
    getAllInsights
  };
}
```

---

## 🐍 Python Frontend (Streamlit/Flask)

```python
import requests

API_BASE_URL = "http://localhost:8080"

def ingest_ads(urls):
    response = requests.post(
        f"{API_BASE_URL}/ingest/json",
        json={"urls": urls}
    )
    return response.json()

def analyze_ad(asset_id):
    response = requests.post(
        f"{API_BASE_URL}/analyzeAd/{asset_id}",
        headers={"Content-Type": "application/json"}
    )
    return response.json()

def get_all_insights():
    response = requests.post(
        f"{API_BASE_URL}/allAdInsights",
        headers={"Content-Type": "application/json"}
    )
    return response.json()

# Streamlit example
import streamlit as st

st.title("Ad Analyzer")

urls = st.text_area("Enter ad URLs (one per line)").split("\n")

if st.button("Ingest Ads"):
    result = ingest_ads([u.strip() for u in urls if u.strip()])
    st.success(f"Ingested {result['ingested']} ads")
    st.json(result)

if st.button("Get Insights"):
    insights = get_all_insights()
    st.json(insights)
```

---

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=8080
LAVA_API_KEY=your_key
LAVA_BEARER=your_token
CORS_ORIGIN=http://localhost:3000,http://localhost:5173
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
VITE_API_URL=http://localhost:8080
REACT_APP_API_URL=http://localhost:8080
```

---

## 🚀 Production Deployment

### Backend on Render/Heroku
```env
CORS_ORIGIN=https://your-frontend.vercel.app,https://your-frontend.netlify.app
```

### Frontend Configuration
```typescript
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-backend.onrender.com'
  : 'http://localhost:8080';
```

---

## 🧪 Testing the Connection

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Test connection
curl http://localhost:8080/

# Terminal 3: Start frontend
cd frontend
npm run dev
```

---

## 📊 Real-time Updates with WebSocket (Future)

For real-time progress updates, consider implementing WebSocket support:

```typescript
// Future enhancement
const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (event) => {
  const update = JSON.parse(event.data);
  console.log('Analysis progress:', update);
};
```

---

## 🆘 Troubleshooting

### CORS Errors
- Ensure `CORS_ORIGIN` is set correctly in backend `.env`
- Check browser console for specific CORS error
- Try setting `CORS_ORIGIN=*` for testing

### Connection Refused
- Verify backend is running: `curl http://localhost:8080/`
- Check port number matches in frontend config
- Ensure no firewall blocking

### 404 Errors
- Verify API endpoint paths match
- Check HTTP method (GET vs POST)
- Review API.md for correct endpoints

---

## 📚 Additional Resources

- **API Documentation**: [API.md](./API.md)
- **Examples**: [EXAMPLES.md](./EXAMPLES.md)
- **Backend Setup**: [SETUP.md](./SETUP.md)

---

**Ready to connect!** 🎉

Start backend: `npm run dev`  
Update frontend API URL: `http://localhost:8080`
