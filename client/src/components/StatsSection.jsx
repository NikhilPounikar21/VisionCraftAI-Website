import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1M+", label: "Images Generated" },
  { value: "50K+", label: "Users" },
  { value: "100K+", label: "Prompts Created" },
];

const StatsSection = () => {
  return (
    <div className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        🚀 Our Impact in Numbers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-700/30 to-pink-500/20 backdrop-blur-lg border border-white/10 shadow-lg"
          >
            <h1 className="text-5xl font-extrabold text-purple-400">
              {stat.value}
            </h1>
            <p className="mt-3 text-lg text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;