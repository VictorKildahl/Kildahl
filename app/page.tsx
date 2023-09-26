"use client";
import Header from "../src/components/Header";
import Hello from "../src/components/Hello";

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col h-screen bg-gradient-to-b from-[#78D6C6] to-[#F5FCCD] p-8">
      <Header />
      <Hello />
    </div>
  );
}
