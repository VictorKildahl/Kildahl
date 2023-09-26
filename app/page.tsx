"use client";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Home from "../src/components/Home";

export default function page() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-gradient-to-b from-[#78D6C6] to-[#F5FCCD] py-8 px-14">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
