import { Schema, model, type InferSchemaType } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    estimatedMinutes: { type: Number, required: true, min: 5 },
    equipment: { type: [String], default: [] },
    description: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export type Workout = InferSchemaType<typeof workoutSchema>;

const WorkoutModel = model<Workout>('Workout', workoutSchema);
export default WorkoutModel;