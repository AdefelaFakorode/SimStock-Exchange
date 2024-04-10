import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import LPNavBar from './components/LSI_NavBar/LPNavBar';
import LandingPage from './views/LandingPage';
import NewsFeed from "./views/NewsFeed";
// import LSI_Footer from './components/LSI_NavBar/LSI_Footer';
// import LSI_NavBar from './components/LSI_NavBar/LSI_NavBar';


function App() {

  return (
    <>

      <LPNavBar />
      {/* <NewsFeed /> */}
      <LandingPage />
    </>
  )
}

export default App;
