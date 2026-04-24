import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🖼️",
    title: "AI Image Generation",
    desc: "Turn your ideas into stunning visuals using powerful AI models in seconds.",
  },
  {
    icon: "🎥",
    title: "AI Video Creation",
    desc: "Generate cinematic videos from simple prompts with smooth transitions.",
  },
  {
    icon: "⚡",
    title: "Fast Processing",
    desc: "Experience lightning-fast generation powered by optimized AI systems.",
  },
  {
    icon: "🎯",
    title: "High Quality Output",
    desc: "Get ultra HD, detailed, and professional-grade results every time.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-20 px-6 bg-black text-white text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Powerful AI Features 🚀
      </h2>
      <p className="text-gray-400 mb-12">
        Everything you need to create stunning AI visuals & videos
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-900/40 to-black p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-purple-500/20 transition"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;