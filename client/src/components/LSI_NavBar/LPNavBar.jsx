import { useClerk, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import Border from '../Border';

function LPNavBar() {
  const { openSignUp, openSignIn } = useClerk();

  return (
    <div className="w-full h-[100px] bg-background flex flex-col justify-center items-center px-5 lg:pt-10">
      <div className="flex justify-between items-center w-full px-5">
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <div className="flex space-x-3">
          <SignedIn>
            <Link to={'/'} className='rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>Home</Link>
            <Link to={'/trade'} className='rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>Trading</Link>
            <Link to={'/pastTrade'} className='rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>Past Trades</Link>
            <Link to={'/news'} className='rounded bg-buttonColor hover:bg-hoverButtonColor text-black font-medium py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>News</Link>
          </SignedIn>
          <SignedOut>
            <button onClick={() => openSignIn()} className="text-[#F7F7F7] hover:text-[#BDBDBD] font-bold rounded transition duration-300 ease-in-out">
              Sign In
            </button>
            <button onClick={() => openSignUp()}>
              <a href="#_" className="relative inline-flex items-center justify-center p-4 font-bold lg:px-8 lg:py-2 overflow-hidden text-indigo-600 transition duration-300 ease-out] rounded shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full bg-[#E0DACD] hover:bg-black text-black transition-all duration-300 transform group-hover:translate-x-full ease">Sign Up</span>
                <span className="relative invisible">Sign Up</span>
              </a>
            </button>
          </SignedOut>
        </div>
      </div>
      <div className='mt-5'>
        <Border />
      </div>
    </div>
  );
}

export default LPNavBar;
