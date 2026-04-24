import React, { useState } from "react";

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

    // 🔥 Fake loading (replace with API later)
    setTimeout(() => {
      setImage("https://picsum.photos/500/300");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="py-20 px-6 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-6">
        Try AI Image Generator 🚀
      </h2>

      {/* Prompt Input */}
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full max-w-xl p-3 rounded-lg text-black mb-4"
      />

      {/* Style Selector */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {styles.map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-4 py-2 rounded-full border ${
              style === s ? "bg-purple-600" : "bg-gray-800"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {/* Output */}
      <div className="mt-10 flex justify-center">
        {loading && <p>⏳ Creating magic...</p>}

        {image && (
          <img
            src={image}
            alt="Generated"
            className="rounded-xl shadow-lg"
          />
        )}
      </div>
    </div>
  );
};

export default PromptDemo;