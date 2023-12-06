import Hero from "@/components/Hero";
import { team } from "@/data/team";
import Image from "next/image";

export default function Team() {
  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <section className="flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 py-24 2xl:gap-x-16 2xl:px-0">
        <Hero>
          <div className="flex w-full flex-col items-start gap-6 whitespace-nowrap">
            <h1 className="z-[1] text-left text-5xl font-semibold tracking-tighter lg:text-6xl 2xl:text-7xl">
              this year's staff
            </h1>
            <section className="grid w-full grid-cols-4 items-center justify-center gap-4">
              {team.current.map((member, i) => (
                <div
                  className="flex flex-col gap-y-2 rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur backdrop-brightness-75 transition-transform duration-300 ease-in-out hover:-translate-y-2 [&>div>img]:grayscale [&>div>img]:hover:grayscale-0"
                  key={i}
                  style={{ maxWidth: "600px" }}
                >
                  <div className="relative aspect-square h-auto w-full overflow-hidden rounded-md border border-neutral-700">
                    <Image
                      className="object-cover object-center transition duration-300 ease-in-out"
                      fill
                      src={`/img/staff/current/${member.img}`}
                      sizes="33vw"
                      quality={50}
                      alt={member.name}
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <h2 className="text-2xl font-semibold tracking-tighter text-white">
                      {member.firstName}{" "}
                      <span className="text-neutral-500">
                        {member.lastName}
                      </span>
                    </h2>
                    <h3 className="text-lg font-semibold tracking-tighter text-neutral-300">
                      {member.position}
                    </h3>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </Hero>
      </section>
    </section>
  );
}
