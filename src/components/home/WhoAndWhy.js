"use client";

export default function WhoAndWhy() {
  return (
    <section className="flex h-full w-full flex-col gap-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-150 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24 [&>#thumbnail]:hover:border-neutral-700">
        <div className="flex w-full flex-col gap-2 text-start lg:gap-8">
          <h2 className="text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
            who can take web.lab?
          </h2>

          <p className="text-sm tracking-tight text-neutral-400 transition duration-300 ease-in-out md:text-base lg:text-lg 2xl:text-xl">
            students of all skill levels who are officially enrolled in web.lab
            through MIT are eligible to take the competition. at least one team
            member must be availble on campus during the final week of IAP to
            present their team{"'"}s website to the judges.
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-125 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24 [&>#thumbnail]:hover:border-neutral-700">
        <div className="flex w-full flex-col gap-2 text-start lg:gap-8">
          <h2 className="text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
            why web.lab?
          </h2>

          <p className="text-sm tracking-tight text-neutral-400 transition duration-300 ease-in-out md:text-base lg:text-lg 2xl:text-xl">
            web.lab teaches you valuable skills to establish your presence on
            the web. in addition to glory and fame, winners of web.lab get cash
            prizes and many times even receive job offers. we strongly recommend
            entering the competition and giving it your best effort through IAP{" "}
            {":)"}
          </p>
        </div>
      </div>
    </section>
  );
}
