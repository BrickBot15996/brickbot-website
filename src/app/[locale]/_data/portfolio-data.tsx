import {
  AwardProps,
  useCenterstage,
  useFreightFrenzy,
  useIntoTheDeep,
  usePowerplay,
  SeasonProps,
  useUltimateGoal,
} from "@/app/[locale]/_data/seasons-data";
import {
  alphabit,
  brickbot,
  infinityedge,
  perpetuum,
  snaketech,
  TeamProps,
} from "./team-data";
import { useTranslations } from "next-intl";

export type PortfolioProps = {
  team: TeamProps;
  season: SeasonProps;
  awards: AwardProps[];
  portfolioPath: string;
  thumbnailPath: string;
};

export const useBrickbotPortfolioList = (): PortfolioProps[] => {
  const intoTheDeep = useIntoTheDeep();
  const centerstage = useCenterstage();
  const powerplay = usePowerplay();
  const freightFrenzy = useFreightFrenzy();

  return [
    {
      team: brickbot,
      season: intoTheDeep,
      awards: intoTheDeep.awards,
      portfolioPath:
        "/assets/projects/the-vault/portfolios/brickbot-into-the-deep.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/brickbot-into-the-deep.jpg",
    },
    {
      team: brickbot,
      season: centerstage,
      awards: centerstage.awards,
      portfolioPath:
        "/assets/projects/the-vault/portfolios/brickbot-centerstage.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/brickbot-centerstage.jpg",
    },
    {
      team: brickbot,
      season: powerplay,
      awards: powerplay.awards,
      portfolioPath:
        "/assets/projects/the-vault/portfolios/brickbot-powerplay.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/brickbot-powerplay.jpg",
    },
    {
      team: brickbot,
      season: freightFrenzy,
      awards: freightFrenzy.awards,
      portfolioPath:
        "/assets/projects/the-vault/portfolios/brickbot-freight-frenzy.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/brickbot-freight-frenzy.jpg",
    },
  ];
};

export const usePortfolioList = (): PortfolioProps[] => {
  const centerstage = useCenterstage();
  const powerplay = usePowerplay();
  const freightFrenzy = useFreightFrenzy();
  const ultimateGoal = useUltimateGoal();

  const t = useTranslations("PortfolioData");
  return [
    {
      team: perpetuum,
      season: centerstage,
      awards: [],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/perpetuum-centerstage.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/perpetuum-centerstage.jpg",
    },
    {
      team: perpetuum,
      season: powerplay,
      awards: [],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/perpetuum-powerplay.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/perpetuum-powerplay.jpg",
    },
    {
      team: infinityedge,
      season: centerstage,
      awards: [
        {
          event: t("InfinityEdge.Centerstage.awards.0.event"),
          awardName: t("InfinityEdge.Centerstage.awards.0.awardName"),
        },
      ],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/infinityedge-centerstage.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/infinityedge-centerstage.jpg",
    },
    {
      team: infinityedge,
      season: powerplay,
      awards: [],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/infinityedge-powerplay.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/infinityedge-powerplay.jpg",
    },
    {
      team: infinityedge,
      season: freightFrenzy,
      awards: [
        {
          event: t("InfinityEdge.FreightFrenzy.awards.0.event"),
          awardName: t("InfinityEdge.FreightFrenzy.awards.0.awardName"),
        },
        {
          event: t("InfinityEdge.FreightFrenzy.awards.1.event"),
          awardName: t("InfinityEdge.FreightFrenzy.awards.1.awardName"),
        },
      ],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/infinityedge-freight-frenzy.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/infinityedge-freight-frenzy.jpg",
    },
    {
      team: infinityedge,
      season: ultimateGoal,
      awards: [
        {
          event: t("InfinityEdge.UltimateGoal.awards.0.event"),
          awardName: t("InfinityEdge.UltimateGoal.awards.0.awardName"),
        },
      ],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/infinityedge-ultimate-goal.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/infinityedge-ultimate-goal.jpg",
    },
    {
      team: alphabit,
      season: powerplay,
      awards: [
        {
          event: t("Alphabit.Powerplay.awards.0.event"),
          awardName: t("Alphabit.Powerplay.awards.0.awardName"),
        },
      ],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/alphabit-powerplay.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/alphabit-powerplay.jpg",
    },
    {
      team: snaketech,
      season: centerstage,
      awards: [
        {
          event: t("SnakeTech.Centerstage.awards.0.event"),
          awardName: t("SnakeTech.Centerstage.awards.0.awardName"),
        },
      ],
      portfolioPath:
        "/assets/projects/the-vault/portfolios/snake-tech-centerstage.pdf",
      thumbnailPath:
        "/assets/projects/the-vault/thumbnails/snake-tech-centerstage.jpg",
    },
  ];
};
