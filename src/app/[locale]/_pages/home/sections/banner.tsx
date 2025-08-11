"use client";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { Fade } from "react-slideshow-image";
import Button from "@/app/[locale]/_components/brick-button";
import LoadFadeImage from "@/app/[locale]/_components/fade-in-on-load-image";

export default function Banner() {
  const t = useTranslations("Home");

  const bannerImages = [
    {
      src: "/assets/home/about-us/sparkhope-2025.webp",
      alt: t("AboutUs.Carousel.SparkHope2025"),
    },
    {
      src: "/assets/home/about-us/italy-2025.webp",
      alt: t("AboutUs.Carousel.Italy2025"),
    },
    {
      src: "/assets/home/about-us/regionals-2025.webp",
      alt: t("AboutUs.Carousel.Regionals2025"),
    },
    {
      src: "/assets/home/about-us/focsani-meet-2025.webp",
      alt: t("AboutUs.Carousel.FocsaniMeet2025"),
    },
    {
      src: "/assets/home/about-us/btc-2024.webp",
      alt: t("AboutUs.Carousel.BTC2024"),
    },
    {
      src: "/assets/home/about-us/regionals-2023.webp",
      alt: t("AboutUs.Carousel.Regionals2023"),
    },
  ];

  return (
    <section className="relative w-full h-[30rem] md:h-[40rem] lg:h-[calc(100vh-var(--navbar-height))]">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(0deg,_var(--default-dark)_5%,_transparent)] z-2" />
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-3">
        <div className="relative h-[5rem] w-[30rem] md:h-[7rem] md:w-[40rem] lg:h-[10rem] lg:w-[50rem] max-w-[80vw] mb-[var(--2xl-space-y)]">
          <Image
            src="/assets/banner-text.svg"
            alt="We build our future brick by brick!"
            fill
            priority
            fetchPriority="high"
            className="object-contain select-none opacity-100 h-full w-full"
          />
        </div>
        <Button
          text={t("Banner.buttonText")}
          arrow={true}
          path={"supportUs"}
          className="px-[1.35rem] md:px-[1.55rem] lg:px-[1.75rem]"
        />
      </div>
      <div className="slide-container w-full h-full z-1">
        <Fade
          duration={5000}
          transitionDuration={500}
          infinite={true}
          arrows={false}
        >
          {bannerImages.map((image, index) => {
            return (
              <div
                key={image.alt}
                className="relative w-full h-[30rem] md:h-[40rem] lg:h-[calc(100vh-var(--navbar-height))]"
              >
                <LoadFadeImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "low"}
                  className="object-cover w-full h-full opacity-25"
                />
              </div>
            );
          })}
        </Fade>
      </div>
    </section>
  );
}
