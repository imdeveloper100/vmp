import React from "react";
import CarDetails from "../components/adsPosting/CarDetails";
import { Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function page() {
  return (
    <form className="py-10 px-2">
      <div className=" space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-center font-semibold leading-7 text-gray-900">
            Ads Posting Details
          </h2>
          <p className="mt-1 text-sm text-center leading-6 text-gray-600">
            (All fields marked with * are mandatory).
          </p>
          {/* Make, Model, Version, Price */}
          <CarDetails />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-10">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Space>
            <LeftOutlined />
            Back
          </Space>
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Space>
            Next
            <RightOutlined />
          </Space>
        </button>
      </div>
    </form>
  );
}

export default page;
