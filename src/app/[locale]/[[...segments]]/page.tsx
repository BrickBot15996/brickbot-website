import { notFound, redirect } from "next/navigation";
import { routeMap, RouteKey } from "@/i18n/routing";
import { Metadata } from "next";
const componentLoaders: Record<RouteKey, () => Promise<React.ComponentType>> = {
  home: () =>
    import("../_pages/home/home-page").then((m) => m.HomePage),
  blog: () =>
    import("../_pages/blog/blog-page").then((m) => m.BlogPage),
  ourTeam: () =>
    import("../_pages/our-team/our-team-page").then((m) => m.OurTeamPage),
  projects: () =>
    import("../_pages/projects/projects-page").then((m) => m.ProjectsPage),
  theVault: () =>
    import("../_pages/projects/the-vault/the-vault-page").then(
      (m) => m.TheVaultPage,
    ),
  checkpoint: () =>
    import("../_pages/projects/checkpoint/checkpoint-page").then(
      (m) => m.CheckpointPage,
    ),
  sparks: () =>
    import("../_pages/projects/sparks/sparks-page").then((m) => m.SparksPage),
  supportUs: () =>
    import("../_pages/support-us/support-us-page").then((m) => m.SupportUsPage),
  contact: () =>
    import("../_pages/contact/contact-page").then((m) => m.default),
  "terms-and-conditions": () =>
    import("../_pages/terms-and-conditions/terms-and-conditions-page").then(
      (m) => m.TermsAndConditionsPage,
    ),
  "confidentiality-policy": () =>
    import("../_pages/confidentiality-policy/confidentiality-policy-page").then(
      (m) => m.ConfidentialityPolicy,
    ),
};

const metadataMap: Record<RouteKey, () => Promise<Record<string, Metadata>>> = {
  home: () =>
    import("../_pages/home/home-metadata").then((m) => m.homeMetadata),
  blog: () =>
    import("../_pages/blog/blog-metadata").then((m) => m.blogMetadata),
  ourTeam: () =>
    import("../_pages/our-team/our-team-metadata").then(
      (m) => m.ourTeamMetadata,
    ),
  projects: () =>
    import("../_pages/projects/projects-metadata").then(
      (m) => m.projectsMetadata,
    ),
  theVault: () =>
    import("../_pages/projects/the-vault/the-vault-metadata").then(
      (m) => m.theVaultMetadata,
    ),
  checkpoint: () =>
    import("../_pages/projects/checkpoint/checkpoint-metadata").then(
      (m) => m.checkpointMetadata,
    ),
  sparks: () =>
    import("../_pages/projects/sparks/sparks-metadata").then(
      (m) => m.sparksMetadata,
    ),
  supportUs: () =>
    import("../_pages/support-us/support-us-metadata").then(
      (m) => m.supportUsMetadata,
    ),
  contact: () =>
    import("../_pages/contact/contact-metadata").then((m) => m.contactMetadata),
  "terms-and-conditions": () =>
    import("../_pages/terms-and-conditions/terms-and-conditions-metadata").then(
      (m) => m.termsAndConditionsMetadata,
    ),
  "confidentiality-policy": () =>
    import("../_pages/confidentiality-policy/confidentiality-policy-metadata").then(
      (m) => m.confidentialityPolicyMetadata,
    ),
};

function findRouteMatch(segments: string[], locale?: string) {
  if (locale) {
    const match = Object.entries(routeMap).find(([, localized]) => {
      const localizedPath = localized[locale as "en" | "ro"];
      return (
        localizedPath.length === segments.length &&
        localizedPath.every((seg, idx) => seg === segments[idx])
      );
    });
    if (match) {
      return { key: match[0] as RouteKey, detectedLocale: locale };
    }
  }

  for (const [routeKey, localized] of Object.entries(routeMap)) {
    for (const [lang, path] of Object.entries(localized)) {
      if (
        path.length === segments.length &&
        path.every((seg, idx) => seg === segments[idx])
      ) {
        return { key: routeKey as RouteKey, detectedLocale: lang };
      }
    }
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; segments?: string[] }>;
}): Promise<Metadata> {
  const { locale, segments = [] } = await params;
  const match = findRouteMatch(segments, locale);

  if (!match) {
    return {
      title: locale === "en" ? "Page not found" : "Pagina nu există",
      description:
        locale === "en"
          ? "The page you're looking for doesn't exist."
          : "Pagina pe care o cauți nu există.",
    };
  }

  const { key } = match;

  const loader = metadataMap[key];
  if (loader) {
    const metadata = await loader();
    return (
      metadata?.[locale] ?? {
        title: "BrickBot",
        description:
          locale === "en"
            ? "Official website of team BrickBot."
            : "Website-ul oficial al echipei BrickBot.",
      }
    );
  }

  return {
    title: "BrickBot",
    description:
      locale === "en"
        ? "Official website of team BrickBot."
        : "Website-ul oficial al echipei BrickBot.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; segments?: string[] }>;
}) {
  const { locale, segments = [] } = await params;

  const match = findRouteMatch(segments, locale);

  if (!match) {
    return notFound();
  }

  const { key, detectedLocale } = match;

  if (detectedLocale !== locale) {
    const correctPath = `/${detectedLocale}/${segments.join("/")}`;
    redirect(correctPath);
  }

  const loader = componentLoaders[key as RouteKey];
  if (!loader) {
    return notFound();
  }

  const Component = await loader();
  return <Component />;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; segments: string[] }[] = [];

  for (const locale of ["en", "ro"] as const) {
    for (const route of Object.values(routeMap)) {
      params.push({
        locale,
        segments: route[locale],
      });
    }
  }

  return params;
}
