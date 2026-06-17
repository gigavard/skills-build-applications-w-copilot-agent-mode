import { Schema, model, type InferSchemaType, Types } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    activityType: {
      type: String,
      enum: ['running', 'cycling', 'yoga', 'strength', 'swimming', 'hiking'],
      required: true,
    },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, min: 0 },
    performedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export type Activity = InferSchemaType<typeof activitySchema>;

const ActivityModel = model<Activity>('Activity', activitySchema);
export default ActivityModel;