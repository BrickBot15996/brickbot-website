"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";

type ComingSoonProps = {
  pageName: string;
  pageDescription: string;
  textColor?: string;
  gradientColor?: string;
};

export default function ComingSoon({
  pageName,
  pageDescription,
  textColor = "var(--default-yellow)",
  gradientColor = "#1E1703",
}: ComingSoonProps) {
  return (
    <motion.section
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height))] w-full select-none"
      style={{
        background: `linear-gradient(0deg, ${gradientColor}, var(--default-dark) 98%)`,
      }}
    >
      <div className="flex flex-col items-center justify-center mt-[calc(0rem-var(--md-space-y))]">
        <h1 style={{ color: textColor }}>{pageName.toUpperCase()}</h1>
        <p className="mt-[var(--md-space-y)] mb-[var(--lg-space-y)]">
          {pageDescription}
        </p>
        <div className="relative h-[1.138rem] md:h-[1.238rem] lg:h-[1.438rem] w-fit">
          <Image
            src="/coming-soon.svg"
            alt="Coming Soon"
            width={400}
            height={400}
            className="contain-content object-cover w-auto h-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
