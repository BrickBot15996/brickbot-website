import { notFound, redirect } from "next/navigation";
import { routeMap, RouteKey, RedirectKey } from "@/i18n/routing";
import { Metadata } from "next";

import { HomePage } from "../_pages/home/home-page";
import { BlogPage } from "../_pages/blog/blog-page";
import { ProjectsPage } from "../_pages/projects/projects-page";
import { TheVaultPage } from "../_pages/projects/the-vault/the-vault-page";
import { CheckpointPage } from "../_pages/projects/checkpoint/checkpoint-page";
import { SparksPage } from "../_pages/projects/sparks/sparks-page";
import { SupportUsPage } from "../_pages/support-us/support-us-page";
import { OurTeamPage } from "../_pages/our-team/our-team-page";
import { homeMetadata } from "../_pages/home/home-metadata";
import { blogMetadata } from "../_pages/blog/blog-metadata";
import { ourTeamMetadata } from "../_pages/our-team/our-team-metadata";
import { projectsMetadata } from "../_pages/projects/projects-metadata";
import { theVaultMetadata } from "../_pages/projects/the-vault/the-vault-metadata";
import { checkpointMetadata } from "../_pages/projects/checkpoint/checkpoint-metadata";
import { sparksMetadata } from "../_pages/projects/sparks/sparks-metadata";
import { supportUsMetadata } from "../_pages/support-us/support-us-metadata";

export const dynamic = "force-dynamic";

const metadataMap: Record<RouteKey, Record<string, Metadata>> = {
  home: homeMetadata,
  blog: blogMetadata,
  ourTeam: ourTeamMetadata,
  projects: projectsMetadata,
  theVault: theVaultMetadata,
  checkpoint: checkpointMetadata,
  sparks: sparksMetadata,
  supportUs: supportUsMetadata,
};

const componentMap: Record<RouteKey, React.ComponentType> = {
  home: HomePage,
  blog: BlogPage,
  ourTeam: OurTeamPage,
  projects: ProjectsPage,
  theVault: TheVaultPage,
  checkpoint: CheckpointPage,
  sparks: SparksPage,
  supportUs: SupportUsPage,
};

const redirectMap: Record<RedirectKey, string> = {
  apply: "https://forms.gle/yBG1R8YJoQaGmYez7",
  docs: "https://brickbot15996.github.io/brickbot-docs/",
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
      return { key: match[0], detectedLocale: locale };
    }
  }

  for (const [routeKey, localized] of Object.entries(routeMap)) {
    for (const [lang, path] of Object.entries(localized)) {
      if (
        path.length === segments.length &&
        path.every((seg, idx) => seg === segments[idx])
      ) {
        return { key: routeKey, detectedLocale: lang };
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
  console.log(match);

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

  if (key in redirectMap) {
    return {
      title: locale === "en" ? "Redirecting..." : "Redirecționare...",
      description:
        locale === "en"
          ? "Redirecting to external resource."
          : "Ești redirecționat către o resursă externă",
    };
  }

  const pageMeta = metadataMap[key as RouteKey];

  return (
    pageMeta?.[locale] ?? {
      title: "BrickBot",
      description:
        locale === "en"
          ? "Official website of team BrickBot."
          : "Website-ul oficial al echipei BrickBot.",
    }
  );
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

  if (key in redirectMap) {
    redirect(redirectMap[key as RedirectKey]);
  }

  const Component = componentMap[key as RouteKey];
  if (!Component) {
    return notFound();
  }

  return <Component />;
}
