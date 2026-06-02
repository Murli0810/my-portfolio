"use client";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Terminal from "./components/Terminal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {

  useGSAP(() => {
    gsap.to(".upperline", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <div className="container">
      <div className="w-full h-1.5 bg-amber-200 sticky top-0 z-1">
        <div className="upperline w-0 h-full bg-green-400"></div>
      </div>
      <Navbar />
      <div className="w-full h-auto flex justify-center gap-9 pt-8 pr-3">
        <Profile />
        <div className="flex flex-col items-center gap-10">
          <About />
          <Terminal />
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-30 h-[auto] mx-auto gap-25">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
