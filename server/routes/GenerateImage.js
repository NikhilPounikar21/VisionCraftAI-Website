import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    // =========================
    // 🚨 HANDLE CLOUDFLARE ERRORS
    // =========================
    if (!response.ok) {
      const errText = await response.text();
      console.error("Cloudflare Error:", errText);

      return res.status(500).json({
        success: false,
        message: "Cloudflare AI failed",
      });
    }

    const buffer = await response.arrayBuffer();

    if (!buffer || buffer.byteLength === 0) {
      return res.status(500).json({
        success: false,
        message: "Empty image buffer received",
      });
    }

    const base64Image = Buffer.from(buffer).toString("base64");

    const imageUrl = `data:image/png;base64,${base64Image}`;

    // =========================
    // ✅ CLEAN RESPONSE FORMAT
    // =========================
    return res.status(200).json({
      success: true,
      image: imageUrl,
    });

  } catch (error) {
    console.error("Generate Image Error:", error);

    return res.status(500).json({
      success: false,
      message: "Image generation failed",
      error: error.message,
    });
  }
});

export default router;