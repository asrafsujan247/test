import React from 'react'
import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";

const AboutTwo: React.FC = () => {
  return (
    <section className="relative z-20 bg-black lg:bg-transparent pt-0 lg:-mt-[300px]">
        <div className="container">
            <div className="flex items-center gap-4 lg:gap-0 flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-6/12">
                    <div className="flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap">
                        <img src="img/dream-place-2.png" alt="" />
                        <img src="img/dream-place-3.png" alt="" />
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <div>
                            <h4 className="text-white font-bold text-[64px] leading-none">99%</h4>
                            <p className='text-gray-3'>Customer Satisfaction</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-[64px] leading-none">2M+</h4>
                            <p className='text-gray-3'>Satisfied clients</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="bg-body-clr-2 flex items-center flex-wrap sm:flex-nowrap">
                        <img src="img/dream-place-4.png" alt="" className='hidden sm:block' />
                        <div className="p-10">
                            <h6 className="text-black text-2xl font-semibold">
                                <Link href="/pg-single">Exclusive Access to Local Experts</Link>
                            </h6>
                            <Link href="/property-list" className="text-body-clr text-sm font-bold hover:text-brand-clr flex items-center gap-2 mt-4"><span className="text-bese rotate-45"><FaArrowRight /></span>ALL EXPLORE</Link>
                        </div>
                    </div>
                    <div className="bg-gray-5 px-12 py-20">
                        <h6 className="text-brand text-base font-poppins mb-3">About Us</h6>
                        <h3 className="text-white text-[32px] font-bold leading-10 max-w-[22ch] mb-6">The perfect place to Live with your family</h3>
                        <p className="text-body-clr-4 mb-8">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast.</p>
                        <Link href="/about" className="city-btn text-white hover:bg-black">Discovery Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutTwo
