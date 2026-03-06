import React from 'react';
import { AddressDatas } from '../localdata/localData';
import { VscCallIncoming } from "react-icons/vsc";
import { IoLocationSharp } from "react-icons/io5";

const Address: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10">
        <img src="img/address.png" alt="image" className="absolute left-0 top-0 -z-10 hidden xl:block" />
        <div className="container">
            <div className="text-center xl:text-end mb-10">
                <h2 className="text-black">Visit Our Office Address</h2>
            </div>
            <div className="flex items-center justify-end flex-wrap md:flex-nowrap gap-4">
                {
                    AddressDatas.map((AddressData) => {
                        const {id, name, number, location} = AddressData;
                        return (
                            <div className="w-full md:w-4/12 2xl:w-3/12" key={id}>
                                <div className="group bg-white px-6 py-10 rounded-lg text-center">
                                    <div className="w-[54px] h-[54px] p-4 rounded-full bg-gray-4 transition-all duration-200 flex items-center justify-center mx-auto mb-7 group-hover:bg-brand-clr">
                                        <img src="img/card-4.png" alt="icon" className="w-full group-hover:hidden" />
                                        <img src="img/card-color2-4.png" alt="icon" className="w-full hidden group-hover:block" />
                                    </div>
                                    <h5 className="text-black font-semibold text-2xl mb-6">{name}</h5>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className=""><VscCallIncoming /></span>
                                        <p>{number}</p>
                                    </div>
                                    <div className="flex xl:items-center justify-center gap-2 mt-4">
                                        <span className=""><IoLocationSharp /></span>
                                        <p className='text-sm'>{location}</p>
                                    </div>
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

export default Address