import React from "react";
import { Button, Result } from "antd";
const page = () => (
  <>
    <Result
      status="success"
      title="Verification Successful"
      subTitle="Your profile has been verified successful, you can now login to your account"
      extra={[<Button key="buy">Login</Button>]}
    />
    <Result
      status="error"
      title="Verification Failed"
      subTitle="Link has been expired, Verification denied."
      extra={[<Button key="signUp">Sign up</Button>]}
    ></Result>
  </>
);
export default page;
