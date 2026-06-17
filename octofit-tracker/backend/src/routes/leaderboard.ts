import { Router } from 'express';
import LeaderboardModel from '../models/leaderboard';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardModel.find().sort({ rank: 1 });
    res.status(200).json({
      resource: 'leaderboard',
      count: leaderboard.length,
      items: leaderboard,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch leaderboard',
      error: String(error),
    });
  }
});

export default leaderboardRouter;