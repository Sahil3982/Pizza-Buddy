import express from 'express';
const recipelist = express.Router();

recipelist.get('/recipe', (req, res) => {
    res.json({
        name: "Sahil"
    });
});

export default recipelist;
