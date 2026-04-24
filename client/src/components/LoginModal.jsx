import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { FaGoogle, FaApple, FaDiscord } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 🚀 GOOGLE LOGIN + SAVE USER
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // 🔥 SAVE USER TO LOCALSTORAGE (IMPORTANT FIX)
      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        plan: "free",
        credits: 3,
        joinedAt: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(userData));

      onClose();

    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
    >
      {/* Main Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[95%] max-w-4xl h-[550px] bg-[#111] rounded-2xl overflow-hidden flex shadow-2xl border border-gray-800"
      >

        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://i.pinimg.com/736x/4c/9e/29/4c9e29dbf6d601083b8e515623e13faf.jpg"
            alt="preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-center relative">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-5 text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-6">
            Log in to <span className="text-purple-500">VisionCraftAI</span>
          </h2>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleGoogleLogin}
              className="bg-[#1a1a1a] p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FaGoogle />
            </button>

            <button className="bg-[#1a1a1a] p-3 rounded-full hover:bg-gray-700 transition">
              <FaApple />
            </button>

            <button className="bg-[#1a1a1a] p-3 rounded-full hover:bg-gray-700 transition">
              <FaDiscord />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="mx-3 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#1a1a1a] p-3 rounded-lg mb-3 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="bg-[#1a1a1a] p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Login Button */}
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Login
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <span className="text-purple-400 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

          <p className="text-xs text-gray-500 mt-2 cursor-pointer hover:text-gray-300">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;