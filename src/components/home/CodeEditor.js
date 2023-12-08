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
    <div className="flex h-[250px] w-full flex-col overflow-hidden rounded-lg border border-neutral-900 shadow-lg backdrop-blur-3xl backdrop-brightness-75 transition duration-300 ease-in-out focus-within:border-neutral-700 sm:h-[400px] 2xl:h-[475px]">
      <section className="sticky top-0 flex h-10 items-center">
        <li className="flex items-center gap-2 px-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full  bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </li>
        <datalist className="z-[2] flex h-10 w-full items-center justify-start overflow-x-auto">
          {tabs.map((tab, i) => (
            <option
              className="flex h-full w-full cursor-pointer select-none items-center border-b border-transparent px-4 text-sm tracking-tight text-neutral-400 transition ease-linear aria-selected:border-blue-900 aria-selected:bg-white/5"
              onClick={() => setSelectedTab(i)}
              key={i}
              aria-selected={selectedTab === i}
            >
              {tab.name}
            </option>
          ))}
        </datalist>
      </section>
      <section className="h-full w-full overflow-y-auto">
        <Editor lang={tabs[selectedTab].lang} code={code} setCode={setCode} />
      </section>
    </div>
  );
}
