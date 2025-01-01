"use client";

import Link from "next/link";
import { metadata } from "@/data/metadata";

export default function BottomCTA() {
  return (
    <div className="flex h-full w-full cursor-raisedeyebrow flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-150 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24 [&>#thumbnail]:hover:border-neutral-700 [&>.bcta-grid>div]:hover:blur-none [&>.bcta-grid>div]:hover:brightness-[300%]">
      <div className="flex w-full flex-col gap-4 text-center lg:gap-8">
        <h2 className="text-2xl font-semibold tracking-tighter lg:text-3xl 2xl:text-4xl">
          what&apos;re you waiting for?
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <Link
            href={metadata.studentPortal}
            className="w-full max-w-sm cursor-starstruck rounded-2xl border border-neutral-700 bg-transparent bg-white px-4 py-2 text-center text-sm font-medium tracking-tight text-black shadow-lg transition duration-300 ease-in-out hover:bg-white/75 lg:text-base"
          >
            register now
          </Link>
          <Link
            href={metadata.piazza}
            className="w-full max-w-sm cursor-starstruck rounded-2xl border border-neutral-700 bg-transparent px-4 py-2 text-center text-sm font-medium tracking-tight shadow-lg backdrop-brightness-50 transition duration-300 ease-in-out hover:bg-white/10 lg:text-base"
          >
            join piazza
          </Link>
        </div>
      </div>
      <div className="bcta-grid">
        <div className="bcta-grid-lines blur-[1px] transition duration-300 ease-in-out" />
      </div>
    </div>
  );
}
