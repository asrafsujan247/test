import { useState } from "react";
import { FaqDatas } from "../localdata/localData";
import FaqItem from "./FaqItem";
import FaqCounter from "./FaqCounter";

interface FaqData {
    id: number | string;
    question: string;
    answer: string;
}

const Faq = () => {
    const [expandedId, setExpandedId] = useState<number | string | null>(FaqDatas[0]?.id || null);

    const handleClick = (id: number | string) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    }
    return (
        <section className='py-20 md:py-32'>
            <div className="container">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 2xl:col-span-7">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-6 2xl:col-span-7">
                                <h6 className="text-brand text-base font-poppins">FAQ</h6>
                                <h2 className="text-black mt-3">Frequently asked questions</h2>
                                <img src="img/faq.png" alt="image" className="w-full mt-5 2xl:mt-12" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                                <FaqCounter/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-5">
                        <div className="flex flex-col gap-5 mt-5 2xl:mt-0">
                            {FaqDatas.slice(0,3).map(faqData => (
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

export default Faq;