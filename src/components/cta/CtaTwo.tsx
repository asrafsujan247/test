import React from 'react';
import { Link } from '@inertiajs/react';
import { IoCallOutline } from "react-icons/io5";

const CtaTwo: React.FC = () => {
  return (
    <section className="bg-body-clr-3 relative z-10">
        <img src="img/cta-shape.png" alt="" className="absolute bottom-0 left-0 -z-10"></img>
        <div className="container">
            <div className="relative py-20 md:py-28">
                <img className='absolute right-0 bottom-0 hidden lg:block' src="img/cta-two.png" alt="" />
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex items-center justify-between gap-4">
                            <div className="w-full xl:w-9/12 2xl:w-8/12">
                                <h2 className="text-black mt-3">Exclusive Access to Local Experts</h2>
                                <div className="flex items-center gap-6 flex-wrap mt-10">
                                    <Link href="/pg-single" className="city-btn text-white hover:bg-black">Check Properties</Link>
                                    <Link href="tel:123-456-7890" className="flex items-center justify-center gap-3">
                                        <span className="w-12 h-12 border border-dashed border-gray-2 text-gray-2 text-xl flex items-center justify-center rounded-full"><IoCallOutline /></span>
                                        <p className="text-black text-xl font-semibold">+123 3214569871</p>
                                    </Link>
                                </div>
                            </div>
                            <img src="img/btn-img.png" alt="" className='hidden xl:block' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CtaTwo
