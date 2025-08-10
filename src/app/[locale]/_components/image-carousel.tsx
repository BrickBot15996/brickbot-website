import { useCallback, useState, useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import ArrowButton from "./arrow-button";
import { AnimationWhenInView, opacityFadeIn } from "./animations";
import ExpandableImage from "./expandable-image";

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
};

export default function ImageCarousel({
  content,
  buttonAccentColor,
  buttonGradientLight,
  buttonGradientDark,
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
        <div className="absolute left-[calc((-100vw+var(--page-width))/2)] w-[100vw] h-full flex flex-row justify-center">
          <div className="mr-auto w-[calc((100vw-var(--page-width))/2)] h-full bg-[linear-gradient(90deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
          <div className="ml-auto w-[calc((100vw-var(--page-width))/2)] h-full bg-[linear-gradient(270deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
        </div>
        <div
          className="embla overflow-visible"
          ref={emblaRef}
        >
          <div className="embla__container grid grid-flow-col auto-cols-[clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:auto-cols-[30rem] lg:auto-cols-[35rem] xl:auto-cols-[40rem] gap-x-[var(--sm-space-x)]">
            {content.map((item, index) => {
              return (
                <AnimationWhenInView
                  key={index}
                  variants={opacityFadeIn}
                  className="embla__slide rounded-[1rem] relative flex flex-col"
                  style={{
                    aspectRatio: `${item.aspectRatio}`,
                  }}
                >
                  {/* <div className="bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] w-full h-full p-[0.25rem] rounded-[1rem]"> */}
                  <div className="relative w-full h-full overflow-hidden rounded-[1rem]">
                    <ExpandableImage
                      src={item.imageSrc}
                      alt={item.alt}
                      aspectRatio={item.aspectRatio}
                      buttonProps={{
                        color: buttonAccentColor,
                        gradientLight: buttonGradientLight,
                        gradientDark: buttonGradientDark,
                      }}
                      className="object-cover rounded-[1rem] contain-content"
                    />
                    <div
                      className="absolute inset-0 rounded-[1rem] w-full h-full z-10 pointer-events-none"
                      style={{
                        background: "#6767677F",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "xor",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        padding: "0.1875rem",
                      }}
                    />
                  </div>
                  {/* </div> */}
                  {item.description && (
                    <p
                      className="mt-[var(--sm-space-y)] transition-colors duration-300"
                      style={{
                        color: slidesInView.includes(index)
                          ? "var(--darker-text)"
                          : "var(--default-dark)",
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </AnimationWhenInView>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-[var(--sm-space-x)] mt-[var(--md-space-y)]">
        <ArrowButton
          action={scrollPrev}
          color={`${buttonAccentColor}`}
          gradientLight={`${buttonGradientLight}`}
          gradientDark={`${buttonGradientDark}`}
          arrowDirection="left"
          disabled={isBeginning}
        />
        <ArrowButton
          action={scrollNext}
          color={`${buttonAccentColor}`}
          gradientLight={`${buttonGradientLight}`}
          gradientDark={`${buttonGradientDark}`}
          arrowDirection="right"
          disabled={isEnd}
        />
      </div>
    </section>
  );
}
