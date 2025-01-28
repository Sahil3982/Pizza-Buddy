import express from "express"

const userRouter = express.Router();
console.log('ok');

userRouter.post('/register', (req, res) => {

console.log("req.body",req.body);

    const {username,email,password} = req.body
    if(!username || !email || !password){
        return res.json("All feilds are reqiured")
    }
    res.json({
        message: "User Register"
    })
})

export default userRouter;