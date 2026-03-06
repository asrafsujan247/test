import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import PgSingleBody from '../components/properties/PgSingleBody';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const PgSingle: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <PgSingleBody />
        <FooterTwo />
    </>
  )
}

export default PgSingle
