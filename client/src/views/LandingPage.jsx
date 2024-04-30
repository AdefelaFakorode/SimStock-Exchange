import SimStockLogo from "../assets/SimStockLogo.png";
import LPNavBar from '../components/LSI_NavBar/LPNavBar';
import Footer from '../components/LSI_NavBar/LSI_Footer.jsx';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <LPNavBar />
      <section className="flex justify-center items-center min-h-screen bg-background">
        <div className="container mx-auto flex flex-col items-center lg:flex-row-reverse lg:justify-between">
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img src={SimStockLogo} alt="SimStock Logo" className="w-[400px] xl:w-[600px] rounded-2xl" />
          </div>

          {/* Text and Button */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            {/* Title */}
            <h1 className="font-sans font-semibold text-white text-5xl xl:text-[72px] leading-none text-center lg:text-left"> 
              SIMSTOCK EXCHANGE
            </h1>
            {/* Text */}
            <p className="font-sans font-normal text-text mt-4 xl:mt-6 xl:text-[20px] text-center lg:text-left">
              All-in-one Platform that helps investors practice their trading skills.
            </p>
            {/* Button */}
            <Link to={'/trade'} className='font-sans font-medium text-black mt-6 xl:mt-8 xl:text-2xl bg-buttonColor py-3 px-16 xl:py-5 xl:px-40 rounded'>Start Trading →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;


