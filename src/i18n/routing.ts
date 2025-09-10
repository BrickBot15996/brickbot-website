import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ro"],

  defaultLocale: "en",
});

export type Locale = "en" | "ro";

export type RouteKey =
  | "home"
  | "blog"
  | "ourTeam"
  | "projects"
  | "theVault"
  | "checkpoint"
  | "sparks"
  | "supportUs"
  | "contact";

export const routeMap: Record<RouteKey, Record<Locale, string[]>> = {
  home: {
    en: [],
    ro: [],
  },
  blog: {
    en: ["blog"],
    ro: ["blog"],
  },
  ourTeam: {
    en: ["our-team"],
    ro: ["despre-noi"],
  },
  projects: {
    en: ["projects"],
    ro: ["proiecte"],
  },
  theVault: {
    en: ["projects", "the-vault"],
    ro: ["proiecte", "the-vault"],
  },
  checkpoint: {
    en: ["projects", "checkpoint"],
    ro: ["proiecte", "checkpoint"],
  },
  sparks: {
    en: ["projects", "sparks"],
    ro: ["proiecte", "sparks"],
  },
  supportUs: {
    en: ["support-us"],
    ro: ["sustine-ne"],
  },
  contact: {
    en: ["contact"],
    ro: ["contact"],
  },
};
