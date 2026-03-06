import React from 'react';
import { Link } from '@inertiajs/react';
import { IoCallOutline } from "react-icons/io5";

const BestSelling: React.FC = () => {
  return (
    <section className="city-best-selling pt-5 md:pt-16 pb-20 md:pb-32">
        <div className="container">
            <div className="grid grid-cols-12 items-center gap-5 lg:gap-20">
                <div className="col-span-12 lg:col-span-6">
                    <img src="img/best.png" alt="" className=""/>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-black mb-9">Let's Determine Your
                    Best <span className="text-brand-clr">Selling Choice</span></h2>
                    <p className="text-body-clr text-base font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind</p>
                    <ul className="flex flex-col gap-2 mt-6">
                        <li className="flex items-center gap-3"><span className="inline-block bg-body-clr w-1 h-1 rounded-full"></span> <p className="text-body-clr text-base font-normal">Refresing to get such a personal touch</p></li>
                        <li className="flex items-center gap-3"><span className="inline-block bg-body-clr w-1 h-1 rounded-full"></span> <p className="text-body-clr text-base font-normal">Duis aute irure dolor in reprehenderit in voluptate</p></li>
                    </ul>
                    <div className="flex items-center gap-5 sm:gap-7 flex-wrap mt-6">
                        <Link href="/contact" className="city-btn hover:bg-black inline-block">Learn More Now</Link>
                        <Link href="tel:123-456-7890" className="flex items-center justify-center gap-3">
                            <span className="w-12 h-12 bg-white text-xl flex items-center justify-center rounded-full"><IoCallOutline /></span>
                            <p className="text-black text-xl font-semibold">+123 3214569871</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestSelling
