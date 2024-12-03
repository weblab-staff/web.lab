import Image from "next/image";
import { metadata } from "@/data/metadata";
import Link from "next/link";

export default function TeamSection({
  section,
  enableEasterEggs,
  sectionTitle,
  currentTeam,
}) {
  return (
    <section className="flex w-full flex-col items-start gap-6 whitespace-nowrap">
      <section className="flex w-full flex-col items-start gap-2">
        <h1 className="whitespace-pre-wrap text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          {sectionTitle}
        </h1>
        {currentTeam && (
          <p className="whitespace-pre-wrap text-base tracking-tighter text-neutral-400 lg:text-lg 2xl:text-xl">
            the amazing people who make this all possible
          </p>
        )}
      </section>
      <ul className="grid w-full grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {section.map((member, i) => (
          <li
            className={`${
              enableEasterEggs &&
              metadata.easterEggs.includes(
                `${member.firstName.toLowerCase()} ${member.lastName.toLowerCase()} ${member.year.slice(-2)}`,
              )
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
                    ? `/img/staff/current/${member?.img || "placeholder1.png"}`
                    : `/img/staff/alums/${member.year}/${member.img}`
                }
                sizes="33vw"
                quality={50}
                alt={`web.lab staff ${member.firstName} ${member.lastName}`}
              />
            </div>
            <div className="flex w-full flex-col">
              <h2 className="text-lg font-semibold lowercase leading-5 tracking-tighter text-white lg:text-xl 2xl:text-2xl">
                {member.firstName}{" "}
                <span className="text-neutral-500">{member.lastName}</span>
              </h2>

              <h3 className="text-sm font-semibold lowercase tracking-tighter text-neutral-300 lg:text-base 2xl:text-lg">
                {currentTeam
                  ? member.position
                  : member.year != "before2015"
                    ? member.year
                    : "Before 2015"}
              </h3>
            </div>
            <div className="flex w-fit items-center justify-between gap-6">
              {member.github && (
                <Link
                  target="_blank"
                  href={`https://github.com/${member.github}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-github h-4 w-4 text-neutral-400 transition-all duration-300 ease-in-out hover:text-white lg:h-5 lg:w-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </Link>
              )}

              {member.email && (
                <Link target="_blank" href={`mailto:${member.email}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail h-4 w-4 text-neutral-400 transition-all duration-300 ease-in-out hover:text-white lg:h-5 lg:w-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </Link>
              )}
              {member.website && (
                <Link target="_blank" href={member.website}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-world h-4 w-4 text-neutral-400 transition-all duration-300 ease-in-out hover:text-white lg:h-5 lg:w-5"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
