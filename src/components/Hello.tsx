"use client";

import Typewriter from "typewriter-effect";
import Button from "./Button";

export default function Hello() {
  return (
    <div className="text-white pt-20">
      <span className="md:text-3xl text-2xl font-bold">{"Hello, I'm"}</span>
      <div className="md:text-8xl text-6xl font-bold flex gap-6">
        <span className="whitespace-nowrap">Victor</span>
        <span className="text-[#12486B]">Kildahl</span>
      </div>
      <div className="flex gap-2 items-end">
        <span className="md:text-2xl text-xl">A</span>
        <span className="md:text-3xl text-2xl font-bold">
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Frontend Developer",
                "Good friend",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div className="pt-6 flex gap-6 justify-center lg:justify-normal">
        <Button>HIRE ME</Button>
        <Button transpartent>VIEW MY PORTFOLIO</Button>
      </div>
    </div>
  );
}
