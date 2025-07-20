"use client";

import { useTranslations } from "next-intl";

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
  const t = useTranslations("ComingSoon");

  return (
    <section
      className="flex items-center justify-center min-h-[calc(100vh-var(--navbar-height))] w-full select-none mb-[calc(0rem-var(--2xl-space-y))]"
      style={{
        background: `linear-gradient(0deg, ${gradientColor}, var(--default-dark) 98%)`,
      }}
    >
      <div className="flex flex-col items-center justify-center mt-[calc(0rem-var(--md-space-y))]">
        <h1 style={{ color: textColor }}>{pageName.toUpperCase()}</h1>
        <p className="mt-[var(--md-space-y)] mb-[var(--lg-space-y)]">
          {pageDescription}
        </p>
        <h3
          className="scale-140"
          style={{ color: "var(--alternate-text)", fontWeight: 500 }}
        >
          {t("ComingSoon")}
        </h3>
      </div>
    </section>
  );
}
