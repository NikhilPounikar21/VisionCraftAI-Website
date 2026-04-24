import fetch from "node-fetch";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    // ✅ 1. Check prompt
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    // ✅ 2. Call Cloudflare API
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

    // ✅ 3. Convert response to image
    const buffer = await response.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    // ✅ 4. Send image to frontend
    res.json({
      image: `data:image/png;base64,${base64Image}`,
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Image generation failed" });
  }
};