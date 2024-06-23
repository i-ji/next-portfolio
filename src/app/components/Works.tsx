"use client";

import Header from "../components/Header";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
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
    )
      .fromTo(
        "#work1",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#work2",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#work3",
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

        <div className="max-w-[768px] mx-auto pt-[120px] sm:pt-[152px] px-4 text-sm">
          <h2
            className="text-center font-bold text-3xl sm:text-4xl mb-8 sm:mb-10"
            id="title"
          >
            Works
          </h2>

          <div className="md:flex md:flex-wrap md:justify-between">
            <div className="w-full md:w-[49%] mb-2" id="work1">
              <Dialog>
                <div className="text-center">
                  <DialogTrigger>
                    <Image
                      src="/img/work1.jpeg"
                      alt="logo"
                      width={360}
                      height={360}
                      className="w-full object-cover"
                    />
                  </DialogTrigger>
                </div>
                <DialogContent className="bg-white/95">
                  <DialogHeader>
                    <Link
                      href={`https://react-slotgame.vercel.app/`}
                      target="_blank"
                    >
                      <Image
                        src="/img/work1.jpeg"
                        alt="logo"
                        width={360}
                        height={360}
                        className="w-full object-cover"
                      />
                    </Link>
                    <DialogTitle className="text-center text-2xl my-1">
                      スロットゲーム
                    </DialogTitle>
                    <DialogDescription className="text-center font-thin">
                      React/TailwindCSS
                    </DialogDescription>
                  </DialogHeader>
                  <p>
                    講義で学んだスロットマシンをReactで書き換えました。オリジナルで機能を追加して本格的なスロットゲームに仕立てました。
                  </p>

                  <Link
                    href={`https://github.com/i-ji/dot-react-slot`}
                    target="_blank"
                    className="text-3xl ml-auto"
                  >
                    <FaGithub />
                  </Link>
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-full md:w-[49%] mb-2" id="work2">
              <Dialog>
                <div className="text-center">
                  <DialogTrigger>
                    <Image
                      src="/img/work2.jpeg"
                      alt="logo"
                      width={360}
                      height={360}
                      className="w-full object-cover"
                    />
                  </DialogTrigger>
                </div>
                <DialogContent className="bg-white/95">
                  <DialogHeader>
                    <Image
                      src="/img/work2.jpeg"
                      alt="logo"
                      width={360}
                      height={360}
                      className="w-full object-cover"
                    />
                    <DialogTitle className="text-center text-2xl my-1">
                      Twitter風SNS
                    </DialogTitle>
                    <DialogDescription className="text-center font-thin">
                      API: Laravel <br />
                      View: Next.js/TailwindCSS
                    </DialogDescription>
                  </DialogHeader>
                  <p>
                    バックエンド部分をLaravel,フロンドエンド部分をNext.jsで用いたフルスタックアプリケーションです。
                  </p>
                  <p className="text-sm">
                    ※現在、AWSによるインフラ構築の勉強中なため、デプロイまで少々お待ちください。
                  </p>

                  <div className="flex items-center gap-2 ml-auto">
                    <Link
                      href={`https://github.com/i-ji/laravel-next-sns`}
                      target="_blank"
                      className="text-3xl text-center"
                    >
                      <span className="text-sm font-thin">View</span>

                      <FaGithub />
                    </Link>
                    <Link
                      href={`https://github.com/i-ji/laravel-next-sns-back-end`}
                      target="_blank"
                      className="text-3xl text-center"
                    >
                      <span className="text-sm font-thin">API</span>

                      <FaGithub />
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-full md:w-[49%] mb-2" id="work3">
              <Dialog>
                <div className="text-center">
                  <DialogTrigger>
                    <Image
                      src="/img/work3.jpeg"
                      alt="logo"
                      width={360}
                      height={360}
                      className="w-full object-cover"
                    />
                  </DialogTrigger>
                </div>
                <DialogContent className="bg-white/95">
                  <DialogHeader>
                    <Link
                      href={`https://nextjs-pokequiz.vercel.app/`}
                      target="_blank"
                    >
                      <Image
                        src="/img/work3.jpeg"
                        alt="logo"
                        width={360}
                        height={360}
                        className="w-full object-cover"
                      />
                    </Link>
                    <DialogTitle className="text-center text-2xl my-1">
                      ポケモン中国語クイズ
                    </DialogTitle>
                    <DialogDescription className="text-center font-thin">
                      Next.js/TypeScript/TailwindCSS
                    </DialogDescription>
                  </DialogHeader>
                  <p>
                    pokeAPIを使用して、中国語のオリジナルクイズを作成しました。
                  </p>

                  <Link
                    href={`https://github.com/i-ji/nextjs-pokequiz`}
                    target="_blank"
                    className="text-3xl ml-auto"
                  >
                    <FaGithub />
                  </Link>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
