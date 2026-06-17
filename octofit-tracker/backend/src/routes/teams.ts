import { Router } from 'express';
import TeamModel from '../models/team';

const teamsRouter = Router();

teamsRouter.get('/', async (_req, res) => {
  try {
    const teams = await TeamModel.find().sort({ totalPoints: -1, name: 1 });
    res.status(200).json({
      resource: 'teams',
      count: teams.length,
      items: teams,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch teams',
      error: String(error),
    });
  }
});

export default teamsRouter;