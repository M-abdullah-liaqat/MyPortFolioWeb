import React from "react";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Card = ({
  image,
  ImageText,
  cardIndex,
}: {
  image?: string;
  ImageText: string;
  cardIndex: number;
}) => {
  const fullCard = useRef<HTMLDivElement>(null);
  const [IsMouseOver, setIsMouseOver] = useState(false);

  const hoverHandle = () => {
    setIsMouseOver(true);
  };
  const hoverHandleAnti = () => {
    setIsMouseOver(false);
  };
  return (
    <div
    ref={fullCard}
      onMouseEnter={() => hoverHandle()}
      onMouseLeave={() => {
        hoverHandleAnti();
      }}
      className={
        "shadow-xl md:h-[200px] h-[140px] rounded-lg w-full p-4 overflow-hidden bg-white hover:bg-neutral-100 flex items-center justify-center border-2 relative z-20"
      }
    >
      <div className="relative z-50">
        <div className="p-4 flex items-center flex-col justify-center">
          <img
            className={`w-[60%] md:w-[50%] ${
              IsMouseOver ? "scale-85" : "scale-100 transition-all duration-300"
            }
             transition-all duration-300`}
            src={image}
            alt={ImageText}
          />{" "}
          <div
            className={`text-black ${
              IsMouseOver ? "opacity-100" : "opacity-0"
            } transition-all duration-300`}
          >
            {ImageText}
          </div>
        </div>
      </div>
    </div>
  );
};
