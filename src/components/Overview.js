import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent }) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-400 text-xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-4xl">
          ${price} <span className="text-lg text-neutral-400">(USD)</span>
        </span>

        <span className="text-xl text-lime-500">
          +{change} <span>(+{changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
