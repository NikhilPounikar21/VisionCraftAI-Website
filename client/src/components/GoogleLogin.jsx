import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log(user);
      alert(`Welcome ${user.displayName}`);
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-3 bg-white text-black px-5 py-2 rounded-lg shadow"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>
  );
};

export default GoogleLogin;