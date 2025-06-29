import Link from "next/link";

import ImageCarousel, { CarouselItem } from "../../components/image-carousel";

export default function Introduction() {
  return (
    <section>
      <h2 className="mb-[var(--md-space-y)]">Introduction</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--xl-space-y)]">
        We are team #15996, BrickBot, from{" "}
        <Link
          href="https://maps.app.goo.gl/dDSZJpAszXq8b3nJA"
          target="_blank"
          className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
        >
          “Unirea” National College, Focșani, Romania
        </Link>
        . Since 2016, we have taken part in the{" "}
        <Link
          href="https://www.firstinspires.org/robotics/ftc"
          target="_blank"
          className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
        >
          FIRST Tech Challenge
        </Link>
        , working hard to build competitive robots. We are passionate about
        promoting STEAM education and creating opportunities for learning and
        growth in both our local community and the wider FTC network.
      </p>
      <ImageCarousel
        content={ourTeamImages}
        buttonAccentColor="var(--default-yellow)"
        buttonGradientLight="var(--yellow-gradient-light)"
        buttonGradientDark="var(--yellow-gradient-dark)"
      />
    </section>
  );
}

const ourTeamImages: CarouselItem[] = [
  {
    imageSrc: "/our-team/brickbot-into-the-deep.webp",
    alt: "BrickBot 2024-25 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2024-25",
  },
  {
    imageSrc: "/our-team/brickbot-centerstage.webp",
    alt: "BrickBot 2023-24 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2023-24",
  },
  {
    imageSrc: "/our-team/brickbot-powerplay.webp",
    alt: "BrickBot 2022-23 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2022-23",
  },
  {
    imageSrc: "/our-team/brickbot-freight-frenzy.webp",
    alt: "BrickBot 2021-22 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2021-22",
  },
  {
    imageSrc: "/our-team/brickbot-ultimate-goal.webp",
    alt: "BrickBot 2020-21 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2020-21",
  },
  {
    imageSrc: "/our-team/brickbot-skystone.webp",
    alt: "BrickBot 2019-20 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2019-20",
  },
  {
    imageSrc: "/our-team/brickbot-rover-ruckus.webp",
    alt: "BrickBot 2018-19 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2018-19",
  },
  {
    imageSrc: "/our-team/brickbot-relic-recovery.webp",
    alt: "BrickBot 2017-18 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2017-18",
  },
  {
    imageSrc: "/our-team/brickbot-velocity-vortex.webp",
    alt: "BrickBot 2016-17 Group Picture",
    aspectRatio: "16/9",
    description: "BrickBot in 2016-17",
  },
];
