import React from 'react';
import { Link } from '@inertiajs/react';
import { FiSearch } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

const BlogSidebar: React.FC = () => {
  return (
    <>
        <div className="bg-white px-7 py-10 rounded-lg">
            <h6 className="text-black text-xl font-semibold mb-6">Search</h6>
            <form className="relative border border-gray-4 rounded-lg">
                <input type="text" placeholder='Search...' className="w-full p-4 !bg-transparent rounded-lg" />
                <button type='submit' className="city-btn text-white !border-0 !rounded-l-none hover:bg-black h-full absolute top-0 end-[0px]"><FiSearch className='text-lg' /></button>
            </form>
        </div>
        <div className="bg-white px-7 py-10 rounded-lg mt-10">
            <h6 className="text-black text-xl font-semibold mb-6">Main Category</h6>
            <ul className="flex flex-col gap-4">
                <li>
                    <Link href="/blog-list" className='px-6 py-3 border border-gray-4 rounded-lg flex items-center justify-between hover:bg-brand hover:border-brand hover:text-white transition-all duration-150'>
                        <p className="font-semibold">Apartment</p>
                        <p className="font-semibold">(03)</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog-list" className='px-6 py-3 border border-gray-4 rounded-lg flex items-center justify-between hover:bg-brand hover:border-brand hover:text-white transition-all duration-150'>
                        <p className="font-semibold">Real Estate</p>
                        <p className="font-semibold">(05)</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog-list" className='px-6 py-3 border border-gray-4 rounded-lg flex items-center justify-between hover:bg-brand hover:border-brand hover:text-white transition-all duration-150'>
                        <p className="font-semibold">Digital Marketing</p>
                        <p className="font-semibold">(04)</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog-list" className='px-6 py-3 border border-gray-4 rounded-lg flex items-center justify-between hover:bg-brand hover:border-brand hover:text-white transition-all duration-150'>
                        <p className="font-semibold">Technology</p>
                        <p className="font-semibold">(08)</p>
                    </Link>
                </li>
                <li>
                    <Link href="/blog-list" className='px-6 py-3 border border-gray-4 rounded-lg flex items-center justify-between hover:bg-brand hover:border-brand hover:text-white transition-all duration-150'>
                        <p className="font-semibold">Software Development</p>
                        <p className="font-semibold">(06)</p>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="bg-white px-7 py-10 rounded-lg mt-10">
            <h6 className="text-black text-xl font-semibold mb-6">Related Posts</h6>
            <div className="flex items-center gap-4 py-2">
                <img src="img/blog-sidebar-1.png" alt="image" />
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span><IoCalendarOutline /></span>
                        <p className="text-sm">Oct 29, 2023</p>
                    </div>
                    <Link href="/blog-single" className="text-black text-sm font-bold max-w-[23ch] line-clamp-2">Advance warning of the next big solar storm</Link>
                </div>
            </div>
            <div className="flex items-center gap-4 py-2">
                <img src="img/blog-sidebar-2.png" alt="image" />
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span><IoCalendarOutline /></span>
                        <p className="text-sm">Oct 29, 2023</p>
                    </div>
                    <Link href="/blog-single" className="text-black text-sm font-bold max-w-[23ch] line-clamp-2">There's trouble in startup real estate building</Link>
                </div>
            </div>
            <div className="flex items-center gap-4 py-2">
                <img src="img/blog-sidebar-3.png" alt="image" />
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span><IoCalendarOutline /></span>
                        <p className="text-sm">Oct 29, 2023</p>
                    </div>
                    <Link href="/blog-single" className="text-black text-sm font-bold max-w-[23ch] line-clamp-2">Here's how Donald Trump's  came back him.</Link>
                </div>
            </div>
        </div>
        <div className="bg-white px-7 py-10 rounded-lg mt-10">
            <h6 className="text-black text-xl font-semibold mb-6">Popular Tags.</h6>
            <div className="flex items-center gap-4 flex-wrap">
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">content</Link>
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">design</Link>
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">marketing</Link>
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">web development</Link>
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">innovation</Link>
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">Luxury</Link>
                <Link href="/blog-list" className="px-4 py-2 border border-gray-4 rounded text-sm hover:bg-brand hover:border-brand hover:text-white transition-all duration-200">Sport</Link>
            </div>
        </div>
        <div className="mt-12">
            <div className="relative">
                <img src="img/ad-1.png" alt="image" />
            </div>
        </div>
    </>
  )
}

export default BlogSidebar
