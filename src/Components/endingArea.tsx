"use client";
import React from "react";
import { Bebas_Neue, Roboto } from "next/font/google";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { i } from "motion/react-client";
import { forwardRef } from "react";
import { toast } from "sonner";
gsap.registerPlugin(ScrollTrigger);
const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Robot = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const ContactArea = forwardRef<HTMLDivElement, object>(function ContactArea(_props, ref){
  const socialImage1 = useRef<HTMLImageElement>(null);

  return (
    <div
      ref={ref}
      className={` mt-30 ${Robot.className} w-full justify-self-center text-white bg-[#121212] p-10 rounded-xl`}
    >
      <div className="w-full flex flex-col items-center justify-center md:w-[740px] justify-self-center gap-4">
        <div
          className={`${Bebas.className} md:text-[48px] text-[32px] text-white text-center`}
        >
          Let&apos;s Work together
        </div>
        <div className="md:text-[24px] text-[18px] text-center">
          I&apos;m available for freelance, collaborations, or full-time
          opportunities. Feel free to reach out!
        </div>
        <div className="md:text-[24px] text-[18px] text-center">
          Feel free to drop me an email at m.abdullah.fullstack@gmail.com — I&apos;ll
          reply within 24 business hours. For a quicker hello, you can also send
          me a DM on Facebook or LinkedIn (links below).
        </div>
        <div className="flex gap-3 justify-self-start">
          <a
            href="https://www.linkedin.com/in/muhammad-abdullah-5ab666354/"
            target="_blank"
          >
            <Image
              ref={socialImage1}
              width={60}
              height={60}
              src="/soical/linkedin.png"
              className="hover:scale-105 hover:translate-y-[-10px] transition-all duration-150 cursor-pointer invert md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571600491176"
            target="_blank"
          >
            <Image
              width={60}
              height={60}
              src="/soical/facebook.png"
              className="hover:scale-105 hover:translate-y-[-10px] transition-all duration-150 cursor-pointer invert md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
              alt=""
            />
          </a>
          <a href="https://wa.me/+923094580984" target="_blank">
            <Image
              width={60}
              height={60}
              src="/soical/whatsapp.png"
              className="hover:scale-105 hover:translate-y-[-10px] transition-all duration-150 cursor-pointer invert md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
              alt=""
            />
          </a>
          <Image
          onClick={()=>{
            navigator.clipboard.writeText("m.abdullah.fullstack@gmail.com")
            toast("Email Copied!")
          }}
            width={60}
            height={60}
            src="/soical/email.png"
            className="hover:scale-105 hover:translate-y-[-10px] transition-all duration-150 cursor-pointer invert md:w-[60px] w-[40px] md:h-[60px] h-[40px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
});

export default ContactArea;
