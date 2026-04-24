import React, { useState } from "react";
import Templates from "./Templates";

const PromptDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const styles = ["Realistic", "Anime", "3D", "Cyberpunk"];

  const handleGenerate = async () => {
    if (!prompt) return alert("Enter a prompt!");

    setLoading(true);
    setImage(null);

    // 🔥 Fake delay (replace with your API later)
    setTimeout(() => {
      setImage(
        "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full py-20 px-6 flex flex-col items-center text-center">
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">
        Create AI Images Instantly 🚀
      </h2>
      <p className="text-gray-400 mb-10">
        Turn your imagination into stunning visuals in seconds
      </p>

      {/* Input Box */}
      <div className="w-full max-w-2xl bg-[#111] p-4 rounded-2xl shadow-lg border border-gray-800">
        
        {/* Prompt Input */}
        <input
          type="text"
          placeholder="Describe your image..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white outline-none mb-4"
        />

        {/* Style Selector */}
        <div className="flex gap-3 flex-wrap justify-center mb-4">
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`px-4 py-2 rounded-full text-sm ${
                style === s
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold"
        >
          {loading ? "Generating..." : "✨ Generate Image"}
        </button>
      </div>

      {/* 🌟 Templates Section (CORRECT PLACE) */}
      <Templates setPrompt={setPrompt} setStyle={setStyle} />

      {/* Output Preview */}
      <div className="mt-10 w-full max-w-2xl">
        {loading && (
          <p className="text-gray-400 animate-pulse">
            Creating magic... ✨
          </p>
        )}

        {image && (
          <img
            src={image}
            alt="Generated"
            className="rounded-xl shadow-lg w-full"
          />
        )}
      </div>
    </div>
  );
};

export default PromptDemo;