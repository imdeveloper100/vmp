import React, { useRef, useState } from "react";
import Navbar from "./navbar";
import { Form, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Hero = () => {
  const [category, setcategory] = useState("vechiles");
  const [search, setsearch] = useState();
  const onSearch = (e) => {
    e.preventDefault();

    console.log({ category, search });
    // Do whatever you want with the form data
  };
  return (
    <div className="wrap-hero">
      <Navbar />
      <div className="hero-content h-full container mx-auto  text-center grid grid-cols-1  place-items-center ">
        <div>
          <div className="flex gap-4 justify-center mb-4 p-4">
            <p className="bg-blue-600 rounded-3xl px-4 py-2 w-fit text-white">
              <span class="wave">👋</span> Hi, There
            </p>
            <p className="bg-black rounded-3xl px-4 py-2 w-fit text-white">
              Welcome to VMP
            </p>
          </div>
          <h1 class="main-slogn svg text-center shadow">
            Perfect Place to buy and sell <br /> You Dream Car & reliable spare
            parts
          </h1>
          <div className="landing-cta flex gap-4 mt-4 justify-center ">
            <form
              onSubmit={onSearch}
              className="bg-white w-fit shadow text-lg sm:text-md items-center p-2  pl-0 h-[70px]  flex  rounded-[4rem]"
            >
              <Select
                onChange={(value) => setcategory(value)}
                defaultValue={category}
                size="large"
                variant="borderless"
                htmlName={"category"}
                name={"category"}
                className="select-search-category w-[180px] h-full"
                options={[
                  { value: "vechiles", label: "Search Vechiles" },
                  { value: "Spare parts", label: "Search Spare parts" },
                ]}
                placeholder="select category"
              ></Select>
              <input
                onChange={(e) => setsearch(e.target.value)}
                name={"search"}
                className="landingPage-search-input h-full border-none outline-none"
                placeholder="Search"
              />
              <button
                type="submit"
                name={"submit"}
                className="flex justify-center gap-2 items-center bg-blue-500 rounded-4xl h-full  text-white px-5 rounded-[4rem] hover:shadow-blue-800/50 hover:shadow-inner "
              >
                <SearchOutlined /> Search
              </button>
            </form>
            <button className="advanceSearch-cta flex justify-center items-center gap-2 bg-blue-500 text-lg rounded-4xl text-white px-5 rounded-[4rem] hover:shadow-lg hover:shadow-blue-500/50">
              <SearchOutlined /> Advance Search
            </button>
          </div>
        </div>
      </div>

      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur"
              color-interpolation-filters="sRGB"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
