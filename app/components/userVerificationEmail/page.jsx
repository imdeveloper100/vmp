"use client"
import React from 'react';
import { Button, Result } from 'antd';
const page = () => (
  <Result
    title="Check your Email"
    subTitle="We have sent a link to your email, click on that link to verify your account."
    extra={[
      <Button key="resend">Resend</Button>,
    ]}
  >
  </Result>
);
export default page;