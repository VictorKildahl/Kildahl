import Image from "next/image";
import Graphql from "../assets/graphql.png";
import HTML from "../assets/html5.png";
import NextJS from "../assets/nextjs.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";
import Divider from "./Divider";

export default function Skills() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Divider title="Skills" reverse />
      <div className="flex justify-between gap-12">
        <div className="text-lg flex gap-4 mt-8">
          <Image className="w-28 h-28" src={Typescript} alt="Typescript" />
          <Image className="w-28 h-28" src={React} alt="React" />
          <Image className="w-28 h-28" src={HTML} alt="HTML" />
          <Image className="w-28 h-28" src={NextJS} alt="NextJS" />
          <Image className="w-28 h-28" src={Tailwind} alt="Tailwind" />
          <Image className="w-28 h-28" src={Graphql} alt="Graphql" />
        </div>
      </div>
      {/* <Image
        className="w-96 h-96 rounded-b-full"
        src={MemojiWave}
        alt="Wave Memoji"
      /> */}
    </div>
  );
}
