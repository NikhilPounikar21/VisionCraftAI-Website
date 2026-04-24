import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// =======================
// SAFE ROUTE IMPORTS
// =======================
let GenerateImageRouter;
let CreationRouter;

try {
  const generateModule = await import("./routes/GenerateImage.js");
  GenerateImageRouter = generateModule.default;

  const creationModule = await import("./routes/creationRoutes.js");
  CreationRouter = creationModule.default;

  console.log("✅ Routes loaded successfully");
} catch (error) {
  console.error("❌ Route Import Error:");
  console.error(error);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 8080;

// =======================
// GLOBAL ERROR LOGGING
// =======================
process.on("uncaughtException", (err) => {
  console.error("❌ UNCAUGHT EXCEPTION:");
  console.error(err);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ UNHANDLED REJECTION:");
  console.error(err);
});

// =======================
// MIDDLEWARE
// =======================
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// =======================
// HEALTH CHECK
// =======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 VisionCraftAI Backend Running"
  });
});

// =======================
// ROUTES
// =======================
app.use("/api/generate-image", GenerateImageRouter);
app.use("/api/creations", CreationRouter);

// =======================
// START SERVER
// =======================
async function startServer() {
  try {
    console.log("🚀 Starting VisionCraftAI Backend...");

    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL missing in Render Environment Variables");
    }

    console.log("🔄 Connecting MongoDB...");

    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("✅ MongoDB Connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ SERVER START FAILED:");
    console.error(error);
    process.exit(1);
  }
}

startServer();