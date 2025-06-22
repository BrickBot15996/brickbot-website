"use client";
import { CSSProperties, useState } from "react";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiArrowNarrowUp,
  HiArrowNarrowDown,
} from "react-icons/hi";
import { motion } from "framer-motion";

type ArrowButtonProps = {
  action: () => void;
  ariaLabel: string;
  color: string;
  gradientLight: string;
  gradientDark: string;
  litUpGradientLight: string;
  litUpGradientDark: string;
  arrowDirection: string;
  toggleDirection?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
};

export default function ArrowButton({
  action,
  ariaLabel,
  color,
  gradientLight,
  gradientDark,
  litUpGradientLight,
  litUpGradientDark,
  arrowDirection,
  toggleDirection = false,
  disabled = false,
  style = {},
  className = "",
}: ArrowButtonProps) {
  const [isLit, setIsLit] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const currentGradient =
    isLit && !disabled
      ? `linear-gradient(180deg, ${litUpGradientLight}, ${litUpGradientDark})`
      : `linear-gradient(180deg, ${gradientLight}, ${gradientDark})`;

  const handleClick = () => {
    if (disabled) return;

    action();
    if (toggleDirection) {
      setIsToggled((prev) => !prev);
    }
  };

  return (
    <div>
      <button
        className={`group w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] flex flex-col justify-center transition-all ${className}`}
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        style={{
          background: currentGradient,
          filter: disabled ? "brightness(0.75)" : "none",
          cursor: disabled ? "default" : "pointer",
          borderColor: color,
          ...style,
        }}
        onMouseEnter={() => !disabled && setIsLit(true)}
        onMouseLeave={() => setIsLit(false)}
      >
        <motion.div
          animate={{ rotate: isToggled && toggleDirection ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center"
        >
          {arrowDirection == "left" && (
            <HiArrowNarrowLeft
              className="h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto"
              style={{ fill: color }}
            />
          )}
          {arrowDirection == "right" && (
            <HiArrowNarrowRight
              className="h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto"
              style={{ fill: color }}
            />
          )}
          {arrowDirection == "up" && (
            <HiArrowNarrowUp
              className="h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto"
              style={{ fill: color }}
            />
          )}
          {arrowDirection == "down" && (
            <HiArrowNarrowDown
              className="h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto"
              style={{ fill: color }}
            />
          )}
        </motion.div>
      </button>
    </div>
  );
}
