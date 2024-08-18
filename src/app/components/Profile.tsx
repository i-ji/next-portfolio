"use client";

import Header from "../components/Header";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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
        "#table",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        "#back",
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
            Profile
          </h2>

          <div className="pb-10">
            <Table id="table" className="bg-white/95 text-sm text-center">
              <TableBody>
                <TableRow>
                  <TableCell className="bg-gray-200 w-1/4">生年月日</TableCell>
                  <TableCell className="w-1/4">1997/9/1</TableCell>
                  <TableCell className="bg-gray-200 w-1/4">血液型</TableCell>
                  <TableCell className="w-1/4">O型</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200 w-1/4">出身地</TableCell>
                  <TableCell className="w-1/4">大阪府泉佐野市</TableCell>
                  <TableCell className="bg-gray-200 w-1/4">現住地</TableCell>
                  <TableCell className="w-1/4">京都市</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200 w-1/4">身長</TableCell>
                  <TableCell className="w-1/4">176cm</TableCell>
                  <TableCell className="bg-gray-200 w-1/4">体重</TableCell>
                  <TableCell className="w-1/4">60kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">趣味</TableCell>
                  <TableCell>マラソン/アニメ鑑賞</TableCell>
                  <TableCell className="bg-gray-200">特技</TableCell>
                  <TableCell>webアプリ制作</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">好きな食べ物</TableCell>
                  <TableCell>うどん</TableCell>
                  <TableCell className="bg-gray-200">嫌いな食べ物</TableCell>
                  <TableCell>えび/豆/きのこ</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">好きなスポーツ</TableCell>
                  <TableCell>マラソン/駅伝/野球</TableCell>
                  <TableCell className="bg-gray-200">好きな動物</TableCell>
                  <TableCell>猫</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">好きな漫画</TableCell>
                  <TableCell>ONE PIECE</TableCell>
                  <TableCell className="bg-gray-200">好きな本</TableCell>
                  <TableCell>もものかんづめ - さくらももこ</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">好きな映画</TableCell>
                  <TableCell>フォレスト・ガンプ</TableCell>
                  <TableCell className="bg-gray-200">
                    好きなアーティスト
                  </TableCell>
                  <TableCell>Avicii</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">好きな曲</TableCell>
                  <TableCell>I Want It That Way - Backstreet Boys</TableCell>
                  <TableCell className="bg-gray-200">
                    好きなテレビ番組
                  </TableCell>
                  <TableCell>嗚呼!! みんなの動物園</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">好きなゲーム</TableCell>
                  <TableCell>ポケモン (第４世代 ~ 第６世代)</TableCell>
                  <TableCell className="bg-gray-200">
                    好きなチェーン店
                  </TableCell>
                  <TableCell>丸亀製麺/なか卯</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">得意料理</TableCell>
                  <TableCell>焼きうどん</TableCell>
                  <TableCell className="bg-gray-200">
                    最近ハマっていること
                  </TableCell>
                  <TableCell>怪談/ホラー映画鑑賞</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">宝物</TableCell>
                  <TableCell>京都マラソン2024の完走メダル</TableCell>
                  <TableCell className="bg-gray-200">今欲しいもの</TableCell>
                  <TableCell>原付2種</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">尊敬する人</TableCell>
                  <TableCell>たむじょー</TableCell>
                  <TableCell className="bg-gray-200">座右の銘</TableCell>
                  <TableCell>為せば成る</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">
                    人生のバイブル本
                  </TableCell>
                  <TableCell>尊師の兵法</TableCell>
                  <TableCell className="bg-gray-200">
                    自分を一言で言うと
                  </TableCell>
                  <TableCell>スーパー天邪鬼</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="bg-gray-200">今興味あること</TableCell>
                  <TableCell>エッセイ/トレイル</TableCell>
                  <TableCell className="bg-gray-200">将来の目標</TableCell>
                  <TableCell>fire</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="text-center pb-20 text-lg" id="back">
            <Link href={"/about"}>戻る</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
