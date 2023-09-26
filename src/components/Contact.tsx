"use client";
import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Memoji1 from "../assets/memoji1.png";

export default function Contact() {
  return (
    <div className="flex justify-around items-center">
      <div className="flex justify-between gap-5">
        <a href="https://github.com/VictorKildahl">
          <FiGithub
            size={32}
            className="transition duration-300 ease-in-out hover:text-[#12486B]"
          />
        </a>
        <a href="https://www.linkedin.com/in/victorkildahl/">
          <FiLinkedin
            size={32}
            className="transition duration-300 ease-in-out hover:text-[#12486B]"
          />
        </a>
      </div>
      <Image className="w-96 h-96" src={Memoji1} alt="Victor Kildahl" />
    </div>
  );
}

{
  /* <div className="">
          <a
            onClick={() =>
              window.open(
                `mailto:${config.email.name + "@" + config.email.domain}`
              )
            }
            className=""
          >
            Contact
          </a>
        </div>  */
}
