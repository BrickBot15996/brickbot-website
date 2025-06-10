"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import useEmblaCarousel from "embla-carousel-react";
import SponsorMarquee from "../components/SponsorMarquee";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <section className="flex flex-col items-center">
      <Banner />
      <section className="flex flex-col space-y-[2rem] w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] lg:w-[calc(100cw-6rem)] xl:w-[calc(100vw-8rem)] max-w-[37rem] md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-[72rem] 2xl:max-w-[88rem]">
        <NewAboutUs />
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
        <div className="flex items-center mr-auto h-full w-full bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-2">
          <div className="flex flex-col z-10  ml-[1.5rem] md:ml-[2rem] lg:ml-[3rem] xl:ml-[4rem] space-y-[1rem]">
            <p className="text-[#ffd100] font-extrabold text-[2rem]/[2.5rem] md:text-[2.5rem]/[3rem] lg:text-[2.75rem]/[3.25rem]">
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

function NewAboutUs() {
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

  return (
    <section className="flex flex-col h-auto w-full space-y-[2rem]">
      <h1 className="text-[#ffd100] font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[2.75rem]">
        About Us
      </h1>
      <p className="text-[1.25rem]/[1.75rem] md:text-[1.5rem]/[2rem] font-medium text-[#ffffff] w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        temporibus molestiae omnis saepe dolorem, dignissimos nobis dolorum
        velit explicabo exercitationem nulla eaque, asperiores eligendi sequi
        molestias quae optio ipsum. Ipsam. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Atque sed eaque unde placeat nesciunt
        distinctio sit quis fugiat minima? Totam temporibus eius quisquam id
        eaque. Similique aut repellendus alias sunt.
      </p>
      <div className="relative w-screen flex flex-col">
        <div
          className="embla overflow-visible"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 relative h-[20rem] md:h-[25rem] lg:h-[30rem] mr-[1.5rem]">
              <Image
                src="/random.jpg"
                alt="BrickBot at event 1"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
            <div className="embla__slide flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 relative h-[20rem] md:h-[25rem] lg:h-[30rem] mr-[1.5rem]">
              <Image
                src="/random.jpg"
                alt="BrickBot at event 2"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
            <div className="embla__slide flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 relative h-[20rem] md:h-[25rem] lg:h-[30rem] mr-[1.5rem]">
              <Image
                src="/random.jpg"
                alt="BrickBot at event 3"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
            <div className="embla__slide flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 relative h-[20rem] md:h-[25rem] lg:h-[30rem] mr-[1.5rem]">
              <Image
                src="/random.jpg"
                alt="BrickBot at event 4"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
            <div className="embla__slide flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 relative h-[20rem] md:h-[25rem] lg:h-[30rem] mr-[1.5rem]">
              <Image
                src="/random.jpg"
                alt="BrickBot at event 5"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
            <div className="embla__slide flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_35%] min-w-0 relative h-[20rem] md:h-[25rem] lg:h-[30rem] mr-[1.5rem]">
              <Image
                src="/random.jpg"
                alt="BrickBot at event 6"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-auto">
        <button
          className="bg-[rgba(255,209,0,0.9)] hover:bg-[#ffd100] active:bg-[#cc9900] text-[#121212] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center font-bold text-[1rem] cursor-pointer transition-all duration-200 shadow-lg backdrop-blur-sm"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          className="bg-[rgba(255,209,0,0.9)] hover:bg-[#ffd100] active:bg-[#cc9900] text-[#121212] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center font-bold text-[1rem] cursor-pointer transition-all duration-200 shadow-lg backdrop-blur-sm"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="flex flex-col items-stretch justify-center h-auto w-full py-[2.5rem] md:py-[3rem] lg:py-[3.25rem] space-y-[1.5rem] md:space-y-[2rem]">
      <h1 className="text-[#ffd100] font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[2.75rem]">
        About Us
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch gap-[1rem] xl:gap-[5rem] 2xl:gap-[7rem]">
        <div className="rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[15rem] w-auto">
          <div className="h-full rounded-[1.3rem] bg-[#0a0a0a]">
            <div className="h-full rounded-[1.3rem] bg-[linear-gradient(180deg,_#6363631F,_#0202021F)] px-[1.5rem] py-[1rem]">
              <p className="text-[1.25rem]/[1.75rem] md:text-[1.5rem]/[2rem] font-medium text-[#ffffff]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium consequuntur unde provident minus iure atque sunt
                tenetur iste qui. Quibusdam officiis est voluptatum ullam at
                reprehenderit accusantium quam illo minus. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti nulla eum
                quisquam repellendus, aperiam, maiores distinctio fuga inventore
                animi incidunt id quasi facere explicabo, officiis voluptas
                dolor. Sapiente, repellat reprehenderit.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[15rem] w-auto select-none">
          <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden">
            <Image
              src="/random.jpg"
              alt="random"
              fill
              className="object-cover relative w-full h-full rounded-[1.3rem] overflow-hidden"
            />
          </div>
        </div>
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
