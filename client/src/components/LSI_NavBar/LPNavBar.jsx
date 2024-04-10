import {useClerk, SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';


function LPNavBar() {
  const {openSignUp, openSignIn} = useClerk(); //trigger clerk sign up n sign in

  return (
    <div className="w-full h-[80px] bg-background flex items-center justify-end">
      <div className="px-5 flex items-center space-x-6">
        <div className='bg-primary space-x-1 '>
        <Link to={'/news'}>News</Link>
        <Link to={'/'}>Home</Link>

        </div>
      <SignedOut>
        <button 
        onClick={() => openSignUp()}
        className="bg-primary hover:bg-[#7f60a3] text-text font-bold py-1 px-3 rounded">
          Sign Up
        </button>

        <button
          onClick={() => openSignIn()}
          className="bg-primary hover:bg-[#7f60a3] text-text font-bold py-1 px-3 rounded"
        >
          Sign In
        </button>
        </ SignedOut>

        <SignedIn>
          <UserButton />
        </ SignedIn>

      </div>
    </div>
  );
}

export default LPNavBar;
