"use client";

import ProjectTitle from "../components/project-title";
import ImageCarousel, { CarouselItem } from "@/app/components/image-carousel";
import { ProjectProps, sparks } from "../projects-data";

export default function Sparks() {
  const project: ProjectProps = sparks;

  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <div className="w-full">
          <h2 style={{ color: "var(--sparks-text)" }}>
            Sparks I (with SIRIUS SOCRATE)
          </h2>
          <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--xl-space-y)]">
            An online meeting for new FTC teams from Romania and the Republic of
            Moldova sharing lessons from challenges and memorable moments in
            past competitions. Organized in collaboration with SIRIUS, the team
            we mentor and work closely with.
          </p>
          <ImageCarousel
            buttonAccentColor={project.buttonColor}
            buttonGradientLight={project.buttonGradientLight}
            buttonGradientDark={project.buttonGradientDark}
            buttonLitUpLight={project.buttonLitUpLight}
            buttonLitUpDark={project.buttonLitUpDark}
            content={sparks1}
          />
        </div>
      </section>
    </section>
  );
}

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
