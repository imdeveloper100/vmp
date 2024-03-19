import Login from "./login/page";
import Registration from "./registration/page";
import UserVerification from "./userVerification/page";
import UserVerificationEmail from "./components/userVerificationEmail/page";
import AdsPosting from "./adsPosting/page";
import CarDetails from "./components/adsPosting/CarDetails";
import AdsPostingLayout from "./adsPostingLayout/page"
import UserProfile from "./profile/page"
import LandingPage from "./landing/page"
import "../public/main.css";


export default function Home() {
  return (
    <>
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <UserVerification /> */}
      {/* <AdsPosting /> */}
      {/* <CarDetails /> */}
      {/* <AdsPostingLayout /> */}
      {/* <LandingPage /> */}
      <UserProfile />
      

    </>
  );
}
