import React, { useState } from "react";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const CreatePost = () => {
  // Loading states
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  // Post data
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  return (
    <div
      className="
        min-h-screen p-5
        bg-gray-100
        flex justify-center items-center
      "
    >
      <div
        className="
          w-full max-w-[1100px]
          flex gap-5
          max-md:flex-col
        "
      >
        {/* Form */}
        <GenerateImageForm
          post={post}
          setPost={setPost}
          generateImageLoading={isGenerating}
          setGenerateImageLoading={setIsGenerating}
          createPostLoading={isPosting}
          setCreatePostLoading={setIsPosting}
        />

        {/* Image Preview */}
        <GeneratedImageCard
          src={post.photo}
          loading={isGenerating}
        />
      </div>
    </div>
  );
};

export default CreatePost;