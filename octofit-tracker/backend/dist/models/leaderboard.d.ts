import { Schema, type InferSchemaType } from 'mongoose';
declare const leaderboardSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type LeaderboardEntry = InferSchemaType<typeof leaderboardSchema>;
declare const LeaderboardModel: import("mongoose").Model<{
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    username: string;
    rank: number;
    points: number;
    streakDays: number;
    teamName?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps>;
export default LeaderboardModel;
//# sourceMappingURL=leaderboard.d.ts.map