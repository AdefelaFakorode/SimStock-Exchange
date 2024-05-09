import React, { useEffect, useState } from 'react';

function TradePopup({ onClose, balance, setBalance, changePercent, symbol, price, currency, change }) {
    const [popupType, setPopupType] = useState('buy');
    const [insufficientShares, setInsufficientShares] = useState(false);
    const [sellAmount, setSellAmount] = useState('');
    const [numShares, setNumShares] = useState('');
    const [inputError, setInputError] = useState(false);
    const [purchaseAmount, setPurchaseAmount] = useState('');
    const [insufFunds, setInsufFunds] = useState(false);
    const [input, setInput] = useState(false);


    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                popupType === 'buy' ? handleOnBuy() : handleOnSell();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [popupType]);

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    

    
    function handleOnClose(e) {
        if (e.target.id === "container") {
            onClose();
        }
    }

    function handlePurchaseAmountChange(e) {
        const amount = parseFloat(e.target.value);
        setPurchaseAmount(e.target.value);

        if (!isNaN(amount)) {
            setNumShares((amount / price).toFixed(2));
            setInput(false);
        } else {
            setNumShares('');
        }
    }

    function handleNumSharesChange(e) {
        const shares = parseFloat(e.target.value);
        setNumShares(e.target.value);

        if (!isNaN(shares)) {
            setPurchaseAmount((shares * price).toFixed(2));
        } else {
            setPurchaseAmount('');
        }
    }

    function handleOnBuy() {
        let amount = parseFloat(purchaseAmount);

        if (isNaN(amount)) {
            amount = 0.0;
            setInput(true);
            return;
        }

        if (balance < amount) {
            setInsufFunds(true);
            return;
        } else {
            setBalance((parseFloat(balance) - amount).toFixed(2));
        }

        onClose();
    }

    function handleSellAmountChange(e) {
        const amount = parseFloat(e.target.value);
        setSellAmount(e.target.value);

        if (!isNaN(amount)) {
            setNumShares((amount / price).toFixed(2));
            setInputError(false);
        } else {
            setNumShares('');
        }
    }

    function handleOnSell() {
        // if (!sellAmount || isNaN(parseFloat(sellAmount))) {
        //     setInputError(true);
        //     return;
        // }

        // let amount = parseFloat(sellAmount);

        // if (amount > balance) {
        //     setInsufficientShares(true);
        //     return;
        // } else {
        //     setBalance(balance - amount);
        // }

        onClose();
    }

    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20">
            <div className="bg-white rounded-lg shadow-lg w-1/3">
                <div className="mb-5 flex">
                    <button onClick={() => setPopupType('buy')} className={`px-5 py-2 border border-gray-200 border-b-4 ${popupType === 'buy' ? 'border-b-green-500 hover:border-b-green-600' : ''} text-black font-bold rounded mb-2 w-1/2`}>
                        Buy
                    </button>
                    <button onClick={() => setPopupType('sell')} className={`px-5 py-2 border border-gray-200 border-b-4 ${popupType === 'sell' ? 'border-b-red-500 hover:border-b-red-600' : ''} text-black font-bold rounded mb-2 w-1/2`}>
                        Sell
                    </button>
                </div>

                {popupType === 'buy' ? (
                    <>
                        <h1 className="text-center font-bold text-3xl mb-4">{symbol}</h1>
                        <h4 className="text-center text-lg mb-4">
                            <strong>Buying Power: </strong>{balance} {currency}
                        </h4>

                        <div className="flex justify-evenly items-center text-xl mb-5">
                            <div><strong>At price:</strong> {price} ({currency})</div>
                            <span className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? 'text-lime-500' : 'text-red-500'}`}>
                                {change} <span>({changePercent}%)</span>
                            </span>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-4 w-3/4">
                                <label htmlFor="Curr-PopUp" className="font-semibold block mb-2">Buy Amount ({currency})</label>
                                <input
                                    id="Curr-PopUp"
                                    type="text"
                                    className="border border-gray-300 p-3 rounded w-full"
                                    value={purchaseAmount}
                                    onChange={handlePurchaseAmountChange}
                                    placeholder="$50.00"
                                />
                            </div>

                            <div className="mb-4 w-3/4">
                                <label htmlFor="share-PopUp" className="font-semibold block mb-2">{symbol} Shares</label>
                                <input
                                    id="share-PopUp"
                                    type="text"
                                    className="border border-gray-300 p-3 rounded w-full"
                                    value={numShares}
                                    onChange={handleNumSharesChange}
                                    placeholder="Number of shares"
                                />
                            </div>
                        </div>

                        {insufFunds && (
                            <p className="text-red-600 font-bold text-center p-2">Insufficient Funds. Increase your balance to continue.</p>
                        )}

                        {input && (
                            <p className="text-red-600 font-bold text-center p-2">Please enter a valid amount before confirming the purchase.</p>
                        )}

                        <div className="text-center pb-2">
                            <button onClick={onClose} className="px-5 py-2 bg-red-600 text-white rounded m-2 w-1/4">
                                Cancel
                            </button>
                            <button onClick={handleOnBuy} className="px-5 py-2 bg-green-500 text-white rounded m-2 w-1/4">
                                Buy
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-center font-bold text-3xl mb-4">{symbol}</h1>
                        <h4 className="text-center text-lg mb-4">
                            <strong>Available Shares: </strong>
                        </h4>

                        <div className="flex justify-evenly items-center text-xl mb-5">
                            <div><strong>At price:</strong> {price} ({currency})</div>
                            <span className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? 'text-lime-500' : 'text-red-500'}`}>
                                {change} <span>({changePercent}%)</span>
                            </span>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-4 w-3/4">
                                <label htmlFor="Curr-PopUp" className="font-semibold block mb-2">Sell Amount ({currency})</label>
                                <input
                                    id="Curr-PopUp"
                                    type="text"
                                    className="border border-gray-300 p-3 rounded w-full"
                                    value={sellAmount}
                                    onChange={handleSellAmountChange}
                                    placeholder="$50.00"
                                />
                            </div>

                            <div className="mb-4 w-3/4">
                                <label htmlFor="share-PopUp" className="font-semibold block mb-2">{symbol} Shares</label>
                                <input
                                    id="share-PopUp"
                                    type="text"
                                    className="border border-gray-300 p-3 rounded w-full"
                                    value={numShares}
                                    onChange={handleNumSharesChange}
                                    placeholder="Number of shares"
                                />
                            </div>
                        </div>

                        {insufficientShares && (
                            <p className="text-red-600 font-bold text-center p-2">Insufficient Shares. You don't have enough shares to sell this amount.</p>
                        )}

                        {inputError && (
                            <p className="text-red-600 font-bold text-center p-2">Please enter a valid amount before confirming the sale.</p>
                        )}

                        <div className="text-center pb-2">
                            <button onClick={onClose} className="px-5 py-2 bg-red-600 text-white rounded m-2 w-1/4">
                                Cancel
                            </button>
                            <button onClick={handleOnSell} className="px-5 py-2 bg-green-500 text-white rounded m-2 w-1/4">
                                Sell
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TradePopup;
