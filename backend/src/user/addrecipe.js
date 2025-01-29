import express from "express";
const addrecipe = express.Router()

addrecipe.post('/addrecipe', (req, res) => {
    const { img, name, size, price } = req.body

    
    if (price) {
        res.send({
            message: "Received"
        })

    }
    else {
        res.send({
            status : 400,
            message: "price is reqiured"

        })
    }

})

export default addrecipe