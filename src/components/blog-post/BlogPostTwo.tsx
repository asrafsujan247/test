import React from "react";
import { Link } from '@inertiajs/react';
import { User2 } from "lucide-react";
import { BlogPostDatas } from "../localdata/localData";

const BlogPostTwo: React.FC = () => {
  return (
    <section className="bg-body-clr-3 py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-black">Our Latest News</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {BlogPostDatas.map((BlogPostData) => {
            const { id, title, date, user, img } = BlogPostData;

            return (
              <div className="col-span-12 md:col-span-6 xl:col-span-4" key={id}>
                <div className="blog-post-item bg-white flex flex-col rounded-xl">
                  <img src={img} alt="" className="w-full" />
                  <div className="blog-content p-6">
                    <div className="flex items-center flex-wrap gap-3 sm:gap-6">
                      <p className="text-body-clr text-sm">{date}</p>
                      <Link href="/agent-single" className="flex items-end gap-3">
                        <span className="text-xl">
                          <User2 />
                        </span>
                        <span className="text-sm">{user}</span>
                      </Link>
                    </div>
                    <Link href="/blog-single">
                      <h4 className="text-black text-[18px] font-semibold mt-2 hover:text-brand">
                        {title}
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPostTwo;
