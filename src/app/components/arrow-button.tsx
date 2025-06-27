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
  color?: string;
  gradientLight?: string;
  gradientDark?: string;
  litUpGradientLight?: string;
  litUpGradientDark?: string;
  arrowDirection: string;
  toggleDirection?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
};

export default function ArrowButton({
  action,
  ariaLabel,
  color = "var(--default-yellow)",
  gradientLight = "var(--yellow-gradient-light)",
  gradientDark = "var(--yellow-gradient-dark)",
  litUpGradientLight = "var(--lit-up-yellow-gradient-light)",
  litUpGradientDark = "var(--lit-up-yellow-gradient-dark)",
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
        className={`group w-[var(--arrow-button-size)] h-[var(--arrow-button-size)] p-[0.3rem] md:p-[0.35rem] lg:p-[0.5rem] xl:p-[0.75rem] rounded-full border-[0.1rem] flex flex-col justify-center ${className}`}
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
          className="flex flex-col items-center justify-center"
        >
          {arrowDirection == "left" && (
            <HiArrowNarrowLeft
              className="h-full w-full"
              style={{ fill: color }}
            />
          )}
          {arrowDirection == "right" && (
            <HiArrowNarrowRight
              className="h-full w-full"
              style={{ fill: color }}
            />
          )}
          {arrowDirection == "up" && (
            <HiArrowNarrowUp
              className="h-full w-full"
              style={{ fill: color }}
            />
          )}
          {arrowDirection == "down" && (
            <HiArrowNarrowDown
              className="h-full w-full"
              style={{ fill: color }}
            />
          )}
        </motion.div>
      </button>
    </div>
  );
}
