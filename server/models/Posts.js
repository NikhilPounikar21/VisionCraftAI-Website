import mongoose from "mongoose";

// 📌 Create Schema
const PostSchema = new mongoose.Schema(
  {
    // 👤 User Name
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true, // removes extra spaces
    },

    // 💬 AI Prompt
    prompt: {
      type: String,
      required: [true, "Prompt is required"],
      trim: true,
    },

    // 🖼️ Image URL (Cloudinary)
    photo: {
      type: String,
      required: [true, "Photo is required"],
    },
  },
  {
    timestamps: true, // ✅ adds createdAt & updatedAt automatically
  }
);

// 📌 Create Model
const Post = mongoose.model("Post", PostSchema);

// 📌 Export Model
export default Post;