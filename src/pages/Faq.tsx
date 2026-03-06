import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FaqThree from '../components/faq/FaqThree'
import FooterTwo from '../components/footer/FooterTwo'
import Offcanvas from '../components/offcanvas/Offcanvas'

const Faq: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="FAQ" pageTitle="FAQ" pageLink="/faq" />
        <FaqThree />
        <FooterTwo />
    </>
  )
}

export default Faq
