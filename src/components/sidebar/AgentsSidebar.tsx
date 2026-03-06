import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const AgentsSidebar: React.FC = () => {
  return (
    <>
        <div className="bg-white px-7 py-12 rounded-lg">
            <h6 className="text-black mb-5">Contact With Me</h6>
            <form action="#">
                <div className="relative mb-3">
                    <span className="absolute left-2 top-2/4 -translate-y-1/2">
                        <HiOutlineUserCircle className='text-xl' />
                    </span>
                    <input type="text" placeholder='Full Name' className='bg-body-clr-4 w-full py-4 px-9 rounded-lg' />
                </div>
                <div className="relative mb-3">
                    <span className="absolute left-2 top-2/4 -translate-y-1/2">
                        <IoCallOutline className='text-xl' />
                    </span>
                    <input type="text" placeholder='Phone Number' className='bg-body-clr-4 w-full py-4 px-9 rounded-lg' />
                </div>
                <div className="relative mb-3">
                    <span className="absolute left-2 top-2/4 -translate-y-1/2">
                        <MdOutlineMarkEmailRead className='text-xl' />
                    </span>
                    <input type="email" placeholder='Your email' className='bg-body-clr-4 w-full py-4 px-9 rounded-lg' />
                </div>
                <div className="relative">
                    <textarea placeholder='Message *' className='bg-body-clr-2 w-full h-[133px] py-4 px-9 rounded-lg'></textarea>
                </div>
                <button type='submit' className='city-btn hover:bg-black mt-8'>Sent Message</button>
            </form>
        </div>
    </>
  )
}

export default AgentsSidebar