"use client";

import { ReactNode, CSSProperties, useState, useEffect } from "react";

type SimpleBoxProps = {
  action?: () => void;
  children?: ReactNode;
  width?: string;
  height?: string;
  borderRadius?: number;
  borderThickness?: number;
  hoverEffect?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function SimpleBox({
  action = () => {},
  children,
  width,
  height,
  borderRadius = 1.5,
  borderThickness = 0.2,
  hoverEffect = false,
  className = "",
  style = {},
}: SimpleBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isClicked) return;

    const handleRelease = () => setIsClicked(false);

    window.addEventListener("mouseup", handleRelease);
    window.addEventListener("touchend", handleRelease);
    return () => {
      window.removeEventListener("mouseup", handleRelease);
      window.removeEventListener("touchend", handleRelease);
    };
  }, [isClicked]);

  return (
    <div
      className={`relative`}
      onClick={() => {
        action();
      }}
      onMouseUp={() => {
        setIsClicked(false);
      }}
      onMouseDown={() => {
        setIsClicked(true);
      }}
      onTouchStart={() => {
        setIsClicked(true);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
      style={{
        ...(width && { width: width }),
        ...(height && { height: height }),
        ...style,
      }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-200 bg-[#1A1A1A] border-[#363636]"
        style={{
          borderWidth: `${borderThickness}rem`,
          borderRadius: `${borderRadius}rem`,
        }}
      >
        <div
          className="w-full h-full bg-[#ffffff]"
          style={{
            opacity: hoverEffect
              ? isClicked
                ? "0.05"
                : isHovered
                ? "0.025"
                : "0"
              : "0",
            borderRadius: `${borderRadius - borderThickness}rem`,
          }}
        />
      </div>

      <div className={`relative z-2 h-full w-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
