"use client";

import ProjectTitle from "../components/project-title";
import ImageCarousel, {
  CarouselItem,
} from "@/app/[locale]/components/image-carousel";
import { ProjectProps, useSparks } from "../projects-data";
import { useTranslations } from "next-intl";

export default function Sparks() {
  const project: ProjectProps = useSparks();
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <Sparks1 {...project} />
      </section>
    </section>
  );
}

function Sparks1(project: ProjectProps) {
  const sparks1: CarouselItem[] = [
    {
      imageSrc: "/projects/sparks/sirius1.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/sparks/sirius2.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/sparks/sirius3.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/sparks/sirius4.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/sparks/sirius5.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
  ];
  const t = useTranslations("Projects.Sparks.Sparks1");

  return (
    <div className="w-full">
      <h2 style={{ color: "var(--sparks-text)" }}>{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--lg-space-y)]">
        {t("text")}
      </p>
      <ImageCarousel
        buttonAccentColor={project.buttonColor}
        buttonGradientLight={project.buttonGradientLight}
        buttonGradientDark={project.buttonGradientDark}
        content={sparks1}
      />
    </div>
  );
}
