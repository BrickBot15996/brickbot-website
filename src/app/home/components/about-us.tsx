import { useCallback, useState, useEffect } from "react";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

export default function AboutUs() {
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
    <section className="flex flex-col h-auto w-full space-y-[0.5rem]">
      <h1 className="text-[var(--default-yellow)] font-extrabold text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
        About Us
      </h1>
      <p className="text-[1.25rem]/[1.85rem] md:text-[1.5rem]/[2.1rem] xl:text-[1.75rem]/[2.35rem] font-medium text-[var(--default-text)] w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        temporibus molestiae omnis saepe dolorem, dignissimos nobis dolorum
        velit explicabo exercitationem nulla eaque, asperiores eligendi sequi
        molestias quae optio ipsum. Ipsam.
      </p>

      <div className="relative w-full flex flex-col mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] select-none">
        <div className="absolute left-[calc((-100vw + 37rem)/2)] md:left-[calc((-100vw+44rem)/2)] lg:left-[calc((-100vw+58rem)/2)] xl:left-[calc((-100vw+72rem)/2)] 2xl:left-[calc((-100vw+88rem)/2)] w-[100vw] h-full flex flex-row justify-center">
          <div className="mr-auto w-[calc((100vw-88rem))] h-full bg-[linear-gradient(90deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
          <div className="ml-auto w-[calc((100vw-88rem))] h-full bg-[linear-gradient(270deg,_var(--default-dark)_20%,_transparent)] z-10 pointer-events-none" />
        </div>
        <div
          className="embla overflow-visible"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-auto space-x-[1rem] mt-[1.25rem] md:mt-[1.5rem] lg:mt-[2rem]">
        <button
          className="bg-[linear-gradient(180deg,_var(--yellow-gradient-light),_var(--yellow-gradient-dark))] hover:bg-[linear-gradient(180deg,_var(--lit-up-yellow-gradient-light),_var(--lit-up-yellow-gradient-dark))] w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] border-[var(--default-yellow)] flex flex-col justify-center transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous slide"
          style={{
            filter: isBeginning ? "brightness(0.75)" : undefined,
            background: isBeginning
              ? `linear-gradient(180deg, var(--yellow-gradient-light), var(--yellow-gradient-dark))`
              : undefined,
            cursor: isBeginning ? undefined : "pointer",
          }}
        >
          <HiArrowNarrowLeft className="fill-[var(--default-yellow)] h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto" />
        </button>
        <button
          className="bg-[linear-gradient(180deg,_var(--yellow-gradient-light),_var(--yellow-gradient-dark))] hover:bg-[linear-gradient(180deg,_var(--lit-up-yellow-gradient-light),_var(--lit-up-yellow-gradient-dark))] w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] border-[var(--default-yellow)] flex flex-col justify-center transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next slide"
          style={{
            filter: isEnd ? "brightness(0.75)" : undefined,
            background: isEnd
              ? `linear-gradient(180deg, var(--yellow-gradient-light), var(--yellow-gradient-dark))`
              : undefined,
            cursor: isEnd ? undefined : "pointer",
          }}
        >
          <HiArrowNarrowRight className="fill-[var(--default-yellow)] h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto" />
        </button>
      </div>
    </section>
  );
}
