"use client";
import React from "react";
import {
  CalendarOutlined,
  RocketOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const product = {
  name: "Toyota Hybrid 1200cc",
  price: "2500",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Cars", href: "#" },
    { id: 2, name: "Toyota", href: "#" },
  ],
  images: [
    {
      src: "https://cdn.rotorint.com/Corolla/2022_09_Sep/e/360FullFrame/jpg/lo/3840x2160/SPN_CRS_010040EB204D36200C0_compcrop_000.jpg",
      alt: "Toyota Hybrid 2000cc pic",
    },
    {
      src: "https://www.bloodtoyota.com.au/images/service/Range_Corolla.png",
      alt: "Toyota Hybrid 2000cc pic",
    },
    {
      src: "https://storage.googleapis.com/adtorque-edge/api/toyota/corolla-hybrid/corolla-hybrid.png",
      alt: "Toyota Hybrid 2000cc pic",
    },
    {
      src: "https://cdn.rotorint.com/Corolla/2022_09_Sep/e/360FullFrame/jpg/lo/3840x2160/SPN_CRS_010040EB204D36200C0_compcrop_000.jpg",
      alt: "Toyota Hybrid 2000cc pic",
    },
  ],
  description:
    "HONDA CIVIC TRIBORN VTI PROSMATIC UG    ( LEATHER SEATS & NAVIGATION )    MODEL 2014 || REG. 2014(JUNE)     ORIGINAL, SCRATCH LESS, SPOTLESS, OUTCLASS IN JUST LIKE (NEW) REMARKABLE CONDITIONED *ORIGINAL URBAN TITANIUM COLOR*  ONLY (55000) KMS DONE ON *HI-OCTANE*      DVD PLAYER + NAVIGATION    MULTIMEDIA STEERING     AIR PRESS + REMOTE KEYS    ABS BRAKES + AIR BAGS    NEW (EURO STAR) RADIAL TYRES        DEMAND : ( 3,290,000 )",
  highlights: [
    "Engine: [Engine Type and Specs]",
    "Transmission: [Transmission Type and Specs]",
    "Fuel Efficiency: [Fuel Efficiency Specs]",
    "Dimensions: [Dimensions Specs]",
    "Weight: [Weight Specs]",
  ],
  features: [
    "ABS",
    "Air Bags",
    "Air Conditioning",
    "CD Player",
    "DVD Player",
    "Front Speakers",
    "Immobilizer Key",
    "Navigation System",
    "Power Locks",
    "Power Mirrors",
    "Power Steering",
    "Power Windows",
    "Steering Switches",
    "Navigation System",
  ],
  colors: ["Red", "Black", "Blue", "White", "Grey"],
};

export default function Example() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className=" mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="mx-2 border-gray-200 border aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="my-2 border-gray-200 border aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <div className="p-4 mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                {"¥ " + product.price}
              </p>

              <form className="mt-4">
                {/* Car Primary Info */}
                <div class="my-2 grid grid-flow-col justify-stretch">
                  <div className="border-gray-200 border rounded-lg mx-1 py-2 text-center bg-gray-100">
                    <CalendarOutlined className="text-2xl text-indigo-500" />{" "}
                    <p className="mt-2">2014</p>
                  </div>
                  <div className="border-gray-200 border rounded-lg mx-1 py-2 text-center bg-gray-100">
                    <RocketOutlined className="text-2xl text-indigo-500" />{" "}
                    <p className="mt-2">Petrol</p>
                  </div>
                  <div className="border-gray-200 border rounded-lg mx-1 py-2 text-center bg-gray-100">
                    <ClockCircleOutlined className="text-2xl text-indigo-500" />{" "}
                    <p className="mt-2">56,000 km</p>
                  </div>
                </div>
                {/* Car Secondary Info */}
                <div class="my-6 flex justify-normal ">
                  <div className="flex-initial w-64 border-gray-100 border rounded-lg mx-1 my-auto p-2 ">
                    <p className="text-sm text-gray-400">Make </p>{" "}
                    <p className="">Honda</p>
                  </div>
                  <div className="flex-initial w-64 border-gray-100 border rounded-lg mx-1 my-auto p-2 ">
                    <p className="text-sm text-gray-400">Model </p>{" "}
                    <p className="">Civic Prosmetic</p>
                  </div>
                </div>

                <div class="my-6 flex justify-normal ">
                  <div className="flex-initial w-64 border-gray-100 border rounded-lg mx-1 my-auto p-2 ">
                    <p className="text-sm text-gray-400">Registration city </p>{" "}
                    <p className="">Karachi</p>
                  </div>
                  <div className="flex-initial w-64 border-gray-100 border rounded-lg mx-1 my-auto p-2 ">
                    <p className="text-sm text-gray-400">Transmission </p>{" "}
                    <p className="">Automatic</p>
                  </div>
                </div>

                <div class="my-6 flex justify-normal ">
                  <div className="flex-initial w-64 border-gray-100 border rounded-lg mx-1 my-auto p-2 ">
                    <p className="text-sm text-gray-400">Assembly </p>{" "}
                    <p className="">Local</p>
                  </div>
                  <div className="flex-initial w-64 border-gray-100 border rounded-lg mx-1 my-auto p-2 ">
                    <p className="text-sm text-gray-400">Condition </p>{" "}
                    <p className="">Used (9/10)</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 green:ring-indigo-500 focus:ring-offset-2"
                >
                  Contact Seller
                </button>
              </form>
            </div>
            ​
          </div>
        </div>

        {/* Product info */}

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            {/* Features Section */}
            <div className="my-6 flex flex-wrap justify-start">
              <h2 className="text-xl my-2 font-medium text-gray-900">
                Features
              </h2>
              <div className="flex flex-wrap">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="max-w-full border-gray-200 border rounded-lg mx-1 my-1 p-2 text-center bg-gray-100 flex-shrink-0"
                  >
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
