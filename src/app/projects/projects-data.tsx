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

export const theVault: ProjectProps = {
  name: "The Vault",
  extendedName: "The Vault: Portfolio Library",
  subtitle: "Portfolio Library",
  logoPath: "/projects/the-vault-logo.svg",
  iconPath: "/projects/the-vault-icon.svg",
  pagePath: "/projects/the-vault",
  description: "An online library of FTC portfolios to help new teams.",
  color: "var(--the-vault)",
  textColor: "var(--the-vault-text)",
  gradientColor: "var(--the-vault-gradient)",
  buttonColor: "#FEB600",
  buttonGradientLight: "#4A3500",
  buttonGradientDark: "#2A1E00",
  buttonLitUpLight: "#6A5520",
  buttonLitUpDark: "#4A3E20",
};

export const brickDocs: ProjectProps = {
  name: "BrickDocs",
  extendedName: "BrickDocs: Team Guide",
  subtitle: "Guide & Documentation",
  description: "Public documentation we use to guide new BrickBot members.",
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

export const sparks: ProjectProps = {
  name: "Sparks",
  extendedName: "Sparks: Connecting FTC Teams",
  subtitle: "Connecting FTC Teams",
  description:
    "Meetings, events, and activities we've done with other FTC teams to stay connected.",
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

export const checkpoint: ProjectProps = {
  name: "Checkpoint",
  extendedName: "Checkpoint: Outreach Events",
  subtitle: "Outreach, Events & Activities",
  description:
    "Key outreach events and activities in the local community that highlight impact and involvement.",
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

export const simplicityFTC: ProjectProps = {
  name: "SimplicityFTC",
  extendedName: "SimplicityFTC: Coding Library",
  subtitle: "Open-Source Programming Library",
  description: "Programming library designed to simplify coding for FTC teams.",
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

export const projectList: ProjectProps[] = [
  theVault,
  checkpoint,
  sparks,
  brickDocs,
  simplicityFTC,
];
