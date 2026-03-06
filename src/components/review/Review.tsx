import React from 'react'
import { FaStar } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";

const Reviews: React.FC = () => {
  return (
    <div className='bg-white px-7 py-10 rounded-lg mt-10'>
        <div className="flex items-center gap-2 mb-4">
            <h6 className="text-black text-xl">4.67 (2 Reviews)</h6>
            <div className="w-10 h-[2px] bg-brand"></div>
        </div>
        <div className="flex items-center gap-4 py-5">
            <div className="w-1/12">
                <img src="img/review-1.png" alt="image" className="w-full" />
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                        <h6 className="text-black text-lg">Randy K. Melton</h6>
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
                    <p className='text-brand text-sm font-semibold'>05.03.2021 [11.00am]</p>
                </div>
                <p className='mt-2'>Dynamically streamline user-centric ROI vis-a-vis compelling interfaces. Professionally iterate cooperative human</p>
                <div className="flex items-center gap-1 mt-4">
                    <span className='text-black'><TbArrowBackUp /></span>
                    <p className="text-black text-sm">REPLY</p>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-4 py-5 border-t border-body-clr border-opacity-20">
            <div className="w-1/12">
                <img src="img/review-1.png" alt="image" className="w-full" />
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                        <h6 className="text-black text-lg">Randy K. Melton</h6>
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
                    <p className='text-brand text-sm font-semibold'>05.03.2021 [11.00am]</p>
                </div>
                <p className='mt-2'>Dynamically streamline user-centric ROI vis-a-vis compelling interfaces. Professionally iterate cooperative human</p>
                <div className="flex items-center gap-1 mt-4">
                    <span className='text-black'><TbArrowBackUp /></span>
                    <p className="text-black text-sm">REPLY</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews