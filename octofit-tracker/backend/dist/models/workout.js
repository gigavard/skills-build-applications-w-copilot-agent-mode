"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const WorkoutModel = (0, mongoose_1.model)('Workout', workoutSchema);
exports.default = WorkoutModel;
//# sourceMappingURL=workout.js.map