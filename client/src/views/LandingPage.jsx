import SM_Logo from "../assets/SM_Logo.png";
import MD_Logo from "../assets/MD_Logo.png";

import LPNavBar from "../components/LSI_NavBar/LPNavBar";
import Footer from "../components/LSI_NavBar/LSI_Footer.jsx";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function LandingPage() {
  return (
    <>
      <LPNavBar />
      <section className="flex justify-center items-center h-dvh bg-background">
        <div className="container mx-auto flex flex-col items-center lg:flex-row-reverse lg:justify-between">
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-center">
            <img
              src={MD_Logo}
              alt="SimStock Logo"
              className=" xl:size-[500px] size-[350px] rounded-2xl hovering-spinning-logo "
            />
          </div>
          {/* Text and Button */}
          <div className="flex-1 flex flex-col items-center lg:items-center lg:mb-[120px]">
            {/* Title */}
            <h1 className="font-semibold text-white text-6xl xl:text-[62px] text-center lg:text-center">
              SIMSTOCK EXCHANGE
            </h1>
            {/* Text */}
            <p className="font-sans font-normal text-text mt-4 xl:text-[26px] text-[18px]  text-center lg:text-center">
              All-in-one Platform that helps investors <br /> practice their
              trading skills.
            </p>
            {/* Button */}
            <Link to={"/trade"}>
              <button className="font-sans font-medium text-black mt-4 xl:text-2xl py-3 px-16 xl:py-4 xl:px-20 rounded-[20px] shadow-md overflow-hidden transition duration-300 ease-out relative inline-flex items-center justify-center group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <SignedOut>
                  <span className="absolute flex items-center justify-center w-full h-full bg-buttonColor hover:bg-black  text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                    Open an account
                  </span>
                </SignedOut>
                <SignedIn>
                  <span className="absolute flex items-center justify-center w-full h-full bg-buttonColor hover:bg-black  text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                    Trade Now
                  </span>
                </SignedIn>
                <span className="relative invisible">Open an account</span>
              </button>
            </Link>
            {/*

            <Link to={'/trade'}>
  <button className="font-sans font-medium text-black mt-4 xl:text-2xl py-3 px-16 xl:py-4 xl:px-20 rounded-[20px] shadow-md overflow-hidden transition duration-300 ease-out relative inline-flex items-center justify-center group">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute flex items-center justify-center w-full h-full bg-buttonColor hover:bg-black  text-black transition-all duration-1000 transform group-hover:translate-x-full ease">Open an account</span>
    <span className="relative invisible">Open an account</span>
  </button>
</Link>

*/}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
