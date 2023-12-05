import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Hero />
    </section>
  );
}
