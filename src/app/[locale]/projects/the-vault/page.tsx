"use client";

import ProjectTitle from "../components/project-title";
import { ProjectProps, useTheVault } from "../projects-data";
import {
  useBrickbotPortfolioList,
  usePortfolioList,
  PortfolioProps,
} from "./portfolio-data";
import Image from "next/image";
import SimpleBox from "@/app/[locale]/components/simple-box";
import { HiArrowNarrowRight } from "react-icons/hi";
import { teamList, TeamProps } from "./team-data";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/components/animations";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function TheVault() {
  const project: ProjectProps = useTheVault();
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <BrickBotPortfolios {...project} />
        <OtherTeamPortfolios {...project} />
      </section>
    </section>
  );
}

function BrickBotPortfolios(project: ProjectProps) {
  const brickbotPortfolioList = useBrickbotPortfolioList();

  return (
    <section>
      <h2
        className="mb-[var(--xl-space-y)]"
        style={{ color: project.textColor }}
      >
        #15996 BrickBot
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[var(--md-space-x)] gap-y-[var(--md-space-y)]">
        {brickbotPortfolioList.map((portfolio, index) => {
          return (
            <Portfolio
              key={index}
              portfolio={portfolio}
              textColor={project.textColor}
            />
          );
        })}
      </div>
    </section>
  );
}

function OtherTeamPortfolios(project: ProjectProps) {
  const t = useTranslations("Projects.TheVault");
  return (
    <section>
      <h2
        className="mb-[var(--xl-space-y)]"
        style={{ color: project.textColor }}
      >
        {t("otherTeams")}
      </h2>
      <div className="flex flex-col w-full space-y-[var(--2xl-space-y)]">
        {teamList.map((team, index) => {
          return (
            <TeamPortfolios
              key={index}
              team={team}
              textColor={project.textColor}
            />
          );
        })}
      </div>
    </section>
  );
}

type TeamPortfoliosProps = {
  team: TeamProps;
  textColor: string;
};

function TeamPortfolios({ team, textColor }: TeamPortfoliosProps) {
  const portfolioList = usePortfolioList();

  return (
    <section>
      <h3
        className="mb-[var(--lg-space-y)]"
        style={{ color: textColor }}
      >
        #{team.number + " " + team.name}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[var(--md-space-x)] gap-y-[var(--md-space-y)]">
        {portfolioList
          .filter((portfolio) => {
            return portfolio.team == team;
          })
          .map((portfolio, index) => {
            return (
              <Portfolio
                key={index}
                portfolio={portfolio}
                textColor={textColor}
              />
            );
          })}
      </div>
    </section>
  );
}

type PortfolioDisplayProps = {
  portfolio: PortfolioProps;
  textColor: string;
};

function Portfolio({ portfolio, textColor }: PortfolioDisplayProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <AnimationWhenInView
      variants={defaultFadeIn}
      className="select-none"
    >
      {!isMobile && (
        <SimpleBox
          width="fit"
          height="fit"
          borderRadius={2}
          hoverEffect={true}
          action={() => {
            window.open(portfolio.portfolioPath, "_blank");
          }}
          className="flex flex-row items-stretch justify-start space-x-[var(--md-space-x)] self-start p-[1rem] lg:p-[2rem] cursor-pointer group"
        >
          <div className="relative h-[12rem] md:h-[15rem] lg:h-[18rem] xl:h-[20rem] 2xl:h-[25rem] aspect-[1/1.414] rounded-[1.5rem] lg:rounded-[1rem] overflow-hidden">
            <Image
              src={portfolio.thumbnailPath}
              alt={
                portfolio.team.name + " portfolio in " + portfolio.season.name
              }
              fill
              className="object-cover h-full w-auto"
            />
          </div>
          <div className="flex flex-col flex-1 h-full">
            <h4
              className="mb-[var(--md-space-y)] group-hover:underline"
              style={{ color: textColor }}
            >
              {portfolio.season.name.toUpperCase()}
              <HiArrowNarrowRight className="inline-flex h-auto w-auto ml-[0.5rem] mt-[-0.17rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-transform duration-200" />
            </h4>

            {portfolio.awards.map((award, index) => (
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
          </div>
        </SimpleBox>
      )}
      {isMobile && (
        <SimpleBox
          width="fit"
          height="fit"
          borderRadius={2}
          hoverEffect={true}
          action={() => {
            window.open(portfolio.portfolioPath, "_blank");
          }}
          className="flex flex-col items-stretch justify-start space-y-[var(--md-space-y)] self-start p-[1rem] cursor-pointer group"
        >
          <h4
            className="group-hover:underline pl-[1rem] pt-[1rem]"
            style={{ color: textColor }}
          >
            {portfolio.season.name.toUpperCase()}
            <HiArrowNarrowRight className="inline-flex h-auto w-auto ml-[0.5rem] mt-[-0.17rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-transform duration-200" />
          </h4>
          <div className="flex flex-row items-stretch justify-start space-x-[var(--md-space-x)] self-start pl-[1rem] pb-[1rem] cursor-pointer group">
            <div className="relative h-[12rem] md:h-[15rem] lg:h-[18rem] xl:h-[20rem] 2xl:h-[25rem] aspect-[1/1.414] bg-[linear-gradient(0deg,_var(--the-vault),_var(--default-yellow))] rounded-[1.5rem] lg:rounded-[1rem] overflow-hidden">
              <Image
                src={portfolio.thumbnailPath}
                alt={
                  portfolio.team.name + " portfolio in " + portfolio.season.name
                }
                fill
                className="object-cover h-full w-auto"
              />
            </div>
            <div className="flex flex-col flex-1 h-full">
              {portfolio.awards.map((award, index) => (
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
            </div>
          </div>
        </SimpleBox>
      )}
    </AnimationWhenInView>
  );
}
