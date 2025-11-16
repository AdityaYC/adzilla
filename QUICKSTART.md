# AdSensei Backend - Quick Start ⚡

Get up and running in 5 minutes!

---

## 🚀 Installation

```bash
# 1. Clone & navigate
git clone https://github.com/<your-username>/adsensei-backend.git
cd adsensei-backend

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env and add your LAVA_API_KEY and LAVA_BEARER

# 4. Start development server
npm run dev
```

Server runs at **http://localhost:8080**

---

## 🎯 Core Endpoints

### Ingest Ads
```bash
curl -X POST http://localhost:8080/ingest/json \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://example.com/ad.jpg"]}'
```

### Analyze Single Ad
```bash
curl -X POST http://localhost:8080/analyzeAd/<ASSET_ID>
```

### Get Batch Insights
```bash
curl -X POST http://localhost:8080/allAdInsights
```

---

## 🐳 Docker

```bash
# Build
docker build -t adsensei-backend .

# Run
docker run --env-file .env -p 8080:8080 adsensei-backend
```

---

## 📚 Full Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[API.md](./API.md)** - API documentation
- **[EXAMPLES.md](./EXAMPLES.md)** - Usage examples
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Architecture details

---

## 🧪 Test It

```bash
./scripts/test-api.sh
```

---

## ⚙️ Essential Environment Variables

```env
LAVA_API_KEY=your_key_here          # Required
LAVA_BEARER=your_token_here         # Required
PORT=8080                           # Optional
BATCH_CONCURRENCY=5                 # Optional
```

---

## 🎨 What You Get

Each analyzed ad returns:

- ✅ **5 Core Scores** (0-100): Catchiness, Aesthetics, Readability, Brand Fit, Memorability
- 🎭 **Sentiment & Tone**: Emotional analysis
- 📝 **OCR Text**: Extracted text from ad
- 🏷️ **Logos & Objects**: Detected elements
- 🎨 **Color Palette**: Visual style analysis
- 👥 **Target Audience**: Age, interests, regions
- 📱 **Platform Recommendations**: Best social media platforms
- 💡 **Improvement Suggestions**: Actionable feedback

---

## 🔥 Quick Workflow

```bash
# 1. Ingest
RESPONSE=$(curl -s -X POST http://localhost:8080/ingest/json \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://picsum.photos/800/600"]}')

# 2. Get asset ID
ASSET_ID=$(echo "$RESPONSE" | jq -r '.assets[0].id')

# 3. Analyze
curl -X POST http://localhost:8080/analyzeAd/$ASSET_ID

# 4. Get insights
curl -X POST http://localhost:8080/allAdInsights
```

---

## 🆘 Troubleshooting

**"Missing LAVA_BEARER"**
→ Add `LAVA_BEARER=your_token` to `.env`

**Port 8080 in use**
→ Change `PORT=8081` in `.env`

**Dependencies missing**
→ Run `npm install`

---

## 📊 Performance

- **Single ad**: 30-90 seconds
- **Batch (50 ads)**: <5 minutes
- **Parallel processing**: Configurable via `BATCH_CONCURRENCY`

---

## 🎓 Learn More

- **CalHacks 12.0** project
- Powered by **Lava**, **Reka**, **OpenAI**
- Inspired by **AppLovin**

---

## ⭐ Key Features

- ✅ Parallel batch processing
- ✅ Structured JSON output
- ✅ CSV export
- ✅ Docker support
- ✅ CORS enabled
- ✅ RESTful API
- ✅ TypeScript
- ✅ Comprehensive analytics

---

**Ready to analyze ads?** 🚀

```bash
npm run dev
```

Then visit: http://localhost:8080
