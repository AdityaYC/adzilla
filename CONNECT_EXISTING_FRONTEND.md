# Connecting Your Existing Frontend to AdSensei Backend

## 🎯 Current Setup

### Backend Status
- ✅ **Running** at `http://localhost:8080`
- ✅ **CORS enabled** for all origins
- ✅ **All endpoints ready**
- ✅ **GitHub repo**: https://github.com/G-Samarth/AdSensei-CalHacks

### Frontend Location
Based on the GitHub repository structure, the backend is in:
- **Backend repo**: `G-Samarth/AdSensei-CalHacks` (current directory)
- **Frontend repo**: Needs to be specified or is deployed separately

---

## 🔌 Connection Steps

### Step 1: Locate Your Frontend

If your frontend is:

**A) In a separate repository:**
```bash
# Clone it next to the backend
cd ..
git clone <your-frontend-repo-url> adsensei-frontend
cd adsensei-frontend
```

**B) In a different directory:**
```bash
cd /path/to/your/frontend
```

**C) Already deployed:**
- Just update the API URL in your deployed frontend config

---

### Step 2: Update Frontend API Configuration

Find your frontend's API configuration file and update it:

#### React/Next.js
```typescript
// .env.local or .env
NEXT_PUBLIC_API_URL=http://localhost:8080

// Or in your config file
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
```

#### Vue.js
```typescript
// .env.local
VITE_API_URL=http://localhost:8080

// Or in your config
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
```

#### Angular
```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

#### Plain JavaScript/HTML
```javascript
// In your JS file
const API_BASE_URL = 'http://localhost:8080';
```

---

### Step 3: Verify API Endpoints

Make sure your frontend is calling these endpoints:

#### Required Endpoints (Per Spec)
```javascript
// Analyze single ad
POST http://localhost:8080/analyzeAd/:id

// Get batch insights
POST http://localhost:8080/allAdInsights
```

#### Additional Endpoints
```javascript
// Ingest ads
POST http://localhost:8080/ingest/json
POST http://localhost:8080/ingest/excel

// List assets
GET http://localhost:8080/assets

// Analyze all
POST http://localhost:8080/analyseAll

// Get single ad
GET http://localhost:8080/ad/:id

// Export CSV
GET http://localhost:8080/export.csv
```

---

### Step 4: Start Both Servers

#### Terminal 1: Backend (Already Running!)
```bash
cd /Users/adityapunjani/AdSensei-CalHacks
npm run dev
# Running at http://localhost:8080 ✅
```

#### Terminal 2: Frontend
```bash
cd /path/to/your/frontend

# React/Next.js
npm run dev

# Vue
npm run dev

# Angular
ng serve

# Static HTML
python3 -m http.server 3000
# or
npx serve .
```

---

## 🧪 Test the Connection

### 1. Check Backend Health
```bash
curl http://localhost:8080/
# Should return: "Ad Analytics API is running."
```

### 2. Test from Frontend Console
Open your frontend in browser, then in DevTools console:

```javascript
// Test connection
fetch('http://localhost:8080/')
  .then(r => r.text())
  .then(console.log);

// Test ingest
fetch('http://localhost:8080/ingest/json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    urls: ['https://picsum.photos/800/600'] 
  })
})
  .then(r => r.json())
  .then(console.log);
```

---

## 🔧 Common Frontend Patterns

### Pattern 1: API Service Class

```typescript
// services/api.ts
class AdSenseiAPI {
  private baseURL = 'http://localhost:8080';

  async ingestAds(urls: string[]) {
    const response = await fetch(`${this.baseURL}/ingest/json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls })
    });
    return response.json();
  }

  async analyzeAd(assetId: string) {
    const response = await fetch(`${this.baseURL}/analyzeAd/${assetId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  }

  async getAllInsights() {
    const response = await fetch(`${this.baseURL}/allAdInsights`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  }

  async listAssets() {
    const response = await fetch(`${this.baseURL}/assets`);
    return response.json();
  }
}

export const api = new AdSenseiAPI();
```

### Pattern 2: React Hook

```typescript
// hooks/useAdSensei.ts
import { useState } from 'react';

const API_URL = 'http://localhost:8080';

export function useAdSensei() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ingestAds = async (urls: string[]) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/ingest/json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
      if (!res.ok) throw new Error('Failed to ingest');
      return await res.json();
    } catch (e: any) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const analyzeAd = async (assetId: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/analyzeAd/${assetId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) throw new Error('Failed to analyze');
      return await res.json();
    } catch (e: any) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, ingestAds, analyzeAd };
}
```

### Pattern 3: Vue Composable

```typescript
// composables/useAdSensei.ts
import { ref } from 'vue';

const API_URL = 'http://localhost:8080';

export function useAdSensei() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const ingestAds = async (urls: string[]) => {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(`${API_URL}/ingest/json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
      return await res.json();
    } catch (e: any) {
      error.value = e.message;
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return { loading, error, ingestAds };
}
```

---

## 🚀 Production Deployment

### Backend (Already on Render/Heroku)
```env
# Update CORS to allow your frontend domain
CORS_ORIGIN=https://your-frontend.vercel.app,https://your-frontend.netlify.app
```

### Frontend
Update API URL to production backend:

```typescript
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-backend.onrender.com'
  : 'http://localhost:8080';
```

---

## 📋 Checklist

- [ ] Backend running at `http://localhost:8080`
- [ ] Frontend API URL updated to `http://localhost:8080`
- [ ] CORS enabled in backend (already done ✅)
- [ ] Frontend can reach backend (test with `curl` or browser console)
- [ ] API endpoints match the backend routes
- [ ] Error handling implemented in frontend
- [ ] Loading states handled
- [ ] Environment variables configured

---

## 🆘 Troubleshooting

### CORS Errors
```bash
# Backend .env should have:
CORS_ORIGIN=

# Or for specific origins:
CORS_ORIGIN=http://localhost:3000,http://localhost:5173
```

### Connection Refused
```bash
# Verify backend is running
curl http://localhost:8080/

# Check if port is correct in frontend
# Should be 8080, not 8787 or other
```

### 404 Errors
- Verify endpoint paths match exactly
- Check HTTP method (GET vs POST)
- Review [API.md](./API.md) for correct endpoints

### Analysis Not Working
- Ensure `LAVA_API_KEY` and `LAVA_BEARER` are set in backend `.env`
- Check backend logs for errors
- Verify image URLs are publicly accessible

---

## 📚 Next Steps

1. **Locate your frontend code**
2. **Update API configuration** to `http://localhost:8080`
3. **Start frontend server**
4. **Test connection** using browser DevTools
5. **Verify all features work**

---

## 💡 Need Help?

If you can provide:
- Frontend framework (React/Vue/Angular/etc.)
- Frontend repository URL or location
- Current API configuration

I can provide more specific integration instructions!

---

**Backend is ready and waiting for your frontend!** 🚀

Current backend: `http://localhost:8080` ✅
