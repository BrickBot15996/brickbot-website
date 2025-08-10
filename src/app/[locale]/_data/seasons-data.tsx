import { useTranslations } from "next-intl";

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

export const useDecode = (): SeasonProps => {
  const t = useTranslations("SeasonData.Decode.awards");

  return {
    name: "Decode",
    years: "2025-2026",
    textColor: "var(--default-yellow)",
    gradientColor: "var(--default-yellow)",
    logoPath: "/assets/our-team/seasons/decode-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
    ],
  };
};

export const useIntoTheDeep = (): SeasonProps => {
  const t = useTranslations("SeasonData.IntoTheDeep.awards");
  return {
    name: "Into The Deep",
    years: "2024-2025",
    textColor: "var(--into-the-deep-text)",
    gradientColor: "var(--into-the-deep-gradient)",
    logoPath: "/assets/our-team/seasons/into-the-deep-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
      {
        event: t("1.event"),
        awardName: t("1.awardName"),
      },
      {
        event: t("2.event"),
        awardName: t("2.awardName"),
      },
    ],
  };
};

export const useCenterstage = (): SeasonProps => {
  const t = useTranslations("SeasonData.Centerstage.awards");
  return {
    name: "Centerstage",
    years: "2023-2024",
    textColor: "var(--centerstage-text)",
    gradientColor: "var(--centerstage-gradient)",
    logoPath: "/assets/our-team/seasons/centerstage-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
      {
        event: t("1.event"),
        awardName: t("1.awardName"),
      },
    ],
  };
};

export const usePowerplay = (): SeasonProps => {
  const t = useTranslations("SeasonData.Powerplay.awards");
  return {
    name: "PowerPlay",
    years: "2022-2023",
    textColor: "var(--powerplay-text)",
    gradientColor: "var(--powerplay-gradient)",
    logoPath: "/assets/our-team/seasons/powerplay-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
      {
        event: t("1.event"),
        awardName: t("1.awardName"),
      },
      {
        event: t("2.event"),
        awardName: t("2.awardName"),
      },
    ],
  };
};

export const useFreightFrenzy = (): SeasonProps => {
  const t = useTranslations("SeasonData.FreightFrenzy.awards");
  return {
    name: "Freight Frenzy",
    years: "2021-2022",
    textColor: "var(--freight-frenzy-text)",
    gradientColor: "var(--freight-frenzy-gradient)",
    logoPath: "/assets/our-team/seasons/freight-frenzy-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
    ],
  };
};

export const useUltimateGoal = (): SeasonProps => {
  const t = useTranslations("SeasonData.UltimateGoal.awards");
  return {
    name: "Ultimate Goal",
    years: "2020-2021",
    textColor: "var(--ultimate-goal-text)",
    gradientColor: "var(--ultimate-goal-gradient)",
    logoPath: "/assets/our-team/seasons/ultimate-goal-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
      {
        event: t("1.event"),
        awardName: t("1.awardName"),
      },
    ],
  };
};

export const useSkystone = (): SeasonProps => {
  const t = useTranslations("SeasonData.Skystone.awards");
  return {
    name: "Skystone",
    years: "2019-2020",
    textColor: "var(--skystone-text)",
    gradientColor: "var(--skystone-gradient)",
    logoPath: "/assets/our-team/seasons/skystone-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
    ],
  };
};

export const useRoverRuckus = (): SeasonProps => {
  const t = useTranslations("SeasonData.RoverRuckus.awards");
  return {
    name: "Rover Ruckus",
    years: "2018-2019",
    textColor: "var(--rover-ruckus-text)",
    gradientColor: "var(--rover-ruckus-gradient)",
    logoPath: "/assets/our-team/seasons/rover-ruckus-logo.webp",
    awards: [
      {
        event: t("0.event"),
        awardName: t("0.awardName"),
      },
      {
        event: t("1.event"),
        awardName: t("1.awardName"),
      },
      {
        event: t("2.event"),
        awardName: t("2.awardName"),
      },
      {
        event: t("3.event"),
        awardName: t("3.awardName"),
      },
    ],
  };
};

export const useRelicRecovery = (): SeasonProps => {
  return {
    name: "Relic Recovery",
    years: "2017-2018",
    textColor: "var(--relic-recovery-text)",
    gradientColor: "var(--relic-recovery-gradient)",
    logoPath: "/assets/our-team/seasons/relic-recovery-logo.webp",
    awards: [],
  };
};

export const useVelocityVortex = (): SeasonProps => {
  return {
    name: "Velocity Vortex",
    years: "2016-2017",
    textColor: "var(--velocity-vortex-text)",
    gradientColor: "var(--velocity-vortex-gradient)",
    logoPath: "/assets/our-team/seasons/velocity-vortex-logo.webp",
    awards: [],
  };
};

export const useSeasonList = (): SeasonProps[] => {
  return [
    useDecode(),
    useIntoTheDeep(),
    useCenterstage(),
    usePowerplay(),
    useFreightFrenzy(),
    useUltimateGoal(),
    useSkystone(),
    useRoverRuckus(),
    useRelicRecovery(),
    useVelocityVortex(),
  ];
};
