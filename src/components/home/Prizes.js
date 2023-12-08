"use client";

import { metadata } from "@/data/metadata";
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
        <h2 className="pointer text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          alright, but what can I win?
        </h2>
        <ul className="pointer-events-auto grid w-full grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-5">
          {metadata.prizes.map((prize, k) => (
            <li
              className={`${prize.color} relative z-[1] flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-900 bg-gradient-to-br transition duration-300 ease-in-out hover:-translate-y-2 hover:brightness-[130%] [&>#place]:hover:text-white/20
              `}
              key={k}
            >
              <p
                id="place"
                className={`font-inter absolute scale-150 text-6xl font-semibold text-white/10 transition duration-300 ease-in-out lg:text-7xl xl:text-8xl`}
              >
                {prize.place}
              </p>
              <p className="z-[1] text-3xl font-semibold text-neutral-200 antialiased transition duration-300 ease-in-out lg:text-4xl 2xl:text-5xl">
                {prize.prize}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="prize-container"
        className={`absolute inset-0 z-[-1] w-full cursor-wand overflow-hidden bg-transparent`}
      ></div>
      <Script src="https://kit.fontawesome.com/1ee8f271b9.js" />
    </section>
  );
}

//
