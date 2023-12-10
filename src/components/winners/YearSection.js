import Image from "next/image";
import { metadata } from "@/data/metadata";
import Link from "next/link";
import placeholder from "../../../public/img/logo.svg";

export default function YearSection({ yearData }) {
  return (
    <section className="flex w-full flex-col items-start gap-4">
      <h1 className="whitespace-pre-wrap text-2xl font-semibold tracking-tighter lg:text-3xl 2xl:text-4xl">
        {yearData.year}. {yearData.theme}
      </h1>
      {yearData.divisions.map((division) => (
        <>
          {yearData.divisions.length > 1 && (
            <h2 className="text-xl font-medium tracking-tighter lg:text-2xl 2xl:text-3xl">
              {division.name}
            </h2>
          )}
          <ul className="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {division.winners.map((project, i) => (
              <li
                className={`flex h-full w-full flex-col gap-y-2 rounded-2xl border border-neutral-700 ${
                  placeColor[`${project.place}`]
                } cursor-starstruck bg-gradient-to-br p-4 backdrop-blur transition duration-300 ease-in-out hover:-translate-y-1 hover:brightness-125`}
                key={i}
                style={{ maxWidth: "600px" }}
              >
                <div className="relative aspect-video h-auto w-full overflow-hidden rounded-md border border-neutral-700">
                  <Image
                    className={`${
                      project.img ? "object-cover" : "object-contain"
                    } object-center transition duration-300 ease-in-out`}
                    fill
                    src={project.img ? project.img : placeholder}
                    sizes="33vw"
                    quality={50}
                    alt={`web.lab | ${project.project}`}
                  />
                </div>
                <div className="relative flex w-full flex-col gap-2">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tighter text-white lg:text-xl 2xl:text-2xl">
                      {project.name}
                    </h2>

                    <h3 className="whitespace-pre-wrap font-medium tracking-tighter text-neutral-200 lg:text-xs 2xl:text-sm">
                      {project.creators.join(", ")}
                    </h3>
                  </div>
                  <p className="whitespace-pre-wrap tracking-tighter text-neutral-300 lg:text-xs 2xl:text-sm">
                    {project.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ))}
    </section>
  );
}

const placeColor = {
  1: "from-[#C5AB50]/60 via-[#AC933E]/60 to-[#FBF8AE]/60",
  2: "from-[#B4B9BE]/60 via-[#716F71]/60 to-[#A8A9AD]/60",
  3: "from-[#A97142]/60 via-[#6E3A06]/60 to-[#B08D57]/60",
  4: "from-[#DC826B]/60 via-[#CB6A52]/60 to-[#FFE4BB]/60",
  hm: "from-[#343a40]/60 via-[#212529]/60 to-[#495057]/60",
  sf: "from-[#343a40]/60 via-[#212529]/60 to-[#495057]/60",
};
