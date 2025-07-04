"use client";

import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Header from "../header/Header";
import { menus } from "@/list/headerMenu";
import { useHeroAnimation } from "@/utils/animations";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  const title = "J-Ito's Portfolio";
  useHeroAnimation();

  return (
    <div className="w-screen h-screen overflow-hidden" id="hero">
      <div className="w-screen h-screen relative " id="inner">
        <div className="-translate-y-52" id="header">
          <Header />
        </div>
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
            {menus.map((menu) => {
              return (
                <CarouselItem key={menu.id}>
                  <Link href={menu.link}>
                    <h1 className="hover:scale-125 transition duration-500">
                      {menu.title}
                    </h1>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
