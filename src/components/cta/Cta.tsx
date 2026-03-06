import React from 'react';
import { Link } from '@inertiajs/react';
import { IoCallOutline } from "react-icons/io5";

const Cta: React.FC = () => {
  return (
    <section className="city-cta -mt-40">
        <div className="container">
            <div className="flex justify-center">
                <div className="w-full xl:w-10/12">
                    <div className="cta-wrapper">
                        <div className='text-center lg:text-left'>
                            <h6 className="text-body-clr text-2xl font-bold mb-2">Need Help?</h6>
                            <h2 className="text-black text-3xl md:text-4xl font-bold">
                                Talk To Our Expert</h2>
                        </div>
                        <div>
                            <img src="img/cta.png" alt=""/>
                        </div>
                        <div>
                            <Link href="tel:123-456-7890" className="flex items-center justify-center gap-3">
                                <span className="w-12 h-12 bg-brand-clr text-white text-xl flex items-center justify-center rounded-full"><IoCallOutline /></span>
                                <p className="text-black text-xl font-semibold">+123 3214569871</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta
