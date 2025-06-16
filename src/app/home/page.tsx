"use client";

import SponsorMarquee from "../components/sponsor-marquee";

import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import Projects from "./components/home-projects";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <Banner />
      <section className="flex flex-col space-y-[4rem] mt-[4rem] md:mt-[6rem] lg:mt-[8rem] w-[var(--page-width)]">
        <AboutUs />
        <Projects />
        <SponsorMarquee />
      </section>
    </section>
  );
}
