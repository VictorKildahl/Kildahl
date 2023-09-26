import Image from "next/image";
import ProfileImage from "../assets/profile.jpeg";

export default function Profile() {
  return (
    <div className="relative">
      <div className="border-white border-8 w-[350px] h-[500px] rounded-full absolute top-[-50px] left-[-25px] z-1"></div>
      <Image
        className="rounded-full z-20 w-96 h-96 object-cover"
        src={ProfileImage}
        alt="Victor Kildahl"
      />
    </div>
  );
}
