"use client";

import { metadata } from "@/data/metadata";
import { starTrail } from "@/utils";
import Script from "next/script";
import { useEffect } from "react";

export default function Prizes() {
  useEffect(() => {
    starTrail("prize-container");
  }, []);

  const colors = {
    1: "from-[#C5AB50] via-[#AC933E] to-[#FBF8AE]",
    2: "from-[#716F71] via-[#A8A9AD] to-[#B4B9BE]",
    3: "from-[#804A00] via-[#895E1A] to-[#B08D57]",
    4: "from-[#CB6A52] via-[#DC826B] to-[#EEA393]",
    5: "from-[#3F3F3D] via-[#63645D] to-[#858885]",
  };
  return (
    <section className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-125 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24">
      <div className="pointer-events-none flex w-full flex-col gap-2 text-center lg:gap-8">
        <h2 className="pointer text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          alright, but what can I win?
        </h2>
        <ul className="pointer-events-auto grid w-full grid-cols-5 gap-8">
          {metadata.prizes.map((prize, i) => (
            <li
              className={`${
                colors[prize.place]
              } relative z-[1] flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-900 bg-gradient-to-br transition duration-300 ease-in-out hover:-translate-y-2 hover:brightness-125
              `}
              key={i}
            >
              <p
                className={`absolute translate-y-2.5 scale-150 text-8xl font-semibold text-white/10 `}
              >
                {prize.place}
              </p>
              <p className="z-[1] text-sm font-semibold tracking-tight text-neutral-300 transition duration-300 ease-in-out md:text-base lg:text-lg 2xl:text-5xl">
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
