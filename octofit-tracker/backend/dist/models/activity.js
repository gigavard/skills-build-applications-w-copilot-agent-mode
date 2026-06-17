"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    activityType: {
        type: String,
        enum: ['running', 'cycling', 'yoga', 'strength', 'swimming', 'hiking'],
        required: true,
    },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, min: 0 },
    performedAt: { type: Date, required: true },
}, { timestamps: true });
const ActivityModel = (0, mongoose_1.model)('Activity', activitySchema);
exports.default = ActivityModel;
//# sourceMappingURL=activity.js.map