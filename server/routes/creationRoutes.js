import express from "express";
import Creation from "../models/Creation.js";

const router = express.Router();

// =====================================
// ✅ SAVE IMAGE CREATION TO MONGODB
// POST /api/creations/add
// =====================================
router.post("/add", async (req, res) => {
  try {
    const { prompt, imageUrl, style, userId } = req.body;

    // =========================
    // ✅ VALIDATION
    // =========================
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required"
      });
    }

    if (!imageUrl || imageUrl.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "imageUrl is required"
      });
    }

    console.log("💾 Saving creation:", prompt);

    // =========================
    // ✅ CREATE DOCUMENT
    // =========================
    const newCreation = new Creation({
      prompt: prompt.trim(),
      imageUrl: imageUrl.trim(),
      style: style?.trim() || "default",
      userId: userId?.trim() || "guest"
    });

    const savedData = await newCreation.save();

    console.log("✅ Creation saved successfully");

    // =========================
    // ✅ SUCCESS RESPONSE
    // =========================
    return res.status(201).json({
      success: true,
      message: "Creation saved successfully",
      data: savedData
    });

  } catch (error) {
    console.error("❌ Save Creation Error:");
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to save creation",
      error: error.message
    });
  }
});

// =====================================
// ✅ GET ALL CREATIONS
// GET /api/creations
// =====================================
router.get("/", async (req, res) => {
  try {
    const creations = await Creation.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: creations.length,
      data: creations
    });

  } catch (error) {
    console.error("❌ Fetch Creations Error:");
    console.error(error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch creations"
    });
  }
});

export default router;