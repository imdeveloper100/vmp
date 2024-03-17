"use client";
import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import CarDetails from "../components/adsPosting/CarDetails";
import useDeviceDetect from "../myHooks/useDetectDevice";
const steps = [
  {
    title: "First",
    description: "It is description It is description It is description",
    content: <CarDetails />,
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
const page = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const { isMobile } = useDeviceDetect();
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: !isMobile&& item.title,
    description: !isMobile&& item.description,
  }));
  return (
    <div className="main-dev flex flex-col justify-between min-h-[calc(100vh-100px)]">
      <div className="steps-dev py-10">
        {
          <Steps
            progressDot={isMobile}
            responsive={false}
            current={current}
            items={items}
          />
        }
        <div>{steps[current].content}</div>
      </div>
      <div className="buttons">
        {current > 0 && (
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </button>
        )}
        {current < steps.length - 1 && (
          <button
            type="primary"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => next()}
          >
            Next
          </button>
        )}
        {current === steps.length - 1 && (
          <button
            type="primary"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};
export default page;
