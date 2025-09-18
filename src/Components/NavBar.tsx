"use client";
import { useEffect, useRef } from "react";
import React from "react";
import { Roboto, Bebas_Neue } from "next/font/google";
import { Button } from "./ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Download } from "lucide-react";

const Robot = Roboto({
  subsets: ["latin"],
  weight: "400",
});
const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
interface Props {
  onAbout: () => void;
  onProject: () => void;
  onStack: () => void;
}
const NavBar = (props: Props) => {
  const NavRef = useRef<HTMLDivElement>(null);
  const Logo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let currentScroll = 0;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30 && currentScroll < window.scrollY) {
        NavRef.current?.classList.remove("top-[35px]");
        NavRef.current?.classList.add("top-[-100px]");
      }
      if (window.scrollY < currentScroll) {
        NavRef.current?.classList.remove("top-[-100px]");
        NavRef.current?.classList.add("top-[35px]");
      }
      currentScroll = window.scrollY;
    });
  }, []);
  useGSAP(() => {
    setInterval(() => {
      gsap.from(Logo.current, {
        rotateY: 360,
        duration: 1,
        ease: "power4.out",
      });
    }, 5000);
  });
  return (
    <div
      ref={NavRef}
      className={`duration-500 backdrop-blur-md transition-all ease-in-out z-30 shadow-lg md:w-[80%] w-[96%] md:left-[10%] left-[2%] fixed top-[35px] h-[90px] px-15 bg-[#121212]/30 rounded-full flex justify-between items-center text-white ${Robot.className}`}
    >
      <div ref={Logo}>
        <img src="/logo.svg" className="w-[60px]" alt="" />
      </div>
      <ul className="flex md:gap-7 gap-3 items-center">
        <li
          onClick={props.onStack}
          className="lg:block hidden cursor-pointer hover:text-[#2FD391] hover:scale-103 hover:translate-y-[-3px] transition-all"
        >
          Tech Stack
        </li>
        <li
          onClick={props.onProject}
          className="lg:block hidden cursor-pointer hover:text-[#2FD391] hover:scale-103 hover:translate-y-[-3px] transition-all"
        >
          Projects
        </li>
        <li
          onClick={props.onAbout}
          className="lg:block hidden cursor-pointer hover:text-[#2FD391] hover:scale-103 hover:translate-y-[-3px] transition-all"
        >
          Contact
        </li>
        <li>
          <a href="https://github.com/M-abdullah-liaqat" target="_blank">
            <button className="bg-white text-[#121212] font-semibold rounded-lg hover:bg-white/80 lg:px-7 px-3 py-2 cursor-pointer flex items-center gap-2">
              <div>
                <img
                  src="/Tech Stack Icons/github.svg"
                  className="md:w-[24px] w-[18px]"
                  alt=""
                />
              </div>
              <div className="md:block hidden">GitHub</div>
            </button>
          </a>
        </li>
        <li>
          <a href="/realResume.pdf" download="Abdullah Resume">
            <button className="bg-[#2FD391] text-[#121212] md:font-semibold rounded-lg hover:bg-[#2FD391]/80 lg:px-7 px-3 py-2 cursor-pointer flex items-center gap-1.5">
              <div className="md:hidden block">
                <Download size={18} />
              </div>
              <div className="md:block hidden">Download</div>
              <div>Resume</div>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
