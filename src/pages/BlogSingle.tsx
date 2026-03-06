import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import BlogSingleBody from '../components/blog-post/BlogSingleBody'
import FooterTwo from '../components/footer/FooterTwo'
import Offcanvas from '../components/offcanvas/Offcanvas'

const BlogSingle: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Blog deatils page" pageTitle="Blog list" pageLink="/blog-list" />
        <BlogSingleBody />
        <FooterTwo />
    </>
  )
}

export default BlogSingle
