import { Router } from 'express';
import UserModel from '../models/user';

const usersRouter = Router();

usersRouter.get('/', async (_req, res) => {
  try {
    const users = await UserModel.find().sort({ totalPoints: -1, fullName: 1 });
    res.status(200).json({
      resource: 'users',
      count: users.length,
      items: users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch users',
      error: String(error),
    });
  }
});

export default usersRouter;