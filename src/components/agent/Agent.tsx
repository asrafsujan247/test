import React, { useState } from "react";

import { IoCallOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import { Link } from '@inertiajs/react';
import { AgentDatas } from "../localdata/localData";
import VideoModal from "../modalVideo/VideoModal";

interface AgentData {
    id: number;
    name: string;
    number: string;
    review: string;
    img: string;
}

const Agent: React.FC = () => {
  const [clickedBtnId, setClickedBtnId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setClickedBtnId((prevId) => (prevId === id ? null : id));
  };

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <section
      id="root"
      className="agent-area bg-black py-20 md:py-32 relative z-10"
    >
      <VideoModal isOpen={isOpen} setOpen={setOpen} />
      <div className="container">
        <div className="mx-auto w-full lg:w-8/12 xl:w-6/12 text-center mb-10">
          <h6 className="text-brand text-base font-poppins">Agent Members</h6>
          <h2 className="text-white mt-3">
            Meet The Team of Real Professionals Agent
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {AgentDatas.slice(0, 4).map((AgentData: AgentData) => {
            const { id, name, number, review, img } = AgentData;
            const isClicked = clickedBtnId === id;

            return (
              <div className="col-span-12 md:col-span-6 xl:col-span-3" key={id}>
                <div className="bg-white p-6 rounded-md">
                  <div className="relative mb-8">
                    <img src={img} alt="image" className="w-full" />
                    <div
                      className={`bg-white p-3 rounded-[50px] inline-flex flex-col items-center gap-3 shadow-city-shadow absolute right-4 -bottom-6 ${
                        isClicked ? "pt-6" : ""
                      }`}
                    >
                      <div
                        className={`inline-flex flex-col items-center gap-3 ${
                          !isClicked ? "hidden" : ""
                        }`}
                      >
                        <a
                          href="https://www.facebook.com/"
                          className="text-gray-3 hover:text-brand"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="https://linkedin.com/"
                          className="text-gray-3 hover:text-brand"
                        >
                          <FaLinkedinIn />
                        </a>
                        <a
                          href="https://linkedin.com/"
                          className="text-gray-3 hover:text-brand"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                      <button
                        onClick={() => handleClick(id)}
                        className={`bg-white w-9 h-9 rounded-full flex items-center justify-center group hover:bg-brand ${
                          isClicked ? "!bg-brand text-white" : ""
                        }`}
                      >
                        <span className="group-hover:text-white">
                          <FiShare2 />
                        </span>
                      </button>
                    </div>
                  </div>
                  <h6 className="text-black text-lg mb-3">{name}</h6>
                  <div className="flex items-center gap-2 mb-4">
                    <span>
                      <IoCallOutline />
                    </span>
                    <p>{number}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 pr-3 border-r border-gray-3">
                      <p className="text-gray-2 text-sm font-bold">4.7</p>
                      <div className="flex items-center gap-1">
                        <span className="text-brand">
                          <FaStar />
                        </span>
                        <span className="text-brand">
                          <FaStar />
                        </span>
                        <span className="text-brand">
                          <FaStar />
                        </span>
                        <span className="text-brand">
                          <FaStar />
                        </span>
                        <span className="text-brand">
                          <FaStar />
                        </span>
                      </div>
                    </div>
                    <div className="pl-3">
                      <p className="text-sm">{review}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap mt-9">
          <div className="w-full lg:w-7/12">
            <div className="flex items-center justify-between gap-5 flex-wrap sm:flex-nowrap lg:pr-14">
              <div className="w-full lg:w-5/12 relative">
                <img src="img/agent-video.png" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[40px] h-[40px] bg-brand-clr-20 flex items-center justify-center p-4 rounded-full animate-ping duration-1000"></div>
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="w-[40px] h-[40px] bg-brand-clr flex items-center justify-center rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="text-white font-bold">
                    <CiPlay1 />
                  </span>
                </button>
              </div>
              <div>
                <p className="font-bold text-white text-sm">
                  Completed projects
                </p>
                <h3 className="text-brand text-[64px] font-bold">85,000+</h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="flex lg:justify-end xl:border-l border-dashed">
              <p className="text-white max-w-[42ch]">
                Far far away, behind the word mountains, far from the countries
                Vokalia parated they Phosfluorescently seize sustainable sources
                with high-payoff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agent;
