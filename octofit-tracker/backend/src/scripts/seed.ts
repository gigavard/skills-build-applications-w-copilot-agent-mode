import { connectDB, disconnectDB } from '../db';
import TeamModel from '../models/team';
import UserModel from '../models/user';
import ActivityModel from '../models/activity';
import LeaderboardModel from '../models/leaderboard';
import WorkoutModel from '../models/workout';

const seedDatabase = async (): Promise<void> => {
  try {
    console.log('Seed the octofit_db database with test data');
    await connectDB();

    await Promise.all([
      TeamModel.deleteMany({}),
      UserModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    const teams = await TeamModel.insertMany([
      {
        name: 'Alpine Striders',
        city: 'Turin',
        motto: 'Climb stronger every week',
        memberCount: 3,
        totalPoints: 1840,
      },
      {
        name: 'Lagoon Pacers',
        city: 'Venice',
        motto: 'Consistency beats intensity',
        memberCount: 3,
        totalPoints: 1710,
      },
    ]);

    const users = await UserModel.insertMany([
      {
        fullName: 'Giulia Rossi',
        email: 'giulia.rossi@example.com',
        fitnessLevel: 'intermediate',
        weeklyGoal: 4,
        totalPoints: 640,
        teamName: teams[0].name,
      },
      {
        fullName: 'Marco Bianchi',
        email: 'marco.bianchi@example.com',
        fitnessLevel: 'advanced',
        weeklyGoal: 5,
        totalPoints: 760,
        teamName: teams[0].name,
      },
      {
        fullName: 'Elena Moretti',
        email: 'elena.moretti@example.com',
        fitnessLevel: 'beginner',
        weeklyGoal: 3,
        totalPoints: 440,
        teamName: teams[0].name,
      },
      {
        fullName: 'Luca Ferri',
        email: 'luca.ferri@example.com',
        fitnessLevel: 'intermediate',
        weeklyGoal: 4,
        totalPoints: 700,
        teamName: teams[1].name,
      },
      {
        fullName: 'Sara Romano',
        email: 'sara.romano@example.com',
        fitnessLevel: 'advanced',
        weeklyGoal: 6,
        totalPoints: 620,
        teamName: teams[1].name,
      },
      {
        fullName: 'Davide Greco',
        email: 'davide.greco@example.com',
        fitnessLevel: 'beginner',
        weeklyGoal: 3,
        totalPoints: 390,
        teamName: teams[1].name,
      },
    ]);

    await ActivityModel.insertMany([
      {
        userId: users[0]._id,
        activityType: 'running',
        durationMinutes: 45,
        caloriesBurned: 420,
        distanceKm: 8.2,
        performedAt: new Date('2026-06-10T07:30:00.000Z'),
      },
      {
        userId: users[1]._id,
        activityType: 'cycling',
        durationMinutes: 60,
        caloriesBurned: 560,
        distanceKm: 22.4,
        performedAt: new Date('2026-06-11T06:45:00.000Z'),
      },
      {
        userId: users[2]._id,
        activityType: 'yoga',
        durationMinutes: 35,
        caloriesBurned: 180,
        distanceKm: 0,
        performedAt: new Date('2026-06-12T18:10:00.000Z'),
      },
      {
        userId: users[3]._id,
        activityType: 'strength',
        durationMinutes: 50,
        caloriesBurned: 410,
        distanceKm: 0,
        performedAt: new Date('2026-06-12T19:20:00.000Z'),
      },
      {
        userId: users[4]._id,
        activityType: 'swimming',
        durationMinutes: 40,
        caloriesBurned: 350,
        distanceKm: 1.3,
        performedAt: new Date('2026-06-13T12:00:00.000Z'),
      },
      {
        userId: users[5]._id,
        activityType: 'hiking',
        durationMinutes: 90,
        caloriesBurned: 620,
        distanceKm: 9.5,
        performedAt: new Date('2026-06-14T08:15:00.000Z'),
      },
    ]);

    await LeaderboardModel.insertMany([
      {
        username: users[1].fullName,
        teamName: users[1].teamName,
        rank: 1,
        points: users[1].totalPoints,
        streakDays: 15,
      },
      {
        username: users[3].fullName,
        teamName: users[3].teamName,
        rank: 2,
        points: users[3].totalPoints,
        streakDays: 12,
      },
      {
        username: users[0].fullName,
        teamName: users[0].teamName,
        rank: 3,
        points: users[0].totalPoints,
        streakDays: 9,
      },
      {
        username: users[4].fullName,
        teamName: users[4].teamName,
        rank: 4,
        points: users[4].totalPoints,
        streakDays: 8,
      },
      {
        username: users[2].fullName,
        teamName: users[2].teamName,
        rank: 5,
        points: users[2].totalPoints,
        streakDays: 6,
      },
      {
        username: users[5].fullName,
        teamName: users[5].teamName,
        rank: 6,
        points: users[5].totalPoints,
        streakDays: 5,
      },
    ]);

    await WorkoutModel.insertMany([
      {
        title: 'Morning Mobility Flow',
        focusArea: 'Mobility',
        difficulty: 'beginner',
        estimatedMinutes: 20,
        equipment: ['Yoga mat'],
        description: 'A gentle full-body routine to improve range of motion and reduce stiffness.',
      },
      {
        title: 'Hill Sprint Intervals',
        focusArea: 'Cardio',
        difficulty: 'advanced',
        estimatedMinutes: 35,
        equipment: ['Running shoes'],
        description: 'Short uphill sprint sets with recovery walks for VO2 max and leg power.',
      },
      {
        title: 'Core Stability Builder',
        focusArea: 'Core',
        difficulty: 'intermediate',
        estimatedMinutes: 30,
        equipment: ['Exercise mat', 'Resistance band'],
        description: 'Planks, anti-rotation drills and controlled crunch variations for stability.',
      },
      {
        title: 'Total Body Dumbbell Circuit',
        focusArea: 'Strength',
        difficulty: 'intermediate',
        estimatedMinutes: 40,
        equipment: ['Dumbbells', 'Bench'],
        description: 'Alternating upper and lower body supersets to build balanced strength.',
      },
      {
        title: 'Recovery Swim Session',
        focusArea: 'Endurance',
        difficulty: 'beginner',
        estimatedMinutes: 25,
        equipment: ['Swim cap', 'Goggles'],
        description: 'Low-impact swim blocks focused on aerobic conditioning and recovery.',
      },
    ]);

    console.log('Seed completed successfully for octofit_db');
  } catch (error) {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  } finally {
    await disconnectDB();
  }
};

void seedDatabase();