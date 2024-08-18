"use client";

import Header from "../components/Header";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Work from "./Work";

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
      )
      .fromTo(
        "#work4",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#work5",
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
            <Work
              img={"work1"}
              url={"https://react-slotgame.vercel.app/"}
              title={"スロットゲーム"}
              skill={"React/TailwindCSS"}
              desc={
                "講義で学んだスロットマシンをReactで書き換えました。オリジナルで機能を追加して本格的なスロットゲームに仕立てました。"
              }
              gitHubUrl={"https://github.com/i-ji/dot-react-slot"}
            />

            <Work
              img={"work2"}
              url={"https://next-sns-supabase.vercel.app/"}
              title={"Twitter風SNS"}
              skill={"Next.js/TailwindCSS"}
              desc={
                "フロンドエンド部分をNext.js,バックエンド部分をsupabaseを使ったフルスタックアプリケーションです。今後さらに機能を拡張していく予定です。"
              }
              gitHubUrl={"https://github.com/i-ji/next-sns-supabase"}
            />

            <Work
              img={"work3"}
              url={"https://nextjs-pokequiz.vercel.app/"}
              title={"ポケモン中国語クイズ"}
              skill={"Next.js/TypeScript/TailwindCSS"}
              desc={
                "pokeAPIを使用して、中国語のオリジナルクイズを作成しました。"
              }
              gitHubUrl={"https://github.com/i-ji/nextjs-pokequiz"}
            />

            <Work
              img={"work4"}
              url={"https://nextjs-pokezukan.vercel.app/"}
              title={"ポケモン図鑑"}
              skill={"Next.js/TypeScript/TailwindCSS"}
              desc={"pokeAPIを使用して、ポケモン図鑑を作成しました。"}
              gitHubUrl={"https://github.com/i-ji/nextjs-pokezukan"}
            />

            <Work
              img={"work5"}
              url={"https://next-note-blog.vercel.app/"}
              title={"ブログ"}
              skill={"Next.js/TypeScript/TailwindCSS"}
              desc={
                "noteAPIを使用して、ブログ風にしました。ダミーとしてランニングYoutuberのたむじょーさんのnoteを使用させてもらっています。"
              }
              gitHubUrl={"https://github.com/i-ji/next-note-blog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
