"use client";

import { ReactNode, useState } from "react";

type BoxProps = {
  color?: string;
  action?: () => void;
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
  borderRadius?: string;
  borderThickness?: string;
  hoverEffect?: boolean;
};

export default function Box({
  color = "var(--default-yellow)",
  action = () => {},
  children,
  className = "",
  gradient = false,
  borderRadius = "1.5rem",
  borderThickness = "0.2rem",
  hoverEffect = false,
}: BoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={action}
    >
      {gradient && (
        <div
          className="absolute inset-0 w-full h-full z-10 transition-opacity duration-300"
          style={{
            background: `linear-gradient(180deg, ${color}, var(--accents-dark-transparent))`,
            opacity: hoverEffect ? (isHovered ? 0.2 : 0) : 0.2,
            borderRadius: `${borderRadius}`,
          }}
        />
      )}

      <div
        className={`absolute inset-0 bg-[linear-gradient(180deg,_var(--box-gradient-light),_var(--box-gradient-dark))] transition-opacity duration-200 ${
          hoverEffect && !isHovered ? "opacity-0" : "opacity-100"
        }`}
        style={{
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
      </div>

      <div className="relative z-20 h-full w-full">{children}</div>
    </div>
  );
}
