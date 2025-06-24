"use client";

import PageTitle from "../components/page-title";
import Button from "../components/brick-button";
import Achievements from "./components/achievements";
import { useRouter } from "next/navigation";
import Introduction from "./components/team-introduction";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";

export default function OurTeam() {
  return (
    <section className="flex flex-col items-center">
      <PageTitle title="OUR TEAM" />
      <section className="flex flex-col w-[var(--page-width)] my-[var(--2xl-space-y)] space-y-[var(--2xl-space-y)]">
        <Introduction />
        <Achievements />
      </section>
      <JoinBrickBot />
    </section>
  );
}

function JoinBrickBot() {
  const router = useRouter();
  return (
    <motion.section
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="relative bg-[linear-gradient(180deg,_transparent,_#1E1800)] h-fit w-[100vw] flex flex-col items-center justify-center overflow-visible mt-[calc(0rem-var(--lg-space-y))]"
    >
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[var(--xl-space-y)]">
        <h2>Join BrickBot</h2>
        <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--lg-space-y)] text-center">
          Passionate about robotics? Fill out the form to show your interest in
          joining our team.
        </p>
        <Button
          text="APPLY"
          accentColor="var(--default-yellow)"
          gradientColorLight="var(--yellow-gradient-light)"
          gradientColorDark="var(--yellow-gradient-dark)"
          arrow={false}
          action={() => {
            router.push("/apply");
          }}
        />
      </div>
    </motion.section>
  );
}
