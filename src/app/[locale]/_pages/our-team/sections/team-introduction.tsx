import Link from "next/link";

import ImageCarousel, {
  CarouselItem,
} from "../../../_components/image-carousel";
import { useTranslations } from "next-intl";

export default function Introduction() {
  const t = useTranslations("OurTeam.Introduction");
  const ourTeamImages: CarouselItem[] = [
    {
      imageSrc: "/assets/our-team/brickbot-into-the-deep.webp",
      alt: t("Carousel.2024-25"),
      aspectRatio: "16/9",
      description: t("Carousel.2024-25"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-centerstage.webp",
      alt: t("Carousel.2023-24"),
      aspectRatio: "16/9",
      description: t("Carousel.2023-24"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-powerplay.webp",
      alt: t("Carousel.2022-23"),
      aspectRatio: "16/9",
      description: t("Carousel.2022-23"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-freight-frenzy.webp",
      alt: t("Carousel.2021-22"),
      aspectRatio: "16/9",
      description: t("Carousel.2021-22"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-ultimate-goal.webp",
      alt: t("Carousel.2020-21"),
      aspectRatio: "16/9",
      description: t("Carousel.2020-21"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-skystone.webp",
      alt: t("Carousel.2019-20"),
      aspectRatio: "16/9",
      description: t("Carousel.2019-20"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-rover-ruckus.webp",
      alt: t("Carousel.2018-19"),
      aspectRatio: "16/9",
      description: t("Carousel.2018-19"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-relic-recovery.webp",
      alt: t("Carousel.2017-18"),
      aspectRatio: "16/9",
      description: t("Carousel.2017-18"),
    },
    {
      imageSrc: "/assets/our-team/brickbot-velocity-vortex.webp",
      alt: t("Carousel.2016-17"),
      aspectRatio: "16/9",
      description: t("Carousel.2016-17"),
    },
  ];
  return (
    <section>
      <h2 className="mb-[var(--md-space-y)]">{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--sm-space-y)]">
        {t.rich("text.paragraph0", {
          ftc: (chunks) => (
            <Link
              href="https://www.firstinspires.org/robotics/ftc"
              target="_blank"
              className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)] underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--xl-space-y)]">
        {t("text.paragraph1")}
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
