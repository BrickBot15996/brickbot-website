"use client";

import ImageCarousel, {
  CarouselItem,
} from "@/app/[locale]/_components/image-carousel";
import ProjectTitle from "../sections/project-title";
import { useCheckpoint, ProjectProps } from "../../../_data/projects-data";
import { useTranslations } from "next-intl";

export function CheckpointPage() {
  const project: ProjectProps = useCheckpoint();
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <BrickbotInSchools {...project} />
        <PublicInteractions {...project} />
      </section>
    </section>
  );
}

function BrickbotInSchools(project: ProjectProps) {
  const brickbotInSchools: CarouselItem[] = [
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis1.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis2.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis3.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis4.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis5.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis6.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis7.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
    {
      imageSrc: "/projects/checkpoint/brickbot-in-schools/bis8.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
    },
  ];
  const t = useTranslations("Projects.Checkpoint.BrickBotInSchools");

  return (
    <div className="w-full">
      <h2 style={{ color: "var(--checkpoint-text)" }}>{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--sm-space-y)]">
        {t("text.paragraph0")}
      </p>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--lg-space-y)]">
        {t("text.paragraph1")}
      </p>
      <ImageCarousel
        buttonAccentColor={project.buttonColor}
        buttonGradientLight={project.buttonGradientLight}
        buttonGradientDark={project.buttonGradientDark}
        content={brickbotInSchools}
      />
    </div>
  );
}

function PublicInteractions(project: ProjectProps) {
  const t = useTranslations("Projects.Checkpoint.InteractingWithThePublic");
  const publicInteractions: CarouselItem[] = [
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/open-doors-day.webp",
      alt: t("Carousel.OpenDoorsDay"),
      aspectRatio: "16/9",
      description: t("Carousel.OpenDoorsDay"),
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/micromet-meeting.webp",
      alt: t("Carousel.MicrometEvent"),
      aspectRatio: "16/9",
      description: t("Carousel.MicrometEvent"),
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/joy-in-motion.webp",
      alt: t("Carousel.JoyInMotion"),
      aspectRatio: "16/9",
      description: t("Carousel.JoyInMotion"),
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/christmas-2024.webp",
      alt: t("Carousel.Christmas2024"),
      aspectRatio: "16/9",
      description: t("Carousel.Christmas2024"),
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/christmas-2023.webp",
      alt: t("Carousel.Christmas2023"),
      aspectRatio: "16/9",
      description: t("Carousel.Christmas2023"),
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/meet-keynote.webp",
      alt: t("Carousel.MeetRobotics"),
      aspectRatio: "16/9",
      description: t("Carousel.MeetRobotics"),
    },
  ];

  return (
    <div className="w-full my-[var(--2xl-space-y)]">
      <h2 style={{ color: "var(--checkpoint-text)" }}>{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--lg-space-y)]">
        {t("text")}
      </p>
      <ImageCarousel
        buttonAccentColor={project.buttonColor}
        buttonGradientLight={project.buttonGradientLight}
        buttonGradientDark={project.buttonGradientDark}
        content={publicInteractions}
      />
    </div>
  );
}
