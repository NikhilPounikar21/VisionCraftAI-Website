import mongoose from "mongoose";

const creationSchema = new mongoose.Schema(
  {
    prompt: String,
    imageUrl: String,
    style: String,
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Creation", creationSchema);