import express from "express";
import { createPost, getAllPosts } from "../controllers/Posts.js";

const router = express.Router();

// ======================================================
// 📌 GET ALL POSTS
// URL: /api/posts
// ======================================================
router.get("/", getAllPosts);

// ======================================================
// 📌 CREATE NEW POST
// URL: /api/posts
// ======================================================
router.post("/", createPost);

// ======================================================
// 📌 EXPORT ROUTER
// ======================================================
export default router;