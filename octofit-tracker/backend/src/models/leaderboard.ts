import { Schema, model, type InferSchemaType } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    teamName: { type: String, trim: true },
    rank: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    streakDays: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

export type LeaderboardEntry = InferSchemaType<typeof leaderboardSchema>;

const LeaderboardModel = model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
export default LeaderboardModel;