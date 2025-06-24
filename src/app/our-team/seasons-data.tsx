export type AwardProps = {
  event: string;
  awardName: string;
};

export type SeasonProps = {
  name: string;
  years: string;
  textColor: string;
  gradientColor: string;
  logoPath: string;
  awards: AwardProps[];
};

export const decode: SeasonProps = {
  name: "Decode",
  years: "2025-2026",
  textColor: "var(--default-yellow)",
  gradientColor: "var(--default-yellow)",
  logoPath: "/seasons/decode-logo.png",
  awards: [
    {
      event: "Season starting on",
      awardName: "September 6th 2025",
    },
  ],
};

export const intoTheDeep: SeasonProps = {
  name: "Into The Deep",
  years: "2024-2025",
  textColor: "var(--into-the-deep-text)",
  gradientColor: "var(--into-the-deep-gradient)",
  logoPath: "/seasons/into-the-deep-logo.webp",
  awards: [
    {
      event: "Romania East Championship",
      awardName: "Motivate Award 2nd Place",
    },
    { event: "Italy Championship", awardName: "Innovate Award 2nd Place" },
  ],
};

export const centerstage: SeasonProps = {
  name: "Centerstage",
  years: "2023-2024",
  textColor: "var(--centerstage-text)",
  gradientColor: "var(--centerstage-gradient)",
  logoPath: "/seasons/centerstage-logo.png",
  awards: [
    {
      event: "Romania East Championship",
      awardName: "Think Award 3rd Place",
    },
    { event: "Bucharest Twin Cup", awardName: "8th Place" },
  ],
};

export const powerplay: SeasonProps = {
  name: "PowerPlay",
  years: "2022-2023",
  textColor: "var(--powerplay-text)",
  gradientColor: "var(--powerplay-gradient)",
  logoPath: "/seasons/powerplay-logo.png",
  awards: [
    { event: "Qualifying Tournament", awardName: "Innovate Award 1st Place" },
    { event: "Dean's List", awardName: "Finalist" },
    { event: "Quantum League", awardName: "Winners" },
  ],
};

export const freightFrenzy: SeasonProps = {
  name: "Freight Frenzy",
  years: "2021-2022",
  textColor: "var(--freight-frenzy-text)",
  gradientColor: "var(--freight-frenzy-gradient)",
  logoPath: "/seasons/freight-frenzy-logo.png",
  awards: [
    { event: "Romanian Regional #3", awardName: "Design Award Winners" },
  ],
};

export const ultimateGoal: SeasonProps = {
  name: "Ultimate Goal",
  years: "2020-2021",
  textColor: "var(--ultimate-goal-text)",
  gradientColor: "var(--ultimate-goal-gradient)",
  logoPath: "/seasons/ultimate-goal-logo.png",
  awards: [
    {
      event: "Romania Qualifying Tournament #3",
      awardName: "Inspire Award Winners",
    },
    {
      event: "Romania National Championship",
      awardName: "Innovate Award 2nd place",
    },
  ],
};

export const skystone: SeasonProps = {
  name: "Skystone",
  years: "2019-2020",
  textColor: "var(--skystone-text)",
  gradientColor: "var(--skystone-gradient)",
  logoPath: "/seasons/skystone-logo.png",
  awards: [
    { event: "Romania Moldova Regional", awardName: "Think Award 2nd Place" },
  ],
};

export const roverRuckus: SeasonProps = {
  name: "Rover Ruckus",
  years: "2018-2019",
  textColor: "var(--rover-ruckus-text)",
  gradientColor: "var(--rover-ruckus-gradient)",
  logoPath: "/seasons/rover-ruckus-logo.png",
  awards: [
    { event: "Romania Moldova Regional", awardName: "Winners" },
    { event: "Romania Moldova Regional", awardName: "Control Award Winners" },
    { event: "Romania National Championship", awardName: "Finalists" },
  ],
};

export const relicRecovery: SeasonProps = {
  name: "Relic Recovery",
  years: "2017-2018",
  textColor: "var(--relic-recovery-text)",
  gradientColor: "var(--relic-recovery-gradient)",
  logoPath: "/seasons/relic-recovery-logo.png",
  awards: [
    { event: "Placeholder event", awardName: "Placeholder award" },
    { event: "Placeholder event", awardName: "Placeholder award" },
  ],
};

export const velocityVortex: SeasonProps = {
  name: "Velocity Vortex",
  years: "2016-2017",
  textColor: "var(--velocity-vortex-text)",
  gradientColor: "var(--velocity-vortex-gradient)",
  logoPath: "/seasons/velocity-vortex-logo.png",
  awards: [
    { event: "Placeholder event", awardName: "Placeholder award" },
    { event: "Placeholder event", awardName: "Placeholder award" },
  ],
};

export const seasonList: SeasonProps[] = [
  decode,
  intoTheDeep,
  centerstage,
  powerplay,
  freightFrenzy,
  ultimateGoal,
  skystone,
  roverRuckus,
  relicRecovery,
  velocityVortex,
];
