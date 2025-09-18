"use client";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  const box3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(box1.current, {
      x: "1500px",
      duration: 2,
      delay: 1,
      ease: "power2.out",
      rotate: 360,
      borderRadius: "50%",
    });
    gsap.to(box2.current, {
      x: "1500px",
      duration: 2,
      delay: 1,
      ease: "power2.out",
      rotate: 360,
      borderRadius: "50%",
      scrollTrigger: {
        trigger: box2.current,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 3,
        markers: true,
      }
    });
    gsap.from(box3.current, {
      duration: 2,
      delay: 1,
      scale: 0,
      ease: "power2.out",
      rotate: 360,
      borderRadius: "50%",
      scrollTrigger: {
        trigger: box3.current,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 3,
        markers: true,
      }
    });
  }, []);
  return (
    <div>
      <div className="page1container w-full h-[100vh] items-center flex bg-amber-300">
        <div
          ref={box1}
          className="page1 w-[300px] h-[300px] bg-slate-600"
        ></div>
      </div>
      <div className="page2container w-full h-[100vh] flex items-center bg-emerald-500">
        <div ref={box2} className="page1 w-[300px] h-[300px] bg-pink-800"></div>
      </div>
      <div className="page3container w-full h-[100vh] flex justify-center items-center bg-neutral-600">
        <div ref={box3} className="page1 w-[300px] h-[300px] bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Page1;
