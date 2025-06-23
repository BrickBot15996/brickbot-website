import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

type ButtonParams = {
  text: string;
  arrow: boolean;
  accentColor: string;
  gradientColorLight: string;
  gradientColorDark: string;
  action?: () => void;
};

export default function Button({
  text,
  arrow = false,
  accentColor,
  gradientColorLight,
  gradientColorDark,
  action,
}: ButtonParams) {
  return (
    <button
      className="group inline-flex justify-center items-center space-x-[0.15rem] md:space-x-[0.2rem] lg:space-x-[0.25rem] px-[1.2rem] md:px-[1.5rem] lg:px-[1.75rem] py-[0.25rem] md:py-[0.35rem] lg:py-[0.4rem] rounded-[1.1rem] md:rounded-[1.3rem] lg:rounded-[1.5rem] border-[0.13rem] md:border-[0.15rem] lg:border-[0.17rem] hover:brightness-75 hover:scale-107 active:brightness-100 active:scale-93 transition-transform duration-150 cursor-pointer select-none w-fit"
      style={{
        borderColor: accentColor,
        backgroundImage: `linear-gradient(180deg, ${gradientColorLight}, ${gradientColorDark})`,
      }}
      onClick={action}
    >
      <div className="inline-flex space-x-[0.8rem] items-center">
        <h4
          className="py-[0.35rem]"
          style={{ color: accentColor }}
        >
          {text}
        </h4>
        {arrow && (
          <HiArrowNarrowRight
            className=" mr-[-0.4rem] mt-[0.05rem] h-[1.2rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto"
            style={{ color: accentColor }}
          />
        )}
      </div>
    </button>
  );
}
