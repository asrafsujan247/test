import React from 'react';
import {Link} from "@inertiajs/react";
import AgencySidebar from '../sidebar/AgencySidebar';
import { AgencyListDatas } from '../localdata/localData';
import { IoShareSocial } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const AgencyBody: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4">
                    <AgencySidebar />
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-black">Showing 1–10 of 13 results</p>
                        <div className="flex items-center justify-end gap-2">
                            <p className="text-sm">Sort by:</p>
                            <select name="sort" id="sort" className='!bg-white py-2 px-4 rounded-lg'>
                                <option value="categoriestype">Default</option>
                                <option value="categoriestype">Default</option>
                                <option value="categoriestype">Default</option>
                            </select>
                        </div>
                    </div>
                    {
                        AgencyListDatas.map((AgencyListData) => {
                            const {id, name, location, content, img} = AgencyListData;
                            return (
                                <div className="bg-white p-6 rounded-lg mt-6" key={id}>
                                    <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
                                        <div className="w-full md:w-4/12">
                                            <img src={img} alt="image" className="w-full" />
                                        </div>
                                        <div className="w-full md:w-8/12">
                                            <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
                                                <span className="px-3 py-1 border border-gray-4 rounded-lg text-gray-2 font-medium">06 Property</span>
                                                <div className="flex items-center gap-1">
                                                    <Link href="#" className="w-9 h-9 hover:bg-white-27 rounded-full flex items-center justify-center">
                                                        <span className="text-base text-gray-4"><IoShareSocial /></span>
                                                    </Link>
                                                    <Link href="#" className="w-9 h-9 hover:bg-white-27 rounded-full flex items-center justify-center">
                                                        <span className="text-base text-gray-4"><IoMdHeartEmpty /></span>
                                                    </Link>
                                                    <Link href="#" className="w-9 h-9 hover:bg-white-27 rounded-full flex items-center justify-center">
                                                        <span className="text-base text-gray-4"><MdCompareArrows /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link href='/agency-single' className="inline-block text-black text-xl font-semibold mb-2">{name}</Link>
                                            <div className="flex items-center gap-1 mb-5">
                                                <span>
                                                    <MdLocationPin />
                                                </span>
                                                <p className='text-sm'>Manhattan, New York</p>
                                            </div>
                                            <p className='text-sm'>{content}</p>
                                            <Link href='/agency-single' className="px-5 py-2 border border-gray-4 rounded-lg text-gray-2 font-medium inline-flex items-center gap-2 mt-6 hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">
                                                <span><FaRegCircleCheck /></span>
                                                <p className="text-sm">View Details</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="flex items-center gap-3 mt-8">
                        <Link href="/agency-list" className="bg-white min-h-[40px] px-3 py-2 flex items-center justify-center font-bold rounded-md hover:bg-brand hover:text-white">01</Link>
                        <Link href="/agency-list" className="bg-white min-h-[40px] px-3 py-2 flex items-center justify-center font-bold rounded-md hover:bg-brand hover:text-white">02</Link>
                        <Link href="/agency-list" className="bg-white min-h-[40px] px-3 py-2 flex items-center justify-center font-bold rounded-md hover:bg-brand hover:text-white"><IoIosArrowForward /></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AgencyBody
