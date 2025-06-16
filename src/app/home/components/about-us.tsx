import Link from "next/link";

import Carousel from "../../components/generic-carousel";

export default function AboutUs() {
  return (
    <section className="flex flex-col h-auto w-full space-y-[0.5rem]">
      <h1 className="text-[var(--default-yellow)] font-extrabold text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
        About Us
      </h1>
      <p className="text-[1.25rem]/[1.85rem] md:text-[1.5rem]/[2.1rem] xl:text-[1.75rem]/[2.35rem] font-medium text-[var(--default-text)] w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[2.5rem] md:mb-[3rem] lg:mb-[3.5rem]">
        We are team #15996, BrickBot, from{" "}
        <Link
          href="https://maps.app.goo.gl/dDSZJpAszXq8b3nJA"
          target="_blank"
          className="hover:text-[var(--alternate-text)]"
        >
          “Unirea” National College, Focșani, Romania
        </Link>
        . Since 2016, we have been competing in{" "}
        <Link
          href="https://www.firstinspires.org/robotics/ftc"
          target="_blank"
          className="hover:text-[var(--alternate-text)]"
        >
          FIRST Tech Challenge
        </Link>
        . Beyond building robots, we love spreading the STEAM spirit in both the
        local and FTC communities.
      </p>
      <Carousel
        content={[
          {
            imageSrc: "/about-us/caravan-2025.webp",
            alt: "BrickBot Caravan presentation in May 2025",
            aspectRatio: "16/9",
            description: "BrickBot In Schools, May 2025",
          },
          {
            imageSrc: "/about-us/italy-2025.webp",
            alt: "BrickBot at the Italian Championship in February 2025",
            aspectRatio: "16/9",
            description: "Italy Championship, Feb 2025",
          },
          {
            imageSrc: "/about-us/regionals-2025.webp",
            alt: "BrickBot at the East Regional in January 2025",
            aspectRatio: "16/9",
            description: "Romania East Championship, Jan 2025",
          },
          {
            imageSrc: "/about-us/focsani-meet-2025.webp",
            alt: "BrickBot at the Focșani League Meet in January 2025",
            aspectRatio: "16/9",
            description: "DIVE Into Innovation League Meet, Jan 2025",
          },
          {
            imageSrc: "/about-us/btc-2024.webp",
            alt: "BrickBot at the Bucharest Twin Cup in August 2024",
            aspectRatio: "16/9",
            description: "Bucharest Twin Cup, Aug 2024",
          },
          {
            imageSrc: "/about-us/regionals-2023.webp",
            alt: "BrickBot at the First Qualifying Tournament in February 2023",
            aspectRatio: "16/9",
            description: "Romania Qualifying Tournament, Feb 2023",
          },
        ]}
        buttonAccentColor="var(--default-yellow)"
        buttonGradientLight="var(--yellow-gradient-light)"
        buttonGradientDark="var(--yellow-gradient-dark)"
        buttonLitUpLight="var(--lit-up-yellow-gradient-light)"
        buttonLitUpDark="var(--lit-up-yellow-gradient-dark)"
      />
    </section>
  );
}
