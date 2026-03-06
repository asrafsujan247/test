import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

interface TestimonialData {
    id: number | string;
    title: string;
    desc: string;
    img: string;
    designation: string;
}

interface TestimonialCardProps {
    TestimonialData: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({TestimonialData}) => {
  return (
    <div className="group bg-white border border-dashed border-gray-3 px-6 pt-8 pb-16 rounded-lg relative">
    <div className="flex items-center gap-1 mb-2">
        <FaStar className='text-brand' />
        <FaStar className='text-brand' />
        <FaStar className='text-brand' />
        <FaStar className='text-brand' />
        <FaStar className='text-brand' />
    </div>
    <h6 className="text-black text-base font-medium mb-4">{TestimonialData.title}</h6>
    <p>{TestimonialData.desc}</p>
    <div className="w-11/12 bg-white shadow-city-shadow px-6 py-3 rounded-lg absolute -bottom-10 left-2/4 -translate-x-2/4 group-hover:bg-brand">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={TestimonialData.img} alt="image" className="" />
                <div>
                    <h6 className="text-black text-base font-semibold group-hover:text-white">Mathio Shena deo</h6>
                    <p className="text-xs text-gray-1 group-hover:text-white">{TestimonialData.designation}</p>
                </div>
            </div>
            <span className="text-body-clr-2 text-lg"><FaQuoteRight /></span>
        </div>
    </div>
</div>
  )
}

export default TestimonialCard