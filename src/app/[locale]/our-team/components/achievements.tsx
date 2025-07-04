import { useCallback, useState, useEffect } from "react";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import Box from "../../components/brick-box";
import ArrowButton from "../../components/arrow-button";
import { SeasonProps, useSeasonList } from "../seasons-data";
import { useTranslations } from "next-intl";

export default function Achievements() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
    skipSnaps: false,
    inViewThreshold: 0.5,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);
  const t = useTranslations("OurTeam.Achievements");

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setIsEnd(!emblaApi.canScrollNext());
      setIsBeginning(!emblaApi.canScrollPrev());
      setSlidesInView(emblaApi.slidesInView());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("slidesInView", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("slidesInView", onSelect);
    };
  }, [emblaApi]);

  const seasonList = useSeasonList();

  return (
    <section>
      <h2 className="mb-[var(--xl-space-y)]">{t("title")}</h2>
      <section className="select-none">
        <div className="relative w-full flex flex-col">
          <div className="absolute left-[calc((-100vw+var(--page-width))/2)] w-[100vw] h-full flex flex-row justify-center">
            <div className="mr-auto w-[calc((100vw-var(--page-width))/2)] h-full bg-[linear-gradient(90deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
            <div className="ml-auto w-[calc((100vw-var(--page-width))/2)] h-full bg-[linear-gradient(270deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
          </div>
          <div
            className="embla overflow-visible"
            ref={emblaRef}
          >
            <div className="embla__container grid grid-flow-col auto-cols-[clamp(0rem,_calc(calc(100vw-3rem)),_20rem)] md:auto-cols-[22rem] lg:auto-cols-[24rem] xl:auto-cols-[28rem] gap-x-[var(--sm-space-x)] items-stretch">
              {seasonList.map((season, index) => {
                return (
                  <div
                    key={index}
                    className="h-full flex flex-col"
                  >
                    <SeasonAchievements
                      season={season}
                      className="embla__slide"
                      hideDescription={!slidesInView.includes(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end space-x-[var(--sm-space-x)] mt-[var(--md-space-y)]">
          <ArrowButton
            action={scrollPrev}
            arrowDirection="left"
            disabled={isBeginning}
          />
          <ArrowButton
            action={scrollNext}
            arrowDirection="right"
            disabled={isEnd}
          />
        </div>
      </section>
    </section>
  );
}

type SeasonBoxProps = {
  season: SeasonProps;
  className: string;
  hideDescription: boolean;
};

function SeasonAchievements({
  season,
  className,
  hideDescription,
}: SeasonBoxProps) {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      <Box
        className={`flex flex-col items-center h-full w-full ${className}`}
        color={season.gradientColor}
        gradient={true}
      >
        <div className="relative h-[4.5rem] md:h-[6.5rem] lg:h-[7rem] xl:h-[8rem] w-full overflow-hidden flex flex-col items-center justify-center my-[var(--md-space-y)]">
          <Image
            src={season.logoPath}
            alt={season.name + " season logo"}
            width={200}
            height={200}
            className="h-auto w-auto max-h-[100%] max-w-[55%] object-cover content-contain"
          />
        </div>
        {season.awards.map((award, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h5 className="text-[var(--alternate-text)]">{award.event}</h5>
              <h6
                style={{
                  color: season.textColor,
                  paddingBottom:
                    index == season.awards.length - 1
                      ? "var(--md-space-y)"
                      : "0rem",
                }}
              >
                {award.awardName}
              </h6>
              {index != season.awards.length - 1 && <SeparatorGradient />}
            </div>
          );
        })}
      </Box>
      <h3
        className="mt-[var(--md-space-y)] mr-auto transition-opacity duration-300"
        style={{
          opacity: hideDescription ? "0" : "1.0",
          color: season.textColor,
          fontWeight: 800,
        }}
      >
        {season.name.toUpperCase()} ({season.years})
      </h3>
    </div>
  );
}

function SeparatorGradient() {
  return (
    <div className="bg-[linear-gradient(90deg,_var(--default-dark),_#ffffff,_var(--default-dark))] opacity-50 w-[11rem] md:w-[16rem] lg:w-[18rem] xl:w-[20rem] h-[0.075rem] my-[var(--sm-space-y)]" />
  );
}
