import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment-aware base URL for Codespaces
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Octofit Tracker API is running',
    baseUrl,
    timestamp: new Date().toISOString(),
  });
});

// Placeholder for API routes (will be under /api/)
app.get('/api/status', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Octofit Tracker API endpoints ready',
  });
});

// Start server
const startServer = async (): Promise<void> => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start listening
    app.listen(PORT, () => {
      console.log(`\n🚀 Octofit Backend Server`);
      console.log(`   Local:   http://localhost:${PORT}`);
      if (codespaceName) {
        console.log(`   Remote:  ${baseUrl}`);
      }
      console.log(`   Health:  ${baseUrl}/health\n`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nShutting down gracefully...');
  await connectDB().then(() => {
    process.exit(0);
  }).catch(() => {
    process.exit(1);
  });
});
