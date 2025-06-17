"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Box from "../components/brick-box";

export default function Projects() {
  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-col my-[4rem] md:my-[6rem] lg:my-[8rem] w-[var(--page-width)]">
        <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] mb-[5rem]">
          Projects
        </h1>
        <div className="grid grid-cols-1 grid-rows-5">
          <Project
            textColor="var(--the-vault-text)"
            gradientColor="var(--the-vault)"
            logoPath="/projects/thevaultlogo1.png"
            pagePath="projects/the-vault"
            title="The Vault: Portfolio Library"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis esse, rerum, asperiores consectetur aut illum fuga amet repudiandae rem dolor accusamus saepe laboriosam a placeat dolorem tempora! Dignissimos, sed facilis."
          />
          <Project
            textColor="var(--brick-docs-text)"
            gradientColor="var(--brick-docs)"
            logoPath="/projects/brickdocslogo1.png"
            pagePath="https://brickbot15996.github.io/brickbot-docs/"
            title="BrickDocs: Guide & Documentation"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis esse, rerum, asperiores consectetur aut illum fuga amet repudiandae rem dolor accusamus saepe laboriosam a placeat dolorem tempora! Dignissimos, sed facilis."
          />
          <Project
            textColor="var(--sparks-text)"
            gradientColor="var(--sparks)"
            logoPath="/projects/sparkslogo.png"
            pagePath="projects/sparks"
            title="Sparks: Connecting FTC Teams"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis esse, rerum, asperiores consectetur aut illum fuga amet repudiandae rem dolor accusamus saepe laboriosam a placeat dolorem tempora! Dignissimos, sed facilis."
          />
          <Project
            textColor="var(--checkpoint-text)"
            gradientColor="var(--checkpoint)"
            logoPath="/projects/checkpoint-logo.svg"
            pagePath="projects/checkpoint"
            title="Checkpoint"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis esse, rerum, asperiores consectetur aut illum fuga amet repudiandae rem dolor accusamus saepe laboriosam a placeat dolorem tempora! Dignissimos, sed facilis."
          />
          <Project
            textColor="var(--simplicity-ftc-text)"
            gradientColor="var(--simplicity-ftc)"
            logoPath="/projects/simplicityftclogo1.png"
            pagePath="https://simplicityftc.github.io/SimplicityFTC-Docs/"
            title="SimplicityFTC: Open-Source Programming Library"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis esse, rerum, asperiores consectetur aut illum fuga amet repudiandae rem dolor accusamus saepe laboriosam a placeat dolorem tempora! Dignissimos, sed facilis."
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
    >
      <Box
        borderRadius="4rem"
        borderThickness="0.2rem"
        hoverEffect={true}
        className="h-full w-full cursor-pointer select-none"
      >
        <div className="inline-flex h-full w-full p-[2rem] gap-x-[2rem] items-center justify-center">
          <div className="h-full w-full">
            <Box
              borderRadius="2rem"
              borderThickness="0.2rem"
              gradient={true}
              color={gradientColor}
              className="h-full w-full"
            >
              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <Image
                  src={logoPath}
                  alt={title + " logo"}
                  height={150}
                  width={150}
                  className="w-auto h-auto max-w-[75%] max-h-[70%]"
                />
              </div>
            </Box>
          </div>
          <div className="flex-[0_0_60%] lg:flex-[0_0_75%] xl:flex-[0_0_80%] 2xl:flex-[0_0_85%] flex flex-col justify-center">
            <h3
              className="text-[1.5rem]/[2rem] md:text-[1.75rem]/[2.25rem] xl:text-[2rem]/[2.5rem] mr-auto font-bold"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            <p className="text-[0.9rem]/[1.3rem] md:text-[1.2rem]/[1.6rem] xl:text-[1.4rem]/[1.8rem] font-medium text-[var(--default-text)] w-[100%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%]">
              {description}
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
