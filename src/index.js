import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

// Load environment variables
dotenv.config({ path: "./.env" });

//creating express instance
const app = express();

//sending a plain text to client
app.get("/", (req, res) => {
  res.send("server is ready");
});

// Connect to DB
connectDB();

//const PORT = process.env.PORT || 3000;

//starting server
app.listen(PORT, () => {
  console.log(`sever is running at http://localhost:${process.env.PORT}`);
});
