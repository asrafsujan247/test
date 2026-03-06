import React from 'react';
import {Link} from "@inertiajs/react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const AboutAgent: React.FC = () => {
  return (
    <div className="bg-white px-7 py-12 rounded-lg">
        <div className="flex items-center gap-2 mb-7">
            <h6 className="text-black text-xl">About Agent</h6>
            <div className="w-10 h-[2px] bg-brand"></div>
        </div>
        <div className="flex items-center gap-4 flex-wrap md:flex-nowrap mb-7">
            <div className="w-4/12">
                <img src="img/agent-single.png" alt="image" className="h-full w-full" />
            </div>
            <div className="w-full lg:w-8/12">
                <h5 className="text-brand text-2xl font-semibold mb-3">CR Logan Deo </h5>
                <div className="flex items-center gap-4 flex-wrap xl:flex-nowrap mb-6">
                    <p className="text-sm">Mortgage Advisor</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <p className="text-sm font-bold">4.7</p>
                            <div className='flex items-center gap-1'>
                                <span className="text-brand">
                                    <FaStar />
                                </span>
                                <span className="text-brand">
                                    <FaStar />
                                </span>
                                <span className="text-brand">
                                    <FaStar />
                                </span>
                                <span className="text-brand">
                                    <FaStar />
                                </span>
                                <span className="text-brand">
                                    <FaStar />
                                </span>
                            </div>
                        </div>
                        <p className="text-sm pl-4 border-l border-gray-1">221 Reviews</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6">
                        <Link href="tel:123-456-7890" className="group flex items-center gap-3 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-4 flex-shrink-0 rounded-full flex items-center justify-center group-hover:bg-brand">
                                <span className="group-hover:text-white"><PiPhoneCallLight /></span>
                            </div>
                            <p className="text-black text-sm">850-763-2490</p>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Link href="/mailto: name@email.com" className="group flex items-center gap-3 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-4 flex-shrink-0 rounded-full flex items-center justify-center group-hover:bg-brand">
                                <span className="group-hover:text-white"><MdOutlineMarkEmailRead /></span>
                            </div>
                            <p className="text-black text-sm">supportcrlogan@.com</p>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Link href="mailto: name@email.com" className="group flex items-center gap-3 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-4 flex-shrink-0 rounded-full flex items-center justify-center group-hover:bg-brand">
                                <span className="group-hover:text-white"><TfiWorld /></span>
                            </div>
                            <p className="text-black text-sm">supportcrlogan@.com</p>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Link href="tel:123-456-7890" className="group flex items-center gap-3 cursor-pointer">
                            <div className="w-8 h-8 bg-gray-4 flex-shrink-0 rounded-full flex items-center justify-center group-hover:bg-brand">
                                <span className="group-hover:text-white"><FaWhatsapp /></span>
                            </div>
                            <p className="text-black text-sm">850-763-2490</p>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 border-t border-dashed border-gray-3 pt-5 mt-6">
                    <div className="col-span-6 xl:col-span-4">
                        <h6>500+</h6>
                        <p className="text-sm">Total Deals</p>
                    </div>
                    <div className="col-span-6 xl:col-span-4">
                        <h6>$117M</h6>
                        <p className="text-sm">Deal Volume</p>
                    </div>
                    <div className="col-span-6 xl:col-span-4">
                        <h6>$1.5M</h6>
                        <p className="text-sm">Highest Deal Price</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2 mb-7">
            <h6 className="text-black text-xl">About Me</h6>
            <div className="w-10 h-[2px] bg-brand"></div>
        </div>
        <p>As a fourth generation realtor, I was raised in a family where real estate was the primary occupation. She has a passion htmlFor the business and a steadfast dedication to her clients. As a licensed agent in both California and Arizona, I bring over five years of experience to the table and is adept at handling any transaction, regardless of property type or price point.
        <br /> <br />
        I am highly motivated, determined and hands on with each sale from start to finish. In addition, Maria does everything possible to make sure her clients find exactly what they are looking htmlFor. She loves what she does and is very grateful that she is able to pursue her passion htmlFor a living. As such, I don't take my responsibilities lightly. I always goe the extra mile htmlFor mybuyers and sellers</p>
    </div>
  )
}

export default AboutAgent
