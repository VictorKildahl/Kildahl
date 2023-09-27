import Image from "next/image";
import CSS from "../assets/CSS.svg";
import Graphql from "../assets/Graphql.svg";
import HTML from "../assets/Html.svg";
import Javascript from "../assets/Javascript.svg";
import NextJS from "../assets/Nextjs.svg";
import Node from "../assets/Node.svg";
import React from "../assets/React.svg";
import Tailwind from "../assets/Tailwind.svg";
import Typescript from "../assets/Typescript.svg";
import Divider from "./Divider";

export default function Skills() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Divider title="Skills" reverse />
      <div className="flex justify-between gap-12">
        <div className="text-lg flex gap-4 mt-8">
          <Image className="w-28 h-28" src={React} alt="React" />
          <Image className="w-28 h-28" src={NextJS} alt="NextJS" />
          <Image className="w-28 h-28" src={Tailwind} alt="Tailwind" />
          <Image className="w-28 h-28" src={Graphql} alt="Graphql" />
          <Image className="w-28 h-28" src={Javascript} alt="Javascript" />
          <Image className="w-28 h-28" src={Typescript} alt="Typescript" />
          <Image className="w-28 h-28" src={HTML} alt="HTML" />
          <Image className="w-28 h-28" src={CSS} alt="CSS" />
          <Image className="w-28 h-28" src={Node} alt="Node" />
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
