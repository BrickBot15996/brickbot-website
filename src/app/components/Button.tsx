import React from "react";

type ButtonParams = {
  text: string;
  arrow?: boolean;
  color?: string;
  action?: () => void;
};

export default function Button({ text, arrow, color, action }: ButtonParams) {
  return (
    <button
      className="flex flex-row justify-center items-center space-x-[0.15rem] md:space-x-[0.2rem] lg:space-x-[0.25rem] px-[0.75rem] md:px-[1rem] lg:px-[1.25rem] py-[0.1rem] md:py-[0.15rem] lg:py-[0.2rem] rounded-full border-[0.11rem] md:border-[0.14rem] lg:border-[0.17rem] hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150 cursor-pointer"
      style={{
        borderColor: color,
        backgroundImage: `linear-gradient(180deg, ${color}8F 0%, ${color}3F 50%)`,
      }}
      onClick={action}
    >
      <p
        className="mr-auto font-extrabold text-[0.75rem] md:text-[1.125rem] lg:text-[1.5rem]"
        style={{ color: color }}
      >
        {text}
      </p>
      {arrow && (
        <div
          className="mr-[-1.7rem] h-[1.2rem] md:h-[1.5rem] lg:h-[1.8rem] w-[2.4rem] md:w-[2.7rem] lg:w-[3rem]"
          style={{
            WebkitMaskImage: `url('/right-arrow-yellow.png')`,
            maskImage: `url('/right-arrow-yellow.png')`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            backgroundColor: color,
          }}
        />
      )}
    </button>
  );
}
