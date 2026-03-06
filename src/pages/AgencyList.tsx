import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import AgencyBody from '../components/agency/AgencyBody';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const AgencyList: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Agencies List" pageTitle="Agencies List" pageLink="/agency-list" />
        <AgencyBody />
        <FooterTwo />
    </>
  )
}

export default AgencyList
