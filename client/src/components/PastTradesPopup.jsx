import React from 'react';

function PastTradesPopup({ userStocks, onClose }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Past Trades</h2>
                <div className="overflow-auto max-h-80">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bought At</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {userStocks.map((stock, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{stock.symbol}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{stock.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${stock.boughtAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6">
                    <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
                </div>
            </div>
        </div>
    );
}

export default PastTradesPopup;
