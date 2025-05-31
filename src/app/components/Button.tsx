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
      className="flex flex-row justify-center items-center space-x-[0.25vw] px-[1.25vw] py-[0.5vh] rounded-full border-[0.25vh] hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150 cursor-pointer"
      style={{
        borderColor: color,
        backgroundImage: `linear-gradient(180deg, ${color}8F 0%, ${color}3F 50%)`,
      }}
      onClick={action}
    >
      <p
        className="font-extrabold text-[2.25vh]"
        style={{ color: color }}
      >
        {text}
      </p>
      {arrow && (
        <div
          className="z-[10] inline-block mr-[-0.5vw] h-[2.75vh] w-[1.5vw]"
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
