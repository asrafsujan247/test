import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

interface FeedbackTwoData {
    id: number | string;
    name: string;
    designation: string;
    title: string;
    content: string;
    logo: string;
}

interface FeedbackTwoCardProps {
    FeedbackTwoData: FeedbackTwoData;
}

const FeedbackTwoCard: React.FC<FeedbackTwoCardProps> = ({FeedbackTwoData}) => {
    const {id, name, designation, title, content, logo} = FeedbackTwoData
  return (
    <div className='p-6 bg-white'>
        <div className="flex items-center justify-between mb-4">
            <div>
                <h6 className="text-black text-lg">{name}</h6>
                <p className="text-sm font-medium">{designation}</p>
            </div>
            <span className="text-body-clr-2 text-4xl"><FaQuoteRight /></span>
        </div>
        <h5 className="text-black text-lg font-semibold mb-4">{title}</h5>
        <p className="mb-6">{content}</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 mb-2">
                <FaStar className='text-brand' />
                <FaStar className='text-brand' />
                <FaStar className='text-brand' />
                <FaStar className='text-brand' />
                <FaStar className='text-brand' />
            </div>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default FeedbackTwoCard