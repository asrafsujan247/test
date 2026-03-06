import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import BannerTwo from '../components/banner/BannerTwo'
import CitySlider from '../components/city/CitySlider'
import IndustriesTypeSlider from '../components/industries-type/IndustriesTypeSlider'
import About from '../components/about/About'
import PortfolioProject from '../components/portfolio/PortfolioProject'
import CtaTwo from '../components/cta/CtaTwo'
import BestPropertyTwo from '../components/best-property/BestPropertyTwo'
import Agent from '../components/agent/Agent'
import Faq from '../components/faq/Faq'
import Testimonial from '../components/testimonial/Testimonial'
import FooterTwo from '../components/footer/FooterTwo'
import Offcanvas from '../components/offcanvas/Offcanvas'

const HomeTwo: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <BannerTwo />
        <CitySlider />
        <IndustriesTypeSlider />
        <About />
        <PortfolioProject />
        <CtaTwo />
        <BestPropertyTwo />
        <Agent />
        <Faq />
        <Testimonial />
        <FooterTwo />
    </>
  )
}

export default HomeTwo
