"use client";

import Header from "../components/Header";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Works = () => {
  const tl = gsap.timeline();
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    tl.fromTo(
      "#title",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    ).fromTo(
      "#form",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 2 },
      "-=0.5"
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-[url('/img/hero.png')] w-screen h-screen bg-cover bg-center">
      <div className="bg-[#f2e5d5]/85 w-screen h-screen overflow-scroll">
        <div className="fixed w-full z-10">
          <Header />
        </div>

        <div className="max-w-[768px] mx-auto pt-[120px] sm:pt-[152px] px-4">
          <h2
            className="text-center font-bold text-3xl sm:text-4xl mb-8 sm:mb-10"
            id="title"
          >
            Contact
          </h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSepmJkcCwStl0FguOYEr3t2HGKmjGDg_il9uXQ9p8MaqLJNrg/viewform?embedded=true"
            width="640"
            height="855"
            className="w-full overflow-hidden pb-10 h-[850px]"
            id="form"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Works;
