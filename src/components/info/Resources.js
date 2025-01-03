"use client";

import Resources from "@/data/resources.md";

export default function ResourcesPage() {
  return (
    <article className="prose prose-neutral prose-invert relative h-full w-full max-w-none prose-headings:m-0 prose-h1:text-3xl prose-h1:font-semibold prose-h2:font-medium prose-p:text-base prose-p:tracking-tighter prose-p:text-neutral-300 prose-a:cursor-eyes prose-a:text-blue-500 prose-a:transition prose-a:ease-linear hover:prose-a:text-blue-600 prose-ul:m-0 prose-h1:lg:text-4xl prose-p:lg:text-lg prose-h1:2xl:text-5xl prose-p:2xl:text-xl">
      <Resources />
    </article>
  );
}
