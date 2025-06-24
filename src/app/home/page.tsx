"use client";

import SponsorMarquee from "./components/sponsor-marquee";
import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import Projects from "./components/home-projects";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <Banner />
      <section className="flex flex-col space-y-[var(--2xl-space-y)] my-[var(--2xl-space-y)] w-[var(--page-width)]">
        <AboutUs />
        <Projects />
      </section>
      <SponsorMarquee />
    </section>
  );
}
