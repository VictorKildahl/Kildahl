import Image from "next/image";
import MemojiHi from "../assets/memojiHi.png";
import Divider from "./Divider";

export default function About() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Divider title="About" />
      <div className="flex justify-between gap-12">
        <Image
          className="w-96 h-96 rounded-b-full"
          src={MemojiHi}
          alt="Hi Memoji"
        />
        <div className="text-lg flex flex-col gap-4 mt-8">
          <div className="">
            My name is Victor Kildahl Petersen, and I am a 26-year-old Software
            Engineer based in Aarhus C. I studied Software Engineering at Aarhus
            University and have been working in the field since February 2020. I
            am passionate about creating user-friendly and visually appealing
            web applications that solve real-world problems.
          </div>
          <div>
            In my free time, I enjoy exploring new technologies, challenging
            myself, fitness and gaming.
          </div>
        </div>
      </div>
    </div>
  );
}
