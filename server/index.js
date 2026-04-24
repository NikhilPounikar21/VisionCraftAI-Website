import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import GenerateImageRouter from "./routes/GenerateImage.js";
import CreationRouter from "./routes/creationRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Crash logging
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});

// Middleware
app.use(cors({
  origin: "*"
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.get("/", (req, res) => {
  res.json({ success: true, message: "Backend running" });
});

app.use("/api/generate-image", GenerateImageRouter);
app.use("/api/creations", CreationRouter);

// Start app
async function startServer() {
  try {
    console.log("Starting server...");

    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL missing");
    }

    console.log("Connecting MongoDB...");

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("STARTUP FAILED:", error);
    process.exit(1);
  }
}

startServer();