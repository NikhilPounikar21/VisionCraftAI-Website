import { CircularProgress } from "@mui/material";
import React from "react";

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <div
      className="
        flex-1 min-h-[300px]
        flex items-center justify-center gap-4
        p-4
        border-2 border-dashed border-yellow-400
        text-gray-400
        rounded-2xl
      "
    >
      {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image ...
        </>
      ) : (
        <>
          {src ? (
            <img
              src={src}
              alt="Generated"
              className="
                w-full h-full object-cover
                rounded-2xl
                bg-black/50
              "
            />
          ) : (
            <>Write a prompt to generate image</>
          )}
        </>
      )}
    </div>
  );
};

export default GeneratedImageCard;