import {
  centerstage,
  freightFrenzy,
  intoTheDeep,
  powerplay,
  SeasonProps,
  ultimateGoal,
} from "@/app/our-team/seasons-data";
import {
  alphabit,
  brickbot,
  infinityedge,
  perpetuum,
  snaketech,
  TeamProps,
} from "./team-data";

export type PortfolioProps = {
  team: TeamProps;
  season: SeasonProps;
  event: string;
  award: string;
  portfolioPath: string;
  thumbnailPath: string;
};

export const brickbotPortfolioList: PortfolioProps[] = [
  {
    team: brickbot,
    season: intoTheDeep,
    event: "Regionals",
    award: "Motivate 2",
    portfolioPath: "/the-vault/portfolios/brickbot-into-the-deep.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-into-the-deep.pdf",
  },
  {
    team: brickbot,
    season: powerplay,
    event: "Nationals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/brickbot-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-powerplay.pdf",
  },
  {
    team: brickbot,
    season: freightFrenzy,
    event: "Nationals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/brickbot-freight-frenzy.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-freight-frenzy.pdf",
  },
  {
    team: brickbot,
    season: centerstage,
    event: "Regionals",
    award: "Think 3",
    portfolioPath: "/the-vault/portfolios/brickbot-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-centerstage.pdf",
  },
];

export const porfolioList: PortfolioProps[] = [
  {
    team: perpetuum,
    season: powerplay,
    event: "Nationals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/perpetuum-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/perpetuum-powerplay.pdf",
  },
  {
    team: perpetuum,
    season: centerstage,
    event: "Regionals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/perpetuum-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/perpetuum-centerstage.pdf",
  },
  {
    team: infinityedge,
    season: ultimateGoal,
    event: "Regionals",
    award: "Connect 3",
    portfolioPath: "/the-vault/portfolios/infinity-ultimate-goal.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinity-ultimate-goal.pdf",
  },
  {
    team: infinityedge,
    season: freightFrenzy,
    event: "Nationals",
    award: "Motivate 3",
    portfolioPath: "/the-vault/portfolios/infinity-freight-frenzy.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinity-freight-frenzy.pdf",
  },
  {
    team: infinityedge,
    season: powerplay,
    event: "Regionals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/infinity-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinity-powerplay.pdf",
  },
  {
    team: infinityedge,
    season: centerstage,
    event: "Regionals",
    award: "Motivate 3",
    portfolioPath: "/the-vault/portfolios/infinity-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinity-centerstage.pdf",
  },
  {
    team: alphabit,
    season: powerplay,
    event: "Nationals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/alphabit-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/alphabit-powerplay.pdf",
  },
  {
    team: snaketech,
    season: centerstage,
    event: "Nationals",
    award: " ",
    portfolioPath: "/the-vault/portfolios/snake-tech-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/snake-tech-centerstage.pdf",
  },
];
