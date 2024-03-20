import React from "react";
const products = [
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
  {
    id: 1,
    name: "Toyota Hybrid 2024",
    location: "Islamabad",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/originals/5f/bd/a1/5fbda1e31b3a32b8319a89b5ca9dca7d.png",
    imageAlt: "Toyota Hybrid 2000cc",
    price: "35,000",
  },
];

function Card() {
  return (
    <div className="bg-white">
      <div className="mx-auto  px-4 py-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 cardsGrid">
          {products.map((product) => (
            <div
              key={product.id}
              className="my-2 group relative border border-stone-200 rounded-md p-3"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-50">
                <a href="">
                  {" "}
                  <img
                    src={product?.imageSrc}
                    alt={product?.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </a>
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <p className="my-1 text-sm text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-4 h-4 inline mx-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    {product?.location}
                  </p>
                  <h3 className=" text-sm font-semibold text-gray-900 ">
                    <a href={product?.href}>
                      <span aria-hidden="true" className="inset-0" />
                      {product?.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm mt-1 mr-2 font-semibold text-indigo-600">
                  {"¥" + product?.price}
                </p>
              </div>
              <div className="mt-6 w-full flex gap-2">
                {/* <button
            type="submit"
            className="flex w-[42px] h-[42px] items-center justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 inline mx-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
          </button> */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-green-600 py-2  font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Card;
