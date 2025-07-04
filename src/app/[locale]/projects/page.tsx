"use client";

import { AnimationWhenInView, defaultFadeIn } from "../components/animations";
import PageTitle from "../components/page-title";
import { LargeProjectCard } from "./components/project-cards";
import { useProjectList } from "./projects-data";
import { useTranslations } from "use-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  const projectList = useProjectList();
  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row items-stretch gap-x-[var(--xl-space-x)] gap-y-[var(--2xl-space-y)]">
          {projectList.map((project, index) => {
            return (
              <AnimationWhenInView
                key={index}
                variants={defaultFadeIn}
              >
                <LargeProjectCard project={project} />
              </AnimationWhenInView>
            );
          })}
        </div>
      </section>
    </section>
  );
}
