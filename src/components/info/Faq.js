"use client";

export default function Faq() {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {faq.map((item, k) => (
        <li
          className="flex flex-col gap-2 whitespace-pre-wrap rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur-2xl transition duration-300 ease-in-out lg:p-8"
          key={k}
        >
          <h3 className="text-lg font-semibold tracking-tighter text-white lg:text-xl 2xl:text-2xl">
            {item.q}
          </h3>
          {item.a && (
            <p className="text-xs tracking-tighter text-neutral-300 lg:text-sm 2xl:text-base">
              {item.a}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

const faq = [
  {
    q: "who can participate?",
    a: "mit undergraduate and graduate students, plus students from cross-registration programs (wellesley, harvard) are eligible. see eligibility guidelines for details.",
  },
  {
    q: "how much time will web.lab take?",
    a: "runs during mit's january term (iap). first 2 weeks: lectures. last 2 weeks: project work. successful teams typically spend 40+ hours on their final project.",
  },
  {
    q: "what about missing lectures?",
    a: "try to attend first 2 weeks for in-person workshops and help. all lectures are recorded and materials are posted online. office hours available for extra help.",
  },
  {
    q: "can this class be taken asynchronously?",
    a: "yes, most content is recorded. only required in-person: 20-minute milestone 1 presentation and finals ceremony (if finalist).",
  },
  {
    q: "where is sign up?",
    a: "register via student portal for competition/credit and through course 6.9620 for iap. cross-registration follows standard mit procedures.",
  },
  {
    q: "does this class count for any course credit?",
    a: "yes, 6 mit course units (6.9620). cross-registered students: check with your university for credit transfer.",
  },
  {
    q: "are you required to compete?",
    a: "no, but all students must submit a small project by week 4 for credit. project scale is flexible within minimum requirements.",
  },
  {
    q: "can you compete despite missing part of iap?",
    a: "yes, if you or a teammate can attend semifinalist judging (last thursday of iap). some milestones require in-person attendance.",
  },
  {
    q: "is there any chance of winning for a beginner?",
    a: "absolutely! designed for students with no web dev experience. many past winners started as beginners.",
  },
];
