"use client";

import ImageCarousel, { CarouselItem } from "@/app/components/image-carousel";
import ProjectTitle from "../components/project-title";
import { checkpoint, ProjectProps } from "../projects-data";

const project: ProjectProps = checkpoint;

export default function Checkpoint() {
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <BrickbotInSchools />
        <PublicInteractions />
      </section>
    </section>
  );
}

function BrickbotInSchools() {
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

  return (
    <div className="w-full">
      <h2 style={{ color: "var(--checkpoint-text)" }}>BrickBot in Schools</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--sm-space-y)] mb-[var(--md-space-y)]">
        Middle school students from local schools explored robotics through our
        presentations and this year’s game. As part of the BrickBot Caravan,
        they operated the robot, learned about its design and programming, and
        discovered the value of teamwork.
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

function PublicInteractions() {
  const publicInteractions: CarouselItem[] = [
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/open-doors-day.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
      description: "Open Doors Day",
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/micromet-meeting.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
      description: "Exchange Event with our main sponsor, Micromet",
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/joy-in-motion.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
      description: "Joy In Motion",
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/christmas-2024.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
      description: "Christmas 2024 Humanitarian event",
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/christmas-2023.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
      description: "Christmas 2023 Humanitarian event",
    },
    {
      imageSrc:
        "/projects/checkpoint/interacting-with-the-public/meet-keynote.webp",
      alt: "BrickBot presentation in school",
      aspectRatio: "16/9",
      description: "Meet Robotics Keynote",
    },
  ];

  return (
    <div className="w-full my-[var(--2xl-space-y)]">
      <h2 style={{ color: "var(--checkpoint-text)" }}>
        Interacting With The Public
      </h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--sm-space-y)] mb-[var(--md-space-y)]">
        Engaging with the local community through showcases, humanitarian
        efforts, and outreach initiatives to inspire a love for robotics and
        create meaningful impact.
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
