import React, { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // =========================
  // ✅ TRACK USER
  // =========================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  // =========================
  // 💾 SAVE TO MONGODB (FIXED)
  // =========================
  const saveToMongoDB = async (imageUrl, promptText) => {
    try {
      console.log("💾 Saving to MongoDB...");

      const res = await fetch("http://localhost:8080/api/creations/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: promptText,
          style: style,
          imageUrl: imageUrl,
          userId: user?.uid || null,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Save failed");
      }

      console.log("✅ Saved successfully:", data.data._id);
      return true;

    } catch (error) {
      console.error("❌ MongoDB save error:", error.message);
      return false;
    }
  };

  // =========================
  // 🚀 GENERATE IMAGE
  // =========================
  const generateImage = async () => {
    if (loading) return;
    if (!prompt) return alert("Enter a prompt");

    if (!user) {
      setShowLogin(true);
      return;
    }

    setLoading(true);
    setImage(null);

    try {
      const finalPrompt = `${prompt}, ${style} style`;

      const res = await fetch("http://localhost:8080/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const data = await res.json();

      if (!res.ok || !data?.image) {
        throw new Error("Image generation failed");
      }

      setImage(data.image);

      // =========================
      // 🔥 SAVE TO DB
      // =========================
      const saved = await saveToMongoDB(data.image, finalPrompt);

      if (!saved) {
        console.warn("⚠️ Image generated but NOT saved to DB");
      }

    } catch (error) {
      console.error(error);
      alert("Error generating image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-10 flex items-center justify-center">

        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT PANEL */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-6">

              <h1 className="text-3xl font-bold text-center">
                🎨 VisionCraft AI
              </h1>

              {!user && (
                <p className="text-yellow-400 text-sm text-center">
                  Login required to generate images 🚀
                </p>
              )}

              <textarea
                placeholder="Describe your imagination..."
                className="w-full p-4 rounded-xl bg-black/40 border border-gray-700 focus:outline-none"
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <select
                className="w-full p-3 rounded-xl bg-black/40 border border-gray-700"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option value="realistic">Realistic</option>
                <option value="anime">Anime</option>
                <option value="cyberpunk">Cyberpunk</option>
                <option value="3d render">3D Render</option>
                <option value="fantasy art">Fantasy</option>
              </select>

              <button
                onClick={generateImage}
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold ${
                  loading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-500"
                }`}
              >
                {loading ? "Generating..." : "Generate Image 🚀"}
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex items-center justify-center">

              {loading ? (
                <p className="text-gray-400">Creating Image...</p>
              ) : image ? (
                <div className="text-center space-y-4">

                  <img
                    src={image}
                    alt="Generated"
                    className="rounded-xl max-h-[400px]"
                  />

                  <a
                    href={image}
                    download="ai-image.png"
                    className="bg-green-600 px-4 py-2 rounded-lg"
                  >
                    Download
                  </a>

                </div>
              ) : (
                <p className="text-gray-400">
                  Your AI image will appear here ✨
                </p>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default ImageGenerator;