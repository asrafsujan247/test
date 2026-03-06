import React from 'react';
import { Swiper , SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { TestimonialDatas } from '../localdata/localData';
import TestimonialCard from './TestimonialCard';

interface TestimonialData {
    id: number | string;
    title: string;
    desc: string;
    img: string;
    designation: string;
}

const Testimonial: React.FC = () => {
  return (
    <section className='testimonial-area bg-white py-20 md:py-32 relative z-10'>
        <div className="container">
            <div className="mx-auto w-full xl:w-8/12 2xl:w-7/12 text-center mb-10">
                <h6 className="text-brand text-base font-poppins">Testimonial</h6>
                <h2 className="text-black mt-3">Over 10,000 designs Completed For Happy Clients</h2>
            </div>
            <Swiper
                className="relative pb-28 z-10"
                modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                spaceBetween={24}
                slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    1280: {
                    slidesPerView: 3,
                    },
                }}
            >
                {
                    TestimonialDatas.map((TestimonialData: TestimonialData) =>
                        <SwiperSlide  key={TestimonialData.id}>
                            <TestimonialCard key={TestimonialData.id} TestimonialData={TestimonialData} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonial