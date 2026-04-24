import React from "react";
import { motion } from "framer-motion";
import { Edit, Palette, Download } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Edit size={40} />,
    title: "Enter Prompt",
    desc: "Describe what you want to create. Be creative and detailed.",
  },
  {
    id: "02",
    icon: <Palette size={40} />,
    title: "Choose Style",
    desc: "Select styles like Realistic, Anime, 3D, or Cyberpunk.",
  },
  {
    id: "03",
    icon: <Download size={40} />,
    title: "Generate & Download",
    desc: "Let AI create your image and download instantly.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-20 px-6 bg-black text-white text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        🎬 How It Works
      </h2>
      <p className="text-gray-400 mb-12">
        Create stunning AI images in just 3 simple steps
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition duration-300"
          >
            {/* Step Number */}
            <h3 className="text-purple-500 text-lg mb-2">
              Step {step.id}
            </h3>

            {/* Icon */}
            <div className="flex justify-center mb-4 text-purple-400">
              {step.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl font-semibold mb-2">
              {step.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 text-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;