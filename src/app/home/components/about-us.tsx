import Link from "next/link";

import ImageCarousel from "../../components/image-carousel";

export default function AboutUs() {
  return (
    <section className="flex flex-col h-auto w-full">
      <h2 className="mb-[var(--md-space-y)]">About Us</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--xl-space-y)]">
        We are team #15996, BrickBot, from{" "}
        <Link
          href="https://maps.app.goo.gl/dDSZJpAszXq8b3nJA"
          target="_blank"
          className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
        >
          “Unirea” National College, Focșani, Romania
        </Link>
        . Since 2016, we have been competing in{" "}
        <Link
          href="https://www.firstinspires.org/robotics/ftc"
          target="_blank"
          className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
        >
          FIRST Tech Challenge
        </Link>
        . Beyond building robots, we love spreading the STEAM spirit in both the
        local and FTC communities.
      </p>
      <ImageCarousel
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
      />
    </section>
  );
}
