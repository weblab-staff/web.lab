"use client";

import { useEffect, useState } from "react";

const phases = [
  {
    title: "team selection",
    desc: "form teams of up to three members. team members should contribute an appropriate amount to receive individual credit for the course.",
  },
  {
    title: "learning",
    desc: "the learning phase of web.lab lasts for the first two weeks of IAP, with lectures and workshops every day. the first week goes over fundamental topics while the second week dives into more advanced topics and sponsor lectures.",
  },
  {
    title: "team selection",
    desc: "phase 2 culminates in a hackathon, where teams will work on their websites. staff will be hosting office hours and answering questions on online.",
  },
];

export default function ClassStructure() {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((activePhase + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activePhase]);

  return (
    <div className="flex h-full w-full flex-col items-center gap-4 rounded-2xl border border-neutral-900 bg-transparent px-4 py-6 backdrop-blur-[1px] transition duration-300 ease-in-out hover:border-neutral-700 hover:backdrop-brightness-150 lg:px-8 lg:py-12 2xl:px-16 2xl:py-24 [&>#thumbnail]:hover:border-neutral-700">
      <div className="flex h-full w-full flex-col gap-2 text-start lg:gap-8">
        <h2 className="text-3xl font-semibold tracking-tighter lg:text-4xl 2xl:text-5xl">
          class structure
        </h2>
        <ul className="flex h-full w-full flex-col justify-between">
          {phases.map((phase, i) => (
            <li
              className="flex flex-col gap-1 [&>#phase-desc]:hover:text-neutral-400 [&>#phase-title]:hover:text-neutral-300"
              key={i}
            >
              <option
                className="text-base font-semibold tracking-tight text-neutral-500 transition duration-300 ease-in-out aria-selected:text-neutral-300 md:text-lg lg:text-xl 2xl:text-2xl"
                aria-selected={activePhase == i}
                id="phase-title"
              >
                phase {i}: {phase.title}
              </option>
              <p
                aria-selected={activePhase == i}
                id="phase-desc"
                className="text-sm tracking-tight text-neutral-600 transition duration-300 ease-in-out aria-selected:text-neutral-400 md:text-base lg:text-lg 2xl:text-xl"
              >
                {phase.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
