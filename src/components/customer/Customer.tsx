import React from 'react'

const Customer: React.FC = () => {
  return (
    <section className='bg-white pt-20 md:pt-32 pb-20 md:pb-32 lg:pb-48'>
        <div className="container">
            <div className="flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap mb-10">
                <div className="w-full lg:w-6/12">
                    <h2 className="text-black">Customers from Across
                    the World</h2>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="flex items-center justify-end gap-4">
                        <img src="img/customer-logo.png" alt="image" />
                        <h6 className="text-black text-[18px] font-semibold">200+ Projects</h6>
                    </div>
                </div>
            </div>
            <div className="lg:border-y border-border-clr">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="w-full h-full flex items-center mb-10 lg:mb-0">
                            <img src="img/customer-1.png" alt="image" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-4">
                                <div className="px-12 py-16 border border-border-clr">
                                    <p className="line-clamp-2 max-w-[15ch]">Satisfied clients all
                                    over the world</p>
                                    <h5 className="text-black text-[64px] font-bold">5M</h5>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-8">
                                <div className="px-12 py-16 border border-border-clr">
                                    <p className="line-clamp-2 max-w-[15ch]">Property sale on
                                    marketplace</p>
                                    <h5 className="text-black text-[64px] font-bold">500M+</h5>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className="px-12 py-16 border border-border-clr">
                                    <p className="line-clamp-1">Customer Satisfaction</p>
                                    <h5 className="text-black text-[64px] font-bold">99%</h5>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className="px-12 py-16 border border-border-clr">
                                    <p className="line-clamp-1">Yearly Appreciation</p>
                                    <h5 className="text-black text-[64px] font-bold">10%</h5>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className="px-12 py-16 border border-border-clr">
                                    <p className="line-clamp-1">Perfectly dealed project</p>
                                    <h5 className="text-black text-[64px] font-bold">20M</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customer