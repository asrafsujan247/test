import React from 'react';
import PopularPropertiesTab from './PopularPropertiesTab';

const PopularProperties: React.FC = () => {
  return (
    <section className="popular-properties bg-black pt-20 md:pt-32 lg:pt-[32rem] pb-20 md:pb-32 lg:-mt-[375px]">
        <div className="container">
            <div className="text-center mb-10">
                <h2 className="text-white">Discover Popular Properties</h2>
            </div>
            <PopularPropertiesTab />
        </div>
    </section>
  )
}

export default PopularProperties