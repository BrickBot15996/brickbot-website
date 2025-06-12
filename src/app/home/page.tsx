"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import useEmblaCarousel from "embla-carousel-react";
import SponsorMarquee from "../components/SponsorMarquee";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <Banner />
      <section className="flex flex-col space-y-[4rem] mt-[4rem] md:mt-[6rem] lg:mt-[8rem] w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100vw-6rem)] xl:w-[calc(100vw-8rem)] max-w-[37rem] md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-[72rem] 2xl:max-w-[88rem]">
        <AboutUs />
        <Projects />
        <SponsorMarquee />
      </section>
    </section>
  );
}

function Banner() {
  const router = useRouter();

  return (
    <section className="relative w-full flex flex-col py-[3rem] md:py-[3.5rem] lg:py-[4rem]">
      <div className="relative flex h-[30rem] md:h-[35rem] lg:h-[45rem] w-full">
        <Image
          src="/random.jpg"
          alt="random"
          fill
          priority
          className="object-cover z-1 opacity-90 translate-x-[17.5%] select-none"
        />
        <div className="flex items-center mr-auto h-full w-full bg-[linear-gradient(70deg,_#121212_30%,_transparent)] z-2">
          <div className="flex flex-col z-10  ml-[1.5rem] md:ml-[2rem] lg:ml-[3rem] xl:ml-[4rem] space-y-[2rem]">
            <p className="text-[#ffd100] font-extrabold text-[2.25rem]/[2.85rem] md:text-[2.75rem]/[3.35rem] lg:text-[3rem]/[3.6rem]">
              We build our future
              <br />
              Brick by Brick!
            </p>
            <Button
              text="BECOME A SPONSOR"
              arrow={true}
              accentColor="#ffd100"
              gradientColorLight="#463B08"
              gradientColorDark="#282208"
              action={() => router.push("/support-us")}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.15rem] md:[0.3rem] lg:[0.4rem] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] opacity-50" />
    </section>
  );
}

function AboutUs() {
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
      <h1 className="text-[#ffd100] font-extrabold text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
        About Us
      </h1>
      <p className="text-[1.25rem]/[1.85rem] md:text-[1.5rem]/[2.1rem] xl:text-[1.75rem]/[2.35rem] font-medium text-[#B1B1B1] w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        temporibus molestiae omnis saepe dolorem, dignissimos nobis dolorum
        velit explicabo exercitationem nulla eaque, asperiores eligendi sequi
        molestias quae optio ipsum. Ipsam.
      </p>

      <div className="relative w-full flex flex-col mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem] select-none">
        <div className="absolute left-[calc((-100vw + 37rem)/2)] md:left-[calc((-100vw+44rem)/2)] lg:left-[calc((-100vw+58rem)/2)] xl:left-[calc((-100vw+72rem)/2)] 2xl:left-[calc((-100vw+88rem)/2)] w-[100vw] h-full flex flex-row justify-center">
          <div className="mr-auto w-[calc((100vw-88rem))] h-full bg-[linear-gradient(90deg,_#121212_20%,_transparent)] z-10 pointer-events-none" />
          <div className="ml-auto w-[calc((100vw-88rem))] h-full bg-[linear-gradient(270deg,_#121212_20%,_transparent)] z-10 pointer-events-none" />
        </div>
        <div
          className="embla overflow-visible"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_#ffffff12,_#58585812)] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_#ffffff12,_#58585812)] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_#ffffff12,_#58585812)] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_#ffffff12,_#58585812)] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9 mr-[1.5rem]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/random.jpg"
                  alt="BrickBot at event 1"
                  fill
                  className="object-cover rounded-[0.8rem] contain-content"
                />
              </div>
            </div>
            <div className="embla__slide flex-[0_0_clamp(0rem,_calc(calc(100vw-3rem)),_25rem)] md:flex-[0_0_30rem] lg:flex-[0_0_35rem] xl:flex-[0_0_40rem] bg-[linear-gradient(180deg,_#ffffff12,_#58585812)] rounded-[1rem] p-[0.25rem] relative h-auto aspect-16/9">
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
          className="bg-[linear-gradient(180deg,_#ffd10055,_#ffd10035)] hover:bg-[linear-gradient(180deg,_#ffd1006f,_#ffd1004f)] w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] border-[#ffd100] flex flex-col justify-center transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous slide"
          style={{
            filter: isBeginning ? "brightness(0.75)" : undefined,
            background: isBeginning
              ? "linear-gradient(180deg,#ffd10055,#ffd10035)"
              : undefined,
            cursor: isBeginning ? undefined : "pointer",
          }}
        >
          <HiArrowNarrowLeft className="fill-[#ffd100] h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto" />
        </button>
        <button
          className="bg-[linear-gradient(180deg,_#ffd10055,_#ffd10035)] hover:bg-[linear-gradient(180deg,_#ffd1006f,_#ffd1004f)] w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] border-[#ffd100] flex flex-col justify-center transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next slide"
          style={{
            filter: isEnd ? "brightness(0.75)" : undefined,
            background: isEnd
              ? "linear-gradient(180deg,#ffd10055,#ffd10035)"
              : undefined,
            cursor: isEnd ? undefined : "pointer",
          }}
        >
          <HiArrowNarrowRight className="fill-[#ffd100] h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto" />
        </button>
      </div>
    </section>
  );
}

