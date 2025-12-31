"use client";

import { starTrail } from "@/utils";
import Script from "next/script";
import { useEffect } from "react";

export default function Prizes() {
  useEffect(() => {
    starTrail("prize-container");
  }, []);

  return (
    <section className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-150 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24">
      <div className="pointer-events-none flex w-full flex-col gap-4 text-center lg:gap-8">
        <h2 className="z-[-2] text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          alright, what are the prizes?
        </h2>
        <ul className="pointer-events-auto grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
          {prizes.map((prize, k) => (
            <li
              className={`${prize.color} relative z-[1] flex aspect-square cursor-money flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-900 bg-gradient-to-br transition duration-300 ease-in-out hover:-translate-y-1 hover:brightness-[130%] [&>#place]:hover:text-white/20
              `}
              key={k}
            >
              <p
                id="place"
                draggable={false}
                className={`absolute scale-150 select-none font-inter text-6xl font-semibold text-white/10 transition duration-300 ease-in-out lg:text-7xl xl:text-8xl`}
              >
                {prize.place}
              </p>
              <p className="z-[1] text-3xl font-semibold text-neutral-200 antialiased transition duration-300 ease-in-out lg:text-4xl 2xl:text-5xl">
                ${prize.value.toLocaleString("en-us")}
              </p>
            </li>
          ))}
        </ul>
        <ul className="pointer-events-auto flex w-full flex-col gap-4">
          {specialPrizes.map((prize, k) => (
            <li
              className={`${prize.color} relative z-[1] flex cursor-money flex-row items-center justify-between gap-6 overflow-hidden rounded-xl border border-neutral-900 bg-gradient-to-br px-4 py-3 text-left transition duration-300 ease-in-out hover:-translate-y-1 hover:brightness-[130%] lg:px-6 [&>#place]:hover:text-neutral-100
              `}
              key={k}
            >
              <p
                id="place"
                className="z-[1] text-2xl font-semibold tracking-tight text-neutral-200 antialiased transition duration-300 ease-in-out lg:text-3xl 2xl:text-4xl"
              >
                {prize.place}
              </p>
              <p className="z-[1] text-2xl font-semibold text-neutral-200 antialiased transition duration-300 ease-in-out lg:text-3xl 2xl:text-4xl">
                ${prize.value.toLocaleString("en-us")}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="prize-container"
        className={`absolute inset-0 z-[-1] w-full cursor-wand overflow-hidden bg-transparent`}
      />
      <Script
        src="https://kit.fontawesome.com/c0acf637b0.js"
        crossOrigin="anonymous"
      />
    </section>
  );
}

const prizes = [
  {
    place: "1",
    value: 4000,
    color: "from-[#C5AB50] via-[#AC933E] to-[#FBF8AE]",
  },
  {
    place: "2",
    value: 3000,
    color: "from-[#B4B9BE] via-[#716F71] to-[#A8A9AD]",
  },
  {
    place: "3",
    value: 2000,
    color: "from-[#A97142] via-[#6E3A06] to-[#B08D57]",
  },
  {
    place: "4",
    value: 1000,
    color: "from-[#DC826B] via-[#CB6A52] to-[#FFE4BB]",
  },
];

const specialPrizes = [
  {
    place: "honorable mention",
    value: 500,
    color: "from-[#343a40] via-[#212529] to-[#495057]",
  },
  {
    place: "most unique concept",
    value: 500,
    color: "from-[#f27059] via-[#f25c54] to-[#f4845f]",
  },
  {
    place: "most responsive ui design",
    value: 500,
    color: "from-[#9f86c0] via-[#5e548e] to-[#e0b1cb]",
  },
  {
    place: "most innovative frontend",
    value: 500,
    color: "from-[#1e6091] via-[#184e77] to-[#1a759f]",
  },
  {
    place: "most innovative backend",
    value: 500,
    color: "from-[#800f2f] via-[#590d22] to-[#a4133c]",
  },
  {
    place: "people's choice award",
    value: 250,
    color: "from-[#065a60] via-[#0b525b] to-[#006466]",
  },
];
