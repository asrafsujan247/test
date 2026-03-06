import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";
import { industriesTypeData } from '../localdata/localData';

const IndustriesType: React.FC = () => {
  return (
    <section className="city-industries-type pt-20 md:pt-32 pb-16">
        <div className="container">
            <div className="flex justify-center">
                <div className="w-full xl:w-6/12 text-center">
                    <h2 className="text-black mb-9">See How Realtor Properties
                        Real <span className="text-brand-clr">Estate Industries</span></h2>
                    </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                {
                    industriesTypeData.map((industriesData) => {
                        const {id , icon, name, desc, btn} = industriesData;
                        return (
                            <div className="col-span-12 sm:col-span-6 xl:col-span-3" key={id}>
                                <div className="group city-industrie-item">
                                    <img src="img/ind-shape.png" alt="" className="absolute top-0 right-0 hidden group-hover:block" />
                                    <div className="relative w-max">
                                        <div className="w-[120px] h-[120px] bg-white group-hover:bg-brand-clr rounded-full flex items-center justify-center mb-7">
                                            <img src={icon} alt="" />
                                        </div>
                                        <div className="w-[120px] h-[120px] bg-border-2 rounded-full flex items-center justify-center absolute -z-10 -bottom-4 -right-2 hidden group-hover:block">
                                        </div>
                                    </div>
                                    <h4 className="text-black text-2xl font-semibold mb-3">{name}</h4>
                                    <p className="text-body-clr text-base font-normal">{desc}</p>
                                    <Link href="/property-list" className="text-body-clr text-base font-bold hover:text-brand-clr flex items-center gap-2 inline-block mt-6">{btn} <span className="rotate-45 text-base mt-1"><FaArrowRight /></span>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default IndustriesType
