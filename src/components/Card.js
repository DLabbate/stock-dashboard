import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full h-full bg-white border-2 border-neutral-200 rounded-md relative p-8">
      {children}
    </div>
  );
};

export default Card;
