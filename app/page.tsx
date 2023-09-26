"use client";
import Header from "../src/components/Header";
import Home from "../src/components/Home";

export default function page() {
  return (
    <div className="flex overflow-hidden flex-col h-screen bg-gradient-to-b from-[#78D6C6] to-[#F5FCCD] py-8 px-14">
      <Header />
      <Home />
    </div>
  );
}
