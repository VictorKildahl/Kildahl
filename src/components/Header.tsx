"use client";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Icon from "./Icon";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center">
      <Icon />
      <div className="">
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
        {/* <div className="">
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
        </div> */}
      </div>
    </div>
  );
}
