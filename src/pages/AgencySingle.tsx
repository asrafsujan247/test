import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import AgencySingleBody from '../components/agency/AgencySingleBody';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const AgencySingle: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Agencies Single" pageTitle="Agencies Single" pageLink="/agency-single" />
        <AgencySingleBody />
        <FooterTwo />
    </>
  )
}

export default AgencySingle
