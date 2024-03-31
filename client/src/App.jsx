import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
 
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h1 className="text-3xl font-bold">Welcome to SimStock-Exchange!</h1>
      <p className="text-xl text-blue-700 font-bold">coming soon...</p>
    </>
  )
}

export default App
