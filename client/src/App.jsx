import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './App.css'
function App() {

  return (
    <>
      <div className="absolute top-5 right-2 text-sky-400 text-xl text-center " >
        <SignedOut>
          <SignInButton mode="modal"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <h1 className="text-3xl font-bold">Welcome to SimStock-Exchange!</h1>
      <p className="text-xl text-blue-700 font-bold">coming soon...</p>
    </>
  )
}

export default App
