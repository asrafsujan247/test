import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { OffNavItems } from '../localdata/localData';

interface OffcanvasProps {
    offCanvasOpen: boolean;
    setOffCanvasOpen: (value: boolean) => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({offCanvasOpen,setOffCanvasOpen}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);

    }

    return (
        <div className={`offcanvas-menu-wrapper ${offCanvasOpen?"active":""}`} >
            <div className="offcanvas-menu-body relative flex flex-col justify-between gap-10 overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <Link href="/home" className="logo">
                            <img src="img/logo.png" alt=""/>
                        </Link>
                        <button onClick={()=>setOffCanvasOpen(false)} className="w-6 h-6 rounded bg-brand text-white flex items-center justify-center">
                            <RxCross2 />
                        </button>
                    </div>
                    <ul className="flex flex-col list-disc pl-5 mt-6">
                        {
                            OffNavItems.map((OffNavItem, i) => {
                                return (
                                    <li key={i} onClick={() => handleClick(i)} className={`off-dropdown-style off-item-step ${openIndex === i && "show"}`}>
                                        <span className="flex items-center justify-between py-2">
                                            <Link href={OffNavItem.link} className='text-base font-semibold flex items-center gap-2'>{OffNavItem.title}</Link>
                                            {
                                                OffNavItem.subItems && (
                                                    <IoMdArrowDropdown />
                                                )
                                            }
                                        </span>
                                        {OffNavItem.subItems && (
                                            <ul className="list-none flex flex-col gap-1">
                                                {
                                                    OffNavItem.subItems.map((OffsubItem, j) => {
                                                        return (
                                                            <li key={j} className="nav-btn-dropdown-item">
                                                                <Link href={OffsubItem.subItemLink} className='text-sm'>
                                                                    {OffsubItem.subItemTitle}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        )}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <Link href="/add-post" className='city-btn hover:bg-black mt-6'>Add property</Link>
                </div>
            </div>
        </div>
    );
}

export default Offcanvas;
