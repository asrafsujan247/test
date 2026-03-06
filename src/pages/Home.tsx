import React, { useEffect, useState } from 'react'
import Banner from '../components/banner/Banner'
import Place from '../components/place/Place'
import Card from '../components/card/Card'
import City from '../components/city/City'
import BestProperty from '../components/best-property/BestProperty'
import IndustriesType from '../components/industries-type/IndustriesType'
import BestSelling from '../components/best-selling/BestSelling'
import ReadyProperty from '../components/ready-property/ReadyProperty'
import Cta from '../components/cta/Cta'
import Feedback from '../components/feedback/Feedback'
import BlogPost from '../components/blog-post/BlogPost'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Offcanvas from '../components/offcanvas/Offcanvas'

const Home: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header setOffCanvasOpen={setOffCanvasOpen}/>
      <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
      <Banner />
      <Card />
      <Place />
      <City />
      <BestProperty />
      <IndustriesType />
      <BestSelling />
      <ReadyProperty />
      <Cta />
      <Feedback />
      <BlogPost />
      <Footer />
    </>
  )
}

export default Home
