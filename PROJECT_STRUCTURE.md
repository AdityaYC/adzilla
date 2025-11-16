# AdSensei Backend - Project Structure

## 📁 Directory Layout

```
AdSensei-CalHacks/
├── src/                          # Source code
│   ├── server.ts                 # Express server & API endpoints
│   ├── openaiClient.ts           # Lava/OpenAI integration
│   ├── schema.ts                 # JSON schema for ad analysis
│   ├── aggregations.ts           # Batch insights & analytics
│   └── store.ts                  # In-memory data store (JSON file)
│
├── scripts/                      # Utility scripts
│   └── test-api.sh              # API testing script
│
├── data/                         # Data storage (gitignored)
│   └── db.json                  # Asset database (auto-created)
│
├── dist/                         # Compiled JavaScript (gitignored)
│
├── node_modules/                 # Dependencies (gitignored)
│
├── .env                          # Environment variables (gitignored)
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
├── .dockerignore                 # Docker ignore rules
│
├── package.json                  # Node.js dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── Dockerfile                    # Docker container definition
├── render.yaml                   # Render.com deployment config
│
├── README.md                     # Project overview
├── SETUP.md                      # Setup & deployment guide
├── API.md                        # API documentation
├── EXAMPLES.md                   # Usage examples
├── LICENSE                       # MIT License
└── PROJECT_STRUCTURE.md          # This file
```

---

## 🔧 Core Components

### **server.ts**
Main Express application with all API endpoints:
- `/ingest/excel` - Upload Excel file with ad URLs
- `/ingest/json` - Submit ad URLs as JSON
- `/assets` - List all ingested assets
- `/analyzeAd/:id` ⭐ - Analyze single ad (spec endpoint)
- `/analyseAd/:adId` - Legacy endpoint
- `/analyseAll` - Analyze all pending ads in parallel
- `/ad/:adId` - Get single ad result
- `/allAdInsights` ⭐ - Get batch insights (spec endpoint)
- `/AllAdInsights` - Legacy endpoint
- `/export.csv` - Export results to CSV
- `/` - Health check

### **openaiClient.ts**
Handles communication with OpenAI via Lava Payments:
- Constructs vision API requests
- Sends images for analysis
- Parses structured JSON responses
- Error handling & retry logic

### **schema.ts**
Defines the strict JSON schema for ad analysis:
- Asset type (image/video)
- Summary & scores (0-100)
- Sentiment & tone
- Detected text, logos, objects
- Visual signals (colors, composition)
- Target audience
- Platform recommendations
- Improvement suggestions
- Dimension profiles

### **aggregations.ts**
Builds batch insights from analyzed ads:
- Top 10 performing ads
- Average scores across dimensions
- Sentiment & tone distribution
- Color palette trends
- Platform recommendations
- Audience demographics
- Category breakdown

### **store.ts**
Simple file-based data persistence:
- In-memory cache with disk sync
- CRUD operations for assets
- Status tracking (pending/processing/done/error)
- Stores analysis results

---

## 🚀 Key Features

### ✅ Implemented

1. **Parallel Processing**
   - Worker pool with configurable concurrency
   - Batch analysis of 40-50 ads in <5 minutes
   - Controlled by `BATCH_CONCURRENCY` env var

2. **Vision AI Integration**
   - Lava Payments API for cost-effective LLM access
   - Support for GPT-4o-mini and Reka models
   - Structured JSON output with strict schema

3. **Comprehensive Analysis**
   - 5 core metrics (catchiness, aesthetics, readability, brand fit, memorability)
   - Sentiment & tone analysis
   - OCR text extraction
   - Logo & object detection
   - Color palette analysis
   - Target audience profiling

4. **Batch Insights**
   - Top performers identification
   - Campaign-level analytics
   - Trend analysis (colors, sentiments, platforms)
   - Dimension profiles for comparison

5. **Multiple Input Formats**
   - JSON array of URLs
   - Excel file upload
   - Direct URL submission

6. **Export Options**
   - JSON API responses
   - CSV export for spreadsheets
   - Structured data for further processing

7. **Docker Support**
   - Multi-stage build for optimization
   - Health checks
   - Volume mounting for data persistence

8. **CORS Configuration**
   - Configurable allowed origins
   - Supports frontend integration

---

## 🔄 Data Flow

