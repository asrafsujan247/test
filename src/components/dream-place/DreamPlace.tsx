import React from 'react';
import { Link } from '@inertiajs/react';
import { IoCallOutline } from "react-icons/io5";

const DreamPlace: React.FC = () => {
  return (
    <section className="dream-place pt-20 md:pt-32 pb-20 lg:pb-64">
        <img src="img/dream-place-shape.png" alt="image" className="absolute left-0 top-0 -z-0" />
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-white leading-9 sm:leading-[58px] max-w-[20ch]">Let's Find The Right  Selling Option For Your Dream Place</h2>
                    <Link href="/tel:123-456-7890" className="inline-flex items-center gap-3 mt-7 relative z-30">
                        <span className="w-12 h-12 bg-brand-clr text-white text-xl flex items-center justify-center rounded-full"><IoCallOutline /></span>
                        <p className="text-white text-xl font-semibold">+123 3214569871</p>
                    </Link>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="flex lg:justify-end">
                        <img src="img/dream-place-1.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DreamPlace
