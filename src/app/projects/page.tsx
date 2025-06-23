"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Box from "../components/brick-box";
import PageTitle from "../components/page-title";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-col mb-[var(--2xl-space-y)] w-[var(--page-width)]">
        <PageTitle title="PROJECTS" />
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row items-stretch gap-x-[var(--xl-space-x)] gap-y-[var(--2xl-space-y)] mt-[var(--2xl-space-y)]">
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
            pagePath="https://github.com/SimplicityFTC"
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
          borderRadius="1.5rem"
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
        className="mr-auto mt-[var(--md-space-y)] group-hover:underline transition-all duration-200"
        style={{ color: textColor }}
      >
        {title}
        <HiArrowNarrowRight className="inline-flex ml-[0.5rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-transform duration-200" />
      </h3>
      <p className="w-full h-full mt-[var(--sm-space-y)]">{description}</p>
    </div>
  );
}
