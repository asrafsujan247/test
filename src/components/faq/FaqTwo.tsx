import React, { useState, MouseEvent } from 'react';
import { Link } from '@inertiajs/react';
import { FaqDatas } from "../localdata/localData";
import FaqItem from "./FaqItem";

const FaqTwo: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(FaqDatas[0]?.id || null);

    const handleClick = (id: number) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    }
  return (
    <section className="py-20 md:py-32">
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-5">
                    <h2 className="text-black mb-8">Frequently asked
                    questions</h2>
                    <div className="flex items-center gap-6 flex-wrap mb-10">
                        <Link href="property-list" className="city-btn text-white hover:bg-black">Latest Property</Link>
                        <Link href="/agents-list" className="city-btn !bg-white !text-black hover:!bg-black hover:!text-white">Agent support</Link>
                    </div>
                    <div className="city-card bg-[url('/img/faq-dis-img.png')] bg-no-repeat bg-cover bg-center flex items-center px-10 py-20 rounded-xl">
                        <div>
                            <h6 className="text-white text-sm font-bold mb-3">Enjoy Summer Deals</h6>
                            <h4 className="text-white text-2xl font-semibold">Up to 70% Discount!</h4>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                    <div className="flex flex-col gap-5 mt-5 2xl:mt-0">
                        {FaqDatas.slice(0,4).map(faqData => (
                            <FaqItem
                                key={faqData.id}
                                faqData={faqData}
                                expandedId={expandedId}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FaqTwo
