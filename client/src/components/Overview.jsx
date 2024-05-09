import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
  <Card className="relative bg-background shadow-lg rounded-lg overflow-hidden p-4">
    <span className="absolute left-4 top-1 text-white text-xl xl:text-2xl lg:font-normal font-normal lg:mt-4">
      {symbol}
    </span>
    <div className="flex items-center justify-between text-white lg:mt-5">
      <span className="text-3xl xl:text-5xl lg:font-normal font-normal flex items-center">
        ${price}
        <span className="text-xl xl:text-2xl 2xl:text-3xl text-white ml-4 font-normal">
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