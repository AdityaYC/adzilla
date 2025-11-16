# AdSensei Backend Setup Guide

## Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn**
- **Docker** (optional, for containerized deployment)
- **Lava API Key** (for LLM access)

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/adsensei-backend.git
cd adsensei-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and fill in your configuration:

```env
PORT=8080
LAVA_API_KEY=your_actual_lava_api_key
LAVA_BEARER=your_actual_lava_bearer_token
OPENAI_MODEL=gpt-4o-mini
BATCH_CONCURRENCY=5
CORS_ORIGIN=
```

**Required Variables:**
- `LAVA_API_KEY` - Your Lava Payments API key
- `LAVA_BEARER` - Your Lava bearer token

**Optional Variables:**
- `PORT` - Server port (default: 8080)
- `OPENAI_MODEL` - Model to use (default: gpt-4o-mini)
- `REKA_MODEL` - Alternative Reka model (default: reka-flash)
- `WORKERS` - Parallel workers (default: 8)
- `MAX_BATCH_SIZE` - Max batch size (default: 50)
- `BATCH_CONCURRENCY` - Concurrent analysis tasks (default: 5)
- `CORS_ORIGIN` - Comma-separated allowed origins (empty = all)
- `DATA_DIR` - Data storage directory (default: ./data)

### 4. Run Development Server

```bash
npm run dev
```

The server will start at `http://localhost:8080` with hot-reload enabled.

### 5. Run Production Build

```bash
npm run build
npm start
```

---

## Docker Deployment

### Build Docker Image

```bash
docker build -t adsensei-backend .
```

### Run Container

```bash
docker run --env-file .env -p 8080:8080 adsensei-backend
```

Or with individual environment variables:

```bash
docker run \
  -e PORT=8080 \
  -e LAVA_API_KEY=your_key \
  -e LAVA_BEARER=your_token \
  -e OPENAI_MODEL=gpt-4o-mini \
  -p 8080:8080 \
  adsensei-backend
```

### Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  adsensei:
    build: .
    ports:
      - "8080:8080"
    env_file:
      - .env
    volumes:
      - ./data:/app/data
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```

---

## Cloud Deployment

### Render.com

The project includes `render.yaml` for easy deployment:

1. Push your code to GitHub
2. Connect your repo to Render
3. Add environment variables in Render dashboard
4. Deploy!

### Other Platforms

**Heroku:**
```bash
heroku create adsensei-backend
heroku config:set LAVA_API_KEY=your_key
heroku config:set LAVA_BEARER=your_token
git push heroku main
```

**Railway:**
```bash
railway init
railway add
railway up
```

**Fly.io:**
```bash
fly launch
fly secrets set LAVA_API_KEY=your_key
fly secrets set LAVA_BEARER=your_token
fly deploy
```

---

## Testing the API

### Health Check

```bash
curl http://localhost:8080/
```

### Ingest Sample Ads

```bash
curl -X POST http://localhost:8080/ingest/json \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://example.com/ad1.jpg",
      "https://example.com/ad2.jpg"
    ]
  }'
```

### Analyze Single Ad

```bash
curl -X POST http://localhost:8080/analyzeAd/<asset-id> \
  -H "Content-Type: application/json"
```

### Get All Insights

```bash
curl -X POST http://localhost:8080/allAdInsights \
  -H "Content-Type: application/json"
```

---

## Troubleshooting

### "Missing LAVA_BEARER in .env"

Make sure you've set `LAVA_BEARER` in your `.env` file. This is required for the OpenAI API calls via Lava.

### "Cannot find module 'express'"

Run `npm install` to install all dependencies.

### Port Already in Use

Change the `PORT` in your `.env` file or kill the process using port 8080:

```bash
# macOS/Linux
lsof -ti:8080 | xargs kill -9

# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

### Analysis Timeout

Increase the timeout in `src/openaiClient.ts` or reduce `BATCH_CONCURRENCY` to process fewer ads simultaneously.

### Docker Build Fails

Ensure you have enough disk space and Docker is running:

```bash
docker system prune -a
```

---

## Performance Tuning

### For Large Batches (100+ ads)

```env
BATCH_CONCURRENCY=3
WORKERS=12
MAX_BATCH_SIZE=100
```

### For Fast Processing (Small batches)

```env
BATCH_CONCURRENCY=10
WORKERS=8
MAX_BATCH_SIZE=20
```

### Memory Optimization

If running out of memory, reduce concurrency:

```env
BATCH_CONCURRENCY=2
```

---

## Data Persistence

Ad data is stored in `./data/db.json` by default. This file contains:
- Asset metadata (URL, type, status)
- Analysis results
- Timestamps

**Backup your data:**

```bash
cp data/db.json data/db.backup.json
```

**Reset database:**

```bash
rm data/db.json
# Server will create a fresh db.json on next start
```

---

## Development Tips

### Watch Mode

```bash
npm run dev
```

Changes to TypeScript files will automatically reload the server.

### Type Checking

```bash
npx tsc --noEmit
```

### View Logs

```bash
# Development
npm run dev

# Production (Docker)
docker logs -f <container-id>
```

---

## API Documentation

See [API.md](./API.md) for complete endpoint documentation.

---

## Support

- **Issues**: https://github.com/<your-username>/adsensei-backend/issues
- **CalHacks 12.0**: Built with ❤️ by the AdSensei team
- **Powered by**: Lava, Reka, OpenAI, creao.ai

---

## License

MIT - See LICENSE file for details.
