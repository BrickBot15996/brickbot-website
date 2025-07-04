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
    logoPath: "/seasons/decode-logo.png",
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
    logoPath: "/seasons/into-the-deep-logo.webp",
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

export const useCenterstage = (): SeasonProps => {
  const t = useTranslations("SeasonData.Centerstage.awards");
  return {
    name: "Centerstage",
    years: "2023-2024",
    textColor: "var(--centerstage-text)",
    gradientColor: "var(--centerstage-gradient)",
    logoPath: "/seasons/centerstage-logo.png",
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
    logoPath: "/seasons/powerplay-logo.png",
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
    logoPath: "/seasons/freight-frenzy-logo.png",
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
    logoPath: "/seasons/ultimate-goal-logo.png",
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
    logoPath: "/seasons/skystone-logo.png",
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
    logoPath: "/seasons/rover-ruckus-logo.png",
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
  const t = useTranslations("SeasonData.RelicRecovery.awards");
  return {
    name: "Relic Recovery",
    years: "2017-2018",
    textColor: "var(--relic-recovery-text)",
    gradientColor: "var(--relic-recovery-gradient)",
    logoPath: "/seasons/relic-recovery-logo.png",
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

export const useVelocityVortex = (): SeasonProps => {
  const t = useTranslations("SeasonData.VelocityVortex.awards");
  return {
    name: "Velocity Vortex",
    years: "2016-2017",
    textColor: "var(--velocity-vortex-text)",
    gradientColor: "var(--velocity-vortex-gradient)",
    logoPath: "/seasons/velocity-vortex-logo.png",
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
