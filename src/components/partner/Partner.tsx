import React from 'react';
import { PartnerImages } from '../localdata/localData';

interface PartnerImage {
    id: number | string;
    img: string;
}

const Partner: React.FC = () => {
  return (
    <div className="py-10 lg:ps-10 lg:border-l border-gray-5 h-full">
        <span className="text-white text-xs font-bold">Our Partners</span>
        <h2 className="text-white mt-3">Partners of RealHomes</h2>
        <div className="flex items-center xl:justify-between gap-4 flex-wrap mt-10">
            {
                PartnerImages.slice(0,3).map((PartnerImage: PartnerImage) => {
                    return (
                        <img src={PartnerImage.img} key={PartnerImage.id} alt="logo" className='cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100' />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Partner