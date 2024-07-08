import { useState } from "react";

export default function Rule({ rule }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <li
      className={`${
        rule.expand && "cursor-pointer hover:border-white"
      } rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur-2xl transition duration-300 ease-in-out lg:p-8`}
      onClick={() => rule.expand && setExpanded(!expanded)}
    >
      {expanded ? (
        <ul className="flex flex-col gap-4">
          {rule.expand.map((subrule, k) => (
            <li className="whitespace-pre-wrap" key={k}>
              <h3 className="text-lg font-medium tracking-tighter text-neutral-300 lg:text-xl 2xl:text-2xl">
                {subrule.title}
              </h3>
              <p className="text-xs tracking-tighter text-neutral-400 lg:text-sm 2xl:text-base">
                {subrule.desc}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-row">
          <h2 className="w-full whitespace-pre-wrap text-left text-lg font-semibold tracking-tighter text-neutral-200 lg:text-xl 2xl:text-2xl">
            {rule.details}
          </h2>
        </div>
      )}
    </li>
  );
}
