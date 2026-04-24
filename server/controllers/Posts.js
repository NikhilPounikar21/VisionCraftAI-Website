import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// ======================================================
// 📌 GET ALL POSTS
// ======================================================
export const getAllPosts = async (req, res, next) => {
  try {
    // Get all posts (latest first)
    const posts = await Post.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });

  } catch (error) {
    console.error("🔥 GET POSTS ERROR:", error.message);
    next(createError(500, "Failed to fetch posts"));
  }
};


// ======================================================
// 📌 CREATE NEW POST
// ======================================================
export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;

    // ✅ 1. Validation
    if (!name || !prompt || !photo) {
      return next(createError(400, "Name, prompt and photo are required"));
    }

    // ✅ 2. Check base64 image format
    if (!photo.startsWith("data:image")) {
      return next(createError(400, "Invalid image format"));
    }

    // ✅ 3. Upload image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(photo, {
      folder: "image_generator",
    });

    if (!uploadedImage?.secure_url) {
      return next(createError(500, "Image upload failed"));
    }

    // ✅ 4. Save post in MongoDB
    const newPost = await Post.create({
      name,
      prompt,
      photo: uploadedImage.secure_url,
    });

    // ✅ 5. Send response
    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost,
    });

  } catch (error) {
    console.error("🔥 CREATE POST ERROR:", error.message);
    next(createError(500, "Failed to create post"));
  }
};