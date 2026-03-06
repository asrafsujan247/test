import React from 'react';
import { Link } from '@inertiajs/react';
import { catCardDatas } from '../localdata/localData';

const Card: React.FC = () => {
  return (
    <section className="-mt-36">
        <div className="container">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {
                    catCardDatas.map((catCardData) => {
                        const {id, name, qun, img, imgColor, imgShape} = catCardData;
                        return (
                            <div className="group card-item" key={id}>
                                <img src={img} alt="" className="mb-9 group-hover:hidden"/>
                                <img src={imgColor} alt="" className="mb-9 hidden group-hover:block"/>
                                <Link href="/property-list"><h4 className="text-black text-xl font-semibold mb-3 group-hover:text-brand-clr">{name}</h4></Link>
                                <p className="text-body-clr text-base font-normal">{qun}</p>
                                <img src={imgShape} alt="" className="absolute bottom-0 right-0 -z-10"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Card
