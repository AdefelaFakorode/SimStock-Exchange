import React from 'react';

function Trending_Comp() {
  // Mock data similar to the image
  const stocks = [
    { name: 'Apple Inc (AAPL)', currentPrice: 145.30, priceChange: '+$1.50 (+1.04%)' },
    { name: 'Microsoft Corporation (MSFT)', currentPrice: 285.00, priceChange: '+$2.80 (+0.99%)' },
    { name: 'Amazon.com Inc (AMZN)', currentPrice: 3310.25, priceChange: '-$25.50 (-0.76%)' },
    { name: 'Tesla, Inc (TSLA)', currentPrice: 689.50, priceChange: '+$4.20 (+0.61%)' },
    { name: 'Meta Platforms Inc (Meta)', currentPrice: 320.40, priceChange: '-$3.60 (-1.11%)' },
    // ... other stocks
  ];

  return (
    <div className="py-6 px-8 bg-white">
      <h2 className="text-center text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4">Trending Stocks</h2>
      <h3 className="text-center text-xl mb-4">Top 10 Trending Stocks</h3>
      <div>
        {stocks.map((stock, index) => (
          <div key={index} className={`mb-4 pb-4 ${index !== stocks.length - 1 ? 'border-b' : ''} border-gray-200`}>
            <div className="font-semibold">Stock Name: <span className="font-normal">{stock.name}</span></div>
            <div className="font-semibold">Current Price: <span className="font-normal">${stock.currentPrice.toFixed(2)}</span></div>
            <div className={`font-semibold ${stock.priceChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              Price Change: <span className="font-normal">{stock.priceChange}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending_Comp;
