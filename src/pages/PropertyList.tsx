import React, { useEffect, useState } from 'react'
import Offcanvas from '../components/offcanvas/Offcanvas'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Header from '../components/header/Header'
import PropertyListBody from '../components/properties/PropertyListBody'
import FooterTwo from '../components/footer/FooterTwo'

const PropertyList: React.FC = () => {
    const [offCanvasOpen,setOffCanvasOpen]=useState(false)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Properties List" pageTitle="Properties List" pageLink="/property-list" />
        <PropertyListBody />
        <FooterTwo />
    </>
  )
}

export default PropertyList
