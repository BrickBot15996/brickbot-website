"use client";

import Button from "@/app/components/brick-button";
import ProjectTitle from "../components/project-title";
import { theVault } from "../projects-data";
import { brickbotPortfolioList, PortfolioProps } from "./portfolio-data";
import Box from "@/app/components/brick-box";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ArrowButton from "@/app/components/arrow-button";
import { useRouter } from "next/navigation";

const project = theVault;

export default function TheVault() {
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <BrickBotPortfolios />
      </section>
    </section>
  );
}

function BrickBotPortfolios() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <section className="relative">
      <h2
        className="mb-[var(--xl-space-y)]"
        style={{ color: project.textColor }}
      >
        Collections
      </h2>
      <h3
        className="mb-[var(--md-space-y)]"
        style={{ color: "var(--alternate-text)", fontWeight: 700 }}
      >
        #15996 BrickBot
      </h3>
      <div className="px-[0rem] sm:px-[2rem] md:px-[4rem] lg:px-[8rem] xl:px-[0rem]">
        <Box className="relative flex flex-col w-full select-none px-[1rem] py-[1rem] overflow-hidden">
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "65rem" : "35rem",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              opacity: {
                duration: isExpanded ? 0.3 : 0.3,
              },
            }}
            className="relative px-[var(--md-space-x)] py-[var(--md-space-y)] gap-x-[var(--lg-space-x)] gap-y-[var(--lg-space-y)] overflow-hidden grid grid-cols-1 xl:grid-cols-2 items-stretch grid-flow-row"
          >
            {brickbotPortfolioList.map((portfolio, index) => {
              return (
                <ExpandedPortfolio
                  key={index}
                  portfolio={portfolio}
                />
              );
            })}
            <ArrowButton
              action={() => {
                setExpanded(!isExpanded);
              }}
              ariaLabel="Expand or retract BrickBot portfolio display"
              arrowDirection="down"
              toggleDirection={true}
              color={project.buttonColor}
              gradientLight={project.buttonGradientLight}
              gradientDark={project.buttonGradientDark}
              litUpGradientLight={project.buttonLitUpLight}
              litUpGradientDark={project.buttonLitUpDark}
              className="absolute right-[1rem] bottom-[1rem]"
            />
          </motion.div>
          <div
            className="absolute bottom-[0.2rem] left-[0.2rem] rounded-bl-[1.5rem] bg-[linear-gradient(0deg,_var(--default-dark),_transparent)] w-[93%] transition-all duration-400 delay-50 z-100"
            style={{
              height: isExpanded ? "0rem" : "6rem",
            }}
          />
        </Box>
      </div>
    </section>
  );
}

type ExpandedPortfolioProps = {
  portfolio: PortfolioProps;
};

function ExpandedPortfolio({ portfolio }: ExpandedPortfolioProps) {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={containerRef}
      className="flex flex-row items-stretch justify-start space-x-[var(--md-space-x)] self-start"
    >
      <div className="flex-[0_0_50%] aspect-[1/1.414] bg-[linear-gradient(0deg,_#FF0022,_#9D247D)] rounded-[1.5rem] overflow-hidden" />

      <div className="flex flex-col flex-1 min-h-full">
        <h4
          className="mb-[var(--md-space-y)]"
          style={{ color: "var(--alternate-text)" }}
        >
          {portfolio.season.name.toUpperCase()}
        </h4>

        {portfolio.season.awards.map((award, index) => (
          <div
            key={index}
            className="h-fit w-full flex flex-col"
          >
            <h5>{award.event}</h5>
            <h6
              style={{ color: "var(--default-text)" }}
              className="mb-[var(--sm-space-y)]"
            >
              {award.awardName}
            </h6>
          </div>
        ))}

        <div className="mt-auto w-full">
          <Button
            text="view"
            accentColor={project.buttonColor}
            gradientColorLight={project.buttonGradientLight}
            gradientColorDark={project.buttonGradientDark}
            action={() => {
              router.push(portfolio.filePath);
            }}
          />
        </div>
      </div>
    </section>
  );
}
