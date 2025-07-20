"use client";

import { useRouter } from "next/navigation";

import Button from "../../_components/brick-button";
import { useProjectList } from "@/app/[locale]/_data/projects-data";
import { SmallProjectCard } from "@/app/[locale]/projects/components/project-cards";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/_components/animations";
import { useTranslations } from "next-intl";

export default function Projects() {
  const router = useRouter();
  const t = useTranslations("Home.Projects");
  const projectList = useProjectList();

  return (
    <section className="flex flex-col items-center justify-center w-full h-fit">
      <h2 className="mr-auto mb-[var(--xl-space-y)]">{t("title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch px-[var(--xl-space-x)] sm:px-[var(--2xl-space-x)] md:px-[0rem] gap-y-[var(--lg-space-y)] gap-x-[var(--lg-space-x)] xl:gap-x-[var(--md-space-x)] mb-[var(--xl-space-y)] w-full">
        {projectList.slice(0, 4).map((project, index) => {
          return (
            <AnimationWhenInView
              key={index}
              variants={defaultFadeIn}
            >
              <SmallProjectCard project={project} />
            </AnimationWhenInView>
          );
        })}
      </div>
      <div className="md:ml-auto">
        <Button
          text={t("buttonText")}
          arrow={false}
          action={() => router.push("/projects")}
          className="px-[1.5rem]"
        />
      </div>
    </section>
  );
}
