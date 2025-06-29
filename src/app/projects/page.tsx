"use client";

import { defaultFadeIn } from "../components/animations";
import PageTitle from "../components/page-title";
import { LargeProjectCard } from "./components/project-cards";
import { projectList } from "./projects-data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="outer-content">
      <PageTitle title="PROJECTS" />
      <section className="inner-content">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row items-stretch gap-x-[var(--xl-space-x)] gap-y-[var(--2xl-space-y)]">
          {projectList.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={defaultFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
              >
                <LargeProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
