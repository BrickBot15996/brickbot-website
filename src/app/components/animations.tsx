"use client";
import { Variants } from "framer-motion";

import { motion, useInView } from "framer-motion";
import { CSSProperties, useRef } from "react";

type Props = {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  style?: CSSProperties;
};

export function AnimationWhenInView({
  children,
  variants,
  className = "",
  style = {},
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

export const defaultFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const opacityFadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
