import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';
import Graph_Comp from '../components/trading_page/Graph_Comp';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';
import Search from '../components/Search.jsx';
import Details from '../components/Details';
import Overview from '../components/Overview';
import StockChart from '../components/StockChart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyPopUp from '../components/CurrencyPopUp';
import TradePopUp from '../components/TradePopUp';
import TickerTape from '../components/Tickertape';

function TradingPage() {
  const [companyDetails, setCompanyDetails] = useState(null);
  const [ticker, setTicker] = useState('AAPL');
  useEffect(() => {
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
}, [ticker, companyDetails]);

    /*
    Make sure the users currency persists. 
    Update the users currency when the user purchases more currency. 
    Make a get request to retrive the current state of the users current currency
    */
    const [balance, setBalance] = useState(0.00);
    const [currPopUp, setCurrPopUp] = useState(false);
    const [tradePopUp, setTradePopUp] = useState(false);

    return (
        <div className='min-h-screen flex flex-col bg-background'>
            <LPNavBar/>
            <div className="flex justify-between items-center p-4 text-black mx-7">
                <div className="shadow-xl p-2 border border-gray-400 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800">Total Balance: ${balance}</h3>
                </div>

                    <button onClick={() => setCurrPopUp(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Currency</button>
                </div>

                <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand mb-6">
                    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 my-auto bg-background">
                        <h1 className='text-5xl ml-[100px] font-normal text-white '>{companyDetails ? companyDetails.longName : 'Loading...'}</h1>
                        <div className='my-4 ml-[100px] flex flex-row justify-between items-center'>
                            <Search setTicker={setTicker}/>

                            {/*Trading button*/}
                            <div>
                                <button onClick={() => setTradePopUp(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Trade</button>
                            </div>
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
                        price={companyDetails.currentPrice}
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
                        <TradePopUp onClose={() => setTradePopUp(false)} balance={balance} setBalance={setBalance} changePercent={companyDetails.changePercent} symbol={companyDetails.symbol} price={companyDetails.currentPrice} currency={companyDetails.currency} change={companyDetails.change}  />
                    )}

                    {currPopUp && (
                        <CurrencyPopUp onClose={() => setCurrPopUp(false)} balance={balance} setBalance={setBalance} />
                    )}
            </div>
            <Footer />
        </div>
    );
}

export default TradingPage;
