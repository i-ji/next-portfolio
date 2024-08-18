"use client";

import Header from "../components/Header";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const About = () => {
  const tl = gsap.timeline();
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    tl.fromTo(
      "#title",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        "#img",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#desc",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#link",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[url('/img/hero.png')] w-screen h-screen bg-cover bg-center bg-fixed">
      <div className="bg-[#f2e5d5]/85 w-screen h-screen overflow-scroll">
        <div className="fixed w-full z-10">
          <Header />
        </div>

        <div className="max-w-[768px] mx-auto pt-[120px] sm:pt-[152px] px-4">
          <h2
            className="text-center font-bold  sm:text-4xl text-3xl mb-8 sm:mb-10"
            id="title"
          >
            About me
          </h2>

          <div className="sm:flex sm:items-center sm:gap-10">
            <Image
              src="/img/icon_resize.png"
              alt="logo"
              width={160}
              height={160}
              className="bg-[#333c5e] rounded-full mx-auto mt-4 mb-8 sm:w-1/5"
              id="img"
            />
            <div id="desc">
              <p className="leading-7 indent-4 tracking-wide">
                現在求職中の駆け出しフロントエンドエンジニアです。バックエンドも少しかじっています。まだまだ覚えたての未熟者ですが、日々学習に励んでまいります。
              </p>
              <p className="leading-7 indent-4 tracking-wide mt-4">
                シームレスでインタラクティブなデザインをできたらかっこいいなと思いつつ、バックエンドも極めていきたいなと考えています。
              </p>
            </div>
          </div>
          <div className="text-center my-8" id="link">
            <Link href={"/profile"}>より詳細なプロフィール</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
