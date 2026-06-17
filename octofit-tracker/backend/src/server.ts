import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from './config/database';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

dotenv.config();

const app = express();
// Keep API service on the fixed port required by the exercise workflow.
const PORT = 8000;

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

// API status endpoint
app.get('/api/status', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Octofit Tracker API endpoints ready',
  });
});

// Required API route handlers
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

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
  await disconnectDB().then(() => {
    process.exit(0);
  }).catch(() => {
    process.exit(1);
  });
});
