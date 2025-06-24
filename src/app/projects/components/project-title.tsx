"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectProps } from "../projects-data";
import ArrowButton from "@/app/components/arrow-button";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/global-context";
import { motion } from "framer-motion";
import { defaultFadeIn, opacityFadeIn } from "@/app/components/animations";

type ProjectTitleProps = {
  project: ProjectProps;
};

export default function ProjectTitle({ project }: ProjectTitleProps) {
  const [showProjectBadge, setShowProjectBadge] = useState(false);
  const { setNavbarAnimation } = useGlobalContext();
  const router = useRouter();

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
      <motion.div
        variants={defaultFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="absolute top-[var(--sm-space-y)] sm:top-[var(--md-space-y)] lg:top-[var(--lg-space-y)] left-[calc((100vw-var(--page-width))/2)] z-10"
      >
        <ArrowButton
          action={() => {
            router.push("/projects");
          }}
          ariaLabel="Go Back to Projects"
          color={project.buttonColor}
          gradientLight={project.buttonGradientLight}
          gradientDark={project.buttonGradientDark}
          litUpGradientLight={project.buttonLitUpLight}
          litUpGradientDark={project.buttonLitUpDark}
          arrowDirection="left"
        />
      </motion.div>
      <motion.div
        variants={opacityFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative h-[20rem] md:h-[22rem] lg:h-[32rem] w-[100vw] flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(0deg, ${project.gradientColor}, var(--default-dark) 98%)`,
        }}
      >
        <motion.div
          variants={defaultFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-row items-center justify-center w-[var(--page-width)] h-full"
        >
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row space-x-[var(--md-space-x)] items-center mb-[var(--md-space-y)] h-fit">
              <h1 style={{ color: project.textColor }}>{project.name}</h1>
              {showProjectBadge && (
                <div className="bg-[var(--default-dark)] border-[0.075rem] border-[#5D5D5D] rounded-full px-[1.5rem] lg:px-[1.9rem] text-[#5D5D5D] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] py-[0.1rem] font-semibold h-fit">
                  Project
                </div>
              )}
            </div>
            <h4
              className="mb-[var(--lg-space-y)]"
              style={{ color: project.textColor, fontWeight: 600 }}
            >
              {project.subtitle.toUpperCase()}
            </h4>
            <p
              className="w-[100%] md:w-[90%] lg:w-[65%]"
              style={{ color: "var(--alternate-text)" }}
            >
              {project.description}
            </p>
          </div>
          <div className="w-[0rem] md:w-[40rem] h-auto ml-auto opacity-10">
            <Image
              src={project.logoPath}
              alt={project.name + " logo"}
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
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
