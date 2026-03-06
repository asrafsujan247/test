import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";

const ContactBlock: React.FC = () => {
  return (
    <section className="pt-20 md:pt-0 pb-20 md:pb-32 lg:pb-48">
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <img src="img/contact.png" alt="image" className="" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="md:pl-16 pt-5 md:pt-28">
                        <h2 className="text-black">Get In Touch</h2>
                    </div>
                    <div className="bg-white p-10 rounded-lg mt-4 md:mt-12 md:-ml-[105px]">
                        <h6 className="text-black text-2xl mb-7">Input Form</h6>
                        <form action="#" className="mt-10">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="name" className='inline-block text-black text-sm font-bold mb-2'>Personal information</label>
                                    <input type="text" placeholder='John' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-6 rounded-lg' />
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <label htmlFor="email" className='inline-block text-black text-sm font-bold mb-2'>Email address</label>
                                    <input type="email" placeholder='john@gmail.com' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-6 rounded-lg' />
                                </div>
                                <div className="col-span-12">
                                    <div className="relative">
                                        <span className="absolute left-2 top-2/4 -translate-y-1/2">
                                            <TfiLocationPin />
                                        </span>
                                        <input type="text" placeholder='New York, United States' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-9 rounded-lg' />
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="number" className='inline-block text-black text-sm font-bold mb-2'>Phone number</label>
                                    <input type="text" placeholder='Phone number' className='!bg-white !border !border-body-clr !border-opacity-20 w-full py-4 px-6 rounded-lg' />
                                </div>
                                <div className="col-span-12">
                                    <label htmlFor="massage" className='inline-block text-black text-sm font-bold mb-2'>Describe your case</label>
                                    <textarea placeholder='Text' className='!bg-white !border !border-body-clr !border-opacity-20 w-full h-[133px] py-4 px-6 rounded-lg'></textarea>
                                </div>
                            </div>
                            <button type='submit' className='city-btn hover:bg-black mt-8'>Get Started Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactBlock