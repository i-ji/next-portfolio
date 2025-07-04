"use client";

import Link from "next/link";
import Image from "next/image";
import PageLayout from "../PageLayout";

const About = () => {
  const subjects = ["#title", "#img", "#desc", "#link"];

  const contentSlot = (
    <>
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
            AI駆動開発に興味があり、bolt.new等を使ったフルスタックエンジニアを目指しています。
          </p>
        </div>
      </div>
      <div className="text-center my-8" id="link">
        <Link href={"/profile"}>より詳細なプロフィール</Link>
      </div>
    </>
  );

  return (
    <PageLayout
      title="About me"
      contentSlot={contentSlot}
      subjects={subjects}
    />
  );
};

export default About;
