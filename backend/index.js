import express from 'express';
import db from './src/config/db.js';
import cors from 'cors';
import userRouter from './src/user/userRouter.js';
import recipelist from './src/user/recipelist.js';
import addrecipe from './src/user/addrecipe.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));

// Connect to the database
db();

// Setup routes
app.use('/api/user', userRouter);
app.use('/api/recipes', recipelist); 
app.use('/api/recipes', addrecipe);

app.get('/list', (req, res) => res.send("list"));
app.get('/list/:id', (req, res) => res.send(`list id: ${req.params.id}`));

// Initialize the server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port: ${PORT}`);
});
