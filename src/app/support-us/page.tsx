"use client";

import PageTitle from "../components/page-title";
import CollaborationSection from "./components/collaboration-section";
import DonationSection from "./components/donation-section";
import HowItWorksSection from "./components/how-it-works";
import SponsorshipSection from "./components/sponsorship-section";

export default function SupportUs() {
  return (
    <section className="flex flex-col items-center">
      <PageTitle title="SUPPORT US" />
      <section className="relative flex flex-col space-y-[var(--2xl-space-y)] my-[var(--2xl-space-y)] w-[var(--page-width)]">
        <HowItWorksSection />
        <SponsorshipSection />
        <DonationSection />
        <CollaborationSection />
      </section>
    </section>
  );
}
