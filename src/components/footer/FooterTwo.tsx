import React from 'react';
import { Link } from '@inertiajs/react';
import Subscribe from '../subscribe/Subscribe';
import Partner from '../partner/Partner';
import { IoCall } from "react-icons/io5";
import { LuMailCheck } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const FooterTwo: React.FC = () => {
  return (
    <section className="bg-black pt-20 md:pt-32 pb-10">
        <div className="container">
            <div className="grid grid-cols-12 border-y border-gray-5">
                <div className="col-span-12 lg:col-span-6">
                    <Subscribe />
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <Partner />
                </div>
            </div>
            <div className="flex justify-between gap-3 flex-wrap mt-14">
                <div className="w-full lg:w-5/12 2xl:w-4/12">
                    <h5 className='text-white text-xl font-semibold mb-4'>Our Instagram</h5>
                    <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
                        <img src="img/instagram-1.png" alt="img" />
                        <img src="img/instagram-2.png" alt="img" />
                    </div>
                    <p className="text-white flex items-center gap-3 mt-10">Total Follower <span className="font-poppins text-3xl font-bold">1M+</span></p>
                    <p className="text-white mt-2">We provide fast on-demand printing.</p>
                </div>
                <div className="w-full sm:w-3/12 lg:w-2/12">
                     <h5 className='text-white text-xl font-semibold mb-4'>Useful Link</h5>
                     <ul className='flex flex-col gap-4'>
                        <li><Link href="/about" className="text-sm text-white hover:text-brand transition-all duration-150">About Us</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Category Apartment</Link></li>
                        <li><Link href="/faq" className="text-sm text-white hover:text-brand transition-all duration-150">FAQ Page</Link></li>
                        <li><Link href="/contact" className="text-sm text-white hover:text-brand transition-all duration-150">Contact us</Link></li>
                     </ul>
                </div>
                <div className="w-full sm:w-3/12 lg:w-2/12">
                     <h5 className='text-white text-xl font-semibold mb-4'>Location</h5>
                     <ul className='flex flex-col gap-4'>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">New York</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Milan</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Edinburgh</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Singapore</Link></li>
                     </ul>
                </div>
                <div className="w-full sm:w-3/12 lg:w-2/12">
                     <h5 className='text-white text-xl font-semibold mb-4'>Search Now</h5>
                     <ul className='flex flex-col gap-4'>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Home For Sale</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Home For Rent</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Office For Sale</Link></li>
                        <li><Link href="/property-list" className="text-sm text-white hover:text-brand transition-all duration-150">Apartment For Sale</Link></li>
                     </ul>
                </div>
            </div>
            <div className="bg-white py-6 px-14 rounded-lg xl:rounded-[200px] mt-10">
                <div className="flex items-center justify-center xl:justify-between gap-5 flex-wrap">
                    <img src="img/logo.png" alt="" />
                    <div className="flex items-center justify-center gap-5 lg:gap-8 flex-wrap lg:flex-row">
                        <Link href='tel:123-456-7890' className="footer-contact-item text-black font-semibold">
                            <span className="w-12 h-12 shrink-0 border border-gray-2 text-gray-2 text-xl flex items-center justify-center rounded-full transition-all duration-200"><IoCall /></span>
                            +123 3214569871
                        </Link>
                        <Link href='mailto: name@email.com' className="footer-contact-item text-black font-semibold">
                            <span className="w-12 h-12 shrink-0 border border-gray-2 text-gray-2 text-xl flex items-center justify-center rounded-full transition-all duration-200"><LuMailCheck /></span>
                            hellocityblok@.com
                        </Link>
                        <Link href='#' className="footer-contact-item text-black font-semibold">
                            <span className="w-12 h-12 shrink-0 border border-gray-2 text-gray-2 text-xl flex items-center justify-center rounded-full transition-all duration-200"><SlLocationPin /></span>
                            Elizabeth St, London SW1W UK
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-8 text-center">
                <p className="text-white">© 2025. All rights reserved. Designed by Themetags</p>
            </div>
        </div>
    </section>
  )
}

export default FooterTwo
