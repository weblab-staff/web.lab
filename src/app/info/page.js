import Rays from "@/components/global/Rays";
import Faq from "@/components/info/Faq";
import Link from "next/link";
import Resources from "@/components/info/Resources";

export default function Team() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-y-8 px-6 py-24 2xl:gap-x-16 2xl:px-0">
        <Rays>
          <section className="z-[1] flex w-full flex-col items-start gap-2">
            <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
              rules
            </h1>
            <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-300 lg:text-lg 2xl:text-xl">
              full list of milestones, rules, and judging criteria for the
              competition can be found{" "}
              <Link
                className="cursor-eyes text-blue-500 underline transition ease-linear hover:text-blue-600"
                target="_blank"
                href="/competition_info_2026.pdf"
              >
                here
              </Link>
              .
            </p>
          </section>
          <section className="flex w-full flex-col items-start gap-2">
            <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
              faq
            </h1>
            <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-300 lg:text-lg 2xl:text-xl">
              frequently asked questions
            </p>
          </section>
          <Faq />

          <section className="flex w-full flex-col items-start gap-2">
            <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
              resources
            </h1>
            <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-300 lg:text-lg 2xl:text-xl">
              a list of useful guides and resources
            </p>
          </section>
          <Resources />
        </Rays>
      </section>
    </section>
  );
}
