import ProjectTitle from "../sections/project-title";
import { ProjectProps, useTheVault } from "../../../_data/projects-data";
import { teamList, TeamProps } from "@/app/[locale]/_data/team-data";
import {
  useBrickbotPortfolioList,
  usePortfolioList,
} from "@/app/[locale]/_data/portfolio-data";
import { Portfolio } from "./sections/portfolio";
import { useTranslations } from "next-intl";
import Button from "@/app/[locale]/_components/brick-button";
import Link from "next/link";

export function TheVaultPage() {
  const project: ProjectProps = useTheVault();
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <BrickBotPortfolios {...project} />
        <SubmitPortfolio {...project} />
        <OtherTeamPortfolios {...project} />
      </section>
    </section>
  );
}

export default function BrickBotPortfolios(project: ProjectProps) {
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

export function SubmitPortfolio(project: ProjectProps) {
  const t = useTranslations("Projects.TheVault");

  return (
    <section className="flex flex-col items-center justify-center space-y-[var(--md-space-y)] w-full bg-[linear-gradient(0deg,_#211906,_transparent)] rounded-[1.5rem] py-[var(--md-space-y)]">
      <h2 style={{ color: project.textColor }}>{t("submitTitle")}</h2>
      <h3 style={{ color: "var(--alternate-text)", fontWeight: 500 }}>
        {t("submitText")}
      </h3>
      <Link
        href="/submit-portfolio"
        target="_blank"
      >
        <Button
          text={t("submitButton")}
          color={project.color}
          gradientLight={project.buttonGradientLight}
          gradientDark={project.buttonGradientDark}
          className="px-[3rem]"
        />
      </Link>
    </section>
  );
}

export function OtherTeamPortfolios(project: ProjectProps) {
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

export function TeamPortfolios({ team, textColor }: TeamPortfoliosProps) {
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