```
1. INGEST
   URLs → /ingest/json or /ingest/excel
   ↓
   Assets created with status: "pending"
   ↓
   Stored in data/db.json

2. ANALYZE
   /analyzeAd/:id or /analyseAll
   ↓
   Status: "processing"
   ↓
   OpenAI Vision API (via Lava)
   ↓
   Structured JSON response
   ↓
   Status: "done" (or "error")
   ↓
   Result stored in asset.result

3. INSIGHTS
   /allAdInsights
   ↓
   Aggregates all "done" assets
   ↓
   Calculates averages, distributions, top performers
   ↓
   Returns batch insights

4. EXPORT
   /export.csv
   ↓
   Filters "done" assets
   ↓
   Converts to CSV format
   ↓
   Downloads ad_metrics.csv
```

---

## 🛠️ Tech Stack

- **Runtime**: Node.js 20+
- **Language**: TypeScript 5.9
- **Framework**: Express 5.1
- **AI/ML**: OpenAI GPT-4o-mini via Lava Payments
- **Data Storage**: JSON file (simple, portable)
- **File Processing**: XLSX (Excel), Multer (uploads)
- **Concurrency**: p-limit (parallel processing)
- **Export**: csv-stringify
- **Validation**: Zod 4.1
- **Container**: Docker (multi-stage build)

---

## 📊 Performance Characteristics

### Throughput
- **Single ad**: 30-90 seconds (depends on image size & model)
- **Batch (40-50 ads)**: <5 minutes with BATCH_CONCURRENCY=5
- **Large batch (100+ ads)**: ~10-15 minutes

### Resource Usage
- **Memory**: ~200-500MB (depends on batch size)
- **CPU**: Minimal (I/O bound, waiting on API)
- **Disk**: ~1MB per 100 analyzed ads (JSON storage)

### Scalability
- **Horizontal**: Deploy multiple instances with shared storage
- **Vertical**: Increase BATCH_CONCURRENCY for faster processing
- **Limits**: Primarily constrained by Lava/OpenAI API rate limits

---

## 🔐 Security Considerations

1. **API Keys**: Stored in .env (never committed)
2. **CORS**: Configurable origin whitelist
3. **Input Validation**: URL format checking
4. **File Uploads**: Memory-only (no disk writes for uploads)
5. **Rate Limiting**: Controlled by BATCH_CONCURRENCY
6. **Error Handling**: Graceful failures, no sensitive data in errors

---

## 🧪 Testing

### Manual Testing
```bash
# Run test script
./scripts/test-api.sh

# Or use curl examples
# See EXAMPLES.md
```

### Unit Tests (Future)
```bash
npm test
```

### Integration Tests (Future)
```bash
npm run test:integration
```

---

## 📈 Future Enhancements

### Planned Features
- [ ] Redis/PostgreSQL for production storage
- [ ] WebSocket support for real-time progress
- [ ] Authentication & API keys
- [ ] Rate limiting per user
- [ ] Caching layer for repeated analyses
- [ ] Video analysis support
- [ ] A/B testing recommendations
- [ ] Historical trend analysis
- [ ] Multi-language support
- [ ] Custom scoring weights

### Performance Improvements
- [ ] Response streaming for large batches
- [ ] Incremental analysis results
- [ ] Background job queue (Bull/BullMQ)
- [ ] CDN integration for image caching
- [ ] Batch API calls to reduce latency

### Developer Experience
- [ ] OpenAPI/Swagger documentation
- [ ] SDK for popular languages
- [ ] CLI tool for local testing
- [ ] Postman collection
- [ ] GraphQL API option

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests (when test suite exists)
5. Submit a pull request

---

## 📝 Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | 8080 | Server port |
| `LAVA_API_KEY` | Yes | - | Lava Payments API key |
| `LAVA_BEARER` | Yes | - | Lava bearer token |
| `OPENAI_MODEL` | No | gpt-4o-mini | OpenAI model to use |
| `REKA_MODEL` | No | reka-flash | Alternative Reka model |
| `WORKERS` | No | 8 | Parallel workers |
| `MAX_BATCH_SIZE` | No | 50 | Max batch size |
| `BATCH_CONCURRENCY` | No | 5 | Concurrent analysis tasks |
| `CORS_ORIGIN` | No | (empty) | Allowed origins (comma-separated) |
| `DATA_DIR` | No | ./data | Data storage directory |

---

## 🐛 Known Issues

1. **Large images**: May timeout if >10MB. Consider resizing before upload.
2. **Video analysis**: Currently treats videos as images (first frame). Full video support planned.
3. **File storage**: JSON file may become large with 1000+ ads. Consider database migration.
4. **Concurrent writes**: File-based store may have race conditions under extreme load.

---

## 📞 Support & Credits

- **Built at**: CalHacks 12.0
- **Powered by**: Lava, Reka, OpenAI, creao.ai
- **Inspired by**: AppLovin's ad analytics platform
- **License**: MIT

For issues and questions, please open a GitHub issue.
