import React from 'react';
import { Link } from '@inertiajs/react';

interface CityThreeData {
    id: number;
    name: string;
    qun: string;
    img: string;
}

interface CityThreeCardProps {
    CityThreeData: CityThreeData;
}

const CityThreeCard: React.FC<CityThreeCardProps> = ({CityThreeData}) => {
    const {id,name,qun,img} = CityThreeData;
  return (
    <Link href="/property-list" className='group px-6 py-8 border border-dashed border-gray-3 flex items-center gap-6 rounded-lg transition-all duration-200 hover:bg-white hover:border-transparent'>
        <img src={img} alt="image" />
        <div>
            <h6 className="text-black text-2xl font-semibold group-hover:text-brand">{name}</h6>
            <p>{qun}</p>
        </div>
    </Link>
  )
}

export default CityThreeCard
