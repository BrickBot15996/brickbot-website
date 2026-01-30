import Link from "next/link";

import ImageCarousel from "../../../_components/image-carousel";
import { useTranslations } from "next-intl";
import { CDN_LINK } from "@/app/[locale]/constants";

export default function AboutUs() {
  const t = useTranslations("Home.AboutUs");
  return (
    <section className="flex flex-col h-auto w-full">
      <h2 className="mb-[var(--md-space-y)]">{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--sm-space-y)]">
        {t.rich("text.paragraph0", {
          cnu: (chunks) => (
            <Link
              href="http://cnu.lufo.ro/"
              target="_blank"
              className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)] underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--sm-space-y)]">
        {t.rich("text.paragraph1", {
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
        {t("text.paragraph2")}
      </p>
      <ImageCarousel
        content={[
          {
            imageSrc: CDN_LINK + "/website/home/about-us/sparkhope-2025.webp",
            alt: t("Carousel.SparkHope2025"),
            aspectRatio: "16/9",
            description: t("Carousel.SparkHope2025"),
          },
          {
            imageSrc: CDN_LINK + "/website/home/about-us/caravan-2025.webp",
            alt: t("Carousel.Caravan2025"),
            aspectRatio: "16/9",
            description: t("Carousel.Caravan2025"),
          },
          {
            imageSrc: CDN_LINK + "/website/home/about-us/italy-2025.webp",
            alt: t("Carousel.Italy2025"),
            aspectRatio: "16/9",
            description: t("Carousel.Italy2025"),
          },
          {
            imageSrc: CDN_LINK + "/website/home/about-us/regionals-2025.webp",
            alt: t("Carousel.Regionals2025"),
            aspectRatio: "16/9",
            description: t("Carousel.Regionals2025"),
          },
          {
            imageSrc:
              CDN_LINK + "/website/home/about-us/focsani-meet-2025.webp",
            alt: t("Carousel.FocsaniMeet2025"),
            aspectRatio: "16/9",
            description: t("Carousel.FocsaniMeet2025"),
          },
          {
            imageSrc: CDN_LINK + "/website/home/about-us/btc-2024.webp",
            alt: t("Carousel.BTC2024"),
            aspectRatio: "16/9",
            description: t("Carousel.BTC2024"),
          },
          {
            imageSrc: CDN_LINK + "/website/home/about-us/regionals-2023.webp",
            alt: t("Carousel.Regionals2023"),
            aspectRatio: "16/9",
            description: t("Carousel.Regionals2023"),
          },
        ]}
        buttonAccentColor="var(--default-yellow)"
        buttonGradientLight="var(--yellow-gradient-light)"
        buttonGradientDark="var(--yellow-gradient-dark)"
      />
    </section>
  );
}
