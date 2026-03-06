import React from 'react';
import { PiBuildings } from "react-icons/pi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
import { RxCheckCircled } from "react-icons/rx";
import { PiCarLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiCalculatorDuotone } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaVimeoV } from "react-icons/fa";
import Map from '../map/Map';

const AddPost: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <form>
                <div className="bg-white px-7 py-10 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Basic Information</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-12 xl:col-span-6">
                            <h6 className="text-black text-base font-normal mb-2">Property title</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBuildings /></span>
                                <input type="text" placeholder='Enter property title' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <h6 className="text-black text-base font-normal mb-2">Choose a property type</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBuildings /></span>
                                <select name="type" id="type" className="!bg-body-clr-2 w-full py-4 px-9 rounded-lg">
                                    <option value="sale">Sale</option>
                                    <option value="sale">Sale</option>
                                    <option value="sale">Sale</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <h6 className="text-black text-base font-normal mb-2">Category</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBuildings /></span>
                                <select name="category" id="category" className="!bg-body-clr-2 w-full py-4 px-9 rounded-lg">
                                    <option value="sale">All category</option>
                                    <option value="sale">All category</option>
                                    <option value="sale">All category</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Listing price</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2"><HiOutlineCurrencyDollar /></span>
                                <input type="text" placeholder='Entire place' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-8">
                            <h6 className="text-black text-base font-normal mb-2">Keywords</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2"><HiOutlineCurrencyDollar /></span>
                                <input type="text" placeholder='Maximum 15' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Header Media</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-3 border-dashed rounded-lg cursor-pointer bg-white">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-7 flex-wrap mt-4">
                        <div className="flex items-center">
                            <input id="carousel" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="carousel" className="ms-2 text-sm font-medium text-black cursor-pointer">Carousel</label>
                        </div>
                        <div className="flex items-center">
                            <input id="sliderimage" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="sliderimage" className="ms-2 text-sm font-medium text-black cursor-pointer">Slider Image</label>
                        </div>
                        <div className="flex items-center">
                            <input id="backgroundimage" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="backgroundimage" className="ms-2 text-sm font-medium text-black cursor-pointer">Background image</label>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Location Information</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-12 xl:col-span-6">
                            <h6 className="text-black text-base font-normal mb-2">Address</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <IoLocationOutline />
                                </span>
                                <input type="text" placeholder='Enter your address' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <h6 className="text-black text-base font-normal mb-2">Address</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter postal code' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <h6 className="text-black text-base font-normal mb-2">Category</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <select name="category" id="category" className="!bg-body-clr-2 w-full py-4 px-9 rounded-lg">
                                    <option value="sale">All category</option>
                                    <option value="sale">All category</option>
                                    <option value="sale">All category</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <Map className="h-[348px] rounded-lg" />
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                            <h6 className="text-black text-base font-normal mb-2">City</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <select name="city" id="city" className="!bg-body-clr-2 w-full py-4 px-9 rounded-lg">
                                    <option value="sale">All cities</option>
                                    <option value="sale">All cities</option>
                                    <option value="sale">All cities</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <h6 className="text-black text-base font-normal mb-2">Email address</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <CiMail />
                                </span>
                                <input type="email" placeholder='Enter your address' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-3">
                            <h6 className="text-black text-base font-normal mb-2">Phone</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <IoCallOutline />
                                </span>
                                <input type="text" placeholder='+880 0123654789' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Listing Details</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Area</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Property area' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Bedrooms</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter bedrooms' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Bathroom</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter bathroom' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Yard size</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Property area' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Garage</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter garage' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Year Built</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter built date' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <h6 className="text-black text-base font-normal mb-2">Details text</h6>
                            <textarea placeholder='Details text' className="!bg-body-clr-2 !border !border-body-clr !border-opacity-20 w-full h-[199px] py-4 px-6 rounded-lg"></textarea>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Amenities</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4">
                        <div className="flex items-center">
                            <input id="wifi" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="wifi" className="ms-2 text-sm font-medium text-black cursor-pointer">Wifi</label>
                        </div>
                        <div className="flex items-center">
                            <input id="internet" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="internet" className="ms-2 text-sm font-medium text-black cursor-pointer">Internet</label>
                        </div>
                        <div className="flex items-center">
                            <input id="television" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="television" className="ms-2 text-sm font-medium text-black cursor-pointer">Television</label>
                        </div>
                        <div className="flex items-center">
                            <input id="ac" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="ac" className="ms-2 text-sm font-medium text-black cursor-pointer">Ac</label>
                        </div>
                        <div className="flex items-center">
                            <input id="fan" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="fan" className="ms-2 text-sm font-medium text-black cursor-pointer">Fan</label>
                        </div>
                        <div className="flex items-center">
                            <input id="parking" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="parking" className="ms-2 text-sm font-medium text-black cursor-pointer">Parking</label>
                        </div>
                        <div className="flex items-center">
                            <input id="detergent" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="detergent" className="ms-2 text-sm font-medium text-black cursor-pointer">Detergent</label>
                        </div>
                        <div className="flex items-center">
                            <input id="desk" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="desk" className="ms-2 text-sm font-medium text-black cursor-pointer">Desk</label>
                        </div>
                        <div className="flex items-center">
                            <input id="wardrobe" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="wardrobe" className="ms-2 text-sm font-medium text-black cursor-pointer">Wardrobe</label>
                        </div>
                        <div className="flex items-center">
                            <input id="hotpot" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="hotpot" className="ms-2 text-sm font-medium text-black cursor-pointer">Hot pot</label>
                        </div>
                        <div className="flex items-center">
                            <input id="clothhook" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="clothhook" className="ms-2 text-sm font-medium text-black cursor-pointer">Cloth hook</label>
                        </div>
                        <div className="flex items-center">
                            <input id="extracushion" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="extracushion" className="ms-2 text-sm font-medium text-black cursor-pointer">Extra cushion</label>
                        </div>
                        <div className="flex items-center">
                            <input id="poll" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="poll" className="ms-2 text-sm font-medium text-black cursor-pointer">Poll</label>
                        </div>
                        <div className="flex items-center">
                            <input id="toiletpaper" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="toiletpaper" className="ms-2 text-sm font-medium text-black cursor-pointer">Toilet paper</label>
                        </div>
                        <div className="flex items-center">
                            <input id="gasstove" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="gasstove" className="ms-2 text-sm font-medium text-black cursor-pointer">Gas stove</label>
                        </div>
                        <div className="flex items-center">
                            <input id="grill" type="checkbox" value="" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                            <label htmlFor="grill" className="ms-2 text-sm font-medium text-black cursor-pointer">BBQ grill</label>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">PG Rooms</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Room Title</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Standard fimily room' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Additional Room</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter bedrooms' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Bathroom</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBathtubLight />
                                </span>
                                <input type="text" placeholder='Enter bathroom' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Yard size</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Property area' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Garage</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter garage' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Gender</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <RiUserLine />
                                </span>
                                <input type="text" placeholder='Female or male' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <h6 className="text-black text-base font-normal mb-2">Details text</h6>
                            <div className="relative">
                                <textarea type="text" placeholder='Details text' className="!bg-body-clr-2 !border !border-body-clr !border-opacity-20 w-full h-[142px] py-4 px-6 rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h6 className="text-black text-base font-normal mb-2">Amenities</h6>
                        <div className="flex items-center gap-4 sm:gap-7 flex-wrap">
                            <div className="flex items-center">
                                <input id='wifi2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="wifi2" className="ms-2 text-sm font-medium text-black cursor-pointer">Wifi</label>
                            </div>
                            <div className="flex items-center">
                                <input id='foods' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="foods" className="ms-2 text-sm font-medium text-black cursor-pointer">Foods</label>
                            </div>
                            <div className="flex items-center">
                                <input id='television2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="television2" className="ms-2 text-sm font-medium text-black cursor-pointer">Television </label>
                            </div>
                            <div className="flex items-center">
                                <input id='ac2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="ac2" className="ms-2 text-sm font-medium text-black cursor-pointer">Ac </label>
                            </div>
                            <div className="flex items-center">
                                <input id='fan2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="fan2" className="ms-2 text-sm font-medium text-black cursor-pointer">Fan </label>
                            </div>
                            <div className="flex items-center">
                                <input id='parking2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="parking2" className="ms-2 text-sm font-medium text-black cursor-pointer">Parking </label>
                            </div>
                            <div className="flex items-center">
                                <input id='detergent2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="detergent2" className="ms-2 text-sm font-medium text-black cursor-pointer">Detergent </label>
                            </div>
                            <div className="flex items-center">
                                <input id='desk2' type="checkbox" className="checkbox w-4 h-4 !bg-white !border !border-gray-3 rounded" />
                                <label htmlFor="desk2" className="ms-2 text-sm font-medium text-black cursor-pointer">Desk </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Video URL</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <h6 className="text-black text-base font-normal mb-2">Room Title</h6>
                    <input type="text" placeholder='Only YouTube & Vimeo URL link' className="bg-body-clr-4 w-full py-4 px-6 rounded-lg" />
                    <p className="text-xs mt-2">E.g. https://www.youtube.com/watch?v=RiXdDGk_XCU, https://vimeo.com/620922414</p>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Nearby Places</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div>
                                <input type="radio" name='radio-1' id='radio-1' className="radio-design-1" />
                                <label htmlFor="radio-1" className='inline-block w-full min-h-[125px] px-4 py-6 border border-gray-3 rounded-lg text-center relative cursor-pointer'>
                                    <div className="flex justify-center">
                                        <div className="h-7 mb-2">
                                            <img src="img/radio-icon-1.png" alt="icon" className="h-full" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm line-clamp-2">Transportation
                                    Hub</p>
                                    <span className="absolute top-3 right-3">
                                        <RxCheckCircled />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div>
                                <input name='radio-1' type="radio" id='radio-2' className="radio-design-1" />
                                <label htmlFor="radio-2" className='inline-block w-full min-h-[125px] px-4 py-6 border border-gray-3 rounded-lg text-center relative cursor-pointer'>
                                    <div className="flex justify-center">
                                        <div className="h-7 mb-2">
                                            <img src="img/radio-icon-2.png" alt="icon" className="h-full" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm line-clamp-2">Education
                                    Institutes</p>
                                    <span className="absolute top-3 right-3">
                                        <RxCheckCircled />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div>
                                <input name='radio-1' type="radio" id='radio-3' className="radio-design-1" />
                                <label htmlFor="radio-3" className='inline-block w-full min-h-[125px] px-4 py-6 border border-gray-3 rounded-lg text-center relative cursor-pointer'>
                                    <div className="flex justify-center">
                                        <div className="h-7 mb-2">
                                            <img src="img/radio-icon-3.png" alt="icon" className="h-full" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm line-clamp-2">Shopping
                                    Centers</p>
                                    <span className="absolute top-3 right-3">
                                        <RxCheckCircled />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div>
                                <input name='radio-1' type="radio" id='radio-4' className="radio-design-1" />
                                <label htmlFor="radio-4" className='inline-block w-full min-h-[125px] px-4 py-6 border border-gray-3 rounded-lg text-center relative cursor-pointer'>
                                    <div className="flex justify-center">
                                        <div className="h-7 mb-2">
                                            <img src="img/radio-icon-4.png" alt="icon" className="h-full" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm line-clamp-2">Commercial
                                    Hub</p>
                                    <span className="absolute top-3 right-3">
                                        <RxCheckCircled />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div>
                                <input name='radio-1' type="radio" id='radio-5' className="radio-design-1" />
                                <label htmlFor="radio-5" className='inline-block w-full min-h-[125px] px-4 py-6 border border-gray-3 rounded-lg text-center relative cursor-pointer'>
                                    <div className="flex justify-center">
                                        <div className="h-7 mb-2">
                                            <img src="img/radio-icon-5.png" alt="icon" className="h-full" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm line-clamp-2">Airport</p>
                                    <span className="absolute top-3 right-3">
                                        <RxCheckCircled />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div>
                                <input name='radio-1' type="radio" id='radio-6' className="radio-design-1" />
                                <label htmlFor="radio-6" className='inline-block w-full min-h-[125px] px-4 py-6 border border-gray-3 rounded-lg text-center relative cursor-pointer'>
                                    <div className="flex justify-center">
                                        <div className="h-7 mb-2">
                                            <img src="img/radio-icon-4.png" alt="icon" className="h-full" />
                                        </div>
                                    </div>
                                    <p className="text-black text-sm line-clamp-2">Hospital</p>
                                    <span className="absolute top-3 right-3">
                                        <RxCheckCircled />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6 mt-4">
                        <div className="col-span-12 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Title text</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiBuildings />
                                </span>
                                <input type="text" placeholder='Enter title text' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">Car distance</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiCarLight />
                                </span>
                                <input type="text" placeholder='0.0 miles' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <h6 className="text-black text-base font-normal mb-2">walk distance</h6>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiCarLight />
                                </span>
                                <input type="text" placeholder='0.0 miles' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <button className="px-5 py-2 inline-flex items-center gap-2 border border-gray-3 rounded-md cursor-pointer mt-4">
                        <p className="text-sm text-gray-3 font-semibold">Add New</p>
                        <span className="text-gray-3 font-semibold"><FaPlus /></span>
                    </button>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Floor Plans</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12 gap-5 sm:gap-6">
                                <div className="col-span-12 sm:col-span-6">
                                    <h6 className="text-black text-base font-normal mb-2">Floor title</h6>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBuildings /></span>
                                        <input type="text" placeholder='Enter floor no.' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <h6 className="text-black text-base font-normal mb-2">Bedrooms</h6>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBuildings /></span>
                                        <input type="text" placeholder='Enter bedrooms' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <h6 className="text-black text-base font-normal mb-2">Bathroom</h6>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBathtubLight /></span>
                                        <input type="text" placeholder='Enter bathroom' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <h6 className="text-black text-base font-normal mb-2">Floor size</h6>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2/4 -translate-y-1/2"><PiBuildings /></span>
                                        <input type="text" placeholder='Enter floor size' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            <button className="px-5 py-2 inline-flex items-center gap-2 border border-gray-3 rounded-md cursor-pointer mt-4">
                                <p className="text-sm text-gray-3 font-semibold">Add New</p>
                                <span className="text-gray-3 font-semibold"><FaPlus /></span>
                            </button>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="flex items-center justify-center w-full lg:mt-7">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-3 border-dashed rounded-lg cursor-pointer bg-white">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-7 py-10 rounded-lg mt-6">
                    <div className="flex items-center gap-2 mb-4">
                        <h6 className="text-black text-xl">Content Widgets</h6>
                        <div className="w-10 h-[2px] bg-brand"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 sm:gap-6">
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="text-black text-base font-normal">Video Presentation</h6>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <AiOutlineYoutube />
                                </span>
                                <input type="text" placeholder='Youtube Video' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="text-black text-base font-normal">Mortgage calculator</h6>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <PiCalculatorDuotone />
                                </span>
                                <input type="text" placeholder='Mortgage calculator' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="text-black text-base font-normal">Profile document</h6>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <HiOutlineDocumentText />
                                </span>
                                <input type="text" placeholder='Profile document' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="text-black text-base font-normal">Vimeo</h6>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <FaVimeoV />
                                </span>
                                <input type="text" placeholder='Vimeo Video' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="text-black text-base font-normal">Google map</h6>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <IoLocationOutline />
                                </span>
                                <input type="text" placeholder='Google map' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="text-black text-base font-normal">Contact form</h6>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:bg-brand"></div>
                                </label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-2/4 -translate-y-1/2">
                                    <RiUserLine />
                                </span>
                                <input type="text" placeholder='contact form' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type='submit' className="city-btn hover:bg-black mt-8">Submit your Ads</button>
            </form>
        </div>
    </section>
  )
}

export default AddPost