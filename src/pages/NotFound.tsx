import React, { useEffect, useState } from 'react';
import {Link} from '@inertiajs/react';
import Header from '../components/header/Header';
import FooterTwo from '../components/footer/FooterTwo';
import Offcanvas from '../components/offcanvas/Offcanvas';

const NotFound: React.FC = () => {
    const [offCanvasOpen,setOffCanvasOpen]=useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Header setOffCanvasOpen={setOffCanvasOpen}/>
        <Offcanvas offCanvasOpen={offCanvasOpen}  setOffCanvasOpen={setOffCanvasOpen}/>
        <section className="pt-36 pb-20 md:pb-32">
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-full lg:w-8/12">
                        <div className="text-center">
                            <img src="img/404.png" alt="image" className="w-full" />
                            <h2 className="text-black mt-8">Oops! Page Can't found</h2>
                            <Link href="/" className="city-btn hover:bg-black mt-10">Go to Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterTwo />
    </>
  )
}

export default NotFound
