import React from "react";
import { Link } from '@inertiajs/react';
import { User2 } from "lucide-react";
import { BlogPostDatas } from "../localdata/localData";

const BlogPost: React.FC = () => {
  return (
    <section className="blog-post-area py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-9">
          <h2 className="text-black">
            Latest News <span className="text-brand-clr">News</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {BlogPostDatas.map((BlogPostData) => {
            const { id, title, date, user, img } = BlogPostData;

            return (
              <div className="col-span-12 md:col-span-6 xl:col-span-4" key={id}>
                <div className="blog-post-item flex flex-col items-end">
                  <img src={img} alt="" className="rounded-xl w-full" />
                  <div className="blog-content w-11/12 bg-white p-6 rounded-lg relative -mt-14">
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

export default BlogPost;
