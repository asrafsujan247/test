import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <section className="-mt-[200px] md:-mt-[260px] xl:-mt-[340px]">
        <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-6">
                <img src="img/about-1.png" alt="image" className='h-full hidden xl:block' />
            </div>
            <div className="col-span-12 xl:col-span-6">
                <div className="bg-black h-full px-14 sm:px-20 pb-20 sm:pb-32 pt-32 flex items-end relative z-0">
                    <div className='relative'>
                        <div className="w-full lg:w-9/12">
                            <h6 className="text-brand text-base font-poppins">About Us</h6>
                            <h2 className="text-white mt-3">The perfect place live with your family</h2>
                            <p className="text-body-clr-4 mt-8">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast.</p>
                            <div className="flex justify-start items-start sm:items-center flex-col sm:flex-row gap-3 mt-10">
                                <div className="flex items-center gap-3 sm:pr-9">
                                    <img src="img/about-icon-1.png" alt="" />
                                    <div>
                                        <p className="text-body-clr-4 font-poppins mb-1">Property type:</p>
                                        <h6 className="text-white text-base">Townhome</h6>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:pl-9 sm:border-l border-body-clr-4">
                                    <img src="img/about-icon-2.png" alt="" />
                                    <div>
                                        <p className="text-body-clr-4 font-poppins mb-1">Green spaces:</p>
                                        <h6 className="text-white text-base">Parks</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-block bg-gray-5 px-7 py-6 rounded-lg mt-10">
                                <div className="flex items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-10">
                                    <div className="flex items-center gap-5">
                                        <div className="bg-brand w-3 h-3 rounded-full"></div>
                                        <p className="text-white flex items-center gap-3"><span className="font-poppins text-3xl font-bold">5M+</span> Users</p>
                                    </div>
                                    <div className="flex items-center gap-7">
                                        <img src="img/user-img.png" alt="" />
                                        <Link href='/about' className="bg-brand w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 -rotate-45">
                                            <span className="text-white text-bese"><FaArrowRight /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="img/about-shape.png" alt="" className="absolute bottom-0 right-0 -z-10"></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
