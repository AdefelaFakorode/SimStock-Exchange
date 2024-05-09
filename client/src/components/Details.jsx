import Card from "./Card";

const Details = ({ details }) => {
  const detailsList = {
    longName: "Name:",
    country: "Country:",
    currency: "Currency:",
    exchange: "Exchange:",
    firstTradeDateEpochUtc: "IPO Date:",
    marketCap: "Market Capitalization:",
    industry: "Industry:",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000000000).toFixed(2) + "B";
  };

  const formatDate = (epoch) => {
    const date = new Date(epoch * 1000);
    return date.toLocaleDateString("en-US");
  };

  return (
    <Card className="shadow-md rounded-lg overflow-hidden">
      <h1 className="text-center font-bold text-2xl text-white">Key Data</h1>
      <ul className="w-full divide-y divide-[#d9d9d9]">
        {Object.keys(detailsList).map((key) => {
          const value = details[key];
          let displayValue;

          if (key === "marketCap") {
            displayValue = convertMillionToBillion(value);
          } else if (key === "firstTradeDateEpochUtc") {
            displayValue = formatDate(value);
          } else {
            displayValue = value;
          }

          return (
            <li
              key={key}
              className="flex justify-between items-center px-6 py-3 text-m"
            >
              <span className="text-[#d9d9d9] font-normal">
                {detailsList[key]}
              </span>
              <span className="text-white">{displayValue}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
