import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Offcanvas from '../components/offcanvas/Offcanvas'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import PropertyListBody from '../components/properties/PropertyListBody'
import FooterTwo from '../components/footer/FooterTwo'
import Map from '../components/map/Map'

const PropertyListMap: React.FC = () => {
    const [offCanvasOpen,setOffCanvasOpen]=useState(false)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Properties List Map" pageTitle="Properties List" pageLink="/property-list" />
        <Map className="h-[581px]" MapOverlay="mapoverlay" />
        <PropertyListBody />
        <FooterTwo />
    </>
  )
}

export default PropertyListMap
