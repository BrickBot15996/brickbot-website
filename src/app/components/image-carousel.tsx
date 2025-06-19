import { useCallback, useState, useEffect } from "react";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import ArrowButton from "./arrow-button";

export type CarouselItem = {
  imageSrc: string;
  alt: string;
  aspectRatio: string;
  description?: string;
};

type CarouselProps = {
  content: CarouselItem[];
  buttonAccentColor: string;
  buttonGradientLight: string;
  buttonGradientDark: string;
  buttonLitUpLight: string;
  buttonLitUpDark: string;
};

export default function ImageCarousel({
  content,
  buttonAccentColor,
  buttonGradientLight,
  buttonGradientDark,
  buttonLitUpLight,
  buttonLitUpDark,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
    skipSnaps: false,
    inViewThreshold: 0.7,
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

  return (
    <section className="select-none">
      <div className="relative w-full flex flex-col select-none">
        <div className="absolute left-[calc((-100vw+37rem)/2)] md:left-[calc((-100vw+44rem)/2)] lg:left-[calc((-100vw+58rem)/2)] xl:left-[calc((-100vw+72rem)/2)] 2xl:left-[calc((-100vw+88rem)/2)] w-[100vw] h-full flex flex-row justify-center">
          <div className="mr-auto w-[calc((100vw-37rem)/2)] md:w-[calc((100vw-44rem)/2)] lg:w-[calc((100vw-58rem)/2)] xl:w-[calc((100vw-72rem)/2)] 2xl:w-[calc((100vw-88rem)/2)] h-full bg-[linear-gradient(90deg,_var(--default-dark)_20%,_transparent)] z-100 pointer-events-none" />
          <div className="ml-auto w-[calc((100vw-37rem)/2)] md:w-[calc((100vw-44rem)/2)] lg:w-[calc((100vw-58rem)/2)] xl:w-[calc((100vw-72rem)/2)] 2xl:w-[calc((100vw-88rem)/2)]  h-full bg-[linear-gradient(270deg,_var(--default-dark)_20%,_transparent)] z-100 pointer-events-none" />
        </div>
        <div
          className="embla overflow-visible"
          ref={emblaRef}
        >
          <div className="embla__container grid grid-flow-col auto-cols-[clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:auto-cols-[30rem] lg:auto-cols-[35rem] xl:auto-cols-[40rem] gap-x-[1.5rem]">
            {content.map((item, index) => {
              return (
                <div
                  key={index}
                  className="embla__slide rounded-[1rem] relative flex flex-col"
                  style={{
                    aspectRatio: `${item.aspectRatio}`,
                  }}
                >
                  <div className="bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] w-full h-full p-[0.25rem] rounded-[1rem]">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        fill
                        priority
                        className="object-cover rounded-[0.75rem] contain-content"
                      />
                    </div>
                  </div>
                  {item.description && (
                    <p
                      className="text-[1.25rem]/[1.85rem] md:text-[1.5rem]/[2.1rem] xl:text-[1.75rem]/[2.35rem] font-medium mt-[0.6rem] lg:mt-[1rem] ml-[0.25rem] transition-colors duration-300"
                      style={{
                        color: slidesInView.includes(index)
                          ? "var(--darker-text)"
                          : "var(--default-dark)",
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-[1rem] mt-[1.25rem] md:mt-[1.5rem] lg:mt-[2rem]">
        <ArrowButton
          action={scrollPrev}
          ariaLabel="Previous slide button"
          color={`${buttonAccentColor}`}
          gradientLight={`${buttonGradientLight}`}
          gradientDark={`${buttonGradientDark}`}
          litUpGradientLight={`${buttonLitUpLight}`}
          litUpGradientDark={`${buttonLitUpDark}`}
          arrowDirection="left"
          disabled={isBeginning}
          style={{
            borderColor: buttonAccentColor,
          }}
        />
        <ArrowButton
          action={scrollNext}
          ariaLabel="Next slide button"
          color={`${buttonAccentColor}`}
          gradientLight={`${buttonGradientLight}`}
          gradientDark={`${buttonGradientDark}`}
          litUpGradientLight={`${buttonLitUpLight}`}
          litUpGradientDark={`${buttonLitUpDark}`}
          arrowDirection="right"
          disabled={isEnd}
          style={{
            borderColor: buttonAccentColor,
          }}
        />
      </div>
    </section>
  );
}
