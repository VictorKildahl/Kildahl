import Image from "next/image";
import Memoji1 from "../assets/memoji2.png";
import Divider from "./Divider";

export default function About() {
  return (
    <div>
      <Divider title="About me" />
      <div className="flex justify-between items-center">
        <Image className="w-96 h-96" src={Memoji1} alt="Victor Kildahl" />
        <div>hej</div>
      </div>
    </div>
  );
}
