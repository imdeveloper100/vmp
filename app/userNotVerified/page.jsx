"use client"
import React from 'react';
import { Button, Result, Typography } from 'antd';
const page = () => (
  <Result
    status="error"
    title="Authentication Failed"
    subTitle="Link has been expired, authentication denied."
    extra={[
      <Button key="tryAgain">Try Again</Button>,
    ]}
  >
  </Result>
);
export default page;