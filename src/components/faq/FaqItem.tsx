import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

interface FaqData {
    id: number | string;
    title: string;
    content: string;
}

interface FaqItemProps {
    faqData: FaqData;
    expandedId: number | string | null;
    handleClick: (id: number | string) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faqData, expandedId, handleClick }) => {
    const { id, title, content } = faqData;
    const isExpanded = expandedId === id;
  return (
    <div className="bg-white px-8 py-5" key={id}>
        <div className="flex items-center justify-between gap-3 cursor-pointer" onClick={() => handleClick(id)}>
            <h6 className="text-black font-poppins text-lg">{title}</h6>
            <span className='text-black'>
                {isExpanded ? <FaMinus /> : <FaPlus />}
            </span>
        </div>
        {isExpanded &&
        <p className='pt-6 pb-5'>{content}</p>}
    </div>
  )
}

export default FaqItem