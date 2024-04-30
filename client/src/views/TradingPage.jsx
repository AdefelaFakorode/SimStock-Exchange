import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';
import Graph_Comp from '../components/trading_page/Graph_Comp';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';

function TradingPage() {
    
    return (<div>
      <LPNavBar/>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 bg-neutral-400">
          <div>Name</div>
        </div>
        <div className="md:col-span-2 row-span-4 bg-neutral-400">
          <div>Chart</div>
        </div>
        <div className='bg-neutral-400'>
          <div>Overview</div>
        </div>
        <div className="row-span-2 xl:row-span-3 bg-neutral-400">
          <div>Details</div>
        </div>
      </div>
<Footer />
    </div>
    );
  }
  
  export default TradingPage;
