"use client";
import Image from "next/image";
import { Roboto, Bebas_Neue } from "next/font/google";
import { Button } from "@/Components/ui/button";
import NavBar from "@/Components/NavBar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Page1 from "@/Components/page1";
import React, { useRef, useState } from "react";
import AboutMe from "@/Components/aboutPage";
import TechStack from "@/Components/tech-stack";
import Projects from "@/Components/ProjectsCards";
import ContactArea from "@/Components/endingArea";
const Robot = Roboto({
  subsets: ["latin"],
  weight: "400",
});
const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const Profile = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);
  const text3d = useRef<HTMLDivElement>(null);
  const develop = useRef<HTMLSpanElement>(null);
  const contactREF = useRef<HTMLDivElement | null>(null);
  const ProjectsRef = useRef<HTMLDivElement | null>(null);
  const StackRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setrotateX] = useState(0);
  const [rotateY, setrotateY] = useState(0);
  useGSAP(() => {
    gsap.to(Profile.current, {
      scale: 1,
      duration: 2,
      ease: "power4.out",
    });
  });
  useGSAP(() => {
    gsap.from(develop.current, {
      rotateY: 360,
      duration: 1,
      ease: "power4.out",
      repeat: -1,
      delay: 1,
    });
  });
  const MouseMoving = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.clientX, e.clientY);
    console.log(text3d.current?.getBoundingClientRect().width);
    if (!text3d.current) return;
    setrotateY(
      (e.clientX -
        text3d.current?.getBoundingClientRect()?.x -
        text3d.current?.getBoundingClientRect()?.width / 2) /
        40
    );
    setrotateX(
      (e.clientY -
        text3d.current?.getBoundingClientRect()?.y -
        text3d.current?.getBoundingClientRect()?.height / 2) /
        20
    );
  };
  useGSAP(() => {
    gsap.to(text3d.current, {
      transformStyle: "preserve-3d",
      transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
      ease: "power3.out",
    });
  }, [rotateX, rotateY]);
  const onclickAboutMe = () => {
    if (contactREF.current) {
      contactREF.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const onclickProjects = () => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const onclickStack = () => {
    if (StackRef.current) {
      StackRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      <NavBar
        onAbout={onclickAboutMe}
        onProject={onclickProjects}
        onStack={onclickStack}
      />
      <div
        onMouseMove={(e) => {
          MouseMoving(e);
        }}
        className={`${Robot.className} md:h-[92vh] h-[80vh] w-full bg-[#121212] rounded-xl grid lg:grid-cols-2 grid-cols-1 text-white lg:pt-0 pt-[130px] pb-5`}
      >
        <div className="perspective-distant hidden lg:flex justify-center flex-col xl:ml-40 lg:ml-27 ml-10">
          <div ref={text3d} className="Tilt">
            <div
              ref={text1}
              className={`${Bebas.className} text-[3.5vw] leading-[3.5vw] my-5`}
            >
              Hi, It&#39;s{" "}
              <span className={`${Bebas.className}`}>Muhammad Abdullah</span>
            </div>
            <div
              ref={text2}
              className={`${Bebas.className} text-[7vw] leading-[6vw]`}
            >
              Full Stack Web <span ref={develop}>Developer</span>
            </div>
            <div ref={text3} className="flex lg:space-x-6 space-x-4 mt-8">
              <button
                onClick={onclickProjects}
                className="2xl:text-[1vw] text-[1vw] 2xl:leading-[1vw] leading-[1vw] font-medium rounded-lg hover:bg-[#272727]/80 lg:px-7 px-4 py-3 border-[1px] border-gray-200 cursor-pointer"
              >
                View Projects
              </button>
              <button className="bg-[#2FD391] text-[#121212] 2xl:text-[1vw] text-[1vw] 2xl:leading-[1vw] focus:ring-3 ring-white leading-[1vw] font-bold rounded-lg hover:bg-[#2FD391]/80 lg:px-7 px-4 py-3 cursor-pointer">
                <a href="/realResume.pdf" download="Abdullah Resume">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            ref={Profile}
            className="scale-0 relative xl:w-[450px] lg:w-[350px] md:w-[280px] w-[200px] xl:h-[450px] lg:h-[350px] md:h-[280px] h-[200px] rounded-full flex items-end justify-center overflow-hidden"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d4f7d2_0%,#06d481_50%,#d4f7d2_100%)]" />
            <img
              src="/ProfilePicture5.png"
              className="w-[95%] h-[95%] z-20"
              alt="thisis"
            />
          </div>
        </div>
        <div className="lg:hidden perspective-distant flex justify-center mx-10 items-center flex-col">
          <div className="Tilt text-center">
            <div
              ref={text1}
              className={`${Bebas.className} md:text-[3.5vw] md:leading-[3.5vw] text-[7vw] leading-[7w] my-5`}
            >
              Hi, It&#39;s{" "}
              <span className={`${Bebas.className}`}>Muhammad Abdullah</span>
            </div>
            <div
              ref={text2}
              className={`${Bebas.className} md:text-[7vw] md:leading-[7vw] text-[13vw] leading-[12vw]`}
            >
              Full Stack Web <span ref={develop}>Developer</span>
            </div>
            <div
              ref={text3}
              className="flex lg:space-x-6 space-x-4 mt-8 justify-center"
            >
              <button
                onClick={onclickProjects}
                className="text-[2vw] leading-[2vw] font-medium rounded-lg hover:bg-[#272727]/80 lg:px-7 px-4 py-3 border-[1px] border-gray-200 cursor-pointer"
              >
                View Projects
              </button>
              <button className="bg-[#2FD391] text-[#121212] text-[2vw] focus:ring-3 ring-white leading-[2vw] font-bold rounded-lg hover:bg-[#2FD391]/80 lg:px-7 px-4 py-3 cursor-pointer">
                <a href="/realResume.pdf" download="Abdullah Resume">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <TechStack ref={StackRef} />
      <Projects ref={ProjectsRef} />
      <ContactArea ref={contactREF} />
    </>
  );
}
