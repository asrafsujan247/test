import React from 'react'
import { FaqCounterDatas } from '../localdata/localData'

interface FaqCounterData {
    id: number | string;
    count: string;
    desc: string;
}

const FaqCounter: React.FC = () => {
  return (
    <div className="bg-brand pt-3 pb-9 rounded-lg">
        {
            FaqCounterDatas.map((FaqCounterData) => {
                const {id, count, desc} = FaqCounterData;
                return (
                    <div className="px-14 relative z-10" key={id}>
                        <div className="py-4 border-b border-primary-3">
                            <h3 className="text-white font-bold text-[32px]">{count}</h3>
                            <p className="text-white mt-2">{desc}</p>
                        </div>
                        <div className="w-[75px] h-[41px] bg-gd-dark-white rounded-l-md absolute top-2/4 -translate-y-2/4 right-0 opacity-50"></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FaqCounter