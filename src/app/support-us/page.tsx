"use client";

import PageTitle from "../components/page-title";
import HowToHelpSection from "./components/how-to-help";
import SponsorSection from "./components/sponsor-section";
import SponsorshipSection from "./components/sponsorship-section";

export default function SupportUs() {
  return (
    <section className="outer-content">
      <PageTitle title="SUPPORT US" />
      <section className="inner-content">
        <HowToHelpSection />
        <SponsorshipSection />
        <SponsorSection />
      </section>
    </section>
  );
}
