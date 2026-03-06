import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { CitySliderDatas } from '../localdata/localData';

const CitySlider: React.FC = () => {
  return (
    <section className='bg-white py-20 md:py-32 relative z-10'>
        <img src="img/city-shape-1.png" alt="" className="absolute bottom-0 right-0 -z-10"></img>
        <div className="container">
            <div className="mx-auto w-full lg:w-8/12 2xl:w-6/12 text-center mb-8">
                <h6 className="text-brand text-base font-poppins">Properties By Cities</h6>
                <h2 className="text-black mt-3">Building Eco-Friendly and Sustainable Homes</h2>
            </div>
            <Swiper
                className="pb-16"
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
                      slidesPerView: 4,
                    },
                  }}
            >
                {
                    CitySliderDatas.map((CitySliderData) =>
                        <SwiperSlide  key={CitySliderData.id}>
                            <div className="group p-5 rounded-xl bg-white border border-dashed border-gray-3 hover:border-brand transition-all duration-200">
                                <img src={CitySliderData.img} alt="" className="w-full rounded" />
                                <div className="flex items-center justify-between gap-3 mt-6">
                                    <div>
                                        <Link href="/property-list"><h4 className="text-black text-xl font-semibold mb-1 group-hover:text-brand-clr">{CitySliderData.title}</h4></Link>
                                        <p className="text-body-clr text-base font-normal">{CitySliderData.total + " Property"}</p>
                                    </div>
                                    <div className="w-[40px] h-[40px] rounded-full border transition-all duration-200 flex items-center justify-center group-hover:bg-brand-clr"><span className="text-gray-3 text-bese group-hover:text-white"><FaArrowRight /></span></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </section>
  )
}

export default CitySlider
