//import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import LPNavBar from './components/LSI_NavBar/LPNavBar';
// import LSI_Footer from './components/LSI_NavBar/LSI_Footer';
// import LSI_NavBar from './components/LSI_NavBar/LSI_NavBar';


function App() {

  return (
    <>
{/*
      <div className="absolute top-5 right-2 text-sky-400 text-xl text-center " >
        <SignedOut>
          <SignInButton mode="modal"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
*/}
      <LPNavBar />
      <h1 className="text-3xl font-bold">Welcome to SimStock-Exchange!</h1>
      <p className="text-xl text-blue-700 font-bold">coming soon...</p>
    </>
  )
}

export default App
