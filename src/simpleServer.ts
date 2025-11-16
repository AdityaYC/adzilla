/**
 * Simple AdSensei Server - Clean & Focused
 * Analyzes images/videos with trend-based AI insights
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { analyzeMedia, analyzeBatch } from "./aiClient.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Create uploads directory
const UPLOAD_DIR = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(7)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|webm/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only images and videos are allowed!'));
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static(UPLOAD_DIR));

// In-memory storage (simple for now)
const analyses: any[] = [];

// Health check
app.get("/", (req, res) => {
  res.json({ 
    status: "running",
    message: "AdSensei AI - Trend-Based Ad Analysis",
    endpoints: [
      "POST /upload - Upload and analyze image/video file",
      "POST /analyze - Analyze from URL",
      "POST /analyze/batch - Analyze multiple URLs",
      "GET /results - Get all analysis results",
      "GET /results/:id - Get specific result"
    ]
  });
});

// Upload and analyze file
app.post("/upload", upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const filePath = req.file.path;
    const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    const isVideo = req.file.mimetype.startsWith('video/');
    
    console.log(`📤 File uploaded: ${req.file.originalname}`);
    console.log(`🔍 Analyzing: ${fileUrl}`);
    
    const result = await analyzeMedia(fileUrl, isVideo ? "video" : "image");
    
    // Store result
    const id = Date.now().toString();
    const stored = { 
      id, 
      ...result,
      originalName: req.file.originalname,
      fileSize: req.file.size,
      uploadedAt: new Date().toISOString()
    };
    analyses.push(stored);
    
    res.json({
      success: true,
      id,
      file: {
        name: req.file.originalname,
        size: req.file.size,
        url: fileUrl
      },
      result: result.analysis
    });
  } catch (error: any) {
    console.error("Upload analysis error:", error.message);
    
    // Clean up file on error
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Analyze single media
app.post("/analyze", async (req, res) => {
  const { url, type = "image" } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    console.log(`📸 Analyzing: ${url}`);
    const result = await analyzeMedia(url, type);
    
    // Store result
    const id = Date.now().toString();
    const stored = { id, ...result };
    analyses.push(stored);
    
    res.json({
      success: true,
      id,
      result: result.analysis
    });
  } catch (error: any) {
    console.error("Analysis error:", error.message);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Analyze batch
app.post("/analyze/batch", async (req, res) => {
  const { urls } = req.body;
  
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: "URLs array is required" });
  }

  try {
    console.log(`📊 Batch analyzing ${urls.length} items...`);
    const results = await analyzeBatch(urls);
    
    // Store results
    results.forEach(result => {
      const id = Date.now().toString() + Math.random();
      analyses.push({ id, ...result });
    });
    
    res.json({
      success: true,
      total: urls.length,
      results: results.map(r => (r as any).analysis || { error: (r as any).error })
    });
  } catch (error: any) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Get all results
app.get("/results", (req, res) => {
  res.json({
    total: analyses.length,
    results: analyses
  });
});

// Get specific result
app.get("/results/:id", (req, res) => {
  const result = analyses.find(a => a.id === req.params.id);
  
  if (!result) {
    return res.status(404).json({ error: "Result not found" });
  }
  
  res.json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 AdSensei AI Server Running!`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`\n✨ Ready to analyze ads with AI-powered trend insights!\n`);
});
