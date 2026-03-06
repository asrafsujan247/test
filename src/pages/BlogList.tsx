import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import BlogListBody from '../components/blog-post/BlogListBody';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const BlogList: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Blog list page" pageTitle="Blog list" pageLink="/blog-list" />
        <BlogListBody />
        <FooterTwo />
    </>
  )
}

export default BlogList
