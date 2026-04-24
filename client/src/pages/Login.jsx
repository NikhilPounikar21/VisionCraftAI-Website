import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[120px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-400 opacity-30 blur-[120px] bottom-[-100px] right-[-100px]"></div>

      {/* Main Container */}
      <div className="grid md:grid-cols-2 w-[90%] max-w-[1000px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur-lg border border-white/10">

        {/* Left Side - Image + Overlay */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1526401485004-2fda9f6b1c3c"
            alt="AI Visual"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Generate AI Magic ✨
            </h1>
            <p className="text-sm text-gray-300">
              Turn your imagination into stunning visuals instantly.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white/5 backdrop-blur-xl p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Welcome Back
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Login Button */}
          <button className="mt-2 p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition duration-300">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-[1px] bg-white/20"></div>
            <p className="px-3 text-gray-400 text-sm">or</p>
            <div className="flex-1 h-[1px] bg-white/20"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              Google
            </button>
            <button className="flex-1 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              GitHub
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-gray-400 mt-5">
            Don’t have an account?{" "}
            <span className="text-cyan-400 cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;