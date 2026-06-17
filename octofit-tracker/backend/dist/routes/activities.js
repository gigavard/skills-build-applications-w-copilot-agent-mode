"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = __importDefault(require("../models/activity"));
const activitiesRouter = (0, express_1.Router)();
activitiesRouter.get('/', async (_req, res) => {
    try {
        const activities = await activity_1.default.find()
            .populate('userId', 'fullName email')
            .sort({ performedAt: -1 });
        res.status(200).json({
            resource: 'activities',
            count: activities.length,
            items: activities,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to fetch activities',
            error: String(error),
        });
    }
});
exports.default = activitiesRouter;
//# sourceMappingURL=activities.js.map