"use client";

import Button from "@/app/[locale]/_components/brick-button";
import { useTheVault } from "@/app/[locale]/_data/projects-data";
import { useTranslations } from "next-intl";

export function SubmitPortfolio() {
  const t = useTranslations("Projects.TheVault");
  const project = useTheVault();

  return (
    <section className="flex flex-col items-center justify-center space-y-[var(--md-space-y)] w-full bg-[linear-gradient(0deg,_#211906,_transparent)] rounded-[1.5rem] py-[var(--md-space-y)]">
      <h2 style={{ color: project.textColor }}>{t("submitTitle")}</h2>
      <h3 style={{ color: "var(--alternate-text)", fontWeight: 500 }}>
        {t("submitText")}
      </h3>
      <Button
        text={t("submitButton")}
        color={project.color}
        gradientLight={project.buttonGradientLight}
        gradientDark={project.buttonGradientDark}
        action={() => {
          window.open("/submit-portfolio", "_blank");
        }}
        className="px-[3rem]"
      />
    </section>
  );
}
