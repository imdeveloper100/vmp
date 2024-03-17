import React from "react";

function CarDetails() {
  const cars = [
    { make: "Toyota", model: "Corolla", version: "XLE", price: 25000 },
    { make: "Honda", model: "Civic", version: "Touring", price: 27000 },
    { make: "Ford", model: "Fusion", version: "SE", price: 23000 },
    { make: "Chevrolet", model: "Malibu", version: "LT", price: 24000 },
    { make: "Nissan", model: "Altima", version: "SV", price: 26000 },
    // Add more cars as needed
  ];
  return (
      <div className=" space-y-12 px-2">

          {/* Make, Model, Version, Price */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 xl:mx-40 lg:mx-30 md:mx-20">
            {/* Dropdown Menu */}
            <div className="sm:col-span-3">
              <label
                htmlFor="make"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Make
              </label>
              <div className="mt-2">
                <select
                  id="make"
                  name="make"
                  autoComplete="make"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {cars.map((car, index) => (
                    <option key={index}>{car.make}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="model"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Model
              </label>
              <div className="mt-2">
                <select
                  id="model"
                  name="model"
                  autoComplete="model"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {cars.map((car, index) => (
                    <option key={index}>{car.model}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="version"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Version
              </label>
              <div className="mt-2">
                <select
                  id="version"
                  name="version"
                  autoComplete="version"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {cars.map((car, index) => (
                    <option key={index}>{car.version}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <select
                  id="price"
                  name="price"
                  autoComplete="price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {cars.map((car, index) => (
                    <option key={index}>{"$ "+car.price}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

      </div>
  );
}

export default CarDetails;
