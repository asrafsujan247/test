import React from 'react'
import { Swiper , SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { FeedbackTwoDatas } from '../localdata/localData'
import FeedbackTwoCard from './FeedbackTwoCard';

interface FeedbackTwoData {
    id: number | string;
    name: string;
    designation: string;
    title: string;
    content: string;
    logo: string;
}

const FeedbackTwo: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10">
        <img src="img/feedback-two-shape.png" alt="image" className="absolute top-0 end-0 z-10 hidden lg:block" />
        <div className="container">
            <div className="w-full lg:w-8/12 2xl:w-6/12 mb-8 relative z-10">
                <h2 className="text-black">People Love Living with
                Cityblock</h2>
            </div>
            <Swiper
                className="relative pb-16 z-10"
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
                    FeedbackTwoDatas.map((FeedbackTwoData: FeedbackTwoData) =>
                        <SwiperSlide  key={FeedbackTwoData.id}>
                            <FeedbackTwoCard key={FeedbackTwoData.id}  FeedbackTwoData={FeedbackTwoData} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </section>
  )
}

export default FeedbackTwo