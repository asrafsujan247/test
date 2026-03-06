import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import Slider from "rc-slider";

const MIN = 10;
const MAX = 5800;

const Banner: React.FC = () => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);
  const [clickBtn, setClickBtn] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClickBtn((prevClickBtn) => !prevClickBtn);
  };

  const handleSliderChange = (newValues: [number, number]) => {
    setValues(newValues);
  };

  return (
    <section className="2xl:px-16 pt-10 2xl:pt-36">
      <div className="pt-20 md:pt-32 pb-56 bg-[url('/img/hero-bg.png')] bg-no-repeat bg-cover bg-center 2xl:rounded-[40px]">
        <div className="container">
          <h6 className="text-black mb-4">Find Your Dream Place</h6>
          <h1 className="text-black">
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
                      <p className="text-black text-sm font-semibold">
                        Advanced
                      </p>
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
                  {/* <div className="pt-4 border-t border-gray-3 border-dashed mt-5">
                    <h6 className="text-black text-base font-semibold mb-4">
                      Price range
                    </h6>
                    <Slider
                      onChange={setValues}
                      className={"range-slider"}
                      value={values}
                      min={MIN}
                      max={MAX}
                    />
                    <div className="flex items-center justify-between gap-6 mt-5">
                      <div className="px-4 py-3 w-full text-center border border-gray-3 rounded-md text-sm font-semibold">
                        ${values[0]}
                      </div>
                      <div className="px-4 py-3 w-full text-center border border-gray-3 rounded-md text-sm font-semibold">
                        ${values[1]}
                      </div>
                    </div>
                  </div> */}
                  <div className="mt-4">
                    <h4 className="text-black text-sm font-medium">
                      Price Range
                    </h4> {" "}
                    <Slider
                      min={MIN}
                      max={MAX}
                      range
                      value={values}
                      onChange={handleSliderChange}
                      step={1}
                      allowCross={false}
                      trackStyle={{ backgroundColor: "#ff7a45" }}
                      handleStyle={{
                        borderColor: "#ff7a45",
                        backgroundColor: "#ff7a45",
                      }}
                    />
                    <div className="flex justify-between mt-2 text-sm">
                      <span>${values[0]}</span>
                      <span>${values[1]}</span>
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
                          <input
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
                          </label>
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
                        <div>
                          <input
                            name="radio-2"
                            type="radio"
                            id="beds-radio-5"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="beds-radio-5"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            4
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-2"
                            type="radio"
                            id="beds-radio-6"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="beds-radio-6"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            5
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-2"
                            type="radio"
                            id="beds-radio-7"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="beds-radio-7"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            6
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p>Bathrooms</p>
                      <div className="flex items-center gap-4 flex-wrap mt-2">
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-1"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-1"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            Any
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-2"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-2"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            1
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-3"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-3"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            2
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-4"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-4"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            3
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-5"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-5"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            4
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-6"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-6"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            5
                          </label>
                        </div>
                        <div>
                          <input
                            name="radio-3"
                            type="radio"
                            id="bathrooms-radio-7"
                            className="radio-design-2"
                          />
                          <label
                            htmlFor="bathrooms-radio-7"
                            className="inline-block text-sm px-4 py-2 border border-gray-3 rounded-lg cursor-pointer"
                          >
                            6
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-3 border-dashed mt-5">
                    <h6 className="text-black text-base font-semibold">
                      Property type
                    </h6>
                    <div className="grid grid-cols-12 gap-4 mt-2">
                      <div className="col-span-12 sm:col-span-4">
                        <div>
                          <input
                            name="radio-propertay"
                            id="radio-propertay-1"
                            type="radio"
                            className="radio-design-1"
                          />
                          <label
                            htmlFor="radio-propertay-1"
                            className="inline-block w-full  px-4 py-6 border border-gray-3 rounded-lg relative cursor-pointer"
                          >
                            <span className="inline-block text-body-clr text-2xl mb-5">
                              <FiHome />
                            </span>
                            <h6 className="text-body-clr text-sm font-normal">
                              House
                            </h6>
                            <span className="absolute top-3 right-3">
                              <IoIosCheckmarkCircleOutline />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-span-12 sm:col-span-4">
                        <div>
                          <input
                            name="radio-propertay"
                            id="radio-propertay-2"
                            type="radio"
                            className="radio-design-1"
                          />
                          <label
                            htmlFor="radio-propertay-2"
                            className="inline-block w-full  px-4 py-6 border border-gray-3 rounded-lg relative cursor-pointer"
                          >
                            <span className="inline-block text-body-clr text-2xl mb-5">
                              <FaRegBuilding />
                            </span>
                            <h6 className="text-body-clr text-sm font-normal">
                              House
                            </h6>
                            <span className="absolute top-3 right-3">
                              <IoIosCheckmarkCircleOutline />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-span-12 sm:col-span-4">
                        <div>
                          <input
                            name="radio-propertay"
                            id="radio-propertay-3"
                            type="radio"
                            className="radio-design-1"
                          />
                          <label
                            htmlFor="radio-propertay-3"
                            className="inline-block w-full  px-4 py-6 border border-gray-3 rounded-lg relative cursor-pointer"
                          >
                            <span className="inline-block text-body-clr text-2xl mb-5">
                              <FaRegBuilding />
                            </span>
                            <h6 className="text-body-clr text-sm font-normal">
                              Hotel
                            </h6>
                            <span className="absolute top-3 right-3">
                              <IoIosCheckmarkCircleOutline />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-3 border-dashed mt-5">
                    <h6 className="text-black text-base font-semibold">
                      Booking options
                    </h6>
                    <div className="mt-2">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-black">Instant Book</p>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between gap-4 mt-2">
                        <p className="text-black">Free cancellation</p>
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-3 border-dashed mt-5">
                    <button
                      type="submit"
                      className="px-4 py-3 w-full border border-gray-3 rounded-md text-sm font-semibold hover:bg-brand hover:border-brand hover:text-white transition-all duration-200"
                    >
                      Search Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;