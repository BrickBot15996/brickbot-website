"use client";

import PageTitle from "../components/page-title";
import Button from "../components/brick-button";
import Achievements from "./components/achievements";
import Introduction from "./components/team-introduction";
import Link from "next/link";

export default function OurTeam() {
  return (
    <section className="outer-content">
      <PageTitle title="OUR TEAM" />
      <section className="inner-content">
        <Introduction />
        <Achievements />
      </section>
      <JoinBrickBot />
    </section>
  );
}

function JoinBrickBot() {
  return (
    <section className="relative bg-[linear-gradient(180deg,_transparent,_#1E1800)] h-fit w-[100vw] flex flex-col items-center justify-center overflow-visible mb-[calc(0rem-var(--2xl-space-y))]">
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[var(--xl-space-y)]">
        <h2>Join BrickBot</h2>
        <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--lg-space-y)] text-center">
          Passionate about robotics? Fill out the form to show your interest in
          joining our team.
        </p>
        <Link
          href="/apply"
          target="_blank"
        >
          <Button
            text="APPLY"
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
            arrow={false}
          />
        </Link>
      </div>
    </section>
  );
}
