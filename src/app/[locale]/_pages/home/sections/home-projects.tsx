"use client";

import { useProjectList } from "@/app/[locale]/_data/projects-data";
import { SmallProjectCard } from "@/app/[locale]/_pages/projects/sections/project-cards";
import {
  AnimationWhenInView,
  defaultFadeIn,
  opacityFadeIn,
} from "@/app/[locale]/_components/animations";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ArrowButton from "@/app/[locale]/_components/arrow-button";
import Button from "@/app/[locale]/_components/brick-button";
import { i18nPath } from "@/app/[locale]/_utils/redirectPath";
import { useLocale } from "@/app/[locale]/_hooks/use-locale";
import { useRouter } from "next/navigation";

export default function Projects() {
  const t = useTranslations("Home.Projects");
  const projectList = useProjectList();
  const locale = useLocale();
  const router = useRouter();
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

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setIsEnd(!emblaApi.canScrollNext());
      setIsBeginning(!emblaApi.canScrollPrev());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="flex flex-col items-center justify-center w-full h-fit">
      <h2 className="mr-auto mb-[var(--xl-space-y)]">{t("title")}</h2>
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 items-center lg:px-[var(--xl-space-x)] xl:px-0 gap-y-[var(--lg-space-y)] gap-x-[var(--lg-space-x)] xl:gap-x-[var(--md-space-x)] mb-[var(--xl-space-y)] w-full">
        {projectList.slice(0, 4).map((project, index) => {
          return (
            <AnimationWhenInView
              key={index}
              variants={defaultFadeIn}
            >
              <SmallProjectCard project={project} />
            </AnimationWhenInView>
          );
        })}
      </div>
      <div className="ml-auto hidden lg:inline">
        <Button
          text={t("buttonText")}
          action={() => {
            router.push(i18nPath(locale, "projects"));
          }}
        />
      </div>
      <div className="relative w-full flex lg:hidden flex-col">
        <div className="absolute left-[calc((-100vw+var(--page-width))/2)] w-[100vw] h-full flex flex-row justify-center">
          <div className="mr-auto w-[calc((100vw-var(--page-width))/2)] h-full bg-[linear-gradient(90deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
          <div className="ml-auto w-[calc((100vw-var(--page-width))/2)] h-full bg-[linear-gradient(270deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
        </div>
        <div
          className="embla overflow-visible"
          ref={emblaRef}
        >
          <div className="embla__container grid grid-flow-col auto-cols-[clamp(0rem,_calc(calc(100vw-3rem)),_20rem)] md:auto-cols-[22rem] lg:auto-cols-[24rem] xl:auto-cols-[28rem] gap-x-[var(--sm-space-x)] items-stretch">
            {projectList.slice(0, 5).map((project, index) => {
              return (
                <AnimationWhenInView
                  key={index}
                  variants={opacityFadeIn}
                >
                  <SmallProjectCard project={project} />
                </AnimationWhenInView>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex lg:hidden flex-row items-end justify-between gap-x-[var(--sm-space-x)] mt-[var(--lg-space-y)] w-full">
        <ArrowButton
          action={scrollPrev}
          arrowDirection="left"
          disabled={isBeginning}
          className="ml-auto"
        />
        <ArrowButton
          action={scrollNext}
          arrowDirection="right"
          disabled={isEnd}
        />
      </div>
    </section>
  );
}
