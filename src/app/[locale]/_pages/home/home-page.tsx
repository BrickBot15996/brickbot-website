import SponsorMarquee from "./sections/sponsor-marquee";
import AboutUs from "./sections/about-us";
import Projects from "./sections/home-projects";
import FAQ from "./sections/faq";
import Hero from "./sections/hero";

export function HomePage() {
  return (
    <section className="outer-content">
      <Hero />
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
