import React from "react";

const CTASection = () => {
  return (
    <div className="relative py-20 px-6 text-center overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-30 top-0 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Create Stunning AI Images?
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Turn your imagination into reality in seconds.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-2xl">
            🚀 Start Creating Now
          </button>

          <button className="px-8 py-4 border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white text-lg font-semibold rounded-2xl">
            🎨 Generate Your First AI Image
          </button>
        </div>
      </div>

    </div>
  );
};

export default CTASection;