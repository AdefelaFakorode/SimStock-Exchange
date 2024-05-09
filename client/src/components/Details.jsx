import Card from "./Card";


const Details = ({ details }) => {

  const detailsList = {
    longName: "Name:",
    country: "Country:",
    currency: "Currency:",
    exchange: "Exchange:",
    ipo: "IPO Date:",
    marketCap: "Market Capitalization:",
    industry: "Industry:",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000000000).toFixed(2);
  };

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <h1 className="text-center font-bold text-2xl text-gray-800">Key Data</h1>
      <ul className="w-full divide-y divide-gray-300">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex justify-between items-center px-6 py-3 text-m">
              <span className="text-black font-semibold">{detailsList[item]}</span>
              <span className="text-gray-800 text-gray-600">
                {item === "marketCap"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );  
};

export default Details;