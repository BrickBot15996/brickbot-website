"use client";

import PageTitle from "../components/page-title";
import { LargeProjectCard } from "./components/project-cards";
import { projectList } from "./projects-data";

export default function Projects() {
  return (
    <section className="outer-content">
      <PageTitle title="PROJECTS" />
      <section className="inner-content">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row items-stretch gap-x-[var(--xl-space-x)] gap-y-[var(--2xl-space-y)]">
          {projectList.map((project, index) => {
            return (
              <LargeProjectCard
                key={index}
                project={project}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
