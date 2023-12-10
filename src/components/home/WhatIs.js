import Image from "next/image";
import thumbnail from "../../../public/img/landing/thumbnail.jpg";

export default function WhatIs() {
  return (
    <section className="flex h-fit w-full cursor-help flex-col-reverse items-center gap-4 rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-125 sm:flex-row lg:px-8 lg:py-12 2xl:px-16 2xl:py-24 [&>#thumbnail]:hover:border-neutral-700">
      <div className="flex w-full flex-col gap-2 text-start lg:gap-8">
        <h2 className="text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          what is web.lab?
        </h2>
        <p className="w-full text-sm leading-6 tracking-tight text-neutral-400 md:text-base lg:text-lg 2xl:text-xl">
          at its core, web.lab is a 6-unit MIT IAP class that teaches the
          fundamentals of web development. it lays the foundations for
          understanding complicated web technologies and allows enrolled
          students to take part in a competition to win cash and glory!
        </p>
      </div>
      <div
        id="thumbnail"
        className="relative aspect-video h-full w-full overflow-hidden rounded-xl border border-neutral-900 transition duration-300 ease-in-out"
      >
        <Image
          src={thumbnail}
          alt="web.lab landing thumbnail"
          fill
          sizes="50vw"
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
