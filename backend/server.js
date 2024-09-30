// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(express.json()); // ALLOWS US TO ACCEPT JSON DATA IN THE req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
