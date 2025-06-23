"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Button from "../../components/brick-button";
import Box from "../../components/brick-box";

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Projects() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center w-full h-fit">
      <h2 className="mr-auto mb-[var(--xl-space-y)]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch px-[var(--xl-space-y)] md:px-[0rem] gap-y-[var(--lg-space-y)] gap-x-[var(--lg-space-x)] xl:gap-x-[var(--md-space-x)] mb-[var(--xl-space-y)] w-full">
        <SmallProject
          textColor="var(--the-vault-text)"
          gradientColor="var(--the-vault)"
          name={"Portfolio Library"}
          logoPath="/projects/the-vault-logo.svg"
          link="/projects/the-vault"
        />
        <SmallProject
          textColor="var(--brick-docs-text)"
          gradientColor="var(--brick-docs)"
          name={"BrickBot Guide & Documentation"}
          logoPath="/projects/brickdocs-logo.svg"
          link="https://brickbot15996.github.io/brickbot-docs/"
        />
        <SmallProject
          textColor="var(--sparks-text)"
          gradientColor="var(--sparks)"
          name={"Connecting FTC Teams"}
          logoPath="/projects/sparks-logo.svg"
          link="projects/sparks"
        />
        <SmallProject
          textColor="var(--checkpoint-text)"
          gradientColor="var(--checkpoint)"
          name={"Checkpoint"}
          logoPath="/projects/checkpoint-logo.svg"
          link="projects/checkpoint"
        />
      </div>
      <div className="md:ml-auto">
        <Button
          text="SEE ALL"
          arrow={false}
          accentColor="var(--default-yellow)"
          gradientColorLight="var(--yellow-gradient-light)"
          gradientColorDark="var(--yellow-gradient-dark)"
          action={() => router.push("/projects")}
        />
      </div>
    </section>
  );
}

type ProjectProps = {
  textColor: string;
  gradientColor: string;
  name: string;
  link: string;
  logoPath: string;
};

function SmallProject({
  textColor,
  gradientColor,
  name,
  logoPath,
  link,
}: ProjectProps) {
  const router = useRouter();

  return (
    <div className="aspect-3/4 w-auto hover:brightness-75 hover:scale-103 md:hover:scale-105 lg:hover:scale-103 xl:hover:scale-105 active:brightness-100 active:scale-97 md:active:scale-95 lg:active:scale-97 xl:active:scale-95 transition-transform duration-150 cursor-pointer select-none">
      <Box
        action={() => {
          router.push(link);
        }}
        color={gradientColor}
        gradient={true}
        className="h-full w-full flex flex-col items-center justify-center"
        borderRadius="2rem"
        hoverEffect={false}
      >
        <div className="flex items-center justify-center w-full pointer-events-none translate-y-[-2rem]">
          <Image
            src={logoPath}
            alt={name + "Logo"}
            width={275}
            height={275}
            className="object-contain w-[70%] h-auto"
          />
        </div>
        <div className="absolute bottom-[1.2rem] md:bottom-[1rem] lg:bottom-[1rem] xl:bottom-[0.9rem] 2xl:bottom-[0.95rem] left-[1.6rem] w-[70%] pointer-events-none">
          <h3
            className=""
            style={{ color: textColor }}
          >
            {name}
          </h3>
        </div>
        <div className="absolute bottom-[1rem] left-[85%] w-full pointer-events-none">
          <HiArrowNarrowRight className="z-[10] mb-[-0.25rem] mr-[-0.5rem] h-auto w-[10%] fill-white" />
        </div>
      </Box>
    </div>
  );
}
