import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    size: { type: String, required: true, enum: ["small", "medium", "large"] },
    price: { type: Number, required: true },
}, { timestamps: true });

const Dish = mongoose.model("Dish", dishSchema);
export default Dish;
