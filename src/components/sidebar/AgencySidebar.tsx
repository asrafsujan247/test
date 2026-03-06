import React from 'react';
import {Link} from "@inertiajs/react";
import { IoSearchSharp } from "react-icons/io5";
import { PiBuildings } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";

const AgencySidebar: React.FC = () => {
  return (
    <>
        <div className="bg-white px-7 py-10 rounded-lg">
            <h6 className="text-black text-xl font-semibold mb-6">Advance Search</h6>
            <form className="">
                <div className="relative mb-3">
                    <span className="absolute left-3 top-2/4 -translate-y-1/2">
                        <IoSearchSharp />
                    </span>
                    <input type="text" placeholder='Search...' className="bg-body-clr-4 w-full py-4 px-9 rounded-lg" />
                </div>
                <div className="relative mb-3">
                    <span className="absolute left-3 top-2/4 -translate-y-1/2">
                        <PiBuildings />
                    </span>
                    <select name="cats" id="cats" className='!bg-body-clr-2 w-full py-4 px-9 rounded-lg'>
                        <option value="categoriestype">Categories Type</option>
                        <option value="categoriestype">Categories Type</option>
                        <option value="categoriestype">Categories Type</option>
                    </select>
                </div>
                <div className="relative mb-3">
                    <span className="absolute left-3 top-2/4 -translate-y-1/2">
                        <PiBuildings />
                    </span>
                    <select name="citys" id="citys" className='!bg-body-clr-2 w-full py-4 px-9 rounded-lg'>
                        <option value="citys">All Cities</option>
                        <option value="citys">All Cities</option>
                        <option value="citys">All Cities</option>
                    </select>
                </div>
                <button type='submit' className="city-btn hover:bg-black mt-6">Find Property</button>
            </form>
        </div>
        <div className="bg-white px-7 py-10 rounded-lg mt-10">
            <h6 className="text-black text-xl font-semibold mb-6">Latest Properties</h6>
            <div className="flex items-center gap-4 py-2">
                <img src="img/agency-sidebar-1.png" alt="image" />
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span><IoCalendarOutline /></span>
                        <p className="text-sm">Oct 29, 2023</p>
                    </div>
                    <Link href="/pg-single" className="text-black text-sm font-bold max-w-[23ch] line-clamp-2">Advance warning of the next big solar storm</Link>
                </div>
            </div>
            <div className="flex items-center gap-4 py-2">
                <img src="img/agency-sidebar-2.png" alt="image" />
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span><IoCalendarOutline /></span>
                        <p className="text-sm">Oct 29, 2023</p>
                    </div>
                    <Link href="/pg-single" className="text-black text-sm font-bold max-w-[23ch] line-clamp-2">There's trouble in startup real estate building</Link>
                </div>
            </div>
            <div className="flex items-center gap-4 py-2">
                <img src="img/agency-sidebar-3.png" alt="image" />
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span><IoCalendarOutline /></span>
                        <p className="text-sm">Oct 29, 2023</p>
                    </div>
                    <Link href="/pg-single" className="text-black text-sm font-bold max-w-[23ch] line-clamp-2">Here's how Donald Trump's  came back him.</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default AgencySidebar
