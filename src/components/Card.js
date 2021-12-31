import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full bg-white border-2 border-neutral-200 rounded-md relative p-8 ${
        darkMode ? "bg-gray-900 border-gray-800" : null
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
