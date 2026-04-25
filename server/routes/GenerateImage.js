import express from "express";
import axios from "axios";

const router = express.Router();

// ===================================
// ✅ IMAGE GENERATION ROUTE
// POST /api/generate-image
// ===================================
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    // =========================
    // ✅ VALIDATE PROMPT
    // =========================
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required"
      });
    }

    // =========================
    // ✅ CHECK ENV VARIABLES
    // =========================
    const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
    const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

    if (!ACCOUNT_ID || !API_TOKEN) {
      return res.status(500).json({
        success: false,
        message: "Cloudflare environment variables missing"
      });
    }

    console.log("🎨 Generating image for prompt:", prompt);

    // =========================
    // ✅ CALL CLOUDFLARE AI API
    // =========================
    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
      {
        prompt: prompt.trim()
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json"
        },
        responseType: "arraybuffer",
        timeout: 60000
      }
    );

    // =========================
    // ✅ CONVERT IMAGE TO BASE64
    // =========================
    const base64Image = Buffer.from(response.data).toString("base64");

    const imageUrl = `data:image/png;base64,${base64Image}`;

    console.log("✅ Image generated successfully");

    // =========================
    // ✅ SUCCESS RESPONSE
    // =========================
    return res.status(200).json({
      success: true,
      image: imageUrl
    });

  } catch (error) {
    console.error("❌ Generate Image Error:");

    if (error.response) {
      console.error(error.response.status, error.response.statusText);
    } else {
      console.error(error.message);
    }

    return res.status(500).json({
      success: false,
      message: "Image generation failed"
    });
  }
});

export default router;