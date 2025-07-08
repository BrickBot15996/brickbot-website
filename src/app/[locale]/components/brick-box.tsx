// Box.tsx
"use client";

import { ReactNode, useState, CSSProperties, useEffect } from "react";
import { motion, Variants } from "framer-motion";

type BoxProps = {
  color?: string;
  action?: () => void;
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
  borderRadius?: string;
  borderThickness?: string;
  hoverEffect?: boolean;
  style?: CSSProperties;
};

export default function Box({
  color = "var(--box-gradient-light)",
  action = () => {},
  children,
  className = "",
  gradient = false,
  borderRadius = "1.5rem",
  borderThickness = "0.2rem",
  hoverEffect = false,
  style = {},
}: BoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  const getAnimationState = () => {
    if (hoverEffect == false) return "default";
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

  const getBackgroundWithOpacity = () => {
    if (color === "var(--box-gradient-light)") {
      return `linear-gradient(180deg, ${color}, var(--box-gradient-dark))`;
    } else {
      const colorWithOpacity = color.startsWith("var(")
        ? `color-mix(in srgb, ${color} 8%, transparent)`
        : `${color}14`;
      return `linear-gradient(180deg, ${colorWithOpacity}, var(--box-gradient-dark))`;
    }
  };

  return (
    <div
      className={`relative h-full w-full`}
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
        ...style,
      }}
    >
      {gradient && (
        <motion.div
          variants={boxScaleAnimation}
          initial="default"
          animate={getAnimationState()}
          className="absolute inset-0 w-full h-full z-10 opacity-8"
          style={{
            background: `linear-gradient(180deg, ${color}, var(--accents-dark-transparent))`,
            borderRadius: `${borderRadius}`,
          }}
        />
      )}

      <motion.div
        variants={boxOverlayAnimation}
        initial="default"
        animate={getAnimationState()}
        className="absolute inset-0 w-full h-full z-10 bg-white"
        style={{
          borderRadius: `${borderRadius}`,
        }}
      />

      <motion.div
        className={`absolute inset-0`}
        variants={boxScaleAnimation}
        initial="default"
        animate={getAnimationState()}
        style={{
          background: getBackgroundWithOpacity(),
          borderRadius: `${borderRadius}`,
          padding: `${borderThickness}`,
        }}
      >
        <div
          className="w-full h-full bg-[var(--default-dark)]"
          style={{
            borderRadius: `calc(${borderRadius} - ${borderThickness})`,
          }}
        >
          <div
            className="w-full h-full bg-[linear-gradient(180deg,_var(--box-inner-gradient-light),_var(--box-inner-gradient-dark))]"
            style={{
              borderRadius: `calc(${borderRadius} - ${borderThickness})`,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        variants={boxScaleAnimation}
        initial="default"
        animate={getAnimationState()}
        className={`relative z-11 h-full w-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const boxOverlayAnimation: Variants = {
  default: {
    opacity: 0,
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hovered: {
    opacity: 0.05,
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  clicked: {
    scale: 0.93,
    opacity: 0.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const boxScaleAnimation: Variants = {
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
    scale: 0.93,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
