"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const leaderboardSchema = new mongoose_1.Schema({
    username: { type: String, required: true, trim: true },
    teamName: { type: String, trim: true },
    rank: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    streakDays: { type: Number, default: 0, min: 0 },
}, { timestamps: true });
const LeaderboardModel = (0, mongoose_1.model)('Leaderboard', leaderboardSchema);
exports.default = LeaderboardModel;
//# sourceMappingURL=leaderboard.js.map