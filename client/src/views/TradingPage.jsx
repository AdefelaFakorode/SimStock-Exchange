import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';
import Graph_Comp from '../components/trading_page/Graph_Comp';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';
import Search from '../components/Search.jsx';
import Details from '../components/Details';
import Overview from '../components/Overview';

function TradingPage() {
    //mock company details replace with real api calls
    const mockCompanyDetails={
      name: "Apple",
      country: "US",
      currency: "USD",
      exchange: "NASDAQ/NMS (GLOBAL MARKET)",
      ipo: "1980-12-12",
      marketCapitalization: "1415993",
      ticker: "AAPL",
      finnhubIndustry: "Technology",
    }
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
        <div className='bg-neutral-400'>
          <Overview 
            symbol={mockCompanyDetails.ticker} 
            price={300}
            change={30}
            changePercent={10.0}
            currency={"USD"}
            />
        </div>
        <div className="row-span-2 xl:row-span-3 bg-neutral-400">
          <Details details={mockCompanyDetails} />
        </div>
      </div>
<Footer />
    </div>
    );
  }
  
  export default TradingPage;
