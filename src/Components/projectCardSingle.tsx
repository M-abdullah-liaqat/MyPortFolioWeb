"use client";
import React from "react";
import { useRef, useState } from "react";
interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
  stack: Array<number>;
}

const ProjectCardSingle = (props: Props) => {
  const [isHover, setisHover] = useState(false);
  const headText = useRef<HTMLDivElement>(null);
  const normalText = useRef<HTMLDivElement>(null);
  const cardImage = useRef<HTMLImageElement>(null);
  return (
    <div
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      className="bg-white perspective-distant shadow-lg hover:bg-neutral-100 rounded-lg p-5 flex flex-col justify-between gap-3 transition-all"
    >
      <img
        ref={cardImage}
        className={`width-full rounded-lg transition-all ${
          isHover && "translate-z-8"
        } transition-all duration-200`}
        src={`${props.image}`}
        alt=""
      />
      <div className="perspective-distant mt-3 text-center">
        <div
          ref={headText}
          className={`md:text-2xl text-xl font-bold transition-all ${
            isHover && "translate-z-12"
          } transition-all`}
        >
          {props.title}
        </div>
        <div
          ref={normalText}
          className={`md:text-[20px] ${
            isHover && "translate-z-10"
          } transition-all duration-200`}
        >
          {props.description}
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <a href={props.link} target="_blank">
          <button className="px-8 py-2 rounded-xl bg-black text-white text-[20px] hover:bg-black/80 cursor-pointer">
            Visit
          </button>
          </a>
        </div>
        <div className="flex justify-center items-center gap-1.5">
          {
            props.stack && props.stack.map((item, index)=>(
              <img
              key={index}
                src={`/Tech Stack Icons/${item}.svg`}
                className="md:w-[32px] w-[24px] hover:scale-107 hover:translate-y-[-7px] transition-all duration-150"
                alt=""
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSingle;
