import Image from "next/image";
import { metadata } from "@/data/metadata";

export default function TeamSection({
  section,
  easterEggs,
  sectionTitle,
  currentTeam,
}) {
  return (
    <section className="flex w-full flex-col items-start gap-6 whitespace-nowrap">
      <h1 className="z-[1] text-left text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
        {sectionTitle}
      </h1>
      <ul className="grid w-full grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {section.map((member, i) => (
          <li
            className={`${
              easterEggs && metadata.easterEggs.includes(member.firstName)
                ? "origin-center duration-1000 hover:rotate-180"
                : "origin-center duration-300 hover:-translate-y-1"
            } flex h-full w-full flex-col gap-y-2 rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur backdrop-brightness-75 transition-transform ease-in-out [&>div>img]:grayscale [&>div>img]:hover:grayscale-0`}
            key={i}
            style={{ maxWidth: "600px" }}
          >
            <div className="relative aspect-square h-auto w-full overflow-hidden rounded-md border border-neutral-700">
              <Image
                className="object-cover object-center transition duration-300 ease-in-out"
                fill
                src={
                  currentTeam
                    ? `/img/staff/current/${member.img}`
                    : `/img/staff/alums/${member.year}/${member.img}`
                }
                sizes="33vw"
                quality={50}
                alt={`web.lab staff ${member.firstName} ${member.lastName}`}
              />
            </div>
            <div className="flex w-full flex-col whitespace-pre-wrap">
              <h2 className="text-lg font-semibold leading-5 tracking-tighter text-white lg:text-xl 2xl:text-2xl">
                {member.firstName}{" "}
                <span className="text-neutral-500">{member.lastName}</span>
              </h2>
              <h3 className="text-sm font-semibold tracking-tighter text-neutral-300 lg:text-base 2xl:text-lg">
                {currentTeam
                  ? member.position
                  : member.year != "before2015"
                    ? member.year
                    : "Before 2015"}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
