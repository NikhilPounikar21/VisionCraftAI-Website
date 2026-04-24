import React from "react";

const Newsletter = () => {
  return (
    <div className="py-16 px-6 text-center bg-black">
      <h2 className="text-3xl font-bold text-white mb-4">
        Stay Updated 🚀
      </h2>

      <p className="text-gray-400 mb-6">
        Get latest AI tools & updates directly in your inbox.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 rounded-lg bg-gray-800 text-white mr-3"
      />

      <button className="px-6 py-3 bg-purple-600 rounded-lg text-white">
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;