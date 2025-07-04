"use client";

import { useTranslations } from "next-intl";
import PageTitle from "../components/page-title";
import Achievements from "./components/achievements";
import JoinBrickBot from "./components/join-brickbot";
import Introduction from "./components/team-introduction";

export default function OurTeam() {
  const t = useTranslations("OurTeam");
  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <Introduction />
        <Achievements />
      </section>
      <JoinBrickBot />
    </section>
  );
}
