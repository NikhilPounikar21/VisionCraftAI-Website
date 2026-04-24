import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import GenerateImageRouter from "./routes/GenerateImage.js";
import CreationRouter from "./routes/creationRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// =======================
// ✅ MIDDLEWARE
// =======================
app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// =======================
// ✅ HEALTH CHECK
// =======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 VisionCraftAI Backend Running Successfully"
  });
});

// =======================
// ✅ ROUTES
// =======================
app.use("/api/generate-image", GenerateImageRouter);
app.use("/api/creations", CreationRouter);

// =======================
// ✅ DATABASE CONNECTION
// =======================
const connectDB = async () => {
  try {
    console.log("🚀 Starting Server...");
    console.log("📦 Checking Environment Variables...");

    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is missing");
    }

    console.log("🔄 Connecting MongoDB...");

    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "visioncraft"
    });

    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server Startup Error:");
    console.error(error.message);
    process.exit(1);
  }
};

// =======================
// ✅ HANDLE CRASH ERRORS
// =======================
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err.message);
});

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err.message);
});

// =======================
// ✅ START APP
// =======================
connectDB();