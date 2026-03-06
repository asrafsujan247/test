import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Map from '../components/map/Map'
import ContactBlock from '../components/contact/ContactBlock'
import CtaTwo from '../components/cta/CtaTwo'
import Address from '../components/contact/Address'
import FooterTwo from '../components/footer/FooterTwo'
import Offcanvas from '../components/offcanvas/Offcanvas'

const Contact: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Contact us" pageTitle="Contact us" pageLink="/contact" />
        <Map className="h-[581px]" MapOverlay="mapoverlay" />
        <ContactBlock />
        <CtaTwo />
        <Address />
        <FooterTwo />
    </>
  )
}

export default Contact
