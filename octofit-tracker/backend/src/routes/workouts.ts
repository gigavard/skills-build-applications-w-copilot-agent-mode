import { Router } from 'express';
import WorkoutModel from '../models/workout';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_req, res) => {
  try {
    const workouts = await WorkoutModel.find().sort({ difficulty: 1, title: 1 });
    res.status(200).json({
      resource: 'workouts',
      count: workouts.length,
      items: workouts,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch workouts',
      error: String(error),
    });
  }
});

export default workoutsRouter;