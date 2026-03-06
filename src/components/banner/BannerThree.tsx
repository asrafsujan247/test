import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const MIN = 10;
const MAX = 5800;

const BannerThree: React.FC = () => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);
  const [clickBtn, setClickBtn] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClickBtn((clickBtn) => !clickBtn);
  };

  return (
    <section className="banner-three py-28 sm:py-36 lg:py-48 xl:py-64">
      <div className="container">
        <h6 className="text-white mb-4">Find Your Dream Place</h6>
        <h1 className="text-white">
          For Better <span className="text-brand-clr">Experience</span>
        </h1>
        <div className="grid grid-cols-12 mt-7">
          <div className="col-span-12 xl:col-span-9">
            <div className="relative">
              <ul className="searchbar-nav w-full sm:w-auto -mb-2 sm:mb-0">
                <li>
                  <a className="active" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a href="#">For Sale</a>
                </li>
                <li>
                  <a href="#">For Rent</a>
                </li>
              </ul>
              <form action="" className="city-search-form">
                <div className="input-area col-span-12 md:col-span-8 lg:col-span-9">
                  <div className="grid grid-cols-12 gap-4">
                    <input
                      type="search"
                      className="col-span-12 md:col-span-8 p-3 rounded-md"
                      placeholder="Enter your search location"
                    />
                    <input
                      type="search"
                      className="col-span-12 md:col-span-4 p-3 rounded-md"
                      placeholder="Apartment Type"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3 flex items-center md:justify-between justify-center gap-4 md:gap-0">
                  <button
                    onClick={handleClick}
                    className="flex items-center gap-4"
                  >
                    <span className="text-body-clr text-lg">
                      <BsSliders />
                    </span>
                    <p className="text-black text-sm font-semibold">Advanced</p>
                  </button>
                  <button className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl bg-black shrink-0">
                    <IoSearch />
                  </button>
                </div>
              </form>
              <form
                className={`absolute bg-white w-full md:w-8/12 lg:w-7/12 2xl:w-6/12 p-7 right-0 top-full shadow-city-shadow rounded-lg z-20 mt-1 ${
                  clickBtn ? "show" : "hidden"
                }`}
              >
                <h6 className="text-black text-base font-semibold">
                  Type of place
                </h6>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center">
                    <input
                      id="popular"
                      type="checkbox"
                      className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded"
                    />
                    <label
                      htmlFor="popular"
                      className="ms-2 text-sm font-medium cursor-pointer"
                    >
                      Popular
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="hot"
                      type="checkbox"
                      className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded"
                    />
                    <label
                      htmlFor="hot"
                      className="ms-2 text-sm font-medium cursor-pointer"
                    >
                      Hot
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="trending"
                      type="checkbox"
                      className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded"
                    />
                    <label
                      htmlFor="trending"
                      className="ms-2 text-sm font-medium cursor-pointer"
                    >
                      Trending
                    </label>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-3 border-dashed mt-5">
                  <h6 className="text-black text-base font-semibold mb-4">
                    Price range
                  </h6>
                  <Slider
                    min={MIN}
                    max={MAX}
                    range
                    value={values}
                    onChange={setValues}
                  />
                  <div className="flex items-center justify-between gap-6 mt-5">
                    <div className="px-4 py-3 w-full text-center border border-gray-3 rounded-md text-sm font-semibold">
                      ${values[0]}
                    </div>
                    <div className="px-4 py-3 w-full text-center border border-gray-3 rounded-md text-sm font-semibold">
                      ${values[1]}
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-3 border-dashed mt-5">
                  <h6 className="text-black text-base font-semibold">
                    Rooms and beds
                  </h6>
                  <div className="mt-2">
                    <p>Bedrooms</p>
                    <div className="flex items-center gap-4 flex-wrap mt-2">
                      <div>
                        <input
                          name="radio"
                          type="radio"
                          id="radio-1"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-1"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          Any
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio"
                          type="radio"
                          id="radio-2"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-2"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          1
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio"
                          type="radio"
                          id="radio-3"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-3"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          2
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio"
                          type="radio"
                          id="radio-4"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-4"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          3
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio"
                          type="radio"
                          id="radio-5"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-5"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          4
                        </label>
                      </div>
                      <div>
                        {/* <input
                          name="radio"
                          type="radio"
                          id="radio-6"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-6"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          5
                        </input> */}
                      </div>
                      <div>
                        <input
                          name="radio"
                          type="radio"
                          id="radio-7"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="radio-7"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          6
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p>Beds</p>
                    <div className="flex items-center gap-4 flex-wrap mt-2">
                      <div>
                        <input
                          name="radio-2"
                          type="radio"
                          id="beds-radio-1"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="beds-radio-1"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          Any
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio-2"
                          type="radio"
                          id="beds-radio-2"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="beds-radio-2"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          1
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio-2"
                          type="radio"
                          id="beds-radio-3"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="beds-radio-3"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          2
                        </label>
                      </div>
                      <div>
                        <input
                          name="radio-2"
                          type="radio"
                          id="beds-radio-4"
                          className="radio-design-2"
                        />
                        <label
                          htmlFor="beds-radio-4"
                          className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                        >
                          3
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-3 mt-8 xl:mt-0">
            {/* <div className="bg-white p-6 rounded-md shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl text-brand-clr">
                  <FiHome />
                </span>
                <h6 className="text-lg font-semibold">Find Property</h6>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <input
                    type="radio"
                    id="buy"
                    name="property"
                    className="radio-design-2"
                  />
                  <label
                    htmlFor="buy"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Buy
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="rent"
                    name="property"
                    className="radio-design-2"
                  />
                  <label
                    htmlFor="rent"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Rent
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;