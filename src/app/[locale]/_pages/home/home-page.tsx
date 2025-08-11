import Banner from "./sections/banner";
import AboutUs from "./sections/about-us";
import Projects from "./sections/home-projects";
import SponsorMarqueeClient from "./sections/sponsor-marquee-client";
import FAQClient from "./sections/faq-client";

export function HomePage() {
  return (
    <section className="outer-content">
      <Banner />
      <section className="inner-content">
        <AboutUs />
        <Projects />
      </section>
      <SponsorMarqueeClient />
      <section className="inner-content">
        <FAQClient />
      </section>
    </section>
  );
}
