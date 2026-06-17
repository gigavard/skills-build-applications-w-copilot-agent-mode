import { Schema, type InferSchemaType } from 'mongoose';
declare const userSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type User = InferSchemaType<typeof userSchema>;
declare const UserModel: import("mongoose").Model<{
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    fullName: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    weeklyGoal: number;
    totalPoints: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps>;
export default UserModel;
//# sourceMappingURL=user.d.ts.map