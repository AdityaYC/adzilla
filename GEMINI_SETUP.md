# 🆓 Get Your FREE Gemini API Key

## Why Gemini?
- ✅ **100% FREE** - No credit card required
- ✅ **Generous limits** - 15 requests/minute, 1500 requests/day
- ✅ **Vision support** - Analyzes images perfectly
- ✅ **No Lava needed** - Direct API access

---

## 🚀 Get Your API Key (2 minutes)

### Step 1: Go to Google AI Studio
Visit: **https://aistudio.google.com/app/apikey**

### Step 2: Sign in with Google
Use any Google account (Gmail)

### Step 3: Create API Key
1. Click **"Create API Key"**
2. Select **"Create API key in new project"** (or use existing)
3. Copy the API key (starts with `AIza...`)

### Step 4: Add to .env
```bash
# Open .env file and add your key:
GEMINI_API_KEY=AIzaSyC-your-actual-key-here
```

---

## ✅ That's It!

Your backend will now use Gemini for FREE ad analysis with:
- OCR text extraction
- Logo & object detection
- Color palette analysis
- Sentiment & tone analysis
- All scoring & recommendations

---

## 🧪 Test It

```bash
# 1. Restart server (if needed)
npm run dev

# 2. Ingest a test ad
curl -X POST http://localhost:8080/ingest/json \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://picsum.photos/800/600"]}'

# 3. Analyze it
ASSET_ID=$(curl -s http://localhost:8080/assets | jq -r '.assets[0].id')
curl -X POST "http://localhost:8080/analyzeAd/$ASSET_ID"
```

---

## 📊 Gemini Limits (Free Tier)

- **Rate limit**: 15 requests/minute
- **Daily limit**: 1500 requests/day
- **Perfect for**: Development, demos, small projects
- **Upgrade**: Available if you need more

---

## 🎉 No More Lava!

- ❌ No Lava subscription needed
- ❌ No payment gateway
- ❌ No token format issues
- ✅ Direct, simple, FREE API

---

**Get your key now:** https://aistudio.google.com/app/apikey
