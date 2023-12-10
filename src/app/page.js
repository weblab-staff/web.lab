import Rays from "@/components/global/Rays";
import CodeEditor from "@/components/home/CodeEditor";
import Sponsors from "@/components/home/Sponsors";
import Hero from "@/components/home/Hero";
import ClassStructure from "@/components/home/ClassStructure";
import Audience from "@/components/home/WhoAndWhy";
import Prizes from "@/components/home/Prizes";
import WhatIs from "@/components/home/WhatIs";
import BottomCTA from "@/components/home/BottomCTA";

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
        <WhatIs />
        <section className="grid h-full w-full grid-cols-1 items-center gap-8 md:grid-cols-2">
          <Audience />
          <ClassStructure />
        </section>
        <Prizes />
        <BottomCTA />
      </section>
    </section>
  );
}
