"use client";

import { useState, useEffect } from "react";
import { tabs } from "@/data/tabs";
import Editor from "./Editor";

export default function CodeEditor() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [code, setCode] = useState(tabs[selectedTab].code);
  useEffect(() => {
    setCode(tabs[selectedTab].code);
  }, [selectedTab]);

  return (
    <div className="flex h-1/3 max-h-[475px] w-full flex-col overflow-hidden rounded-lg border border-neutral-900 shadow-lg backdrop-blur-3xl backdrop-brightness-75 transition duration-300 ease-in-out focus-within:border-neutral-700 2xl:h-1/2">
      <section className="sticky top-0 flex h-10 items-center">
        <li className="flex items-center gap-2 px-4">
          <div className="h-3 w-3 rounded-full bg-white/5 transition duration-300 ease-linear hover:bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-white/5 transition duration-300 ease-linear hover:bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-white/5 transition duration-300 ease-linear hover:bg-green-500" />
        </li>
        <ul className="z-[2] flex h-10 w-full items-center justify-start overflow-x-auto">
          {tabs.map((tab, i) => (
            <li
              className={`${
                selectedTab === i ? `border-blue-900 bg-white/5` : ""
              } flex h-full w-full cursor-pointer items-center border-b border-transparent px-4 text-sm tracking-tight text-neutral-400 transition ease-linear`}
              onClick={() => setSelectedTab(i)}
              key={i}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full overflow-y-auto">
        <Editor lang={tabs[selectedTab].lang} code={code} setCode={setCode} />
      </section>
    </div>
  );
}
