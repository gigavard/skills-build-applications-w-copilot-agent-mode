import { Schema, type InferSchemaType } from 'mongoose';
declare const teamSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type Team = InferSchemaType<typeof teamSchema>;
declare const TeamModel: import("mongoose").Model<{
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    name: string;
    totalPoints: number;
    city: string;
    motto: string;
    memberCount: number;
} & import("mongoose").DefaultTimestampProps>;
export default TeamModel;
//# sourceMappingURL=team.d.ts.map