import React from 'react';
import { Link } from '@inertiajs/react';
import { CiLocationOn } from "react-icons/ci";
import { cityCardData } from '../localdata/localData';

const City: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 relative z-10">
        <div className="container">
            <div className="grid grid-cols-12 gap-5 sm:gap-9">
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                    <h2 className="text-black">Properties by  <span className="text-brand-clr">Cities</span></h2>
                </div>
                {
                    cityCardData.map((cityData) => {
                        const {id, name, qun, img} = cityData;
                        return (
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" key={id}>
                                <div className="group city-card">
                                    <img src={img} alt="" className="w-full"/>
                                    <div className="text-center pb-8 relative">
                                        <div className="w-[54px] h-[54px] rounded-full bg-white transition-all duration-200 flex items-center justify-center shadow-city-shadow mx-auto mb-5 -mt-7 group-hover:bg-brand-clr">
                                            <span className="text-body-clr text-2xl group-hover:text-white"><CiLocationOn /></span>
                                        </div>
                                        <Link href="/property-list"><h4 className="text-black text-xl font-semibold mb-1 group-hover:text-brand-clr">{name}</h4></Link>
                                        <p className="text-body-clr text-base font-normal">{qun}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="col-span-12 xl:col-span-6">
                    <div className="city-card bg-[url('/img/city-6.png')] bg-no-repeat bg-cover bg-center h-full flex items-center p-10 rounded-xl">
                        <div>
                            <h6 className="text-white text-sm font-bold">Enjoy Summer Deals</h6>
                            <h4 className="text-white text-2xl font-semibold">Up to 70% Discount!</h4>
                            <Link href="/pg-single" className="city-btn text-white hover:bg-black mt-9">Check Properties</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[175px] bg-gd-white absolute top-0 left-0 -z-10"></div>
    </section>
  )
}

export default City
