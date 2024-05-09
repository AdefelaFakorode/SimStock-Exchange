import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
  <Card className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4">
    <span className="absolute left-4 top-1 text-neutral-400 text-xl xl:text-2xl 2xl:text-3xl font-semibold">
      {symbol}
    </span>
    <div className="flex items-center justify-between text-gray-800">
      <span className="text-3xl xl:text-5xl 2xl:text-6xl font-medium flex items-center">
        ${price}
        <span className="text-xl xl:text-2xl 2xl:text-3xl text-neutral-500 ml-4 font-normal">
          {currency}
        </span>
      </span>
      <span
        className={`text-xl xl:text-2xl 2xl:text-3xl ${
          change > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {change} <span>({changePercent}%)</span>
      </span>
    </div>
  </Card>
  );
};

export default Overview;