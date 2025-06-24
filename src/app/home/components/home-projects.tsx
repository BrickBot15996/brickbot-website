"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Button from "../../components/brick-button";
import { projectList } from "@/app/projects/projects-data";
import { SmallProjectCard } from "@/app/projects/components/project-cards";
import { defaultFadeIn } from "@/app/components/animations";

export default function Projects() {
  const router = useRouter();

  return (
    <motion.section
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-col items-center justify-center w-full h-fit"
    >
      <h2 className="mr-auto mb-[var(--xl-space-y)]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch px-[var(--xl-space-y)] md:px-[0rem] gap-y-[var(--lg-space-y)] gap-x-[var(--lg-space-x)] xl:gap-x-[var(--md-space-x)] mb-[var(--xl-space-y)] w-full">
        {projectList.slice(0, 4).map((project, index) => {
          return (
            <SmallProjectCard
              key={index}
              project={project}
            />
          );
        })}
      </div>
      <div className="md:ml-auto">
        <Button
          text="SEE ALL"
          arrow={false}
          accentColor="var(--default-yellow)"
          gradientColorLight="var(--yellow-gradient-light)"
          gradientColorDark="var(--yellow-gradient-dark)"
          action={() => router.push("/projects")}
        />
      </div>
    </motion.section>
  );
}
