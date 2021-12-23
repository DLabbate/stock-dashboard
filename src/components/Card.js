import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-md">
      {children}
    </div>
  );
};

export default Card;
