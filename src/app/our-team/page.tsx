"use client";

import { useCallback, useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import ImageCarousel from "../components/image-carousel";
import Box from "../components/brick-box";
import ArrowButton from "../components/arrow-button";
import PageTitle from "../components/page-title";
import Button from "../components/brick-button";
import { useRouter } from "next/navigation";

export default function OurTeam() {
  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-col w-[var(--page-width)] space-y-[var(--2xl-space-y)]">
        <PageTitle title="OUR TEAM" />
        <Introduction />
        <Achievements />
        <JoinBrickBot />
      </section>
    </section>
  );
}

function Introduction() {
  return (
    <section>
      <h2 className="mb-[var(--md-space-y)]">Introduction</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--xl-space-y)]">
        We are team #15996, BrickBot, from{" "}
        <Link
          href="https://maps.app.goo.gl/dDSZJpAszXq8b3nJA"
          target="_blank"
          className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
        >
          “Unirea” National College, Focșani, Romania
        </Link>
        . Since 2016, we have taken part in the{" "}
        <Link
          href="https://www.firstinspires.org/robotics/ftc"
          target="_blank"
          className="text-[var(--alternate-text)] hover:text-[var(--default-yellow)]"
        >
          FIRST Tech Challenge
        </Link>
        , working hard to build competitive robots. We are passionate about
        promoting STEAM education and creating opportunities for learning and
        growth in both our local community and the wider FTC network.
      </p>
      <ImageCarousel
        content={[
          {
            imageSrc: "/our-team/brickbot-into-the-deep.webp",
            alt: "BrickBot 2024-25 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2024-25",
          },
          {
            imageSrc: "/our-team/brickbot-powerplay.webp",
            alt: "BrickBot 2022-23 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2022-23",
          },
          {
            imageSrc: "/our-team/brickbot-freight-frenzy.webp",
            alt: "BrickBot 2021-22 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2021-22",
          },
          {
            imageSrc: "/our-team/brickbot-ultimate-goal.webp",
            alt: "BrickBot 2020-21 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2020-21",
          },
          {
            imageSrc: "/our-team/brickbot-skystone.webp",
            alt: "BrickBot 2019-20 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2019-20",
          },
          {
            imageSrc: "/our-team/brickbot-rover-ruckus.webp",
            alt: "BrickBot 2018-19 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2018-19",
          },
          {
            imageSrc: "/our-team/brickbot-relic-recovery.webp",
            alt: "BrickBot 2017-18 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2017-18",
          },
          {
            imageSrc: "/our-team/brickbot-velocity-vortex.webp",
            alt: "BrickBot 2016-17 Group Picture",
            aspectRatio: "16/9",
            description: "BrickBot in 2016-17",
          },
        ]}
        buttonAccentColor="var(--default-yellow)"
        buttonGradientLight="var(--yellow-gradient-light)"
        buttonGradientDark="var(--yellow-gradient-dark)"
        buttonLitUpLight="var(--lit-up-yellow-gradient-light)"
        buttonLitUpDark="var(--lit-up-yellow-gradient-dark)"
      />
    </section>
  );
}

