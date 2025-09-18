import React from "react";
import { Bebas_Neue, Roboto } from "next/font/google";
import { HoverEffect } from "./StackGrid";
import { forwardRef } from "react";
const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Robot = Roboto({
  subsets: ["latin"],
  weight: "400",
});
interface Props {}

const clients = [
  { href: "/Tech Stack Icons/1.svg", alt: "Next js" },
  { href: "/Tech Stack Icons/2.svg", alt: "React js" },
  { href: "/Tech Stack Icons/3.svg", alt: "Express js" },
  { href: "/Tech Stack Icons/4.svg", alt: "Node js" },
  { href: "/Tech Stack Icons/5.svg", alt: "React Redux" },
  { href: "/Tech Stack Icons/6.svg", alt: "Tailwind css" },
  { href: "/Tech Stack Icons/7.svg", alt: "TypeScript" },
  { href: "/Tech Stack Icons/8.svg", alt: "git" },
  { href: "/Tech Stack Icons/9.svg", alt: "PostgreSQL" },
  { href: "/Tech Stack Icons/10.svg", alt: "MongoDB" },
  { href: "/Tech Stack Icons/11.svg", alt: "FireBase" },
  { href: "/Tech Stack Icons/12.svg", alt: "Figma" },
];
const TechStack = forwardRef<HTMLDivElement, object> ((_props, ref) => {
  return (
    <div
    ref={ref}
      className={`mb-10  ${Robot.className} 3xl:w-[1632px] w-full justify-self-center`}
    >
      <div className="xl:px-15 lg:px-5 px-2  flex flex-col gap-5">
        <div className={`${Bebas.className} text-[48px] text-black`}>
          Tech Stack
        </div>{" "}
        <HoverEffect items={clients} />
      </div>
    </div>
  );
});

export default TechStack;
