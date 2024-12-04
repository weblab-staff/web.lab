import Rays from "@/components/global/Rays";
import Faq from "@/components/info/Faq";
import Schedule from "@/components/info/Schedule";
export default function Team() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-y-8 px-6 py-24 2xl:gap-x-16 2xl:px-0">
        <Rays>
          <section className="flex w-full flex-col items-start gap-2">
            <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
              rules
            </h1>
            <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-300 lg:text-lg 2xl:text-xl">
              full list of rules for the competiton as well as in-depth details
              about the class can be found here
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
              schedule
            </h1>
            <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-300 lg:text-lg 2xl:text-xl">
              for lectures, workshops, deadlines, and more
            </p>
          </section>
          <Schedule />
        </Rays>
      </section>
    </section>
  );
}
