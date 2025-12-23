"use client";
import { Bebas_Neue, Roboto } from "next/font/google";
import { useRef } from "react";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Robot = Roboto({
  subsets: ["latin"],
  weight: "400",
});
const AboutMe = () => {
  const text1Head = useRef<HTMLDivElement>(null);
  const text2Para = useRef<HTMLDivElement>(null);
  const theImage = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(theImage.current, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: text2Para.current,
        scroller: "body",
        toggleActions: "restart none none reset",
      },
    });
    gsap.from(text1Head.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      scrollTrigger: {
        trigger: text2Para.current,
        scroller: "body",
        toggleActions: "restart none none reset",
      },
    });
    gsap.from(text2Para.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: text2Para.current,
        scroller: "body",
        toggleActions: "restart none none reset",
      },
    });
  });
  return (
    <div
      className={`${Robot.className} MainPage 3xl:w-[1632px] justify-self-center text-black my-10 grid w-full lg:grid-cols-2 grid-cols-1 gap-5`}
    >
      <div className="xl:px-15 lg:px-5 px-2 py-8 flex flex-col gap-5 justify-center">
        <div ref={text1Head} className={`${Bebas.className} text-[48px] md:text-left text-center`}>
          About me
        </div>
        <div ref={text2Para} className="md:text-[24px] text-[18px] md:text-left text-center">
          <div>
            Hi, I am Abdullah from Pakistan. I&#39;m a Full-Stack JavaScript
            Developer specializing in the MERN stack.
          </div>
          <div>
            Over the past year, I&#39;ve built more than 10 projects, which makes me
            a full-stack developer.
            My Goal is to turn scalable ideas into web applications with modern
            technologies.
          </div>
        </div>
        <div className="flex md:justify-start justify-center items-center">
          <button className="bg-black text-white  focus:ring-3 ring-white font-medium rounded-lg hover:bg-black/80 lg:px-7 px-4 py-3 cursor-pointer">
            Download Resume
          </button>
        </div>
      </div>
      <div className="lg:flex items-center justify-center hidden">
        <div ref={theImage}>
          <img src="/codingMan.jpg" className="h-[600px] rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
