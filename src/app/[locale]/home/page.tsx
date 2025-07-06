"use client";

import SponsorMarquee from "./components/sponsor-marquee";
import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import Projects from "./components/home-projects";
import FAQ from "./components/faq";

export default function Home() {
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
