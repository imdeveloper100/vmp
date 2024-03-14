import React from "react";
import { Button, Result } from "antd";
const page = () => (
  <Result
    status="success"
    title="Successfully Authenticated"
    subTitle="Your profile has been authenticated, you can now login to your account"
    extra={[
        <Button key="buy">Login</Button>,
      ]}
  />
);
export default page;
