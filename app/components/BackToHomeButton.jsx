import React from 'react'
import { Button, Space } from "antd";
import { LeftOutlined, } from "@ant-design/icons";

function BackToHomeButton() {
  return (
    <Button key="signUp" type="link" className="absolute top-4 left-4">
    <Space>
      <LeftOutlined />
      Back to Home
    </Space>
  </Button>
  )
}

export default BackToHomeButton