import React, { useState } from 'react';
import { FaqDatas } from '../localdata/localData';
import { FaPlus, FaMinus } from "react-icons/fa";

interface FaqData {
    id: number | string;
    title: string;
    content: string;
}

const FaqThree = () => {
    const [openFaqId, setOpenFaqId] = useState<number | string | null>(FaqDatas[0]?.id || null);

    const handleClick = (id: number | string) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <section className="pt-14 pb-20 md:pb-32">
            <div className="container">
                <h2 className="text-black mb-8">Frequently Asked Questions</h2>
                {FaqDatas.map((faqData) => {
                    const { id, title, content } = faqData;
                    const isOpen = openFaqId === id;
                    return (
                        <div className="py-5 border-y border-body-clr border-opacity-10" key={id}>
                            <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
                                <div className="w-full lg:w-5/12">
                                    <h6 className="text-black font-poppins text-lg">{title}</h6>
                                </div>
                                <div className="w-full lg:w-7/12 flex items-center justify-between">
                                    <div className="w-10/12">
                                        <p className={`line-clamp-2 ${isOpen && "line-clamp-none"}`}>{content}</p>
                                    </div>
                                    <div className="w-2/12 text-end">
                                        <span onClick={() => handleClick(id)} className='inline-block cursor-pointer text-black'>
                                            {isOpen ? <FaMinus /> : <FaPlus />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FaqThree;