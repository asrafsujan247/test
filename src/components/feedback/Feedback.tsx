import React, { useRef } from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { FeedbackDatas } from '../localdata/localData';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface FeedbackData {
    id: number | string;
    img: string;
    title: string;
    desc: string;
    name: string;
    deg: string;
}

const Feedback: React.FC = () => {

    const prevRef  = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
  return (
    <section className="city-feedback-area py-20 md:py-32">
        <div className="container">
            <div className="flex justify-center">
                <div className="w-full 2xl:w-5/12 text-center">
                    <h2 className="text-black mb-9">What Our Customers <span className="text-brand-clr">Are Saying Us?</span></h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-10/12">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                   }}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        1280: {
                          slidesPerView: 2,
                        },
                      }}
                >
                    {
                        FeedbackDatas.map((FeedbackData: FeedbackData) =>
                        <SwiperSlide key={FeedbackData.id}>
                        <div className="feedback-item">
                            <span className="absolute text-4xl text-gray-3 bottom-8 sm:right-10 hidden sm:block
                            "><FaQuoteRight /></span>
                            <div className="mx-auto inline-block border-[14px] border-body-clr-2 rounded-full  -mt-24">
                                <img src={FeedbackData.img} alt="" className="border-[10px] border-white rounded-full"/>
                            </div>
                            <h4 className="text-black text-[18px] font-semibold mt-4">{FeedbackData.title}</h4>
                            <p className="text-body-clr mt-4">{FeedbackData.desc}</p>
                            <h4 className="text-black text-[18px] font-semibold mt-8">{FeedbackData.name}</h4>
                            <p className="text-body-clr mt-1">{FeedbackData.deg}</p>
                        </div>
                        </SwiperSlide>

                        )
                    }
                </Swiper>
                <div className="flex justify-center items-center gap-5 mt-10">
                    <div ref={prevRef} className='w-[40px] h-[40px] rounded-full border border-gray-3 transition-all duration-200 flex items-center justify-center hover:bg-brand-clr hover:text-white'><IoIosArrowBack /></div>
                    <div ref={nextRef} className='w-[40px] h-[40px] rounded-full border border-gray-3 transition-all duration-200 flex items-center justify-center hover:bg-brand-clr hover:text-white'><IoIosArrowForward /></div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feedback