import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';
import Graph_Comp from '../components/trading_page/Graph_Comp';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';
import Search from '../components/Search.jsx';
import Details from '../components/Details';
import Overview from '../components/Overview';
import { useState, useEffect } from 'react';
import axios from 'axios';



function TradingPage() {
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/company/AAPL');
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
}, []);


    return (<div>
      <LPNavBar/>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 bg-neutral-400">
          <h1 className='text-5xl'>Stock Name</h1>
          <div>
            <Search />
          </div>
        </div>
        <div className="md:col-span-2 row-span-4 bg-neutral-400">
          <div>Chart</div>
        </div>
        {companyDetails ? (
          <div className='bg-neutral-400'>
            <Overview 
              symbol={companyDetails.symbol} 
              price={companyDetails.currentPrice}
              change={companyDetails.change}
              changePercent={companyDetails.changePercent}
              currency={companyDetails.currency}
            />
          </div>
        ) : (
          <div>Loading Overview...</div>
        )}
        <div className="row-span-2 xl:row-span-3 bg-neutral-400">
            {companyDetails ? (
            <Details details={companyDetails} />
          ) : (
            <p>Loading details...</p>
          )}
      </div>
      </div>
<Footer />
    </div>
    );
  }
  
  export default TradingPage;
