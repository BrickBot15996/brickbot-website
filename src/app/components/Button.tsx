import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type ButtonParams = {
  text: string;
  arrow?: boolean;
  color?: string;
  action?: () => void;
};

export default function Button({ text, arrow, color, action }: ButtonParams) {
  return (
    <button
      className="inline-flex justify-center items-center space-x-[0.15rem] md:space-x-[0.2rem] lg:space-x-[0.25rem] px-[0.85rem] md:px-[1.1rem] lg:px-[1.25rem] py-[0.14rem] md:py-[0.17rem] lg:py-[0.2rem] rounded-full border-[0.13rem] md:border-[0.15rem] lg:border-[0.17rem] hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150 cursor-pointer select-none w-fit"
      style={{
        borderColor: color,
        backgroundImage: `linear-gradient(180deg, ${color}55, ${color}35)`,
      }}
      onClick={action}
    >
      <p
        className="font-extrabold text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]"
        style={{ color: color }}
      >
        {text}
      </p>
      {arrow && (
        <HiArrowNarrowRight
          className="ml-[0.2rem] mr-[-0.3rem] h-[1.2rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto"
          style={{ color: color }}
        />
      )}
    </button>
  );
}
