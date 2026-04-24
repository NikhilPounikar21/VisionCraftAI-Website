import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

const ImageCard = ({ item }) => {
  const handleDownload = () => {
    if (item?.photo) {
      FileSaver.saveAs(item.photo, "image.jpg");
    }
  };

  return (
    <div
      className="
        relative rounded-2xl overflow-hidden cursor-pointer
        shadow-lg transition duration-300
        hover:scale-105
        group
      "
    >
      {/* Image */}
      <LazyLoadImage
        src={item?.photo}
        alt={item?.prompt}
        width="100%"
        className="block"
      />

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/60 text-white
          opacity-0 group-hover:opacity-100
          transition duration-300
          flex flex-col justify-end
          p-3
        "
      >
        {/* Prompt */}
        <div className="text-sm mb-2">{item?.prompt}</div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Avatar sx={{ width: 28, height: 28 }}>
              {item?.name?.[0] || "U"}
            </Avatar>
            <span>{item?.name || "User"}</span>
          </div>

          <DownloadRounded
            className="cursor-pointer"
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;