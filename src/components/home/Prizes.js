"use client";

import { metadata } from "@/data/metadata";
import Script from "next/script";
import { useEffect } from "react";

export default function Prizes() {
  if (typeof window !== "undefined") {
    let start = new Date().getTime();
    // let container = document.body;
    let container = document.getElementById("prize-container");
    console.log(container);
    const originPosition = { x: 0, y: 0 };

    const last = {
      starTimestamp: start,
      starPosition: originPosition,
      mousePosition: originPosition,
    };

    const config = {
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 150,
      minimumDistanceBetweenStars: 50,
      colors: [
        "255 190 11",
        "251 86 7",
        "255 0 110",
        "131 56 236",
        "58 134 255",
        "255 255 255",
        "14 173 105",
      ],
      sizes: ["1.4rem", "1rem", "0.6rem"],
      animations: ["fall-1", "fall-2", "fall-3"],
    };

    let count = 0;

    const rand = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = (items) => items[rand(0, items.length - 1)];

    const withUnit = (value, unit) => `${value}${unit}`,
      px = (value) => withUnit(value, "px"),
      ms = (value) => withUnit(value, "ms");

    const calcDistance = (a, b) => {
      const diffX = b.x - a.x,
        diffY = b.y - a.y;

      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };

    const calcElapsedTime = (start, end) => end - start;

    const appendElement = (element) => container.appendChild(element),
      removeElement = (element, delay) =>
        setTimeout(() => container.removeChild(element), delay);

    const createStar = (position) => {
      const star = document.createElement("span"),
        color = selectRandom(config.colors);

      star.className = "star fa-solid fa-sparkle";

      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
      star.style.animationName = config.animations[count++ % 3];
      star.style.starAnimationDuration = ms(config.starAnimationDuration);

      appendElement(star);

      removeElement(star, config.starAnimationDuration);
    };

    const updateLastStar = (position) => {
      last.starTimestamp = new Date().getTime();

      last.starPosition = position;
    };

    const updateLastMousePosition = (position) =>
      (last.mousePosition = position);

    const adjustLastMousePosition = (position) => {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
      }
    };

    const handleOnMove = (e) => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      const mousePosition = { x: x, y: y };

      adjustLastMousePosition(mousePosition);

      const now = new Date().getTime(),
        hasMovedFarEnough =
          calcDistance(last.starPosition, mousePosition) >=
          config.minimumDistanceBetweenStars,
        hasBeenLongEnough =
          calcElapsedTime(last.starTimestamp, now) >
          config.minimumTimeBetweenStars;
      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);

        updateLastStar(mousePosition);
      }

      updateLastMousePosition(mousePosition);
    };

    container.onmousemove = (e) => handleOnMove(e);

    container.ontouchmove = (e) => handleOnMove(e.touches[0]);

    container.onmouseleave = () => updateLastMousePosition(originPosition);
  }

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
              className={`relative z-[1] flex aspect-square flex-col items-center justify-center gap-1 overflow-hidden rounded-xl border border-neutral-900 transition duration-300 ease-in-out hover:-translate-y-2 hover:brightness-125
              `}
              key={i}
            >
              <h3
                className={`${
                  colors[prize.place]
                } absolute inset-0 flex h-full w-full scale-150 items-center justify-center bg-gradient-to-br text-8xl font-semibold tracking-tight text-white/10`}
              >
                {prize.place}
              </h3>
              <p className="z-[1] text-sm font-semibold tracking-tight text-neutral-300 transition duration-300 ease-in-out md:text-base lg:text-lg 2xl:text-5xl">
                {prize.prize}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="prize-container"
        className="absolute inset-0 z-[-1] w-full overflow-hidden bg-transparent"
      ></div>
      <Script src="https://kit.fontawesome.com/1ee8f271b9.js" />
    </section>
  );
}

//
