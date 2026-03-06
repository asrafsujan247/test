import React from 'react';
import { FaRegStar } from "react-icons/fa";

const PropertySidebar: React.FC = () => {
  return (
    <div className='bg-white px-7 py-10 rounded-lg'>
        <div className="flex items-center justify-between gap-4">
            <h6 className="text-black text-2xl font-semibold">$21,000</h6>
            <div className="flex items-center justify-end gap-2">
                <div className="flex items-center gap-1">
                    <span><FaRegStar /></span>
                    <p>4.5</p>
                </div>
                <p className="text-xs font-medium">124 Reviews</p>
            </div>
        </div>
        <form className="mt-5">
            <div className="border border-gray-4 rounded-lg overflow-hidden">
                <div className="py-4 px-6 rounded-lg">
                    <div className="flex items-center justify-between">
                        <p className="text-black text-sm">Uttara, Dhaka</p>
                        <p className="text-black text-sm pl-3 border-l border-gray-3">Apartment</p>
                    </div>
                </div>
                <select name="guest" id="guest" className='w-full text-black py-4 px-6 !border-t !border-x-0 !border-b-0 !border-gray-4'>
                    <option value="2guest">2 guest</option>
                    <option value="2guest">2 guest</option>
                    <option value="2guest">2 guest</option>
                </select>
            </div>
            <button type='submit' className="city-btn hover:bg-black w-full mt-6">Reserve</button>
        </form>
    </div>
  )
}

export default PropertySidebar