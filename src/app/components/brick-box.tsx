// Box.tsx
"use client";

import { ReactNode, useState, CSSProperties } from "react";

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={action}
      style={{
        ...style,
      }}
    >
      {gradient && (
        <div
          className="absolute inset-0 w-full h-full z-10 transition-opacity duration-300"
          style={{
            background: `linear-gradient(180deg, ${color}, var(--accents-dark-transparent))`,
            opacity: hoverEffect ? (isHovered ? 0.08 : 0) : 0.08,
            borderRadius: `${borderRadius}`,
          }}
        />
      )}

      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          hoverEffect && !isHovered ? "opacity-0" : "opacity-100"
        }`}
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
      </div>

      <div className={`relative z-20 h-full w-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
