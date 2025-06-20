"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Box from "../components/brick-box";
import LoadingScreen from "../components/brick-loading";
import { useEffect, useState } from "react";
import PageTitle from "../components/page-title";

export default function Projects() {
  return (
    <section className="flex flex-col items-center">
      <LoadingScreen />
      <section className="flex flex-col mb-[4rem] md:mb-[6rem] lg:mb-[8rem] w-[var(--page-width)]">
        <PageTitle title="PROJECTS" />
        <div className="grid grid-cols-1 grid-rows-5 mt-[4rem]">
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
            title="BrickDocs: Guide & Documentation"
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
            title="Checkpoint"
            description="A log of our most important outreach events and activities within the local community to show our presence and impact."
          />
          <Project
            textColor="var(--simplicity-ftc-text)"
            gradientColor="var(--simplicity-ftc)"
            logoPath="/projects/simplicityftc-logo.svg"
            pagePath="https://simplicityftc.github.io/SimplicityFTC-Docs/"
            title="SimplicityFTC: Programming Library"
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const medium = window.innerWidth < 1024;
      setIsMobile(medium);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className="group h-full w-full cursor-pointer select-none"
      >
        {isMobile && (
          <div className="flex flex-col h-full w-full p-[2rem] space-y-[1rem] items-center justify-center">
            <div className="flex flex-row space-x-[1.5rem] w-full min-h-[5rem]">
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
                      className="w-auto h-auto max-w-[70%] max-h-[70%]"
                    />
                  </div>
                </Box>
              </div>
              <h3
                className="text-[1.5rem]/[2rem] md:text-[1.75rem]/[2.25rem] mr-auto font-bold group-hover:brightness-120 flex-[0_0_65%] mt-auto mb-auto"
                style={{ color: textColor }}
              >
                {title}
              </h3>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[0.9rem]/[1.3rem] md:text-[1.2rem]/[1.6rem] xl:text-[1.4rem]/[1.8rem] font-medium text-[var(--default-text)] w-[100%]">
                {description}
              </p>
            </div>
          </div>
        )}
        {!isMobile && (
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
                className="text-[1.5rem]/[2rem] md:text-[1.75rem]/[2.25rem] xl:text-[2rem]/[2.5rem] mr-auto font-bold group-hover:brightness-120"
                style={{ color: textColor }}
              >
                {title}
              </h3>
              <p className="text-[0.9rem]/[1.3rem] md:text-[1.2rem]/[1.6rem] xl:text-[1.4rem]/[1.8rem] font-medium text-[var(--default-text)] w-[100%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%]">
                {description}
              </p>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}
