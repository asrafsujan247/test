import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import AboutThree from '../components/about/AboutThree';
import Customer from '../components/customer/Customer';
import CtaTwo from '../components/cta/CtaTwo'
import Agent from '../components/agent/Agent';
import Faq from '../components/faq/Faq';
import Testimonial from '../components/testimonial/Testimonial';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const About: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="About Company" pageTitle="About us" pageLink="/about" />
        <AboutThree />
        <Customer />
        <CtaTwo />
        <Agent />
        <Faq />
        <Testimonial />
        <FooterTwo />
    </>
  )
}

export default About
