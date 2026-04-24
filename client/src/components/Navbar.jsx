import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "@mui/icons-material";
import LoginModal from "./LoginModal";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const createRef = useRef();
  const profileRef = useRef();

  // =========================
  // AUTH
  // =========================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // =========================
  // OUTSIDE CLICK
  // =========================
  useEffect(() => {
    const handler = (e) => {
      if (!createRef.current?.contains(e.target)) {
        setShowCreateMenu(false);
      }
      if (!profileRef.current?.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // =========================
  // SCROLL EFFECT (FIXED)
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className="fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-12 py-4 bg-black"
      >
        {/* LOGO */}
        <div
          className="text-2xl font-extrabold cursor- bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          onClick={() => navigate("/")}
        >
          VisionCraftAI
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">

          <span onClick={() => scrollToSection("hero")} className="hover:text-white cursor-pointer">
            Home
          </span>

          <span onClick={() => scrollToSection("community")} className="hover:text-white cursor-pointer">
            Explore
          </span>

          {/* CREATE MENU */}
          <div className="relative" ref={createRef}>
            <span
              onClick={() => setShowCreateMenu((p) => !p)}
              className="hover:text-purple-400 cursor-pointer"
            >
              Create
            </span>

            {showCreateMenu && (
              <div className="absolute top-12 left-0 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
                <div
                  onClick={() => {
                    navigate("/create");
                    setShowCreateMenu(false);
                  }}
                  className="px-4 py-3 hover:bg-purple-600 cursor-pointer"
                >
                  Image Generator
                </div>

                <div
                  onClick={() => {
                    navigate("/create-video");
                    setShowCreateMenu(false);
                  }}
                  className="px-4 py-3 hover:bg-purple-600 cursor-pointer"
                >
                  Video Generator
                </div>
              </div>
            )}
          </div>

          <span onClick={() => scrollToSection("features")} className="hover:text-white cursor-pointer">
            Features
          </span>

          <span onClick={() => scrollToSection("pricing")} className="hover:text-white cursor-pointer">
            Pricing
          </span>

          <span onClick={() => scrollToSection("contact")} className="hover:text-white cursor-pointer">
            Contact
          </span>

          {/* SEARCH */}
          <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full ml-4">
            <Search style={{ fontSize: 18 }} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm px-2 text-white w-32"
            />
          </div>

          {/* AUTH */}
          {user ? (
            <div className="relative" ref={profileRef}>
              <img
                src={user.photoURL || "https://ui-avatars.com/api/?name=User"}
                alt="user"
                className="w-9 h-9 rounded-full border border-gray-600 cursor-pointer"
                onClick={() => setShowProfileMenu((p) => !p)}
              />

              {showProfileMenu && (
                <div className="absolute right-0 top-12 bg-gray-900 border border-gray-700 rounded-xl w-52 shadow-2xl overflow-hidden">

                  <div className="px-4 py-3 text-sm border-b border-gray-700 text-gray-300">
                    {user.displayName || "User"}
                  </div>

                  <div
                    onClick={() => {
                      navigate("/dashboard");
                      setShowProfileMenu(false);
                    }}
                    className="px-4 py-3 text-sm hover:bg-purple-600 cursor-pointer"
                  >
                    Dashboard
                  </div>

                  <div
                    onClick={() => {
                      navigate("/creations");
                      setShowProfileMenu(false);
                    }}
                    className="px-4 py-3 text-sm hover:bg-purple-600 cursor-pointer"
                  >
                    My Creations
                  </div>

                  <div
                    onClick={() => {
                      navigate("/settings");
                      setShowProfileMenu(false);
                    }}
                    className="px-4 py-3 text-sm hover:bg-purple-600 cursor-pointer"
                  >
                    Settings
                  </div>

                  <div
                    onClick={async () => {
                      await signOut(auth);
                      setShowProfileMenu(false);
                    }}
                    className="px-4 py-3 text-sm hover:bg-red-600 cursor-pointer"
                  >
                  Logout
                  </div>

                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-1.5 rounded-full text-sm"
            >
              Log in
            </button>
          )}
        </div>
      </div>

      {/* SPACE FOR FIXED NAVBAR */}
      <div className="h-0"></div>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;