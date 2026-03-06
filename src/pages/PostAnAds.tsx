import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import AddPost from '../components/properties/AddPost';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const PostAnAds: React.FC = () => {
  const [offCanvasOpen,setOffCanvasOpen]=useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <Breadcrumb title="Post an Ad" pageTitle="Post an ad" pageLink="/add-post" />
        <AddPost />
        <FooterTwo />
    </>
  )
}

export default PostAnAds
