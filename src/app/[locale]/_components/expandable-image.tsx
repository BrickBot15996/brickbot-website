"use client";

import { CSSProperties, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  arrowButtonOverlayAnimation,
  arrowButtonScaleAnimation,
} from "./arrow-button";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "../global-context";
import { useScrollLock } from "../_hooks/lock-scroll";
import LoadFadeImage from "./fade-in-on-load-image";
import { ImageProps } from "next/image";

type ExpandableImageProps = ImageProps & {
  aspectRatio?: string;
  buttonProps?: CloseButtonProps;
};

export default function ExpandableImage({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
  buttonProps = {
    color: "var(--default-yellow)",
    gradientLight: "var(--yellow-gradient-light)",
    gradientDark: "var(--yellow-gradient-dark)",
  },
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setHideNavbar } = useGlobalContext();

  useScrollLock(isExpanded);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Inline image */}
      <div
        onClick={() => {
          setIsExpanded(true);
          setHideNavbar(true);
        }}
        className="cursor-zoom-in"
      >
        <LoadFadeImage
          src={src}
          alt={alt}
          className={className}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="fixed inset-0 z-10001 flex items-center justify-center bg-black/70"
                onClick={() => {
                  setIsExpanded(false);
                  setHideNavbar(false);
                }}
              >
                <div
                  className="relative w-[100vw] md:w-[var(--page-width)]"
                  style={{
                    aspectRatio: aspectRatio,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <LoadFadeImage
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover rounded-[1.5rem] lg:rounded-[3rem]"
                  />
                  <div className="absolute top-[1rem] right-[1rem] opacity-50%">
                    <CloseButton
                      action={() => {
                        setIsExpanded(false);
                        setHideNavbar(false);
                      }}
                      aria-label="Close image"
                      color={buttonProps.color}
                      gradientLight={buttonProps.gradientLight}
                      gradientDark={buttonProps.gradientDark}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

type CloseButtonProps = {
  action?: () => void;
  color?: string;
  gradientLight?: string;
  gradientDark?: string;
  style?: CSSProperties;
  className?: string;
};

export function CloseButton({
  action = () => {},
  color = "var(--default-yellow)",
  gradientLight = "var(--yellow-gradient-light)",
  gradientDark = "var(--yellow-gradient-dark)",
  style = {},
  className = "",
}: CloseButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
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
      className={`relative w-[var(--arrow-button-size)] h-[var(--arrow-button-size)] rounded-full select-none cursor-pointer ${className}`}
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
        ...style,
      }}
    >
      <motion.div
        variants={arrowButtonScaleAnimation}
        initial="default"
        animate={getAnimationState()}
        className="w-full h-full rounded-full border-[0.15rem]"
        style={{
          borderColor: color,
          background: `linear-gradient(to bottom, ${gradientLight}, ${gradientDark})`,
        }}
      >
        {/* Arrow Icon with toggle rotation */}
        <div
          className="inline-flex items-center justify-center w-full h-full"
          style={{
            padding: `calc(0.75 * var(--arrow-button-size) / 3.5)`,
          }}
        >
          <IoMdClose
            className="w-full h-auto"
            style={{ fill: color }}
          />
        </div>
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
