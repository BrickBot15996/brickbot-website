export type TierProps = {
  name: string;
  priceThreshold: number; // in EUR
  textColor: string;
  gradientColor: string;
  benefits: string[];
};

export const bronze: TierProps = {
  name: "Bronze",
  priceThreshold: 100,
  textColor: "var(--bronze-tier-text)",
  gradientColor: "var(--bronze-tier-gradient)",
  benefits: ["Social Media Mentions", "Logo on Robot"],
};

export const silver: TierProps = {
  name: "Silver",
  priceThreshold: 250,
  textColor: "var(--silver-tier-text)",
  gradientColor: "var(--silver-tier-gradient)",
  benefits: ["Social Media Mentions", "Logo on Robot", "Logo on Website"],
};

export const gold: TierProps = {
  name: "Gold",
  priceThreshold: 750,
  textColor: "var(--gold-tier-text)",
  gradientColor: "var(--gold-tier-gradient)",
  benefits: [
    "Social Media Mentions",
    "Logo on Robot",
    "Logo on Website",
    "Logo on Roll-Up",
  ],
};

export const diamond: TierProps = {
  name: "Diamond",
  priceThreshold: 1500,
  textColor: "var(--diamond-tier-text)",
  gradientColor: "var(--diamond-tier-gradient)",
  benefits: [
    "Social Media Mentions",
    "Logo on Robot",
    "Logo on Website",
    "Logo on Roll-Up",
    "Merch with your Logo",
  ],
};

export const ultimate: TierProps = {
  name: "Ultimate",
  priceThreshold: 3000,
  textColor: "var(--ultimate-tier-text)",
  gradientColor: "var(--ultimate-tier-gradient)",
  benefits: [
    "Social Media Mentions",
    "Logo on Robot",
    "Logo on Website",
    "Logo on Roll-Up",
    "Merch with your Logo",
    "Social Media Campaign",
  ],
};

export const tierList: TierProps[] = [bronze, silver, gold, diamond, ultimate];
