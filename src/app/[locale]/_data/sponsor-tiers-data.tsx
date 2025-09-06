import { useTranslations } from "next-intl";

export type TierProps = {
  name: string;
  priceThreshold: number; // in EUR
  textColor: string;
  gradientColor: string;
  benefits: string[];
};

export const useBronze = (): TierProps => {
  const t = useTranslations("SponsorshipTierData.Benefits");
  return {
    name: "Bronze",
    priceThreshold: 250,
    textColor: "var(--bronze-tier-text)",
    gradientColor: "var(--bronze-tier-gradient)",
    benefits: [t("Benefit1"), t("Benefit2")],
  };
};

export const useSilver = (): TierProps => {
  const t = useTranslations("SponsorshipTierData.Benefits");
  return {
    name: "Silver",
    priceThreshold: 500,
    textColor: "var(--silver-tier-text)",
    gradientColor: "var(--silver-tier-gradient)",
    benefits: [t("Benefit1"), t("Benefit2"), t("Benefit3")],
  };
};

export const useGold = (): TierProps => {
  const t = useTranslations("SponsorshipTierData.Benefits");
  return {
    name: "Gold",
    priceThreshold: 1000,
    textColor: "var(--gold-tier-text)",
    gradientColor: "var(--gold-tier-gradient)",
    benefits: [t("Benefit1"), t("Benefit2"), t("Benefit3"), t("Benefit4")],
  };
};

export const useDiamond = (): TierProps => {
  const t = useTranslations("SponsorshipTierData.Benefits");
  return {
    name: "Diamond",
    priceThreshold: 2500,
    textColor: "var(--diamond-tier-text)",
    gradientColor: "var(--diamond-tier-gradient)",
    benefits: [
      t("Benefit1"),
      t("Benefit2"),
      t("Benefit3"),
      t("Benefit4"),
      t("Benefit5"),
    ],
  };
};

export const useUltimate = (): TierProps => {
  const t = useTranslations("SponsorshipTierData.Benefits");
  return {
    name: "Ultimate",
    priceThreshold: 5000,
    textColor: "var(--ultimate-tier-text)",
    gradientColor: "var(--ultimate-tier-gradient)",
    benefits: [
      t("Benefit1"),
      t("Benefit2"),
      t("Benefit3"),
      t("Benefit4"),
      t("Benefit5"),
      t("Benefit6"),
    ],
  };
};

export const useTierList = (): TierProps[] => {
  return [useBronze(), useSilver(), useGold(), useDiamond(), useUltimate()];
};
