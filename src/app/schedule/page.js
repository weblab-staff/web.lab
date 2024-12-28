import Rays from "@/components/global/Rays";
import Schedule from "@/components/schedule/Schedule";
import Link from "next/link";
export default function SchedulePage() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 py-24 2xl:gap-x-16 2xl:px-0">
        <Rays>
          <section className="flex w-full flex-col items-start gap-2">
            <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
              schedule
            </h1>
            <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-300 lg:text-lg 2xl:text-xl">
              for lectures, workshops, deadlines, and more
            </p>
            <div className="flex flex-row items-center gap-4 text-neutral-300">
              jump to:{" "}
              {Array.from({ length: 4 }, (_, i) => i + 1).map((week) => (
                <Link
                  key={week}
                  className="z-10 hover:underline"
                  href={`/schedule#week-${week}`}
                >
                  week {week}
                </Link>
              ))}
            </div>
          </section>
          <Schedule />
        </Rays>
      </section>
    </section>
  );
}
