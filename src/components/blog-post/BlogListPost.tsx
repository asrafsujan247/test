import React from 'react';
import {Link} from "@inertiajs/react";
import { BlogListDatas } from '../localdata/localData';
import { IoCalendarOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";

const BlogListPost: React.FC = () => {
  return (
    <div className='flex flex-col gap-10'>
        {
            BlogListDatas.map((BlogListData) => {
                const {id, img, type, date, author, title, content} = BlogListData;
                return (
                    <div className="bg-white px-6 pt-6 pb-8 rounded-lg" key={id}>
                        <img src={img} alt="image" className="w-full mb-6" />
                        <div className="flex items-center gap-6 flex-wrap mb-5">
                            <span className="bg-brand bg-opacity-15 px-4 py-2 rounded text-brand text-sm font-semibold">{type}</span>
                            <div className="flex items-center gap-2">
                                <span><IoCalendarOutline /></span>
                                <p className="text-sm">{date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span><LiaUserEditSolid /></span>
                                <p className="text-sm">{author}</p>
                            </div>
                        </div>
                        <h6 className="text-black text-2xl font-semibold mb-4"><Link href="/blog-single">{title}</Link></h6>
                        <p className="mb-7">{content}</p>
                        <Link href="/blog-single" className="city-btn hover:bg-black">Read More</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default BlogListPost
