import React from 'react';
import {Link} from "@inertiajs/react";
import { IoShareSocial } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BestPropertyDatas } from '../localdata/localData';

const PropertyListBody: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <div className="flex items-center justify-between gap-4">
                <p className="text-black">Showing 1–10 of 13 results</p>
                <div className="flex items-center justify-end gap-2">
                    <p className="text-sm">Sort by:</p>
                    <select name="sort" id="sort" className="!bg-white py-2 px-4 rounded-lg">
                        <option value="sortval">Default</option>
                        <option value="sortval">Default</option>
                        <option value="sortval">Default</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-8">
                {
                    BestPropertyDatas.map((BestPropertyData) => {
                        return (
                            <div className="col-span-12 md:col-span-6 xl:col-span-4" key={BestPropertyData.id}>
                                <div className="group best-property-item rounded-xl overflow-hidden">
                                    <div className="top relative z-10">
                                        <img src={BestPropertyData.img} alt="" className="w-full"/>
                                        <div className="best-property-overlay">
                                            <div className="flex items-center justify-between">
                                                <h6 className="text-white leading-5 bg-black py-1 px-2 rounded-md text-[12px] font-medium">
                                                    {BestPropertyData.dis}
                                                </h6>
                                                <h6 className="text-white leading-5 bg-brand-clr py-1 px-2 rounded-md text-[12px] font-medium">
                                                    {BestPropertyData.allUpdate}
                                                </h6>
                                            </div>
                                            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <Link href="/agent-single" className="flex items-center gap-2">
                                                    <img src={BestPropertyData.agentImg} alt=""/>
                                                    <h5 className="text-white text-sm font-normal">{BestPropertyData.agent}</h5>
                                                </Link>
                                                <div className="flex items-center gap-1">
                                                    <Link href="#" className="w-9 h-9 hover:bg-white-27 rounded-full flex items-center justify-center">
                                                        <span className="text-base text-white"><IoShareSocial /></span>
                                                    </Link>
                                                    <Link href="#" className="w-9 h-9 hover:bg-white-27 rounded-full flex items-center justify-center">
                                                        <span className="text-base text-white"><IoMdHeartEmpty /></span>
                                                    </Link>
                                                    <Link href="#" className="w-9 h-9 hover:bg-white-27 rounded-full flex items-center justify-center">
                                                        <span className="text-base text-white"><MdCompareArrows /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom bg-white p-7">
                                        <div className="flex items-center justify-between flex-wrap">
                                            <div>
                                                <Link href="/pg-single"><h4 className="text-black text-xl font-semibold mb-1 group-hover:text-brand-clr">{BestPropertyData.title}</h4></Link>
                                                <p className="text-body-clr text-base font-normal flex items-center gap-1"><span className="text-body-clr text-base"><CiLocationOn /></span>{BestPropertyData.location}</p>
                                            </div>
                                            <div className="ps-4 py-1 border-l border-border-clr">
                                                <h4 className="text-black text-xl font-semibold">{BestPropertyData.price}</h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between flex-wrap pt-7 border-dashed border-t border-border-clr mt-6">
                                            <div className="flex items-center gap-2">
                                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.14286 1.71429C1.14286 0.7675 1.91036 0 2.85714 0H15.4286C16.375 0 17.1429 0.7675 17.1429 1.71429V6.20714C16.625 5.93571 16.0429 5.76429 15.4286 5.725V5.71429V4.57143C15.4286 3.93929 14.9179 3.42857 14.2857 3.42857H10.8571C10.225 3.42857 9.71429 3.93929 9.71429 4.57143V5.71429H8.57143V4.57143C8.57143 3.93929 8.06071 3.42857 7.42857 3.42857H4C3.36893 3.42857 2.85714 3.93929 2.85714 4.57143V5.71429V5.725C2.24107 5.76429 1.66071 5.93571 1.14286 6.20714V1.71429ZM15.1429 6.85714C16.8786 6.85714 18.2857 8.26429 18.2857 10V15.1429C18.2857 15.6179 17.9036 16 17.4286 16C16.9536 16 16.5714 15.6179 16.5714 15.1429V13.7143H1.71429V15.1429C1.71429 15.6179 1.33036 16 0.857143 16C0.383929 16 0 15.6179 0 15.1429V10C0 8.26429 1.40714 6.85714 3.14286 6.85714H15.1429ZM16.5714 10C16.5714 9.21071 15.9321 8.57143 15.1429 8.57143H3.14286C2.35393 8.57143 1.71429 9.21071 1.71429 10V12H16.5714V10Z" fill="#637381"/>
                                                </svg>
                                                <p className="text-body-clr text-base font-normal">03 Beds</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.25 8.00314H2.49999V2.16753C2.49999 1.89806 2.66406 1.65597 2.90999 1.5544C3.15999 1.45284 3.44499 1.50753 3.63249 1.69887L3.7313 1.79769C3.32499 2.64471 3.46562 3.6594 4.16874 4.39065L4.63249 4.85471C4.44699 5.14487 4.46746 5.52846 4.72105 5.7819C4.86562 5.92815 5.05936 6.00002 5.24999 6.00002C5.44061 6.00002 5.63374 5.92677 5.7803 5.7803L8.78029 2.78031C9.07326 2.48734 9.07326 2.01281 8.78029 1.71969C8.63773 1.57712 8.45405 1.50819 8.26904 1.50825C8.12501 1.50825 7.98011 1.54994 7.85311 1.63112L7.39061 1.16722C6.65936 0.464407 5.64061 0.325657 4.79374 0.734093L4.74687 0.687844C4.26249 0.204063 3.58749 -0.0714986 2.90749 0.016145C1.78468 0.16122 0.999998 1.10034 0.999998 2.16753V8.00189L0.749998 8.00314C0.335937 8.00314 0 8.33783 0 8.75189C0 9.16595 0.335937 9.50251 0.749998 9.50251H0.999998V12.0013C0.999998 12.8488 1.36718 13.6566 2 14.2228V15.2509C2 15.6656 2.33593 16 2.74999 16C3.16406 16 3.49999 15.6644 3.49999 15.2503V14.9496C3.66406 14.9808 3.83187 14.9963 3.99999 15.0002H12C12.1679 14.9963 12.3359 14.9809 12.5 14.9496V15.2503C12.5 15.6656 12.8343 16 13.25 16C13.6656 16 14 15.6656 14 15.25V14.2219C14.6328 13.6556 15 12.8478 15 12.0003V9.50314H15.25C15.664 9.50314 16 9.16658 16 8.75251C16 8.33845 15.6656 8.00314 15.25 8.00314ZM6.32811 2.22784L6.76967 2.6694L5.66874 3.76877L5.22811 3.32815C4.92499 3.02503 4.92499 2.53128 5.22811 2.22784C5.53124 1.92409 6.02499 1.92347 6.32811 2.22784ZM13.5 12C13.5 12.8278 12.8281 13.4997 12 13.4997H3.99999C3.17187 13.4997 2.49999 12.8281 2.49999 12V9.50314H13.5V12Z" fill="#637381"/>
                                                </svg>
                                                <p className="text-body-clr text-base font-normal">03 Baths</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 8.5C15.1031 8.5 16 9.39688 16 10.5V14C16 15.1031 15.1031 16 14 16H2C0.964375 16 0.11275 15.2125 0.0103312 14.2031C0.0035 14.1375 0 14.0688 0 14V2C0 0.895313 0.895313 0 2 0H5.5C6.60313 0 7.5 0.895313 7.5 2V8.5H14ZM6 9V7H4C3.725 7 3.5 6.775 3.5 6.5C3.5 6.225 3.725 6 4 6H6V4H4C3.725 4 3.5 3.775 3.5 3.5C3.5 3.225 3.725 3 4 3H6V2C6 1.72375 5.775 1.5 5.5 1.5H2C1.72375 1.5 1.5 1.72375 1.5 2V14C1.5 14.0188 1.50094 14.0375 1.5025 14.0531C1.52813 14.3031 1.74219 14.5 2 14.5H14C14.275 14.5 14.5 14.275 14.5 14V10.5C14.5 10.225 14.275 10 14 10H13V12C13 12.275 12.775 12.5 12.5 12.5C12.225 12.5 12 12.275 12 12V10H10V12C10 12.275 9.775 12.5 9.5 12.5C9.225 12.5 9 12.275 9 12V10H7V12C7 12.275 6.775 12.5 6.5 12.5C6.225 12.5 6 12.275 6 12V10H4C3.725 10 3.5 9.775 3.5 9.5C3.5 9.225 3.725 9 4 9H6Z" fill="#637381"/>
                                                </svg>
                                                <p className="text-body-clr text-base font-normal">120 sqft</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default PropertyListBody
