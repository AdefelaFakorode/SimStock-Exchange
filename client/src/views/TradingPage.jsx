import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';
import Graph_Comp from '../components/trading_page/Graph_Comp';

function TradingPage() {
    return (
        <>
            <LPNavBar />
            <div className="flex">
                <div className="w-1/2">
                <Trending_Comp />
                </div>
                <div className="w-1/2">
                <Graph_Comp />
                </div>
            </div>
        </>

    )
}

export default TradingPage;