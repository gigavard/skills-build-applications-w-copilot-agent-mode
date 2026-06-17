"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Environment-aware base URL for Codespaces
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
// Health check endpoint
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Octofit Tracker API is running',
        baseUrl,
        timestamp: new Date().toISOString(),
    });
});
// API status endpoint
app.get('/api/status', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Octofit Tracker API endpoints ready',
    });
});
// Required API route handlers
app.use('/api/users', users_1.default);
app.use('/api/teams', teams_1.default);
app.use('/api/activities', activities_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
app.use('/api/workouts', workouts_1.default);
// Start server
const startServer = async () => {
    try {
        // Connect to MongoDB
        await (0, db_1.connectDB)();
        // Start listening
        app.listen(PORT, () => {
            console.log(`\n🚀 Octofit Backend Server`);
            console.log(`   Local:   http://localhost:${PORT}`);
            if (codespaceName) {
                console.log(`   Remote:  ${baseUrl}`);
            }
            console.log(`   Health:  ${baseUrl}/health\n`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\nShutting down gracefully...');
    await (0, db_1.disconnectDB)().then(() => {
        process.exit(0);
    }).catch(() => {
        process.exit(1);
    });
});
//# sourceMappingURL=server.js.map