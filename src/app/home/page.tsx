"use client";

import SponsorMarquee from "../components/sponsor-marquee";

import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import Projects from "./components/home-projects";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <Banner />
      <section className="flex flex-col space-y-[4rem] mt-[4rem] md:mt-[6rem] lg:mt-[8rem] w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] xl:w-[calc(100vw-8rem)] max-w-[37rem] md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-[72rem] 2xl:max-w-[88rem]">
        <AboutUs />
        <Projects />
        <SponsorMarquee />
      </section>
    </section>
  );
}
