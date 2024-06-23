"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Autoplay from "embla-carousel-autoplay";
import Header from "./Header";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const title = "J-Ito's Portfolio";
  const tl = gsap.timeline();
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    tl.fromTo(
      "#hero",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        backgroundImage: 'url("/img/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    )
      .to("#inner", {
        backgroundColor: "rgba(242,229,213,0.85)",
        duration: 2,
        ease: "power4.out",
      })
      .to(
        "#title",
        {
          opacity: 1,
          stagger: 0.2,
          ease: "bounce.out",
          transform: "translateY(-50%)",
        },
        "-=4"
      )
      .to("#title", { color: "black", duration: 2 }, "-=2")
      .to("#header", {
        transform: " translateY(0)",
        display: "block",
        duration: 1,
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen" id="hero">
      <div className="w-screen h-screen relative " id="inner">
        <div className="-translate-y-52" id="header">
          <Header />
        </div>
        {/* <h1
          className="font-bold tracking-widest text-white absolute text-3xl right-[calc(50%_-_138px)] 
          sm:text-4xl sm:right-[calc(50%_-_166px)] top-1/2 opacity-0 -translate-y-52"
          // className="font-bold tracking-widest text-3xl fixed top-1/2 right-[calc(50%_-_139px)] opacity-0 -translate-y-52 text-white"
          id="title"
        >
          {title}
        </h1> */}
        <Carousel
          id="title"
          className="font-bold tracking-widest text-white absolute text-3xl right-[calc(50%_-_324px)] 
          sm:text-4xl sm:right-[calc(50%_-_382px)] top-1/2 opacity-0 -translate-y-52 text-center max-w-[768px]"
          plugins={[
            Autoplay({
              delay: 7500,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <h1>{title}</h1>
            </CarouselItem>
            <CarouselItem>
              <Link href={"/about"}>
                <h1 className="hover:scale-125 transition duration-500">
                  About me
                </h1>
              </Link>
            </CarouselItem>
            <CarouselItem>
              <Link href={"/skill"}>
                <h1 className="hover:scale-125 transition duration-500">
                  Skill
                </h1>
              </Link>
            </CarouselItem>
            <CarouselItem>
              <Link href={"/works"}>
                <h1 className="hover:scale-125 transition duration-500">
                  Works
                </h1>
              </Link>
            </CarouselItem>
            <CarouselItem>
              <Link href={"/contact"}>
                <h1 className="hover:scale-125 transition duration-500">
                  Contact
                </h1>
              </Link>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
