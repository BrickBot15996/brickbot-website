"use client";
import { CSSProperties, useEffect, useState } from "react";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiArrowNarrowUp,
  HiArrowNarrowDown,
} from "react-icons/hi";
import { motion, Variants } from "framer-motion";

type ArrowButtonProps = {
  action?: () => void;
  color?: string;
  gradientLight?: string;
  gradientDark?: string;
  arrowDirection?: string;
  toggleDirection?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
};

export default function ArrowButton({
  action = () => {},
  color = "var(--default-yellow)",
  gradientLight = "var(--yellow-gradient-light)",
  gradientDark = "var(--yellow-gradient-dark)",
  arrowDirection = "right",
  toggleDirection = false,
  disabled = false,
  style = {},
  className = "",
}: ArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  const getAnimationState = () => {
    if (disabled) return "default";
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
      className={`relative w-[var(--arrow-button-size)] h-[var(--arrow-button-size)] rounded-full select-none ${className}`}
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
        setIsToggled(!isToggled);
      }}
      style={{
        cursor: disabled ? "default" : "pointer",
        ...style,
      }}
    >
      <motion.div
        variants={arrowButtonScaleAnimation}
        initial="default"
        animate={getAnimationState()}
        className="w-full h-full rounded-full border-[0.15rem]"
        style={{
          filter: disabled ? "brightness(0.75)" : "brightness(1)",
          borderColor: color,
          background: `linear-gradient(to bottom, ${gradientLight}, ${gradientDark})`,
        }}
      >
        {/* Arrow Icon with toggle rotation */}
        <motion.div
          animate={{ rotate: isToggled && toggleDirection ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-full h-full"
          style={{
            padding: `calc(0.75 * var(--arrow-button-size) / 3.5)`,
          }}
        >
          {arrowDirection === "left" && (
            <HiArrowNarrowLeft
              className="w-full h-auto"
              style={{ fill: color }}
            />
          )}
          {arrowDirection === "right" && (
            <HiArrowNarrowRight
              className="w-full h-auto"
              style={{ fill: color }}
            />
          )}
          {arrowDirection === "up" && (
            <HiArrowNarrowUp
              className="w-full h-auto"
              style={{ fill: color }}
            />
          )}
          {arrowDirection === "down" && (
            <HiArrowNarrowDown
              className="w-full h-auto"
              style={{ fill: color }}
            />
          )}
        </motion.div>
        <motion.div
          variants={arrowButtonOverlayAnimation}
          initial="default"
          animate={getAnimationState()}
          className="absolute inset-0 w-full h-full rounded-full bg-white opacity-0"
        />
      </motion.div>
    </div>
  );
}

export const arrowButtonOverlayAnimation: Variants = {
  default: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hovered: {
    opacity: 0.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  clicked: {
    opacity: 0.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const arrowButtonScaleAnimation: Variants = {
  default: {
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hovered: {
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  clicked: {
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
