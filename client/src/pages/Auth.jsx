import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="h-screen flex bg-black text-white">

      {/* LEFT SIDE (Image) */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="AI"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-10">
          <h1 className="text-4xl font-bold mb-2">
            VisionCraft AI 🚀
          </h1>
          <p className="text-gray-300 text-sm">
            Create stunning AI visuals & bring your imagination to life.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (Form) */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 backdrop-blur-lg bg-white/5">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Name (only for signup) */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-3 rounded-lg bg-white/10 outline-none"
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded-lg bg-white/10 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/10 outline-none"
        />

        {/* Button */}
        <button
          onClick={() => navigate("/home")}
          className="p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        {/* Toggle */}
        <p className="text-center text-sm mt-4 text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-cyan-400 cursor-pointer ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;