import {useClerk, SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function LPNavBar() {
  const { openSignUp, openSignIn } = useClerk(); //trigger clerk sign up n sign in

  return (
    <div className="w-full h-[80px] bg-white flex justify-between items-center rounded px-5 shadow-md border border-b-black border-b-2">
      <div className="flex items-center">
        <img src="./src/assets/SimStock-Logo.png" alt="SimStock Logo" className="h-10 w-auto" />
        <div className="font-bold ml-3 text-3xl">
          <p>SimStock Exchange</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex space-x-8 mr-4"> 
          <Link to={'/'} className='rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>Home</Link>
          <SignedIn>
          <Link to={'/trade'} className='rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>Trading</Link>
          <Link to={'/pastTrade'} className='rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>Past Trades</Link>
          <Link to={'/news'} className='rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'>News</Link>
          </SignedIn>
        </div>
        <SignedOut>
          <button 
            onClick={() => openSignUp()}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
            Sign Up
          </button>
          <button
            onClick={() => openSignIn()}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 ml-2">
            Sign In
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1" />
        </SignedIn>
      </div>
    </div>
  );
}

export default LPNavBar;
