import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 px-8 py-12 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h1 className="text-white text-xl font-semibold mb-3">
            VisionCraftAI
          </h1>
          <p className="text-sm">
            Create stunning AI-generated images with powerful prompts. 
            Fast, creative, and futuristic.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-medium mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/create" className="hover:text-white">Create</Link></li>
            <li><Link to="/explore" className="hover:text-white">Explore</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* Support / Contact */}
        <div>
          <h2 className="text-white font-medium mb-3">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="mailto:support@visioncraftai.com" className="hover:text-white">Email Us</a></li>
            <li><Link to="/api-docs" className="hover:text-white">API Docs</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-medium mb-3">Connect</h2>
          <div className="flex gap-4 text-lg">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} VisionCraftAI. All rights reserved.
        <div className="mt-2 space-x-4">
          <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/cookies" className="hover:text-white">Cookies</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;