function Achievements() {
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
    <section>
      <h2 className="mb-[var(--xl-space-y)]">Achievements</h2>
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
              {seasons.map((season, index) => {
                return (
                  <div
                    key={index}
                    className="h-full flex flex-col"
                  >
                    <SeasonAchievements
                      name={season.name}
                      years={season.years}
                      textColor={season.textColor}
                      gradientColor={season.gradientColor}
                      logoPath={season.logoPath}
                      awards={season.awards}
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
            ariaLabel="Previous slide button"
            color="var(--default-yellow)"
            gradientLight="var(--yellow-gradient-light)"
            gradientDark="var(--yellow-gradient-dark)"
            litUpGradientLight="var(--lit-up-yellow-gradient-light)"
            litUpGradientDark="var(--lit-up-yellow-gradient-dark)"
            arrowDirection="left"
            disabled={isBeginning}
          />
          <ArrowButton
            action={scrollNext}
            ariaLabel="Next slide button"
            color="var(--default-yellow)"
            gradientLight="var(--yellow-gradient-light)"
            gradientDark="var(--yellow-gradient-dark)"
            litUpGradientLight="var(--lit-up-yellow-gradient-light)"
            litUpGradientDark="var(--lit-up-yellow-gradient-dark)"
            arrowDirection="right"
            disabled={isEnd}
          />
        </div>
      </section>
    </section>
  );
}

const seasons: SeasonAchievementsProps[] = [
  {
    name: "Decode",
    years: "2025-2026",
    textColor: "var(--default-yellow)",
    gradientColor: "var(--default-yellow)",
    logoPath: "/seasons/decode-logo.png",
    awards: [
      {
        event: "Season starting on",
        awardName: "September 6th 2025",
      },
    ],
  },
  {
    name: "Into The Deep",
    years: "2024-2025",
    textColor: "var(--into-the-deep-text)",
    gradientColor: "var(--into-the-deep-gradient)",
    logoPath: "/seasons/into-the-deep-logo.webp",
    awards: [
      {
        event: "Romania East Championship",
        awardName: "Motivate Award 2nd Place",
      },
      { event: "Italy Championship", awardName: "Innovate Award 2nd Place" },
    ],
  },
  {
    name: "Centerstage",
    years: "2023-2024",
    textColor: "var(--centerstage-text)",
    gradientColor: "var(--centerstage-gradient)",
    logoPath: "/seasons/centerstage-logo.png",
    awards: [
      {
        event: "Romania East Championship",
        awardName: "Think Award 3rd Place",
      },
      { event: "Bucharest Twin Cup", awardName: "8th Place" },
    ],
  },
  {
    name: "PowerPlay",
    years: "2022-2023",
    textColor: "var(--powerplay-text)",
    gradientColor: "var(--powerplay-gradient)",
    logoPath: "/seasons/powerplay-logo.png",
    awards: [
      { event: "Qualifying Tournament", awardName: "Innovate Award 1st Place" },
      { event: "Dean's List", awardName: "Finalist" },
      { event: "Quantum League", awardName: "Winners" },
    ],
  },
  {
    name: "Freight Frenzy",
    years: "2021-2022",
    textColor: "var(--freight-frenzy-text)",
    gradientColor: "var(--freight-frenzy-gradient)",
    logoPath: "/seasons/freight-frenzy-logo.png",
    awards: [
      { event: "Romanian Regional #3", awardName: "Design Award Winners" },
    ],
  },
  {
    name: "Ultimate Goal",
    years: "2020-2021",
    textColor: "var(--ultimate-goal-text)",
    gradientColor: "var(--ultimate-goal-gradient)",
    logoPath: "/seasons/ultimate-goal-logo.png",
    awards: [
      {
        event: "Romania Qualifying Tournament #3",
        awardName: "Inspire Award Winners",
      },
      {
        event: "Romania National Championship",
        awardName: "Innovate Award 2nd place",
      },
    ],
  },
  {
    name: "Skystone",
    years: "2019-2020",
    textColor: "var(--skystone-text)",
    gradientColor: "var(--skystone-gradient)",
    logoPath: "/seasons/skystone-logo.png",
    awards: [
      { event: "Romania Moldova Regional", awardName: "Think Award 2nd Place" },
    ],
  },
  {
    name: "Rover Ruckus",
    years: "2018-2019",
    textColor: "var(--rover-ruckus-text)",
    gradientColor: "var(--rover-ruckus-gradient)",
    logoPath: "/seasons/rover-ruckus-logo.png",
    awards: [
      { event: "Romania Moldova Regional", awardName: "Winners" },
      { event: "Romania Moldova Regional", awardName: "Control Award Winners" },
      { event: "Romania National Championship", awardName: "Finalists" },
    ],
  },
  {
    name: "Relic Recovery",
    years: "2017-2018",
    textColor: "var(--relic-recovery-text)",
    gradientColor: "var(--relic-recovery-gradient)",
    logoPath: "/seasons/relic-recovery-logo.png",
    awards: [
      { event: "Placeholder event", awardName: "Placeholder award" },
      { event: "Placeholder event", awardName: "Placeholder award" },
    ],
  },
  {
    name: "Velocity Vortex",
    years: "2016-2017",
    textColor: "var(--velocity-vortex-text)",
    gradientColor: "var(--velocity-vortex-gradient)",
    logoPath: "/seasons/velocity-vortex-logo.png",
    awards: [
      { event: "Placeholder event", awardName: "Placeholder award" },
      { event: "Placeholder event", awardName: "Placeholder award" },
    ],
  },
];

type Award = {
  event: string;
  awardName: string;
};

type SeasonAchievementsProps = {
  name: string;
  years: string;
  textColor: string;
  gradientColor: string;
  logoPath: string;
  awards: Award[];
  className?: string;
  hideDescription?: boolean;
};

function SeasonAchievements({
  name,
  years,
  textColor,
  gradientColor,
  logoPath,
  awards,
  className = "",
  hideDescription = false,
}: SeasonAchievementsProps) {
  return (
    <div className={`h-full flex flex-col ${className}`}>
      <Box
        className={`flex flex-col items-center h-full w-full ${className}`}
        color={gradientColor}
        gradient={true}
      >
        <div className="relative h-[4.5rem] md:h-[6.5rem] lg:h-[7rem] xl:h-[8rem] w-full overflow-hidden flex flex-col items-center justify-center my-[var(--md-space-y)]">
          <Image
            src={logoPath}
            alt={name + " season logo"}
            width={200}
            height={200}
            className="h-auto w-auto max-h-[100%] max-w-[55%] object-cover content-contain"
          />
        </div>
        {awards.map((award, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h5 className="text-[var(--alternate-text)]">{award.event}</h5>
              <h6
                style={{
                  color: textColor,
                  paddingBottom:
                    index == awards.length - 1 ? "var(--md-space-y)" : "0rem",
                }}
              >
                {award.awardName}
              </h6>
              {index != awards.length - 1 && <SeparatorGradient />}
            </div>
          );
        })}
      </Box>
      <h3
        className="mt-[var(--md-space-y)] mr-auto transition-opacity duration-300"
        style={{
          opacity: hideDescription ? "0" : "1.0",
          color: textColor,
        }}
      >
        {name.toUpperCase()} ({years})
      </h3>
    </div>
  );
}

function SeparatorGradient() {
  return (
    <div className="bg-[linear-gradient(90deg,_var(--default-dark),_#ffffff,_var(--default-dark))] opacity-50 w-[11rem] md:w-[16rem] lg:w-[18rem] xl:w-[20rem] h-[0.075rem] my-[var(--sm-space-y)]" />
  );
}

function JoinBrickBot() {
  const router = useRouter();
  return (
    <section className="relative ml-[calc((-100vw+var(--page-width))/2)] bg-[linear-gradient(180deg,_transparent,_#1E1800)] h-fit w-[100vw] flex flex-col items-center justify-center overflow-visible mt-[calc(0rem-var(--lg-space-y))]">
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[var(--xl-space-y)]">
        <h2>Join BrickBot</h2>
        <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--lg-space-y)] text-center">
          Passionate about robotics? Fill out the form to show your interest in
          joining our team.
        </p>
        <Button
          text="APPLY"
          accentColor="var(--default-yellow)"
          gradientColorLight="var(--yellow-gradient-light)"
          gradientColorDark="var(--yellow-gradient-dark)"
          arrow={false}
          action={() => {
            router.push("/apply");
          }}
        />
      </div>
    </section>
  );
}
