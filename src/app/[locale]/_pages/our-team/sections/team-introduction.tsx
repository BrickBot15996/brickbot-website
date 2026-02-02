import Link from "next/link";

import ImageCarousel, {
  CarouselItem,
} from "../../../_components/image-carousel";
import { useTranslations } from "next-intl";
import { CDN_LINK } from "@/app/[locale]/constants";

export default function Introduction() {
  const t = useTranslations("OurTeam.Introduction");
  const ourTeamImages: CarouselItem[] = [
    {
      imageSrc: CDN_LINK + "/images/seasonal/decode.webp",
      alt: t("Carousel.2025-26"),
      aspectRatio: "16/9",
      description: t("Carousel.2025-26"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/into-the-deep.webp",
      alt: t("Carousel.2024-25"),
      aspectRatio: "16/9",
      description: t("Carousel.2024-25"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/centerstage.webp",
      alt: t("Carousel.2023-24"),
      aspectRatio: "16/9",
      description: t("Carousel.2023-24"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/powerplay.webp",
      alt: t("Carousel.2022-23"),
      aspectRatio: "16/9",
      description: t("Carousel.2022-23"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/freight-frenzy.webp",
      alt: t("Carousel.2021-22"),
      aspectRatio: "16/9",
      description: t("Carousel.2021-22"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/ultimate-goal.webp",
      alt: t("Carousel.2020-21"),
      aspectRatio: "16/9",
      description: t("Carousel.2020-21"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/skystone.webp",
      alt: t("Carousel.2019-20"),
      aspectRatio: "16/9",
      description: t("Carousel.2019-20"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/rover-ruckus.webp",
      alt: t("Carousel.2018-19"),
      aspectRatio: "16/9",
      description: t("Carousel.2018-19"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/relic-recovery.webp",
      alt: t("Carousel.2017-18"),
      aspectRatio: "16/9",
      description: t("Carousel.2017-18"),
    },
    {
      imageSrc: CDN_LINK + "/images/seasonal/velocity-vortex.webp",
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
