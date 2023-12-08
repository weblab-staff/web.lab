import Rays from "@/components/global/Rays";
import CodeEditor from "@/components/home/CodeEditor";
import Sponsors from "@/components/home/Sponsors";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import ClassStructure from "@/components/home/ClassStructure";
import Audience from "@/components/home/Audience";
import Prizes from "@/components/home/Prizes";

export default function Home() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-24 overflow-hidden">
      <section className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-y-12 px-6 pt-24 lg:min-h-screen lg:gap-y-12 2xl:gap-y-24 2xl:px-0">
        <div className="flex w-full flex-col items-center justify-center gap-x-12 gap-y-6 lg:flex-row 2xl:gap-x-16">
          <Rays>
            <Hero />
          </Rays>
          <CodeEditor />
        </div>
        <Sponsors />
      </section>

      <section className="flex h-full w-full max-w-7xl flex-col gap-8 px-6 pb-24 2xl:px-0">
        <div className="flex h-fit w-full flex-col-reverse items-center gap-4 rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-125 sm:flex-row lg:px-8 lg:py-12 2xl:px-16 2xl:py-24 [&>#thumbnail]:hover:border-neutral-700">
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
              src="/img/landing/landon.jpg"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <section className="grid h-full w-full grid-cols-1 items-center gap-8 md:grid-cols-2">
          <Audience />
          <ClassStructure />
        </section>
        <Prizes />
      </section>
    </section>
  );
}
