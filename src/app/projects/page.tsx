"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Box from "../components/brick-box";
import PageTitle from "../components/page-title";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-col mb-[4rem] md:mb-[6rem] lg:mb-[8rem] w-[var(--page-width)]">
        <PageTitle title="PROJECTS" />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row items-stretch gap-[6rem] md:gap-[3rem] lg:gap-[4rem] px-[0rem] sm:px-[2rem] md:px-[0rem] xl:px-[2rem] xl:gap-[8rem] mt-[4rem]">
          <Project
            textColor="var(--the-vault-text)"
            gradientColor="var(--the-vault)"
            logoPath="/projects/the-vault-logo.svg"
            pagePath="projects/the-vault"
            title="The Vault: Portfolio Library"
            description="An online library of FTC portfolios to help new teams. All content is authentic and meant to inspire."
          />
          <Project
            textColor="var(--brick-docs-text)"
            gradientColor="var(--brick-docs)"
            logoPath="/projects/brickdocs-logo.svg"
            pagePath="https://brickbot15996.github.io/brickbot-docs/"
            title="BrickDocs: Team Guide"
            description="Documentation we use to guide new BrickBot members. It’s public so anyone can learn from it."
          />
          <Project
            textColor="var(--sparks-text)"
            gradientColor="var(--sparks)"
            logoPath="/projects/sparks-logo.svg"
            pagePath="projects/sparks"
            title="Sparks: Connecting FTC Teams"
            description="A record of the meetings, events, and activities we've had with other FTC teams to stay connected and involved."
          />
          <Project
            textColor="var(--checkpoint-text)"
            gradientColor="var(--checkpoint)"
            logoPath="/projects/checkpoint-logo.svg"
            pagePath="projects/checkpoint"
            title="Checkpoint: Outreach Events"
            description="A log of our most important outreach events and activities within the local community to show our presence and impact."
          />
          <Project
            textColor="var(--simplicity-ftc-text)"
            gradientColor="var(--simplicity-ftc)"
            logoPath="/projects/simplicityftc-logo.svg"
            pagePath="https://simplicityftc.github.io/SimplicityFTC-Docs/"
            title="SimplicityFTC: Software Library"
            description="A programming library designed to simplify coding for FTC teams. Open-source and easy to use for everyone."
          />
        </div>
      </section>
    </section>
  );
}

type ProjectProps = {
  textColor: string;
  gradientColor: string;
  logoPath: string;
  pagePath: string;
  title: string;
  description: string;
};

function Project({
  textColor,
  gradientColor,
  logoPath,
  pagePath,
  title,
  description,
}: ProjectProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(pagePath);
      }}
      className="group flex flex-col items-center justify-center cursor-pointer select-none"
    >
      <div className="group-hover:brightness-90 group-hover:scale-105 group-active:scale-95 group-active:brightness-100 transition-all duration-200 w-full h-full">
        <Box
          color={gradientColor}
          gradient={true}
          borderRadius="2rem"
          className="w-[80%] aspect-[2/1] inline-flex items-center justify-center mr-auto"
        >
          <Image
            src={logoPath}
            alt={title + " logo"}
            height={200}
            width={200}
            className="object-cover contain-content max-h-[35%] max-w-[80%] h-auto w-auto"
          />
        </Box>
      </div>
      <h3
        className="mr-auto font-bold text-[1.1rem]/[1.2rem] sm:text-[1.2rem]/[1.4rem] md:text-[1.4rem]/[1.6rem] lg:text-[1.5rem]/[1.75rem] xl:text-[1.75rem]/[2rem] 2xl:text-[2rem]/[2.25rem] mt-[1rem] md:mt-[2rem] group-hover:underline transition-all duration-200"
        style={{ color: textColor }}
      >
        {title}
        <HiArrowNarrowRight className="inline-flex ml-[0.5rem] group-hover:translate-x-[1rem] transition-transform duration-200" />
      </h3>
      <p className="w-full h-full text-[0.9rem]/[1.0rem] sm:text-[1rem]/[1.25rem] md:text-[1rem]/[1.25rem] lg:text-[1.2rem]/[1.45rem] xl:text-[1.4rem]/[1.55rem] 2xl:text-[1.65rem]/[1.9rem] font-medium text-[var(--default-text)] mt-[0.5rem] lg:mt-[1rem]">
        {description}
      </p>
    </div>
  );
}
