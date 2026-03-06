import React from "react";
import { Link } from '@inertiajs/react';

const Place: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
          <div className="w-full lg:w-5/12">
            <img src="/img/place.png" alt="" className="max-w-full" />
          </div>
          <div className="w-full lg:w-6/12">
            <h2 className="text-black mb-5 lg:mb-9">
              The Perfect Place Live With{" "}
              <span className="text-brand-clr">Your Family</span>
            </h2>
            <p className="text-base font-normal">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarks grove right at the coast.
            </p>
            <div className="flex items-center gap-6 mt-6">
              <div>
                <h5 className="text-black text-2xl font-bold">34,000</h5>
                <p className="text-base font-normal">Client satisfaction</p>
              </div>
              <div>
                <h5 className="text-black text-2xl font-bold">5,000</h5>
                <p className="text-base font-normal">Total apartments </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="city-btn text-white hover:bg-black mt-9"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
      <img
        src="img/place-shape-1.png"
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
      <img
        src="img/place-shape-2.png"
        alt=""
        className="absolute bottom-0 left-0 -z-10"
      />
    </section>
  );
};

export default Place;
