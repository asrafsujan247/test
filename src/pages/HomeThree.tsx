import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import BannerThree from '../components/banner/BannerThree'
import Why from '../components/why/Why'
import BestPropertyThree from '../components/best-property/BestPropertyThree'
import CityThree from '../components/city/CityThree'
import DreamPlace from '../components/dream-place/DreamPlace'
import AboutTwo from '../components/about/AboutTwo'
import PopularProperties from '../components/popular-properties/PopularProperties'
import FeedbackTwo from '../components/feedback/FeedbackTwo'
import BlogPostTwo from '../components/blog-post/BlogPostTwo'
import FaqTwo from '../components/faq/FaqTwo'
import FooterThree from '../components/footer/FooterThree'
import Offcanvas from '../components/offcanvas/Offcanvas'

const HomeThree: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <BannerThree />
        <Why />
        <BestPropertyThree />
        <CityThree />
        <DreamPlace />
        <AboutTwo />
        <PopularProperties />
        <FeedbackTwo />
        <BlogPostTwo />
        <FaqTwo />
        <FooterThree />
    </>
  )
}

export default HomeThree
