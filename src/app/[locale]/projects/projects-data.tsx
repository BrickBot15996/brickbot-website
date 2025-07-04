import { useTranslations } from "next-intl";

export type ProjectProps = {
  name: string;
  extendedName: string;
  subtitle: string;
  description: string;
  logoPath: string;
  iconPath: string;
  pagePath: string;
  color: string;
  textColor: string;
  gradientColor: string;
  buttonColor: string;
  buttonGradientLight: string;
  buttonGradientDark: string;
  buttonLitUpLight: string;
  buttonLitUpDark: string;
};

export const useTheVault = (): ProjectProps => {
  const t = useTranslations("ProjectData.TheVault");
  return {
    name: t("name"),
    extendedName: t("extendedName"),
    subtitle: t("subtitle"),
    description: t("description"),
    logoPath: "/projects/the-vault-logo.svg",
    iconPath: "/projects/the-vault-icon.svg",
    pagePath: "/projects/the-vault",
    color: "var(--the-vault)",
    textColor: "var(--the-vault-text)",
    gradientColor: "var(--the-vault-gradient)",
    buttonColor: "#FEB600",
    buttonGradientLight: "#4A3500",
    buttonGradientDark: "#2A1E00",
    buttonLitUpLight: "#6A5520",
    buttonLitUpDark: "#4A3E20",
  };
};

export const useCheckpoint = (): ProjectProps => {
  const t = useTranslations("ProjectData.Checkpoint");
  return {
    name: t("name"),
    extendedName: t("extendedName"),
    subtitle: t("subtitle"),
    description: t("description"),
    logoPath: "/projects/checkpoint-logo.svg",
    iconPath: "/projects/checkpoint-icon.svg",
    pagePath: "/projects/checkpoint",
    color: "var(--checkpoint)",
    textColor: "var(--checkpoint-text)",
    gradientColor: "var(--checkpoint-gradient)",
    buttonColor: "#30CAAE",
    buttonGradientLight: "#306256",
    buttonGradientDark: "#1a302e",
    buttonLitUpLight: "#3f7365",
    buttonLitUpDark: "#2a3f3e",
  };
};

export const useSparks = (): ProjectProps => {
  const t = useTranslations("ProjectData.Sparks");
  return {
    name: t("name"),
    extendedName: t("extendedName"),
    subtitle: t("subtitle"),
    description: t("description"),
    logoPath: "/projects/sparks-logo.svg",
    iconPath: "/projects/sparks-icon.svg",
    pagePath: "/projects/sparks",
    color: "var(--sparks)",
    textColor: "var(--sparks-text)",
    gradientColor: "var(--sparks-gradient)",
    buttonColor: "#d3d3fc",
    buttonGradientLight: "#69697e",
    buttonGradientDark: "#464666",
    buttonLitUpLight: "#79798e",
    buttonLitUpDark: "#565676",
  };
};

export const useBrickDocs = (): ProjectProps => {
  const t = useTranslations("ProjectData.BrickDocs");
  return {
    name: t("name"),
    extendedName: t("extendedName"),
    subtitle: t("subtitle"),
    description: t("description"),
    logoPath: "/projects/brickdocs-logo.svg",
    iconPath: "/projects/brickdocs-icon.svg",
    pagePath: "https://brickbot15996.github.io/brickbot-docs/",
    color: "var(--brickdocs)",
    textColor: "var(--brickdocs-text)",
    gradientColor: "var(--brickdocs-gradient)",
    buttonColor: "var(--brickdocs-text)",
    buttonGradientLight: "",
    buttonGradientDark: "",
    buttonLitUpLight: "",
    buttonLitUpDark: "",
  };
};
export const useSimplicityFTC = (): ProjectProps => {
  const t = useTranslations("ProjectData.SimplicityFTC");
  return {
    name: t("name"),
    extendedName: t("extendedName"),
    subtitle: t("subtitle"),
    description: t("description"),
    logoPath: "/projects/simplicityftc-logo.svg",
    iconPath: "/projects/simplicityftc-icon.svg",
    pagePath: "https://github.com/SimplicityFTC",
    color: "var(--simplicityftc)",
    textColor: "var(--simplicityftc-text)",
    gradientColor: "var(--simplicityftc-gradient)",
    buttonColor: "var(--simplicityftc-text)",
    buttonGradientLight: "",
    buttonGradientDark: "",
    buttonLitUpLight: "",
    buttonLitUpDark: "",
  };
};

export const useProjectList = (): ProjectProps[] => {
  return [
    useTheVault(),
    useCheckpoint(),
    useSparks(),
    useBrickDocs(),
    useSimplicityFTC(),
  ];
};
