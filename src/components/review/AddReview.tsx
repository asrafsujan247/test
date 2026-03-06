import React from 'react';
import { FaStar } from "react-icons/fa";

const AddReview: React.FC = () => {
  return (
    <div className='bg-white px-7 py-10 rounded-lg mt-10'>
        <div className="flex items-center gap-2 mb-4">
            <h6 className="text-black text-xl">Add a review</h6>
            <div className="w-10 h-[2px] bg-brand"></div>
        </div>
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
            <span className="text-gray-2">
                <FaStar />
            </span>
            <span className="text-gray-2">
                <FaStar />
            </span>
        </div>
        <form action="#" className='mt-6'>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                    <input type="text" placeholder='Name' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-6 rounded-lg' />
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <input type="email" placeholder='Email' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-6 rounded-lg' />
                </div>
                <div className="col-span-12">
                    <input type="text" placeholder='Website' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-6 rounded-lg' />
                </div>
                <div className="col-span-12">
                    <textarea placeholder='Paste Here' className='!bg-white !border !border-body-clr !border-opacity-20 w-full h-[133px] py-4 px-6 rounded-lg'></textarea>
                </div>
            </div>
            <button type='submit' className='city-btn hover:bg-black mt-8'>Post Comment</button>
        </form>
    </div>
  )
}

export default AddReview