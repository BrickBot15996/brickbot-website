"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Button from "../../components/brick-button";
import Box from "../../components/brick-box";

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Projects() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center space-y-[2rem] w-full h-fit">
      <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] mb-[3rem]">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-y-[3rem] md:gap-y-[5rem] gap-x-[5rem] xl:gap-x-[3rem] w-full">
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
      <div className="ml-auto">
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
    <div className="min-h-[17rem] aspect-3/4 w-auto hover:brightness-75 hover:scale-103 md:hover:scale-105 lg:hover:scale-103 xl:hover:scale-105 active:brightness-100 active:scale-97 md:active:scale-95 lg:active:scale-97 xl:active:scale-95 transition-transform duration-150 cursor-pointer select-none">
      <Box
        action={() => {
          router.push(link);
        }}
        color={gradientColor}
        gradient={true}
        className="h-full w-full flex flex-col items-center justify-center"
        borderRadius="1.5rem"
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
          <p
            className="font-semibold text-[2rem]/[2.25rem] sm:text-[2.5rem]/[2.75rem] md:text-[1.75rem]/[2rem] lg:text-[2.5rem]/[2.75rem] xl:text-[1.5rem]/[1.75rem] 2xl:text-[1.75rem]/[2rem]"
            style={{ color: textColor }}
          >
            {name}
          </p>
        </div>
        <div className="absolute bottom-[1rem] left-[85%] w-full pointer-events-none">
          <HiArrowNarrowRight className="z-[10] mb-[-0.25rem] mr-[-0.5rem] h-auto w-[10%] fill-white" />
        </div>
      </Box>
    </div>
  );
}
