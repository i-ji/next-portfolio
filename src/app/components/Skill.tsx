"use client";

import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { gsap } from "gsap";

const Skill = () => {
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
    )
      .fromTo(
        "#skill1",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#skill2",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#skill3",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
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
            Skill
          </h2>
          <Card className="bg-white/95 shadow" id="skill1">
            <CardHeader>
              <CardTitle>得意な言語</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">HTML/CSS/JavaScript/tailwindcss</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow mt-5" id="skill2">
            <CardHeader>
              <CardTitle>ある程度使いこなせる言語</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">React/TypeScript/PHP</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow mt-5" id="skill3">
            <CardHeader>
              <CardTitle>習得中の言語</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Next.js/Laravel</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skill;
