import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRouts.js"
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/user",userRoutes)

// Database Connection
connectDB();

app.get("/", (req, res) => {
  res.send("API is working...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));