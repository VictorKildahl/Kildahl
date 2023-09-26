"use client";
import { useRouter } from "next/navigation";

export default function Icon() {
  const router = useRouter();

  return (
    <a onClick={() => router.push("/")} className="hover:cursor-pointer group">
      <div className="flex items-center justify-center">
        <span className="transition duration-300 ease-in-out text-2xl text-[#419197] group-hover:text-[#E25E3E]">
          {"<"}
        </span>
        <h1 className="transition duration-300 ease-in-out text-4xl text-[#12486B] group-hover:text-[#FFBB5C]">
          Kildahl
        </h1>
        <span className="transition duration-300 ease-in-out text-2xl text-[#419197] group-hover:text-[#E25E3E]">
          {"/>"}
        </span>
      </div>
    </a>
  );
}
