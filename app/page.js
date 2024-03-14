import Login from "./login/page";
import Registration from "./registration/page";
import UserVerified from "./userVerified/page";
import UserNotVerified from "./userNotVerified/page";
import UserVerificationEmail from "./userVerificationEmail/page";
export default function Home() {
  return (
    <>
      {/* <Login /> */}
      {/* <Registration /> */}
      <UserVerified />
      <UserNotVerified />
      <UserVerificationEmail />
    </>
  );
}
