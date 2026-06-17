import { Schema, type InferSchemaType, Types } from 'mongoose';
declare const activitySchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export type Activity = InferSchemaType<typeof activitySchema>;
declare const ActivityModel: import("mongoose").Model<{
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    userId: Types.ObjectId;
    activityType: "running" | "cycling" | "yoga" | "strength" | "swimming" | "hiking";
    durationMinutes: number;
    caloriesBurned: number;
    performedAt: NativeDate;
    distanceKm?: number | null | undefined;
} & import("mongoose").DefaultTimestampProps>;
export default ActivityModel;
//# sourceMappingURL=activity.d.ts.map