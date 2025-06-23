"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ProjectProps = {
  gradientColor: string;
  textColor: string;
  title: string;
  subtitle: string;
  description: string;
  logoPath: string;
};

export default function ProjectTitle({
  gradientColor,
  textColor,
  title,
  subtitle,
  description,
  logoPath,
}: ProjectProps) {
  const [showProjectBadge, setShowProjectBadge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowProjectBadge(window.innerWidth > 400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col">
      <div
        className="relative h-[20rem] md:h-[22rem] lg:h-[32rem] w-[100vw] flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(0deg, ${gradientColor}, var(--default-dark) 98%)`,
        }}
      >
        <div className="flex flex-row items-center justify-center w-[var(--page-width)] h-full">
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row space-x-[var(--md-space-x)] items-center mb-[var(--md-space-y)] h-fit">
              <h1 style={{ color: textColor }}>{title}</h1>
              {showProjectBadge && (
                <div className="bg-[var(--default-dark)] border-[0.075rem] border-[#5D5D5D] rounded-full px-[1.5rem] lg:px-[1.9rem] text-[#5D5D5D] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] py-[0.1rem] font-semibold h-fit">
                  Project
                </div>
              )}
            </div>
            <h4
              className="mb-[var(--lg-space-y)]"
              style={{ color: textColor, fontWeight: 600 }}
            >
              {subtitle.toUpperCase()}
            </h4>
            <p
              className="w-[100%] md:w-[90%] lg:w-[65%]"
              style={{ color: "var(--alternate-text)" }}
            >
              {description}
            </p>
          </div>
          <div className="w-[0rem] md:w-[40rem] h-auto ml-auto opacity-10">
            <Image
              src={logoPath}
              alt={title + " logo"}
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div
        className="h-[var(--separator-thickness)]"
        style={{
          background: `linear-gradient(90deg, transparent 3%, ${textColor} 34%, transparent 78%)`,
          filter: `opacity(0.75)`,
        }}
      ></div>
    </section>
  );
}
