import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { CircularProgress } from "@mui/material";
import { GetPosts } from "../api";
import CommunitySection from "../components/CommunitySection";

// Landing Sections
import Hero from "../components/Hero";
import PromptDemo from "../components/PromptDemo";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";

// New Sections
import CTASection from "../components/CTASection";
import Newsletter from "../components/Newsletter";


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await GetPosts();
      setPosts(res?.data?.data || res?.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const text = search.toLowerCase();
    return (
      post?.prompt?.toLowerCase().includes(text) ||
      post?.name?.toLowerCase().includes(text)
    );
  });

  return (
    
  <div className="bg-black text-white">

    <div id="hero"><Hero /></div>

    <div id="features"><FeaturesSection /></div>

    <div id="how"><HowItWorks /></div>

    <div id="prompt"><PromptDemo /></div>

    <div id="stats"><StatsSection /></div>

    <div id="testimonials"><Testimonials /></div>

    <div id="pricing"><PricingSection /></div>

    <div id="cta"><CTASection /></div>

    <div id="community"><CommunitySection /></div>

    <div id="contact"><Newsletter /></div>

  </div>

  );
};

export default Home;