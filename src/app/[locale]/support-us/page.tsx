"use client";

import { useTranslations } from "next-intl";
import PageTitle from "../components/page-title";
import HowToHelpSection from "./components/how-to-help";
import SponsorSection from "./components/sponsor-section";
import SponsorshipSection from "./components/sponsorship-section";

export default function SupportUs() {
  const t = useTranslations("SupportUs");
  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <HowToHelpSection />
        <SponsorshipSection />
        <SponsorSection />
      </section>
    </section>
  );
}
