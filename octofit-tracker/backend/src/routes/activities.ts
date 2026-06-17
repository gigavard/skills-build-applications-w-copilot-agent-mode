import { Router } from 'express';
import ActivityModel from '../models/activity';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_req, res) => {
  try {
    const activities = await ActivityModel.find()
      .populate('userId', 'fullName email')
      .sort({ performedAt: -1 });

    res.status(200).json({
      resource: 'activities',
      count: activities.length,
      items: activities,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch activities',
      error: String(error),
    });
  }
});

export default activitiesRouter;