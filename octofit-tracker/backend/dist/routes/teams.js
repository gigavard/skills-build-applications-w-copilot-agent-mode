"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_1 = __importDefault(require("../models/team"));
const teamsRouter = (0, express_1.Router)();
teamsRouter.get('/', async (_req, res) => {
    try {
        const teams = await team_1.default.find().sort({ totalPoints: -1, name: 1 });
        res.status(200).json({
            resource: 'teams',
            count: teams.length,
            items: teams,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to fetch teams',
            error: String(error),
        });
    }
});
exports.default = teamsRouter;
//# sourceMappingURL=teams.js.map