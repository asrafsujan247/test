import React, { useState } from 'react';

import { IoCallOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AgentDatas } from '../localdata/localData';

interface AgentData {
    id: number;
    name: string;
    number: string;
    review: string;
    img: string;
}

const AgentList: React.FC = () => {
    const [clickedBtnId, setClickedBtnId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setClickedBtnId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className="pt-14 pb-20 md:pb-32">
            <div className="container">
                <div className="grid grid-cols-12 gap-5">
                    {AgentDatas.map((AgentData: AgentData) => {
                        const { id, name, number, review, img } = AgentData;
                        const isClicked = clickedBtnId === id;

                        return (
                            <div className="col-span-12 md:col-span-6 xl:col-span-3" key={id}>
                                <div className="bg-white p-6 rounded-md">
                                    <div className="relative mb-8">
                                        <img src={img} alt="image" className="w-full" />
                                        <div className={`bg-white p-3 rounded-[50px] inline-flex flex-col items-center gap-3 shadow-city-shadow absolute right-4 -bottom-6 ${isClicked && "pt-6"}`}>
                                            <div className={`inline-flex flex-col items-center gap-3 ${!isClicked && "hidden"}`}>
                                                <a href='https://www.facebook.com/' className='text-gray-3 hover:text-brand'><FaFacebookF /></a>
                                                <a href='https://linkedin.com/' className='text-gray-3 hover:text-brand'><FaLinkedinIn /></a>
                                                <a href='https://linkedin.com/' className='text-gray-3 hover:text-brand'><FaXTwitter /></a>
                                            </div>
                                            <button onClick={() => handleClick(id)} className={`bg-white w-9 h-9 rounded-full flex items-center justify-center group hover:bg-brand ${isClicked && "!bg-brand text-white"}`}>
                                                <span className='group-hover:text-white'><FiShare2 /></span>
                                            </button>
                                        </div>
                                    </div>
                                    <h6 className="text-black text-lg mb-3">{name}</h6>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span><IoCallOutline /></span>
                                        <p>{number}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-2 pr-3 border-r border-gray-3">
                                            <p className="text-gray-2 text-sm font-bold">4.7</p>
                                            <div className="flex items-center gap-1">
                                                <span className='text-brand'><FaStar /></span>
                                                <span className='text-brand'><FaStar /></span>
                                                <span className='text-brand'><FaStar /></span>
                                                <span className='text-brand'><FaStar /></span>
                                                <span className='text-brand'><FaStar /></span>
                                            </div>
                                        </div>
                                        <div className="pl-3">
                                            <p className="text-sm">{review}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AgentList;
