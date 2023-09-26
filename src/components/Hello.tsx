"use client";

import Button from "./Button";

export default function Hello() {
  return (
    <div className="text-white pt-20">
      <span className="md:text-3xl text-2xl font-bold">{"Hello, I'm"}</span>
      <div className="md:text-8xl text-6xl font-bold flex gap-6 flex-wrap">
        <span className="whitespace-nowrap">Victor</span>
        <span className="text-[#12486B] break-words">Kildahl</span>
      </div>
      <div className="flex gap-2 items-end">
        <span className="md:text-2xl text-xl">A</span>
        {/* Frontend Developer, Good friend */}
        <span className="md:text-3xl text-2xl font-bold">
          Software Engineer
        </span>
      </div>
      <div className="pt-6 flex gap-6">
        <Button>Hire me</Button>
        <Button transpartent>View my portfolio</Button>
      </div>
    </div>
  );
}
