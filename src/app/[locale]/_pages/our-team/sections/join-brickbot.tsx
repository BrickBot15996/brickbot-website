"use client";

import Button from "@/app/[locale]/_components/brick-button";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JoinBrickBot() {
  const t = useTranslations("OurTeam.JoinBrickBot");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10%" });
  return (
    <section className="relative h-fit w-[100vw] flex flex-col items-center justify-center overflow-visible mb-[calc(0rem-var(--2xl-space-y))] mt-[calc(0rem-var(--2xl-space-y))]">
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[var(--xl-space-y)]">
        <h2>{t("title")}</h2>
        <h3
          className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--md-space-y)] text-center"
          style={{ color: "var(--alternate-text)", fontWeight: 500 }}
        >
          {t("text")}
        </h3>
        <Button
          text={t("buttonText")}
          arrow={false}
          action={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdhuVfh2RyC0MiKmwmsHwoun3WSluxmfESnBfrRO5NKK9T28Q/viewform",
              "_blank"
            );
          }}
        />
      </div>
      <motion.div
        ref={ref}
        initial={{
          height: "0rem",
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        animate={
          isInView
            ? {
                height: "100%",
                transition: { duration: 0.5, ease: "easeInOut" },
              }
            : {
                height: "0rem",
                transition: { duration: 0.5, ease: "easeInOut" },
              }
        }
        className="absolute bottom-0 left-0 bg-[linear-gradient(180deg,_transparent,_#1E1800)] w-full h-full z-[-1]"
      />
    </section>
  );
}
