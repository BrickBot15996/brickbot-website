import {
  AwardProps,
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
  awards: AwardProps[];
  portfolioPath: string;
  thumbnailPath: string;
};

export const brickbotPortfolioList: PortfolioProps[] = [
  {
    team: brickbot,
    season: intoTheDeep,
    awards: intoTheDeep.awards,
    portfolioPath: "/the-vault/portfolios/brickbot-into-the-deep.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-into-the-deep.jpg",
  },
  {
    team: brickbot,
    season: centerstage,
    awards: centerstage.awards,
    portfolioPath: "/the-vault/portfolios/brickbot-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-centerstage.jpg",
  },
  {
    team: brickbot,
    season: powerplay,
    awards: powerplay.awards,
    portfolioPath: "/the-vault/portfolios/brickbot-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-powerplay.jpg",
  },
  {
    team: brickbot,
    season: freightFrenzy,
    awards: freightFrenzy.awards,
    portfolioPath: "/the-vault/portfolios/brickbot-freight-frenzy.pdf",
    thumbnailPath: "/the-vault/thumbnails/brickbot-freight-frenzy.jpg",
  },
];

export const portfolioList: PortfolioProps[] = [
  {
    team: perpetuum,
    season: centerstage,
    awards: [],
    portfolioPath: "/the-vault/portfolios/perpetuum-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/perpetuum-centerstage.jpg",
  },
  {
    team: perpetuum,
    season: powerplay,
    awards: [],
    portfolioPath: "/the-vault/portfolios/perpetuum-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/perpetuum-powerplay.jpg",
  },
  {
    team: infinityedge,
    season: centerstage,
    awards: [
      {
        event: "Romania East Championship",
        awardName: "Motivate Award 3rd Place",
      },
    ],
    portfolioPath: "/the-vault/portfolios/infinityedge-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinityedge-centerstage.jpg",
  },
  {
    team: infinityedge,
    season: powerplay,
    awards: [],
    portfolioPath: "/the-vault/portfolios/infinityedge-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinityedge-powerplay.jpg",
  },
  {
    team: infinityedge,
    season: freightFrenzy,
    awards: [
      { event: "Romanian Regional #3", awardName: "Control Award 2nd Place" },
      {
        event: "Romanian National Championship",
        awardName: "Motivate Award 3rd Place",
      },
    ],
    portfolioPath: "/the-vault/portfolios/infinityedge-freight-frenzy.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinityedge-freight-frenzy.jpg",
  },
  {
    team: infinityedge,
    season: ultimateGoal,
    awards: [
      {
        event: "Romania Qualifying Tournament #3",
        awardName: "Connect Award 3rd Place",
      },
    ],
    portfolioPath: "/the-vault/portfolios/infinityedge-ultimate-goal.pdf",
    thumbnailPath: "/the-vault/thumbnails/infinityedge-ultimate-goal.jpg",
  },
  {
    team: alphabit,
    season: powerplay,
    awards: [
      { event: "Qualifying Tournament", awardName: "Connect Award 3rd Place" },
    ],
    portfolioPath: "/the-vault/portfolios/alphabit-powerplay.pdf",
    thumbnailPath: "/the-vault/thumbnails/alphabit-powerplay.jpg",
  },
  {
    team: snaketech,
    season: centerstage,
    awards: [
      {
        event: "Romania East Championship",
        awardName: "Design Award 3rd Place",
      },
    ],
    portfolioPath: "/the-vault/portfolios/snake-tech-centerstage.pdf",
    thumbnailPath: "/the-vault/thumbnails/snake-tech-centerstage.jpg",
  },
];
