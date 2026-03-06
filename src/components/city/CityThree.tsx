import React from 'react';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";
import { CityThreeDatas } from '../localdata/localData';
import CityThreeCard from './CityThreeCard';

const CityThree: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap gap-4 md:flex-nowrap mb-10">
                <div className="w-full md:w-7/12 pe-4">
                    <h2 className="text-black">Check our latest apartment by modern Cities</h2>
                </div>
                <Link href="/property-list" className="text-body-clr text-sm font-bold hover:text-brand-clr flex items-center gap-2"><span className="text-bese rotate-45"><FaArrowRight /></span>ALL EXPLORE</Link>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                    <div className="flex flex-col gap-6">
                    {
                        CityThreeDatas.slice(0,3).map((CityThreeData) => <CityThreeCard CityThreeData={CityThreeData} key={CityThreeData.id} />)
                    }
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="h-full flex items-center">
                        <img src="img/city-three-img.png" alt="image" className='w-full' />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="flex flex-col gap-6">
                    {
                        CityThreeDatas.slice(3,6).map((CityThreeData) => <CityThreeCard CityThreeData={CityThreeData} key={CityThreeData.id} />)
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CityThree
