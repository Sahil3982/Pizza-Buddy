import express from 'express';
// import item from '../src/models/itemlist';
import db from './src/config/db.js';
import userRouter from './src/user/userRouter.js';

//Initialize express app
const app = express();
app.use(express.json())
db()

app.use('/api/user',userRouter)

//Initialize the sever
app.listen(3000, () => {
    console.log("get23");
    console.log('sever listening on port:3000');
});