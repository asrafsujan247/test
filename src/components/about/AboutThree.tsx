import React from 'react';

const AboutThree: React.FC = () => {
  return (
    <section className="pt-14">
        <div className="container">
            <div className="flex items-center gap-4">
                <div className="w-5/12">
                    <img src="img/btn-img.png" alt="img" className="hidden xl:block" />
                </div>
                <div className="w-7/12 -order-1 xl:order-none">
                    <h2 className="text-black">The perfect place to Live
                    with your family</h2>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-12 mt-28">
            <div className="col-span-12 xl:col-span-6">
                <img src="img/about-3.png" alt="image" className='min-h-[860px] hidden xl:block' />
            </div>
            <div className="col-span-12 xl:col-span-6">
                <div className="bg-black h-full px-14 sm:px-20 pb-20 sm:pb-32 pt-32 xl:flex items-end relative z-0">
                    <div className="bg-white w-11/12 2xl:w-9/12 px-10 py-10 xl:absolute -left-24 -top-24 mb-5 xl:mb-0">
                        <div className="flex items-center gap-3">
                            <img src="img/about-feedback.png" alt="image" />
                            <div>
                                <h6 className="text-black text-lg">Toyful Hasan</h6>
                                <p className="text-sm font-medium">CEO Ctiylands</p>
                            </div>
                        </div>
                        <p className='mt-4 line-clamp-3'>"This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous indignation and dislike men who are so beguiled and demoralized.</p>
                    </div>
                    <div className='relative'>
                        <div className="w-full lg:w-9/12">
                            <h6 className="text-brand text-base font-poppins">Our Story</h6>
                            <h2 className="text-white line-clamp-3 mt-3">The perfect place to Live
                            with your family</h2>
                            <p className="text-body-clr-4 mt-8">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast.
                            <br /> <br />
                            Properties when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized release. </p>
                            <div className="flex justify-start items-start sm:items-center flex-col sm:flex-row gap-3 mt-10">
                                <div className="flex items-center gap-3 sm:pr-9">
                                    <img src="img/about-icon-1.png" alt="" />
                                    <div>
                                        <p className="text-body-clr-4 font-poppins mb-1">Property type:</p>
                                        <h6 className="text-white text-base">Townhome</h6>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:pl-9 sm:border-l border-body-clr-4">
                                    <img src="img/about-icon-2.png" alt="" />
                                    <div>
                                        <p className="text-body-clr-4 font-poppins mb-1">Green spaces:</p>
                                        <h6 className="text-white text-base">Parks</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="img/about-shape.png" alt="" className="absolute bottom-0 right-0 -z-10"></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutThree