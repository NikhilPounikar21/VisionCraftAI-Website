import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { CreatePost, GenerateAIImage } from "../api";

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setGenerateImageLoading,
  generateImageLoading,
  setCreatePostLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const generateImageFun = async () => {
    try {
      setGenerateImageLoading(true);
      setError("");

      const res = await GenerateAIImage({ prompt: post.prompt });

      setPost({
        ...post,
        photo: res?.data?.photo,
      });
    } catch (error) {
      setError(error?.response?.data?.message || "Image generation failed");
    } finally {
      setGenerateImageLoading(false);
    }
  };

  const createPostFun = async () => {
    setCreatePostLoading(true);
    await CreatePost(post)
      .then((res) => {
        setCreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
      });
  };

  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center gap-[9%]">
      {/* Top Section */}
      <div className="flex flex-col gap-1.5">
        <div className="text-2xl sm:text-[28px] font-medium text-gray-900">
          Generate Image with prompt
        </div>
        <div className="text-sm sm:text-[17px] text-gray-500">
          Write your prompt according to the image you want to generate!
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 text-xs text-gray-500">
        <TextInput
          label="Author"
          placeholder="Enter your name.."
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />

        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image . . . "
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />

        {error && <div className="text-red-500">{error}</div>}

        <div>
          ** You can post the AI Generated Image to the Community **
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />

        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => createPostFun()}
        />
      </div>
    </div>
  );
};

export default GenerateImageForm;