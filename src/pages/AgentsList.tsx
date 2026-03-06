import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import AgentList from '../components/agent/AgentList'
import WhyTwo from '../components/why/WhyTwo'
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas'

const AgentsList: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Agent list" pageTitle="Agent list" pageLink="/agents-list" />
        <AgentList />
        <WhyTwo />
        <FooterTwo />
    </>
  )
}

export default AgentsList
