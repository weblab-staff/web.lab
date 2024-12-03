import { metadata } from "@/data/metadata";
import Image from "next/image";
import Link from "next/link";
import { sponsors } from "@/data/sponsors";

export default async function Sponsors() {
  return (
    <section className="flex w-full flex-col items-center gap-4">
      <Link
        href={`mailto:${metadata.email}`}
        target="_blank"
        className="z-[1] animate-pulse text-lg font-medium text-white/50 transition duration-300 ease-in-out hover:animate-none hover:text-white lg:text-left lg:text-xl 2xl:text-2xl"
      >
        become a sponsor {":)"}
      </Link>
      <ul className="flex w-fit flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-16">
        {sponsors.map((sponsor, k) => {
          return (
            <Link
              href={`https://www.${sponsor.href}?ref=web.lab`}
              target="_blank"
              key={k}
              className="h-auto w-fit"
            >
              <Image
                className={`aspect-auto opacity-50 ${
                  sponsor?.invert && "grayscale invert"
                } transition duration-300 ease-in-out hover:opacity-100`}
                src={`/img/sponsors/${sponsor.img}`}
                alt={sponsor.name}
                title={sponsor.name}
                draggable="false"
                width={150}
                height={50}
              />
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
