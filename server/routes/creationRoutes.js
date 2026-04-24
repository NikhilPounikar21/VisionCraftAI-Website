import express from "express";
import Creation from "../models/Creation.js";

const router = express.Router();

// =======================
// ✅ SAVE TO MONGODB
// =======================
router.post("/add", async (req, res) => {
  try {
    const { prompt, imageUrl, style, userId } = req.body;

    // validation (optional but recommended)
    if (!prompt || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: "Prompt and imageUrl are required",
      });
    }

    const newCreation = new Creation({
      prompt,
      imageUrl,
      style,
      userId,
    });

    const saved = await newCreation.save();

    return res.status(201).json({
      success: true,
      message: "Data saved successfully",
      data: saved,
    });

  } catch (error) {
    console.error("❌ Save Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

export default router;