import Hero from "@/components/Hero";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-screen w-full max-w-7xl flex-col items-center justify-center gap-x-12 gap-y-6 px-6 lg:flex-row 2xl:gap-x-16 2xl:px-0">
        <Hero />
        <CodeEditor />
      </section>
    </section>
  );
}
