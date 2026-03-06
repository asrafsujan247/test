import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CgMenuLeft } from "react-icons/cg";

interface HeaderProps {
    setOffCanvasOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({setOffCanvasOpen}) => {

  return (
    <header className="city-header bg-white py-5 fixed w-full z-40 shadow-default">
        <div className="container">
            <div className="flex items-center justify-between">
                <Link href="/home" className="logo">
                    <img src="img/logo.png" alt=""/>
                </Link>
                <div className="nav-area hidden lg:block">
                    <ul className="nav-items list-none flex items-center justify-center gap-7">
                        <li>
                            <Link href="#" className="flex items-center gap-1 text-body-clr text-base font-normal hover:text-black transition duration-700">Home <span className="text-xl"><RiArrowDropDownLine /></span></Link>
                            <ul className="drop-down-wrapper">
                                <li>
                                    <Link href="/home" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Home One </Link>
                                </li>
                                <li>
                                    <Link href="/home-2" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Home Two</Link>
                                </li>
                                <li>
                                    <Link href="/home-3" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Home Three</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center gap-1 text-body-clr text-base font-normal hover:text-black transition duration-700">
                                Agency
                                <span className="text-xl"><RiArrowDropDownLine /></span>
                            </Link>
                            <ul className="drop-down-wrapper">
                                <li>
                                    <Link href="/agency-list" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Agency List</Link>
                                </li>
                                <li>
                                    <Link href="/agency-single" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Agency Single</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="" className="flex items-center gap-1 text-body-clr text-base font-normal hover:text-black transition duration-700">
                                Pages
                                <span className="text-xl"><RiArrowDropDownLine /></span>
                            </Link>
                            <ul className="drop-down-wrapper">
                                <li>
                                    <Link href="/about" className="text-body-clr text-base font-normal hover:text-black transition duration-700">About Us</Link>
                                    </li>
                                <li>
                                    <Link href="/agents-list" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Agent List</Link>
                                </li>
                                <li>
                                    <Link href="/agent-single" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Agent Single</Link>
                                </li>
                                <li>
                                    <Link href="/property-list" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Properties List</Link>
                                </li>
                                <li>
                                    <Link href="/property-list-map" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Properties Map</Link>
                                </li>
                                <li>
                                    <Link href="/pg-single" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Properties Single</Link>
                                </li>
                                <li>
                                    <Link href="/add-post" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Add Listing</Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Faq</Link>
                                </li>
                                <li>
                                    <Link href="/404" className="text-body-clr text-base font-normal hover:text-black transition duration-700">404</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center gap-1 text-body-clr text-base font-normal hover:text-black transition duration-700">
                                Blog
                                <span className="text-xl"><RiArrowDropDownLine /></span>
                            </Link>
                            <ul className="drop-down-wrapper">
                                <li>
                                    <Link href="/blog-list" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Blog List</Link>
                                </li>
                                <li>
                                    <Link href="/blog-single" className="text-body-clr text-base font-normal hover:text-black transition duration-700">Blog Single</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/contact" className="flex items-center gap-1 text-body-clr text-base font-normal hover:text-black transition duration-700">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="user-area flex items-center justify-end gap-5">
                    <Link href="/agent-single" className="user flex items-center gap-1 text-body-clr hidden sm:flex">
                        <span className='text-xl'><HiOutlineUserCircle /></span>
                        Christ Deo
                    </Link>
                    <Link href="/add-post" className="city-btn hover:bg-black !hidden sm:!inline-block">Add property</Link>
                    <button onClick={()=>setOffCanvasOpen(true)} className="text-2xl lg:hidden"><CgMenuLeft /></button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
