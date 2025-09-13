import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to DB
connectDB();

// Start server later (Express will go here)
