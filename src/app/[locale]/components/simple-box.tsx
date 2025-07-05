"use client";

import { ReactNode, CSSProperties } from "react";

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
  return (
    <div
      className={`group relative`}
      onClick={action}
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
          className={`w-full h-full bg-[#ffffff] ${
            hoverEffect
              ? "opacity-0 group-hover:opacity-2.5 group-active:opacity-5"
              : "opacity-0"
          }`}
          style={{
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
