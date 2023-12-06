import Hero from "@/components/Hero";
import CodeEditor from "@/components/CodeEditor";
import { metadata } from "@/data/metadata";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-screen w-full max-w-7xl flex-col items-center justify-center gap-x-12 gap-y-6 px-6 lg:flex-row 2xl:gap-x-16 2xl:px-0">
        <Hero>
          <div className="flex w-fit flex-col items-center gap-6 whitespace-nowrap lg:items-start">
            <h1 className="z-[1] text-center text-5xl font-semibold tracking-tighter lg:text-left lg:text-6xl 2xl:text-7xl">
              learn web dev.
              <br />
              win cash prizes.
              <br />
              all in 4 weeks.
            </h1>
            <div className="flex w-full items-center gap-3">
              <Link
                href="https://portal.weblab.is/"
                className="z-[1] w-full rounded-2xl border border-neutral-700 bg-transparent bg-white px-4 py-2 text-center text-sm tracking-tight text-black shadow-lg transition duration-300 ease-in-out hover:bg-white/75 lg:w-1/3 lg:text-base"
              >
                register now
              </Link>
              <Link
                href={metadata.piazza}
                className="z-[1] w-full rounded-2xl border border-neutral-700 bg-transparent px-4 py-2 text-center text-sm tracking-tight shadow-lg transition duration-300 ease-in-out hover:bg-white/10 lg:w-1/3 lg:text-base"
              >
                join piazza
              </Link>
            </div>
          </div>
        </Hero>
        <CodeEditor />
      </section>
    </section>
  );
}
