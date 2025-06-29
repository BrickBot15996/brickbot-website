import React, { CSSProperties, useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  buttonOverlayAnimation,
  brickButtonScaleAnimation,
} from "./animations";

type ButtonParams = {
  text: string;
  arrow?: boolean;
  color?: string;
  gradientLight?: string;
  gradientDark?: string;
  action?: () => void;
  className?: string;
  style?: CSSProperties;
};

export default function Button({
  text,
  arrow = false,
  color = "var(--default-yellow)",
  gradientLight = "var(--yellow-gradient-light)",
  gradientDark = "var(--yellow-gradient-dark)",
  action = () => {},
  className = "px-[1rem] md:px-[1.3rem] lg:px-[1.5rem]",
  style = {},
}: ButtonParams) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  const getAnimationState = () => {
    if (isTouchScreen) return isClicked ? "clicked" : "default";
    else return isClicked ? "clicked" : isHovered ? "hovered" : "default";
  };

  useEffect(() => {
    if (!isClicked) return;

    const handleRelease = () => {
      setIsClicked(false);
    };

    window.addEventListener("mouseup", handleRelease);
    window.addEventListener("touchend", handleRelease);
    return () => {
      window.removeEventListener("mouseup", handleRelease);
    };
  }, [isClicked]);

  return (
    <div
      className={`relative w-fit h-fit rounded-[1.5rem] select-none `}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseDown={() => {
        setIsClicked(true);
        setIsTouchScreen(false);
      }}
      onTouchStart={() => {
        setIsClicked(true);
        setIsTouchScreen(true);
      }}
      onClick={() => {
        action();
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <motion.div
        variants={brickButtonScaleAnimation}
        initial="default"
        animate={getAnimationState()}
        className={`w-fit h-fit rounded-[1.5rem] border-[0.15rem] ${className}`}
        style={{
          borderColor: color,
          background: `linear-gradient(to bottom, ${gradientLight}, ${gradientDark})`,
          ...style,
        }}
      >
        <div className="inline-flex space-x-[0.6rem] items-center">
          <h4
            className="py-[0.5rem] md:py-[0.6rem] lg:py-[0.75rem]"
            style={{ color: color }}
          >
            {text.toUpperCase()}
          </h4>
          {arrow && (
            <HiArrowNarrowRight
              className="mr-[-0.3rem] mt-[0.03rem] h-[1.4rem] lg:h-[1.6rem] w-auto"
              style={{ color: color }}
            />
          )}
        </div>
        <motion.div
          variants={buttonOverlayAnimation}
          initial="default"
          animate={getAnimationState()}
          className="absolute inset-0 w-full h-full rounded-[1.5rem] border-[0.15rem] bg-white opacity-0"
        />
      </motion.div>
    </div>
  );
}
