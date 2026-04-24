import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Auth from "./pages/Auth";
import ImageGenerator from "./pages/ImageGenerator";
import Dashboard from "./pages/Dashboard";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<ImageGenerator />} />
    <Route path="/post" element={<CreatePost />} />
    <Route path="/login" element={<Auth />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>

  <LoginModal />
  <Footer />
</BrowserRouter>
  );
}

export default App;