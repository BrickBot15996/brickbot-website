"use client";

import React, { useCallback, useState, useEffect } from "react";
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
        <div className="flex items-center mr-auto h-full w-full bg-[linear-gradient(70deg,_#0a0a0a_30%,_transparent)] z-2">
          <div className="flex flex-col z-10  ml-[1.5rem] md:ml-[2rem] lg:ml-[3rem] xl:ml-[4rem] space-y-[1rem]">
            <p className="text-[#ffd100] font-extrabold text-[2.25rem]/[2.85rem] md:text-[2.75rem]/[3.35rem] lg:text-[3rem]/[3.6rem]">
              We build our future
              <br />
              Brick by Brick!
            </p>
            <Link href="/support-us">
              <Button
                text="BECOME A SPONSOR"
                arrow={true}
                color="#ffd100"
              />
            </Link>
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
          <div className="mr-auto w-[calc((100vw-88rem))] h-full bg-[linear-gradient(90deg,_#0a0a0a_20%,_transparent)] z-10" />
          <div className="ml-auto w-[calc((100vw-88rem))] h-full bg-[linear-gradient(270deg,_#0a0a0a_20%,_transparent)] z-10" />
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
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-auto space-x-[1rem] mt-[1.25rem] md:mt-[1.5rem] lg:mt-[2rem]">
        <button
          className="bg-[linear-gradient(180deg,_#ffd10055,_#ffd10035)] w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] border-[#ffd100] flex flex-col justify-center cursor-pointer transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous slide"
          style={{ filter: isBeginning ? "brightness(0.75)" : "brightness(1)" }}
        >
          <HiArrowNarrowLeft className="fill-[#ffd100] h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto" />
        </button>
        <button
          className="bg-[linear-gradient(180deg,_#ffd10055,_#ffd10035)] w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] rounded-full border-[0.1rem] md:border-[0.15rem] lg:border-[0.2rem] border-[#ffd100] flex flex-col justify-center cursor-pointer transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next slide"
          style={{ filter: isEnd ? "brightness(0.75)" : "brightness(1)" }}
        >
          <HiArrowNarrowRight className="fill-[#ffd100] h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] w-auto" />
        </button>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="flex flex-col justify-center min-h-[15rem] h-auto w-full px-[1.5rem] md:px-[3rem] lg:px-[5rem] py-[2.5rem] md:py-[3rem] lg:py-[3.25rem] space-y-[1.5rem] md:space-y-[2rem]">
      <h1 className="text-[#ffd100] font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[2.75rem]">
        Projects
      </h1>
      <LargeProject
        color="#ADFF50"
        name="SimplicityFTC"
        logoPath="/projects/simplicityftclogo1.png"
        link="https://simplicityftc.github.io/SimplicityFTC-Docs/"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas expedita nostrum dolore minima nulla aperiam totam. Id excepturi repudiandae, dolores enim aspernatur tenetur libero debitis voluptatibus facilis, ea natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium fuga deleniti? Architecto temporibus voluptates possimus rerum vero ducimus suscipit praesentium sed? Id rem saepe dicta eligendi molestiae odit a."
        }
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch gap-y-[2rem] xl:gap-x-[5rem] 2xl:gap-x-[7rem] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-y-[2rem] sm:gap-x-[5rem] 2xl:gap-x-[7rem] w-full">
          <SmallProject
            color="#FFD100"
            name={"Portfolio\nLibrary"}
            logoPath="/projects/thevaultlogo1.png"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            description=""
          />
          <SmallProject
            color="#FF6750"
            name={"BrickBot Guide &\nDocumentation"}
            logoPath="/projects/brickdocslogo1.png"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            description=""
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-y-[2rem] sm:gap-[5rem] 2xl:gap-[7rem] w-full">
          <SmallProject
            color="#9E50FF"
            name={"Connecting\nFTC Teams"}
            logoPath="/projects/sparkslogo.png"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            description=""
          />
          <SmallProject
            color="#50FF9C"
            name={"Caravana\nBrickBot"}
            logoPath="/projects/caravanabrick1.png"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            description=""
          />
        </div>
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
        className="relative rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] h-[17rem] md:h-[20rem] 2xl:h-[25rem] w-auto hover:opacity-75 hover:scale-105 active:opacity-100 active:scale-95 transition-transform duration-150 cursor-pointer select-none"
      >
        <div
          className="absolute inset-0 rounded-[1.5rem] z-10"
          style={{
            background: `linear-gradient(180deg, ${color}2F, #0202021B)`,
          }}
        />
        <div className="w-full h-full rounded-[1.3rem] bg-[#0a0a0a]">
          <div className="w-full h-full rounded-[1.3rem] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)]">
            <div className="flex items-center justify-center w-full h-[75%]">
              <Image
                src={logoPath}
                alt={name + "Logo"}
                width={275}
                height={275}
                className="object-contain scale-75"
              />
            </div>
            <div className="absolute bottom-[1.2rem] left-[1.6rem] w-[65%]">
              <p
                className="font-medium text-[1.25rem]/[1.5rem] md:text-[1.5rem]/[1.75rem] 2xl:text-[1.75rem]/[2rem]"
                style={{ color: color }}
              >
                {name}
              </p>
            </div>
            <div className="absolute bottom-[1rem] right-[1.5rem]">
              <HiArrowNarrowRight className="z-[10] inline mb-[-0.25rem] mr-[-0.5rem] xl:h-[1.5rem] 2xl:h-[2rem] w-auto fill-white" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

function LargeProject({
  color,
  name,
  description,
  logoPath,
  link,
}: ProjectProps) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-[1rem] xl:gap-[5rem] 2xl:gap-[7rem]">
      <Link
        href={link}
        className="relative rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[15rem] w-auto hover:opacity-75 hover:scale-103 active:opacity-100 active:scale-97 transition-transform duration-150 cursor-pointer select-none overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-[1.5rem] z-10"
          style={{
            background: `linear-gradient(180deg, ${color}2F, #0202021B)`,
          }}
        />

        <div className="relative h-full rounded-[1.3rem] bg-[#0a0a0a]">
          <div className="h-full rounded-[1.3rem] bg-[linear-gradient(180deg,_#6363631F,_#0202021F)]">
            <div className="relative flex flex-col items-center h-full w-full z-20">
              <Image
                src={logoPath}
                alt={name + "Logo"}
                width={275}
                height={275}
                className="mt-auto mb-auto h-[3rem] md:h-[3.5rem] xl:h-[3rem] 2xl:h-[3.5rem] w-auto mx-[1.5rem] my-[1rem]"
              />
            </div>
            <div className="absolute bottom-[0.5rem] right-[0.5rem]">
              <div className="relative h-auto w-auto p-[0.2rem] bg-[linear-gradient(180deg,_#FFA5A5,_#EC7171)] rounded-full">
                <div className="relative h-full w-full bg-[#4B1717] rounded-full px-[1.2rem]">
                  <p className="font-semibold text-[0.8rem] md:text-[1.2rem] xl:text-[1rem] text-[#FFBEBE]">
                    New
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[15rem] w-auto">
        <div className="h-full rounded-[1.3rem] bg-[#0a0a0a]">
          <div className="h-full rounded-[1.3rem] bg-[linear-gradient(180deg,_#6363631F,_#0202021F)] px-[1.5rem] py-[1rem]">
            <h1
              className="font-semibold text-[2rem] mb-[0.5rem]"
              style={{ color: color }}
            >
              {name}
            </h1>
            <p className="text-[1.25rem]/[1.75rem] md:text-[1.5rem]/[2rem] font-medium text-[#ffffff] pb-[1vh]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
