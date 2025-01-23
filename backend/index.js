import express from 'express';
// import item from '../src/models/itemlist';
import db from './src/config/db.js';

//Initialize express app
const app = express();


db()


// app.get('/list', )




//Initialize the sever
app.listen(3000, () => {
    console.log('sever listening on port:3000');
});