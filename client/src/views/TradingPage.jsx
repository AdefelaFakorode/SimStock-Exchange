import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';


function TradingPage() {
    return (
        <>
            <LPNavBar />
            <h2 className="text-lg md:text-xl lg:text-2xl text-[#8a1e85] font-bold  p-2 text-center">Trading page</h2>
            <Trending_Comp />
        </>

    )
}

export default TradingPage;