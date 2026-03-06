import React from 'react';
import { WhyDatas } from '../localdata/localData';
import WhyCard from './WhyCard';

interface WhyData {
    id: number | string;
    icon: string;
    title: string;
    description: string;
}

const Why: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap gap-4 lg:gap-0 mb-10">
                <div className="w-full lg:w-8/12 2xl:w-7/12">
                    <h2 className="text-black">Why Choose Our Properties Real Estate Industries</h2>
                </div>
                <img src="img/btn-img-2.png" alt="image"></img>
            </div>
			<div className="py-3 border-y border-border-clr">
				{
					WhyDatas.map((WhyData: WhyData) => <WhyCard WhyData={WhyData} key={WhyData.id}/>)
				}
			</div>
        </div>
    </section>
  )
}

export default Why