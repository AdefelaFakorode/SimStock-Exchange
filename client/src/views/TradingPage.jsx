import React, { useState, useEffect } from 'react';
import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';
import CurrencyPopUp from '../components/CurrencyPopUp';
import TradePopUp from '../components/TradePopUp';
import TickerTape from '../components/Tickertape';
import StockChart from '../components/StockChart';
import Search from '../components/Search.jsx';
import Overview from '../components/Overview';
import Details from '../components/Details';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import PastTradesPopup from '../components/PastTradesPopup'; // Import the PastTradesPopup component

function TradingPage() {
    const [companyDetails, setCompanyDetails] = useState(null);
    const [ticker, setTicker] = useState('AAPL');
    const [balance, setBalance] = useState(1000.00);
    const [currPopUp, setCurrPopUp] = useState(false);
    const [tradePopUp, setTradePopUp] = useState(false);
    const [showPastTrades, setShowPastTrades] = useState(false); // State to control past trades popup visibility
    const [userStocks, setUserStocks] = useState([]); // State to manage user's stocks
    const { user, isSignedIn } = useUser();

    useEffect(() => {
        if (user && isSignedIn) {
            // Fetch user's balance
            axios.get(`http://127.0.0.1:5000/get_balance/${user.id}`)
                .then(response => {
                    setBalance(response.data.balance);
                })
                .catch(error => {
                    console.error('Failed to fetch balance:', error);
                });
        }
    }, [user, isSignedIn]);

    useEffect(() => {
        // Fetch company details for the selected ticker
        const fetchCompanyDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/company/${ticker}`);
                const data = response.data;
                if (data.currentPrice && data.previousClose) {
                    data.change = (data.currentPrice - data.previousClose).toFixed(2);
                    data.changePercent = ((data.change / data.previousClose) * 100).toFixed(2);
                }
                setCompanyDetails(data);
            } catch (error) {
                console.error('Failed to fetch company details:', error);
            }
        };

        fetchCompanyDetails();
    }, [ticker]);

    // const handleBuyStock = (stock) => {
    //     // Add the bought stock to the user's stocks
    //     setUserStocks(userStocks => [...userStocks, stock]);
    // };

    // This function updates the stock list when a new stock is purchased.
    function handleBuyStock(stock) {
        setUserStocks(prevStocks => [...prevStocks, stock]);
    }


    return (
        <div className='min-h-screen flex flex-col bg-background'>
            <LPNavBar />
            <TickerTape />
            <div className="flex justify-between items-center p-4 text-black">
                <h3 className="text-lg font-semibold text-white">Total Balance: ${balance}</h3>
                <div className='flex justify-end items-end'>
                    <button onClick={() => setCurrPopUp(true)} className="rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform mx-2">Deposit</button>
                    <button onClick={() => setTradePopUp(true)} className="rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform mx-2">Buy/Sell</button>
                    <button onClick={() => setShowPastTrades(true)} className="rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform">Past Trades</button>
                </div>
            </div>

            <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand xl:mb-28">
                <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 my-auto bg-background">
                    <h1 className='text-5xl ml-[100px] font-normal text-white '>{companyDetails ? companyDetails.longName : 'Loading...'}</h1>
                    <div className='my-4 ml-[100px] flex flex-row justify-between items-center'>
                        <Search setTicker={setTicker} />
                    </div>
                </div>
                {/*Stock Chart*/}
                <div className="md:col-span-2 row-span-4">
                    <div>
                        <StockChart ticker={ticker} />
                    </div>
                </div>
                {companyDetails ? (
                    <div>
                        <Overview
                            symbol={companyDetails.symbol}
                            price={companyDetails.currentPrice.toFixed(2)}
                            change={companyDetails.change}
                            changePercent={companyDetails.changePercent}
                            currency={companyDetails.currency}
                        />
                    </div>
                ) : (
                    <div className='text-white'>Loading Overview...</div>
                )}
                <div className="row-span-2 xl:row-span-3 text-white">
                    {companyDetails ? (
                        <Details details={companyDetails} />
                    ) : (
                        <p>Loading details...</p>
                    )}
                </div>

                {tradePopUp && (
                    <TradePopUp
                    onClose={() => setTradePopUp(false)}
                    balance={balance}
                    setBalance={setBalance}
                    handleBuyStock={handleBuyStock} // Ensure this matches the prop used in TradePopup
                    changePercent={companyDetails.changePercent}
                    symbol={companyDetails.symbol}
                    price={companyDetails.currentPrice}
                    currency={companyDetails.currency}
                    change={companyDetails.change}
                    />
                )}

                {currPopUp && (
                    <CurrencyPopUp
                        onClose={() => setCurrPopUp(false)}
                        balance={balance}
                        setBalance={setBalance}
                    />
                )}
            </div>
            {/* Render PastTradesPopup if showPastTrades is true */}
            {showPastTrades && (
                <PastTradesPopup
                    userStocks={userStocks}
                    onClose={() => setShowPastTrades(false)}
                />
            )}
            <Footer />
        </div>
    );
}

export default TradingPage;
