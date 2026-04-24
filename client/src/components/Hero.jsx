import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-purple-900 to-black text-white px-60">  
      <div className="max-w-60xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Generate Stunning AI Images & Videos in Seconds
          </h1>

          <p className="text-gray-300 mb-6">
            Turn your imagination into reality with powerful AI tools.
            Create images, videos, and art instantly.
          </p>

          {/* INPUT */}
          <div className="flex bg-white/10 backdrop-blur-md rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Describe what you want to create..."
              className="flex-1 p-3 bg-transparent outline-none text-white"
            />
            <button className="bg-purple-600 px-5 hover:bg-purple-700">
              Generate
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition">
              🎨 Generate Image
            </button>

            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              🎥 Generate Video
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="AI Preview"
            className="w-full max-w-full rounded-xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;