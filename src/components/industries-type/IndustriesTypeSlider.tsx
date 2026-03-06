import React from 'react';
import { Link } from '@inertiajs/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { IndustriesTypeSliderDatas } from '../localdata/localData';


const IndustriesTypeSlider: React.FC = () => {
  return (
    <section className="industries-type-slider-area py-20 md:py-32">
        <div className="container">
            <div className="w-full lg:w-8/12 2xl:w-6/12 mb-8">
                 <h6 className="text-brand text-base font-poppins">Apartment Types</h6>
                 <h2 className="text-black mt-3">Explore Apartment Types Real Estate Industries</h2>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 xl:col-span-3">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia parated they Phosfluorescently .</p>
                </div>
                <div className="col-span-12 xl:col-span-9">
                <Swiper
                    className="relative pb-16 z-10"
                    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                    spaceBetween={0}
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
                        IndustriesTypeSliderDatas.map((IndustriesTypeSliderData) =>
                            <SwiperSlide  key={IndustriesTypeSliderData.id}>
                                <div className="group bg-white p-12 border border-gray-3 border-gray-3 transition-all duration-200">
                                    <div className="w-[70px] h-[70px] p-5 rounded-full border border-dashed transition-all duration-200 flex items-center justify-center group-hover:bg-brand-clr group-hover:border-transparent mb-10">
                                        <img src={IndustriesTypeSliderData.img} alt="" className="group-hover:hidden"/>
                                        <img src={IndustriesTypeSliderData.imgColor} alt="" className="hidden group-hover:block"/>
                                    </div>
                                    <Link href="/property-list"><h4 className="text-black text-xl font-semibold mb-3 group-hover:text-brand-clr">{IndustriesTypeSliderData.title}</h4></Link>
                                    <p className="text-body-clr text-base font-normal">{IndustriesTypeSliderData.total + " Properties"}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IndustriesTypeSlider
