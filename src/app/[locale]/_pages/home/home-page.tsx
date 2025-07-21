"use client";

import SponsorMarquee from "./sections/sponsor-marquee";
import Banner from "./sections/banner";
import AboutUs from "./sections/about-us";
import Projects from "./sections/home-projects";
import FAQ from "./sections/faq";

export function HomePage() {
  return (
    <section className="outer-content">
      <Banner />
      <section className="inner-content">
        <AboutUs />
        <Projects />
      </section>
      <SponsorMarquee />
      <section className="inner-content">
        <FAQ />
      </section>
    </section>
  );
}
