import React from 'react';
import {Link} from "@inertiajs/react";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import BlogSidebar from '../sidebar/BlogSidebar';
import { IoIosPlay } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Reviews from '../review/Review';
import AddReview from '../review/AddReview';

const BlogSingleBody: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <div className="flex items-center gap-6 flex-wrap mb-5">
                <span className="bg-brand bg-opacity-15 px-4 py-2 rounded text-brand text-sm font-semibold">Real Estate</span>
                <div className="flex items-center gap-2">
                    <span><IoCalendarOutline /></span>
                    <p className="text-sm">Oct 29, 2023</p>
                </div>
                <div className="flex items-center gap-2">
                    <span><LiaUserEditSolid /></span>
                    <p className="text-sm">Angelo Perara</p>
                </div>
            </div>
            <h2 className="text-black text-2xl">Ways To Choose Fruits & Seafoods Good For Pregnancy</h2>
            <img src="img/blog-single-1.png" alt="image" className="w-full mt-7" />
            <div className="grid grid-cols-12 gap-4 mt-12">
                <div className="col-span-12 lg:col-span-4">
                    <BlogSidebar />
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="bg-white px-8 py-12 lg:-mt-[100px]">
                        <h3 className="text-black font-semibold text-2xl mb-4">Welcome to Los Angeles Fairway Branch</h3>
                        <p className='mb-10'> ith worldwide annual spend on digital advertising surpassing $325 billion, it's no surprise that different Azp   apches to online marketing are becoming available. One of these new approaches is performance
                        or digital performance marketing. Keep reading to learn all about performance marketing, from how it works to it compares to digital marketing.
                        Plus, get insight into the benefits and risks of performance marketing and how it can affect your company's long-term success and profitability. Performance marketing is an approach to digital marketing or advertising where businesses only pay when a specific result occurs. his result could be a new lead,
                        sale, or other outcome agreed upon by the advertiser and business. Performance marketing involves channels such as affiliate marketing, online advertising.</p>
                        <h3 className="text-black font-semibold text-2xl mb-4">How do Web Development Work</h3>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt iaculis eget interdum pretium ullamcorper est dui, donec feugiat at etiam aliquam ornare parturient ut convallis gravida malesuada netus commodo hendrerit lorem sed imperdiet praesent consectetur fermentum.</p>
                        <div className="flex items-center gap-3 flex-wrap xl:flex-nowrap mb-8">
                            <div className="w-full xl:w-6/12 relative">
                                <img src="img/blog-single-2.png" alt="image" className='w-full'/>
                                <Link href='#' className="w-[64px] h-[64px] bg-white flex items-center justify-center rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <IoIosPlay className='text-brand text-2xl' />
                                </Link>
                            </div>
                            <div className='w-full xl:w-6/12'>
                                <h6 className="text-black text-xl font-semibold mb-4">How do Web Development Work</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt iaculis eget interdum pretium ullamcorper
                                <br /> <br />
                                donec feugiat at etiam aliquam ornare parturient ut convallis gravida malesuada netus commodo hendrerit lorem sed imperdiet praesent consectetur fermentum</p>
                            </div>
                        </div>
                        <h3 className="text-black font-semibold text-2xl mb-4">Channels Used in Performance Marketing</h3>
                        <p className="mb-6">Supported substance consolidates parts of web based promoting and substance showcasing. It includes making substance, htmlFor example, a blog entry or video and paying htmlFor its consideration on a site that routinely distributes comparative substance. A piece of supported substance will seem to be like the remainder of the substance on the site yet will incorporate some sign that it's supported. With execution showcasing, you would pay a pre-decided aps on your supported article</p>
                        <div className="w-full md:w-10/12 mt-6">
                            <blockquote>
                                <div className="flex gap-5 flex-wrap xl:flex-nowrap">
                                    <div className="shrink-0">
                                        <img src="img/quote.png" alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="text-black text-xl font-semibold">And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.</h6>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="w-12 h-[3px] bg-brand"></div>
                                            <p className="text-black">Tonmoy Khan</p>
                                        </div>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <p className="mt-8">Supported substance consolidates parts of web based promoting and substance showcasing. It includes making substance, htmlFor example, a blog entry or video and paying htmlFor its consideration on a site that routinely distributes comparative substance. A piece of supported substance will seem to be like the remainder of the substance on the site yet will incorporate some sign that it's supported. With execution showcasing, you would pay a pre-decided aps on your supported article navigates.</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap 2xl:flex-nowrap mt-8">
                            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                                <h6 className="text-black text-base font-bold">Tags.</h6>
                                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                                    <Link href="/blog-list" className="py-1 px-3 border border-gray-4 rounded text-sm transition-all duration-100 hover:bg-brand hover:text-white">Content Marketing</Link>
                                    <Link href="/blog-list" className="py-1 px-3 border border-gray-4 rounded text-sm transition-all duration-100 hover:bg-brand hover:text-white">Design</Link>
                                    <Link href="/blog-list" className="py-1 px-3 border border-gray-4 rounded text-sm transition-all duration-100 hover:bg-brand hover:text-white">Development</Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
                                <h6 className="text-black text-base font-bold">Share On</h6>
                                <ul className="flex items-center gap-3 flex-nowrap">
                                    <li>
                                        <a href="https://www.behance.net/" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-3 text-gray-2 hover:bg-brand hover:border-brand hover:text-white">
                                            <FaBehance />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-3 text-gray-2 hover:bg-brand hover:border-brand hover:text-white">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-3 text-gray-2 hover:bg-brand hover:border-brand hover:text-white">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-3 text-gray-2 hover:bg-brand hover:border-brand hover:text-white">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-40 px-9 py-8 rounded-[10px] mt-6">
                        <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
                            <img src="img/blog-author.png" alt="image" />
                            <div className='w-full'>
                                <div className="flex items-center justify-between gap-4 flex-wrap mb-1">
                                    <h6 className="text-black text-lg font-semibold">Kristin Watsons</h6>
                                    <div className="flex items-center gap-3">
                                        <a href="https://www.facebook.com/" className='text-gray-2 hover:text-brand'><FaFacebookF /></a>
                                        <a href="https://linkedin.com/" className='text-gray-2 hover:text-brand'><FaLinkedinIn /></a>
                                        <a href="https://twitter.com/" className='text-gray-2 hover:text-brand'><FaTwitter /></a>
                                    </div>
                                </div>
                                <p className="text-brand text-sm mb-4">Visitsite: themetags.com</p>
                                <p>Progressively transition integrated content whereas efficient  Objectively restore intermandated value without optimal relationships.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 flex-wrap xl:flex-nowrap mt-6">
                        <div className="w-full xl:w-5/12">
                            <Link href="blog-single" className="flex items-center hover:text-brand">
                                <IoIosArrowBack />Previous Post</Link>
                            <div className="flex items-center gap-4 py-3">
                                <img src="img/prev-post.png" alt="image" />
                                <div>
                                    <h6 className="text-black text-base font-semibold mb-1">Apple's VR Headset Is
                                    Likely Delayed</h6>
                                    <p className="text-sm">21 Jun 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-5/12">
                            <Link href="blog-single" className="flex items-center justify-end hover:text-brand">
                                Next Post<IoIosArrowForward /></Link>
                            <div className="flex items-center justify-end gap-4 py-3">
                                <div className='text-end'>
                                    <h6 className="text-black text-base font-semibold mb-1">How a Victorian Prince's Lawsuit  Today's TikTok Debate</h6>
                                    <p className="text-sm">21 Jun 2022</p>
                                </div>
                                <img src="img/next-post.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <Reviews />
                    <AddReview />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSingleBody
