import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full h-full rounded-md relative p-8 border-2 bg-white border-neutral-200">
      {children}
    </div>
  );
};

export default Card;
