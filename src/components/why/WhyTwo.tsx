import React from 'react';

const WhyTwo: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32">
        <div className="container">
            <div className="text-center mb-8">
                <h2 className="text-black">Why Choose a Cityblok Agent?</h2>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="bg-white border border-body-clr border-opacity-20 p-6 rounded-lg">
                        <div className="w-[70px] h-[70px] p-3 border border-dashed border-gray-3 rounded-full flex items-center justify-center mb-5">
                            <img src="img/why-icon-1.png" alt="icon" className="h-full w-full" />
                        </div>
                        <h6 className="text-black text-base mb-3">The happiest customers</h6>
                        <p className="text-sm">Customer satisfaction is 50% higher than our competitors, thanks to our chnology and local agents.</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="bg-white border border-body-clr border-opacity-20 p-6 rounded-lg">
                        <div className="w-[70px] h-[70px] p-3 border border-dashed border-gray-3 rounded-full flex items-center justify-center mb-5">
                            <img src="img/why-icon-2.png" alt="icon" className="h-full w-full" />
                        </div>
                        <h6 className="text-black text-base mb-3">The best service a better price</h6>
                        <p className="text-sm">Customer satisfaction is 50% higher than our competitors, thanks to our chnology and local agents.</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="bg-white border border-body-clr border-opacity-20 p-6 rounded-lg">
                        <div className="w-[70px] h-[70px] p-3 border border-dashed border-gray-3 rounded-full flex items-center justify-center mb-5">
                            <img src="img/why-icon-2.png" alt="icon" className="h-full w-full" />
                        </div>
                        <h6 className="text-black text-base mb-3">Local agents to guide you</h6>
                        <p className="text-sm">Redfin Agents know your neighborhood and have an experienced support team to give you the best experience. Completely streamline transparent communities htmlFor performance based internal or "organic" sources.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyTwo