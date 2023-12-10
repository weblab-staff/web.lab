"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Rules() {
  useEffect(() => {
    // starTrail("prize-container");
  }, []);

  return (
    <section className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-150 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24">
      <div className="flex w-full flex-col gap-4 text-center lg:gap-8">
        <h2 className="text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          ok i'm in, what are the rules?
        </h2>
        <ul className="grid w-full grid-cols-1 gap-8">
          {rules.map((rule, k) => (
            <li
              className={`relative flex h-32 items-center justify-center overflow-hidden rounded-xl border border-neutral-900 bg-gradient-to-br p-4 transition duration-300 ease-in-out hover:border-white 2xl:h-48 [&>#longRule]:hover:translate-y-0 [&>#shortRule]:hover:-translate-y-[500%]
            `}
              key={k}
            >
              <p
                id="shortRule"
                className={`absolute translate-y-0 px-4 text-sm font-semibold text-neutral-400 transition duration-300 ease-in-out sm:text-lg lg:text-2xl 2xl:text-3xl`}
              >
                {rule.short}
              </p>
              <p
                id="longRule"
                className="w-full translate-y-[500%] text-sm font-medium text-white antialiased transition duration-300 ease-in-out sm:text-lg lg:text-2xl 2xl:text-3xl"
              >
                {rule.long}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const rules = [
  {
    short: "web.lab officially starts monday, january 8, 2024 at 1:00 pm est",
    long: "you are prohibited from beginning development on your site until monday, january 8, 2024 at 1:00 pm est. failure to do so will result in disqualification",
  },
  {
    short:
      "your site must have dynamically-generated, database-backed pages, user authentication, and an original design, and functionality",
    long: "your site must contain pages that are produced dynamically by some server-side application (e.g. node.js, ruby on rails, php or python scripts) using the results of queries to a database/data service",
  },
  {
    short: "your site must present nontrivial content",
    long: "nontrivial content includes publicly accessible datasets, creative custom-generated data, and third-party apis",
  },
  {
    short:
      "your site cannot simply consist of pages returned by the server, but rather must support some sort of dynamic user interaction",
    long: "",
  },
  {
    short: "teams must use version control and host source code on github",
    long: "Our staff will create repositories for every team as well as teach how to use Github",
  },
  {
    short:
      "teams must comply with us laws and mit academic policy and integrity policies",
    long: "",
  },
  {
    short:
      "past competitors who have won $2,000+ in their 6.9620 career are ineligible to compete",
    long: "special prizes do not count towards this restriction. if in doubt, please contact a staff member",
  },

  ,
  ,
  "Your site must work in either Chrome or Firefox. Teams will be able to specify browser of choice.",
  "Teams must comply with US laws and MIT academic policy and integrity policies.",
  "Past competitors who have won $2,000+ in their 6.9620 career are ineligible to compete. Special prizes do not count towards this restriction. If in doubt, please contact the staff.",
];
