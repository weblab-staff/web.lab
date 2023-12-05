import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-16">
      <Hero />
      <div className="flex h-auto w-full max-w-7xl flex-col items-center px-6 2xl:px-0">
        <h1 className="text-7xl font-semibold tracking-tighter ">
          learn web dev. win cash prizes. all in 4 weeks.
        </h1>
      </div>
    </section>
  );
}
