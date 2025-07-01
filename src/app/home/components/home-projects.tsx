"use client";

import { useRouter } from "next/navigation";

import Button from "../../components/brick-button";
import { projectList } from "@/app/projects/projects-data";
import { SmallProjectCard } from "@/app/projects/components/project-cards";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/components/animations";

export default function Projects() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center w-full h-fit">
      <h2 className="mr-auto mb-[var(--xl-space-y)]">Projects</h2>
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
          text="SEE ALL"
          arrow={false}
          action={() => router.push("/projects")}
          className="px-[1.5rem]"
        />
      </div>
    </section>
  );
}
