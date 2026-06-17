import { Schema, type InferSchemaType } from 'mongoose';
declare const workoutSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type Workout = InferSchemaType<typeof workoutSchema>;
declare const WorkoutModel: import("mongoose").Model<{
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    description: string;
    title: string;
    focusArea: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    estimatedMinutes: number;
    equipment: string[];
} & import("mongoose").DefaultTimestampProps>;
export default WorkoutModel;
//# sourceMappingURL=workout.d.ts.map