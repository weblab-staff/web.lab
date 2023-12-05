import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50" />
        </div>
        <div className="items-left flex w-full max-w-7xl flex-col px-6 2xl:px-0">
          <h1 className="z-[1] text-7xl font-semibold tracking-tighter">
            learn web dev.
            <br />
            win cash prizes.
            <br />
            all in 4 weeks.
          </h1>
        </div>
      </section>
    </section>
  );
}
