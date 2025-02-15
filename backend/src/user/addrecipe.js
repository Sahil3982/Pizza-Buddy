import express from "express";
import Dish from "../models/Dish.js"; // Import the Dish model

const addrecipe = express.Router();

addrecipe.post("/addrecipe", async (req, res) => {
  try {
    const { img, name, size, price } = req.body;

    if (!price || !name) {
      return res.status(400).json({ message: "Price is required" });
    }

    // Create a new dish and save it to MongoDB
    const newDish = new Dish({ img, name, size, price });
    await newDish.save();

    res.status(201).json({ message: "Dish added successfully", dish: newDish });
  } catch (error) {
    console.error("Error adding dish:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default addrecipe;
