import React from "react";
import { CircularProgress } from "@mui/material";

const Button = ({
  text = "Click",
  onClick = () => {},
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  type = "primary",
  flex = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        px-5 py-2 rounded-lg cursor-pointer
        text-sm font-semibold text-white
        transition duration-300
        ${type === "secondary" ? "bg-gray-600" : "bg-blue-600"}
        ${type === "secondary" ? "hover:bg-gray-700" : "hover:bg-blue-700"}
        ${isDisabled || isLoading ? "opacity-50 pointer-events-none" : ""}
        ${flex ? "flex-1" : ""}
        
        max-sm:px-3 max-sm:py-2
      `}
    >
      {/* Loader */}
      {isLoading && (
        <CircularProgress size={18} style={{ color: "white" }} />
      )}

      {/* Left Icon */}
      {leftIcon && leftIcon}

      {/* Text */}
      {text}

      {/* Loading dots */}
      {isLoading && "..."}

      {/* Right Icon */}
      {rightIcon && rightIcon}
    </div>
  );
};

export default Button;