"use client";

import { useState, useEffect } from "react";
import { ProjectProps } from "../../../_data/projects-data";
import { useGlobalContext } from "@/app/[locale]/global-context";
import { useTranslations } from "next-intl";
import LoadFadeImage from "@/app/[locale]/_components/fade-in-on-load-image";

type ProjectTitleProps = {
  project: ProjectProps;
};

export default function ProjectTitle({ project }: ProjectTitleProps) {
  const [showProjectBadge, setShowProjectBadge] = useState(false);
  const { setNavbarAnimation } = useGlobalContext();
  const t = useTranslations("Projects");

  useEffect(() => {
    const changeNavbar = () => {
      setNavbarAnimation({
        color: project.buttonColor,
        colorLight: project.buttonGradientDark,
      });
    };

    changeNavbar();

    const handleResize = () => {
      setShowProjectBadge(window.innerWidth > 400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [project, setNavbarAnimation]);

  return (
    <section className="relative flex flex-col">
      <div
        className="relative w-[100vw] flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(0deg, ${project.gradientColor}, var(--default-dark) 98%)`,
        }}
      >
        <div className="flex flex-row items-center justify-center w-[var(--page-width)] space-x-[var(--md-space-x)] h-full my-[var(--2xl-space-y)]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row space-x-[var(--md-space-x)] items-center mb-[var(--md-space-y)] h-fit">
              <h1 style={{ color: project.textColor }}>{project.name}</h1>
              {showProjectBadge && (
                <div className="bg-[var(--default-dark)] border-[0.075rem] border-[#5D5D5D] rounded-full px-[1.5rem] lg:px-[1.9rem] text-[#5D5D5D] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] py-[0.1rem] font-semibold h-fit select-none">
                  {t("tag")}
                </div>
              )}
            </div>
            <p
              className="w-[100%] md:w-[90%] lg:w-[65%]"
              style={{ color: "var(--alternate-text)" }}
            >
              {project.description}
            </p>
          </div>
          <div className="w-[0rem] sm:w-[15rem] md:w-[25rem] lg:w-[30rem] h-auto ml-auto opacity-10">
            <LoadFadeImage
              src={project.logoPath}
              alt={project.name + " logo"}
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
          background: `linear-gradient(90deg, transparent 3%, ${project.textColor} 34%, transparent 78%)`,
          filter: `opacity(0.75)`,
        }}
      ></div>
    </section>
  );
}
