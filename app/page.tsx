"use client";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Skills from "../src/components/Skills";

export default function page() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-gradient-to-b from-[#ADC4CE] to-[#96B6C5] py-8 px-20">
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
