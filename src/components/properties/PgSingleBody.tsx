import React from 'react';
import {Link} from "@inertiajs/react";
import { FaMinus } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";
import { LuHeart } from "react-icons/lu";
import { PropertyReviewDatas } from '../localdata/localData';
import Map from '../map/Map';
import PropertySidebar from '../sidebar/PropertySidebar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const PgSingleBody: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pb-32">
        <div className="container">
            <div className="flex items-center justify-between gap-3 flex-wrap xl:flex-nowrap">
                <div className="w-full xl:w-7/12 flex items-center gap-2 flex-wrap md:flex-nowrap">
                    <Link href="/" className="hover:text-brand">Home</Link>
                    <span><FaMinus /></span>
                    <Link href="/property-list" className="hover:text-brand">Properties</Link>
                    <span><FaMinus /></span>
                    <p>3 BHK Flats htmlFor Sale in Channasandra - 2043 Sq-ft </p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap mt-14">
                <div className="w-full md:w-6/12">
                    <h2 className="text-black text-2xl">3 BHK flat htmlFor sale in Channasandra</h2>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <p className="font-semibold">4.5</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span><CiLocationOn /></span>
                            <p>33 North road, banglalore India</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12">
                    <div className="flex items-center md:justify-end gap-3">
                        <div className="bg-white px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                            <span><PiShareFatLight /></span>
                            <p className="text-sm font-semibold">Share</p>
                        </div>
                        <div className="bg-white px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                            <span><LuHeart /></span>
                            <p className="text-sm font-semibold">Save</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-6">
                <div className="col-span-12 sm:col-span-8">
                <Swiper
                    className=""
                    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                >
                    <SwiperSlide>
                        <img src="img/pg-single-1.png" alt="image" className="w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="img/pg-single-1.png" alt="image" className="w-full" />
                    </SwiperSlide>
                </Swiper>
                </div>
                <div className="col-span-12 sm:col-span-4">
                    <img src="img/pg-single-2.png" alt="image" className="w-full" />
                    <img src="img/pg-single-3.png" alt="image" className="w-full mt-4" />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-10">
                <div className="col-span-12 lg:col-span-9">
                    <div className="bg-white px-7 py-9 rounded-lg">
                        <div className="flex items-center md:justify-between gap-3 flex-wrap md:flex-nowrap">
                            <div className="w-full md:w-6/12 flex items-center gap-4">
                                <img src="img/pg-single-author.png" alt="image" />
                                <div>
                                    <p>Entire rental unit hosted by</p>
                                    <h6 className="text-black text-lg font-semibold">Logan deo</h6>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 flex items-center md:justify-end gap-4 flex-wrap">
                                <Link href="/agent-single" className="px-4 py-3 border border-gray-3 rounded-md text-sm font-semibold hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">Contact Agent</Link>
                                <Link href="/agent-single" className="px-4 py-3 border border-gray-3 rounded-md text-sm font-semibold hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">Get Phone No.</Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-5 border-y border-dashed border-gray-3 mt-6">
                            <div className='text-center'>
                                <div className="h-8 flex justify-center mb-3">
                                    <img src="img/pg-single-icon-1.png" alt="icon" className="h-full" />
                                </div>
                                <p>03 Bedrooms</p>
                            </div>
                            <div className='text-center'>
                                <div className="h-8 flex justify-center mb-3">
                                    <img src="img/pg-single-icon-2.png" alt="icon" className="h-full" />
                                </div>
                                <p>03 Bathrooms</p>
                            </div>
                            <div className='text-center'>
                                <div className="h-8 flex justify-center mb-3">
                                    <img src="img/pg-single-icon-3.png" alt="icon" className="h-full" />
                                </div>
                                <p>1700 Sq.ft Built Up</p>
                            </div>
                            <div className='text-center'>
                                <div className="h-8 flex justify-center mb-3">
                                    <img src="img/pg-single-icon-4.png" alt="icon" className="h-full" />
                                </div>
                                <p>29 May 2023</p>
                            </div>
                            <div className='text-center'>
                                <div className="h-8 flex justify-center mb-3">
                                    <img src="img/pg-single-icon-5.png" alt="icon" className="h-full" />
                                </div>
                                <p>01 Garages</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 xl:grid-cols-9 gap-4 py-5 border-y border-dashed border-gray-3">
                            <div className='col-span-12 sm:col-span-6 xl:col-span-2'>
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="img/pg-single-icon-6.png" alt="icon" />
                                    <p className='text-sm'>Super Built-Up Area</p>
                                </div>
                                <p className="text-black">1000 sqft. $100/sqft</p>
                            </div>
                            <div className='col-span-12 sm:col-span-6 xl:col-span-3'>
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="img/pg-single-icon-7.png" alt="icon" />
                                    <p className='text-sm'>Super Built-Up Area</p>
                                </div>
                                <p className="text-black">Rosewood home real-estate Ltd.</p>
                            </div>
                            <div className='col-span-12 sm:col-span-6 xl:col-span-2'>
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="img/pg-single-icon-7.png" alt="icon" />
                                    <p className='text-sm'>Project</p>
                                </div>
                                <p className="text-black">Prestige Elm Park</p>
                            </div>
                            <div className='col-span-12 sm:col-span-6 xl:col-span-2'>
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="img/pg-single-icon-8.png" alt="icon" />
                                    <p className='text-sm'>Transaction Type</p>
                                </div>
                                <p className="text-black">New Property</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <h6 className="text-black text-xl mb-4">About Property</h6>
                        <p>This stunning three-bedroom apartment has been completely refurbished, with a large living room, brand-new floors, and enormous windows that flood the living area and bedrooms with natural light. The kitchen has plenty of cupboard space and contemporary stainless steel appliances. bathroom completely tiled, with a deep tub!
                        <br /> <br />
                        This home welcomes animals. The apartment is on the second story of the building. For all amenities in the house, a live-in super is available.Please get in touch if you have any more inquiries. Additionally, videos are available upon request.
                        </p>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <h6 className="text-black text-xl mb-4">Amenities</h6>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-9.png" alt="" />
                                    <p>Power Back Up</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-10.png" alt="" />
                                    <p>Gymnasium</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-11.png" alt="" />
                                    <p>Automictic Lift</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-12.png" alt="" />
                                    <p>Swimming Pool</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-13.png" alt="" />
                                    <p>CCTV Camera</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-14.png" alt="" />
                                    <p>Jogging  Track</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-15.png" alt="" />
                                    <p>Games Room</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
                                <div className="flex items-center gap-2">
                                    <img src="img/pg-single-icon-16.png" alt="" />
                                    <p>Badminton court</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <h6 className="text-black text-xl mb-4">Food and Kitchen</h6>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                                <img src="img/pg-single-icon-17.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Food available</h6>
                                <p>Breakfast, Lunch, Dinner, Meals</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                                <img src="img/pg-single-icon-18.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Meals provided</h6>
                                <p>Veg, Fish, Beef , Mutton , Dal green tea</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-2">
                                <img src="img/pg-single-icon-19.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Fridge</h6>
                                <p>Yeah available </p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-2">
                                <img src="img/pg-single-icon-20.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Food Charges</h6>
                                <p>Included in Rent</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <h6 className="text-black text-xl mb-4">Food and Kitchen</h6>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                                <img src="img/pg-single-icon-21.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Deposit Amount</h6>
                                <p>$ 5,000</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                                <img src="img/pg-single-icon-22.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Laundry</h6>
                                <p>Included in Rent</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                                <img src="img/pg-single-icon-23.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Gym</h6>
                                <p>$5.0/per months</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <h6 className="text-black text-xl mb-4">House Rules</h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4">
                            <div>
                                <img src="img/pg-single-icon-24.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Notice Period</h6>
                                <p>2 Months</p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-25.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Gate Closing Time</h6>
                                <p>No Gate Closing time</p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-26.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Visitor Entry</h6>
                                <p>Yeah</p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-27.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Non-Veg Food</h6>
                                <p>Choose up to you</p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-28.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Opposite Gender</h6>
                                <p>Choose up to you</p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-29.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Loud music</h6>
                                <p>Available </p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-30.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Coffee</h6>
                                <p>Available </p>
                            </div>
                            <div>
                                <img src="img/pg-single-icon-31.png" alt="icon" className="mb-3" />
                                <h6 className="text-black text-base font-semibold mb-2">Party</h6>
                                <p>Yeah </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <div className="flex items-center gap-4 border-b border-dashed border-gray-3 pb-5 mb-4">
                            <h6 className="text-black text-xl flex items-center gap-2"> 4.5</h6>
                            <p>124 Reviews</p>
                        </div>
                        <div className="grid grid-cols-12 gap-6">
                            {
                                PropertyReviewDatas.map((PropertyReviewData) => {
                                    const {id, name, date, content, img} = PropertyReviewData;
                                    return (
                                    <div className="col-span-12 md:col-span-6" key={id}>
                                        <div className="py-3">
                                            <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap mb-3">
                                                <div className="flex items-center gap-3">
                                                    <img src={img} alt="image" />
                                                    <div>
                                                        <h6 className="text-black text-base font-semibold">{name}</h6>
                                                        <p>{date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <p>{content}</p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <a href="" className="inline-block px-4 py-3 border border-gray-3 rounded-md text-sm font-semibold mt-4 hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">Show all 118 review</a>
                    </div>
                    <div className="bg-white px-7 py-9 rounded-lg mt-10">
                        <Map className="h-[418px] rounded-lg" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <PropertySidebar />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PgSingleBody
