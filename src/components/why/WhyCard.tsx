import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";

interface WhyDataProps {
    id: number;
    title: string;
    desc: string;
    img: string;
}

interface WhyCardProps {
    WhyData: WhyDataProps;
}

const WhyCard: React.FC<WhyCardProps> = ({WhyData}) => {
    const {id, title, desc,img} = WhyData;
  return (
    <div className='group flex lg:items-center lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 py-6 transition-all duration-200 hover:bg-white hover:px-8 hover:rounded-lg' key={id}>
        <div className="w-full lg:w-6/12 flex items-center flex-wrap sm:flex-nowrap gap-8">
            <img src={img} alt="" className="w-full sm:w-6/12 xl:w-5/12" />
            <Link href="/property-list"><h5 className="text-black text-2xl font-semibold">{title}</h5></Link>
        </div>
        <div className="w-full lg:w-6/12 flex items-center justify-between gap-4">
            <p className='max-w-[45ch]'>{desc}</p>
            <div className="w-[40px] h-[40px] rounded-full border transition-all duration-200 flex items-center justify-center flex-shrink-0 -rotate-45 transition-all duration-200 group-hover:bg-brand-clr group-hover:rotate-0"><span className="text-gray-3 text-bese group-hover:text-white"><FaArrowRight /></span></div>
        </div>
    </div>
  )
}

export default WhyCard
