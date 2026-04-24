import React from "react";

const templates = [
  {
    name: "AI Avatar",
    prompt: "A highly detailed AI avatar of a futuristic human, glowing neon lights, cyberpunk style",
    style: "Realistic",
  },
  {
    name: "YouTube Thumbnail",
    prompt: "High contrast YouTube thumbnail, bold text, dramatic lighting, expressive face",
    style: "3D",
  },
  {
    name: "Instagram Post",
    prompt: "Aesthetic Instagram post, soft lighting, pastel colors, modern composition",
    style: "Realistic",
  },
  {
    name: "Fantasy Art",
    prompt: "Epic fantasy landscape with dragons, magic, glowing castles, ultra detailed",
    style: "Cyberpunk",
  },
];

const Templates = ({ setPrompt, setStyle }) => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-300">
        🌟 Try Templates
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {templates.map((temp, index) => (
          <button
            key={index}
            onClick={() => {
              setPrompt(temp.prompt);
              setStyle(temp.style);
            }}
            className="px-4 py-2 bg-white/10 hover:bg-purple-600 text-white rounded-xl transition duration-300"
          >
            {temp.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Templates;