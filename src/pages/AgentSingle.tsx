import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import AgentSingleBody from '../components/agent/AgentSingleBody'
import FooterTwo from '../components/footer/FooterTwo'
import Offcanvas from '../components/offcanvas/Offcanvas'

const AgentSingle: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Agent Single" pageTitle="Agent Single" pageLink="/agents-list" />
        <AgentSingleBody />
        <FooterTwo />
    </>
  )
}

export default AgentSingle
