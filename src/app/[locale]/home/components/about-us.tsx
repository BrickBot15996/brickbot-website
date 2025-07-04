import Link from "next/link";

import ImageCarousel from "../../components/image-carousel";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("Home.AboutUs");
  return (
    <section className="flex flex-col h-auto w-full">
      <h2 className="mb-[var(--md-space-y)]">{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--xl-space-y)]">
        {t.rich("text", {
          cnu: (chunks) => (
            <Link
              href="https://maps.app.goo.gl/dDSZJpAszXq8b3nJA"
              target="_blank"
              className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
            >
              {chunks}
            </Link>
          ),
          ftc: (chunks) => (
            <Link
              href="https://www.firstinspires.org/robotics/ftc"
              target="_blank"
              className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
      <ImageCarousel
        content={[
          {
            imageSrc: "/about-us/caravan-2025.webp",
            alt: t("Carousel.Caravan2025"),
            aspectRatio: "16/9",
            description: t("Carousel.Caravan2025"),
          },
          {
            imageSrc: "/about-us/italy-2025.webp",
            alt: t("Carousel.Italy2025"),
            aspectRatio: "16/9",
            description: t("Carousel.Italy2025"),
          },
          {
            imageSrc: "/about-us/regionals-2025.webp",
            alt: t("Carousel.Regionals2025"),
            aspectRatio: "16/9",
            description: t("Carousel.Regionals2025"),
          },
          {
            imageSrc: "/about-us/focsani-meet-2025.webp",
            alt: t("Carousel.FocsaniMeet2025"),
            aspectRatio: "16/9",
            description: t("Carousel.FocsaniMeet2025"),
          },
          {
            imageSrc: "/about-us/btc-2024.webp",
            alt: t("Carousel.BTC2024"),
            aspectRatio: "16/9",
            description: t("Carousel.BTC2024"),
          },
          {
            imageSrc: "/about-us/regionals-2023.webp",
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
