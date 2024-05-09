import React from 'react';
import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';

function PastTrades() {
    // Sample hardcoded user stocks
    const userStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', quantity: 100, boughtAt: 150.25 },
        { symbol: 'GOOGL', name: 'Alphabet Inc. Class A', quantity: 50, boughtAt: 2800.75 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', quantity: 75, boughtAt: 300.50 },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <LPNavBar />

            <section className="container mx-auto py-10">
                <h1 className="text-2xl font-bold mb-4">Your Owned Stocks</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userStocks.map(stock => (
                        <div key={stock.symbol} className="bg-background p-4 rounded shadow">
                            <h2 className="text-lg font-semibold">{stock.symbol}</h2>
                            <p className="text-gray-400">{stock.name}</p>
                            <p className="text-gray-400">Quantity: {stock.quantity}</p>
                            <p className="text-gray-400">Bought at: ${stock.boughtAt}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default PastTrades;
