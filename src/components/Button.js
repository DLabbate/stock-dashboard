import React from "react";

const Button = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-violet-600 border-violet-700 text-white"
          : "border-violet-300 text-violet-300"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
