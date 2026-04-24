import React from "react";

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  textArea,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      {label && (
        <label className="text-xs text-gray-500 uppercase">
          {label}
        </label>
      )}

      {/* Input Box */}
      <div
        className="
          border border-gray-400/70
          rounded-lg p-3
          flex items-center
          focus-within:border-blue-500
        "
      >
        {textArea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            rows={rows}
            onChange={onChange}
            className="
              w-full bg-transparent
              outline-none border-none
              text-sm text-gray-900
              resize-none
            "
          />
        ) : (
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="
              w-full bg-transparent
              outline-none border-none
              text-sm text-gray-900
            "
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;