import express from 'express';
// Import database connection and routers
import db from './src/config/db.js';
import cors from 'cors'
import userRouter from './src/user/userRouter.js';
import recipelist from './src/user/recpielist.js';
import addrecipe from './src/user/addrecipe.js';

// Initialize express app
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to the database

// OR if you want to restrict access to your frontend only:
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));

 
db();

// Setup routes
app.use('/api/user', userRouter);
app.use('/api', recipelist);
app.use('/api',addrecipe)

// Initialize the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port: ${PORT}`);
});
