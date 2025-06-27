"use client";

import { ReactNode, useState, CSSProperties } from "react";

type SimpleBoxProps = {
  action?: () => void;
  children?: ReactNode;
  borderRadius?: string;
  borderThickness?: string;
  hoverEffect?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function SimpleBox({
  action = () => {},
  children,
  borderRadius = "1.5rem",
  borderThickness = "0.2rem",
  hoverEffect = false,
  className = "",
  style = {},
}: SimpleBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-full w-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={action}
      style={{
        ...style,
      }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-200 bg-[#1A1A1A] border-[#363636]"
        style={{
          opacity: hoverEffect ? (isHovered ? "1.0" : "0.0") : "1.0",
          borderWidth: `${borderThickness}`,
          borderRadius: `${borderRadius}`,
          padding: `${borderThickness}`,
        }}
      />

      <div className={`relative z-2 h-full w-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
