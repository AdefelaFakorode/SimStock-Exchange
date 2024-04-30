import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Trending_Comp from '../components/trading_page/Trending_Comp';
import Graph_Comp from '../components/trading_page/Graph_Comp';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';

function TradingPage() {
    return (
        <>
            <LPNavBar />
            <div className='flex justify-end pr-[130px]'>
                <b>Owned Currency:</b>$100.00
            </div>
            <div className='flex justify-end'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-[190px]">Buy Currency</button>
            </div>

            <div className="flex">

                <div className="w-1/2">
                <Trending_Comp />
                </div>

                <div className="w-1/2">
                <Graph_Comp />
                <div className='flex justify-center space-x-[200px] mt-10'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Stock</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sell Stock</button>
            </div>
                </div>

                
            </div>
            <Footer />
        </>

    )
}

export default TradingPage;