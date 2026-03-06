import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { PiEye } from "react-icons/pi";
import AgencySidebar from '../sidebar/AgencySidebar';
import { AgentDatas } from '../localdata/localData';
import MyListings from '../listings/MyListings';
import Reviews from '../review/Review';
import AddReview from '../review/AddReview';

const AgencySingleBody: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <div className="bg-white p-6 rounded-lg relative z-10 overflow-hidden">
                <img src="img/anency-shape.png" alt="image" className="absolute top-0 end-0 -z-10" />
                <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-3/12">
                        <img src="img/agency-list-1.png" alt="image" className="w-full" />
                    </div>
                    <div className="w-full md:w-8/12">
                        <span className="px-3 py-1 bg-success rounded-lg text-white font-medium mb-2 inline-block">06 Property</span>
                        <h6 className="block text-black text-xl font-semibold mb-2">Leasy Limited Company</h6>
                        <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center gap-1">
                                <span>
                                    <MdLocationPin />
                                </span>
                                <p className='text-sm'>Manhattan, New York</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>
                                    <PiEye  />
                                </span>
                                <p className='text-sm'>15k Views</p>
                            </div>
                        </div>
                        <p>Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors Laminate flooring is a more affordable option in place</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-12 lg:col-span-4">
                    <AgencySidebar />
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="bg-white px-8 py-10 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <h6 className="text-black text-xl">About Agency</h6>
                            <div className="w-10 h-[2px] bg-brand"></div>
                        </div>
                        <p>Properties when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized release.
                            <br /> <br />
                        Properties when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised release.Properti when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries.
                        </p>
                        <div className="flex items-end gap-6 flex-wrap sm:flex-nowrap mt-6">
                            <div className="w-full sm:w-8/12">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <h6 className="text-black text-3xl font-bold">99%</h6>
                                        <p>Customer Satisfaction</p>
                                    </div>
                                    <div>
                                        <h6 className="text-black text-3xl font-bold">2M+</h6>
                                        <p>Satisfied clients</p>
                                    </div>
                                </div>
                                <img src="img/agency-post-1.png" alt="image" className="w-full mt-4" />
                            </div>
                            <div className="w-full sm:w-4/12">
                                <img src="img/agency-post-2.png" alt="image" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-8 py-10 rounded-lg mt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <h6 className="text-black text-xl">Agents</h6>
                            <div className="w-10 h-[2px] bg-brand"></div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 sm:gap-6">
                            {
                                AgentDatas.slice(0,4).map((AgentData) => {
                                    const {id,name,number,review,img,designation} = AgentData
                                    return (
                                        <div className="col-span-12 sm:col-span-6 xl:col-span-3" key={id}>
                                            <div className="text-center">
                                                <img src={img} alt="image" className="w-full mb-4" />
                                                <h6 className="text-black text-base font-semibold mb-1"><a href="">{name}</a></h6>
                                                <p className='text-xs font-medium'>{designation}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <MyListings />
                    <Reviews />
                    <AddReview />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AgencySingleBody