import React from 'react'
import { Button, Space } from "antd";
import { LeftOutlined, } from "@ant-design/icons";

function BackToHomeButton() {
  return (
    <Button key="signUp" type="link" className="flex items-center absolute top-4 left-4">
      <LeftOutlined />
      Back to Home
  </Button>
  )
}

export default BackToHomeButton