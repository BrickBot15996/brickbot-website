"use client";

import { useTranslations } from "next-intl";
import PageTitle from "../../_components/page-title";
import Achievements from "./sections/achievements";
import JoinBrickBot from "./sections/join-brickbot";
import Introduction from "./sections/team-introduction";

export function OurTeamPage() {
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