function Projects() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center space-y-[2rem] w-full h-fit">
      <h1 className="text-[#ffd100] font-extrabold mr-auto text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] mb-[3rem]">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-y-[2rem] md:gap-x-[2rem] w-full">
        <SmallProject
          color="#FFD100"
          name={"Portfolio Library"}
          logoPath="/projects/thevaultlogo1.png"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          description=""
        />
        <SmallProject
          color="#FF6750"
          name={"BrickBot Guide & Documentation"}
          logoPath="/projects/brickdocslogo1.png"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          description=""
        />
        <SmallProject
          color="#9E50FF"
          name={"Connecting FTC Teams"}
          logoPath="/projects/sparkslogo.png"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          description=""
        />
        <SmallProject
          color="#30CAAE"
          name={"Brickbot is Here!"}
          logoPath="/projects/brickbotishere.png"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          description=""
        />
      </div>
      <div className="ml-auto">
        <Button
          text="SEE ALL"
          arrow={false}
          accentColor="#ffd100"
          gradientColorLight="#463B08"
          gradientColorDark="#282208"
          action={() => router.push("/projects")}
        />
      </div>
    </section>
  );
}

type ProjectProps = {
  color: string;
  name: string;
  link: string;
  logoPath: string;
  description: string;
};

function SmallProject({ color, name, logoPath, link }: ProjectProps) {
  return (
    <>
      <Link
        href={link}
        className="group relative rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[17rem] aspect-3/4 w-auto hover:brightness-75 hover:scale-105 active:brightness-100 active:scale-95 transition-transform duration-150 cursor-pointer select-none"
      >
        <div
          className="absolute inset-0 rounded-[1.5rem] z-10"
          style={{
            background: `linear-gradient(180deg, ${color}2F, #0202021B)`,
          }}
        />
        <div className="w-full h-full rounded-[1.3rem] bg-[#121212]">
          <div className="w-full h-full rounded-[1.3rem] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)]">
            <div className="flex items-center justify-center w-full h-[80%]">
              <Image
                src={logoPath}
                alt={name + "Logo"}
                width={275}
                height={275}
                className="object-contain w-[70%] h-auto"
              />
            </div>
            <div className="absolute bottom-[1.2rem] md:bottom-[1rem] lg:bottom-[1rem] xl:bottom-[0.9rem] 2xl:bottom-[0.95rem] left-[1.6rem] w-[70%]">
              <p
                className="font-medium text-[2rem]/[2.25rem] sm:text-[2.5rem]/[2.75rem] md:text-[1.75rem]/[2rem] lg:text-[2.5rem]/[2.75rem] xl:text-[1.5rem]/[1.75rem] 2xl:text-[1.75rem]/[2rem]"
                style={{ color: color }}
              >
                {name}
              </p>
            </div>
            <div className="absolute bottom-[1rem] left-[85%] w-full">
              <HiArrowNarrowRight className="z-[10] mb-[-0.25rem] mr-[-0.5rem] h-auto w-[10%] fill-white" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
