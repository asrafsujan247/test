import React from 'react';
import BlogSidebar from '../sidebar/BlogSidebar';
import BlogListPost from './BlogListPost';

const BlogListBody: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                    <BlogSidebar />
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <BlogListPost />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogListBody