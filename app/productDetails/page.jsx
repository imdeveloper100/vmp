"use client";
import { useState } from "react";

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
    "Discover the epitome of automotive excellence with our [Product Name]. Crafted with precision engineering and luxurious design, this car redefines the driving experience. Whether you are cruising through the city streets or embarking on a cross-country adventure, the [Product Name] delivers unparalleled performance and style.",
  highlights: [
    "Engine: [Engine Type and Specs]",
    "Transmission: [Transmission Type and Specs]",
    "Fuel Efficiency: [Fuel Efficiency Specs]",
    "Dimensions: [Dimensions Specs]",
    "Weight: [Weight Specs]",
  ],
  details:
    "The Corolla Hybrid blends Toyota's renowned reliability with exceptional fuel efficiency, offering a seamless driving experience that's as eco-conscious as it is enjoyable. With its sleek design and advanced hybrid technology, the Corolla Hybrid is the perfect choice for those seeking a greener, more efficient drive without compromising on style or performance.",
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
        <div className=" mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="border-gray-200 border aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="border-gray-200 border aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="border-gray-200 border aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="border-gray-200 border aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {"¥ " + product.price}
            </p>

            <form className="mt-10">
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Colors:</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.colors.map((color) => (
                      <li key={color} className="text-gray-400">
                        <span className="text-gray-600">{color}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Contact Seller
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Specifications:
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
