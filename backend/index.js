import express from 'express';
// Import database connection and routers
import db from './src/config/db.js';
import userRouter from './src/user/userRouter.js';
import recipelist from './src/user/recpielist.js';

// Initialize express app
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to the database
db();

// Setup routes
app.use('/api/user', userRouter);
app.use('/api', recipelist);

// Initialize the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port: ${PORT}`);
});
