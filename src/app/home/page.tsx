"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

export default function Home() {
  return (
    <div
      lang="en"
      className="overflow-x-hidden flex flex-col"
    >
      <header className="z-50">
        <Navbar />
      </header>

      <main>
        <Banner />
        <AboutUs />
        <Projects />
        <SponsorCarousel />
      </main>

      <footer className="h-[10vh]"></footer>
    </div>
  );
}

function Banner() {
  return (
    <section className="relative w-full flex flex-col">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/random.jpg"
          alt="random"
          fill
          priority
          className="object-cover z-[-1] opacity-90 translate-x-[17.5%]"
        />
        <div className="flex flex-col items-start justify-center h-full w-full bg-[linear-gradient(70deg,_#000000_30%,_transparent)] space-y-[1vh]">
          <div className="text-[#ffd100] font-extrabold z-10 ml-[3vw]">
            <p className="text-[4.5vh]/[5.5vh]">We build our future</p>
            <p className="text-[4.5vh]/[5.5vh]">Brick by Brick!</p>
          </div>
          <div className="ml-[3vw]">
            <Link href="/support-us">
              <NavButton
                text="BECOME A SPONSOR"
                arrow={true}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.25vh] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] opacity-50" />
    </section>
  );
}

function AboutUs() {
  return (
    <section className="relative flex flex-col items-stretch justify-center h-full w-full px-[3vw] py-[5vh]">
      <h1 className="text-[#ffd100] font-extrabold text-[4vh] mb-[1vh]">
        About Us
      </h1>
      <div className="relative flex flex-row items-stretch justify-center space-x-[2vw]">
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[250px] w-[46vw]">
          {/* this is so cursed */}
          <div className="h-auto rounded-[2.375vh] bg-[#0a0a0a]">
            <div className="h-auto rounded-[2.375vh] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)] min-h-[250px] p-[1.25vw]">
              <p className="text-[2vh]/[3vh] font-medium text-white">
                We&apos;ve been in this since like 2016, certainly not the best
                team but together we Brick and Bot!! (ts pmo Chicken jockey)
                Ruined thousands of kids dreams and killed their precious time
                with impossible deadlines from dumbass colleagues. You know
                what, FTC, this competition, the community—nothing matters.
                Every year is just a descent into madness.
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw]">
          <div className="relative w-full h-full rounded-[2.375vh] overflow-hidden">
            <Image
              src="/random.jpg"
              alt="random"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-[2vh]">
        <Link href="/achievements">
          <NavButton
            text="OUR ACHIEVEMENTS"
            arrow={true}
          />
        </Link>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="relative flex flex-col items-start justify-center h-full w-full px-[3vw] py-[5vh]">
      <h1 className="text-[#ffd100] font-extrabold text-[4vh] pb-[2vh]">
        Projects
      </h1>
      <LargeProject
        color="#54ECD8"
        name="SimplicityFTC"
        logoPath="/projects/simplicityftclogo1.png"
        link="https://simplicityftc.github.io/SimplicityFTC-Docs/"
        description={
          "you give off chill pedophile vibes like you lowkey like kids but\n" +
          "you went to therapy and got impulse control so you would\n" +
          "never hurt one if you know what i mean. im a pedophile too and\n" +
          "it makes me happy when i read your comments cuz it feels like i\n" +
          "can participate on this sub too. good on you bro thank you so much"
        }
      />
      <div
        className="grid gap-[8vw] w-full py-[5vh]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        }}
      >
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
    <Link href={link}>
      <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] h-[35vh] hover:opacity-75 hover:scale-105 transition-transform duration-150 cursor-pointer">
        {/* this is so cursed */}
        <div className="w-auto h-full rounded-[2.375vh] bg-[#0a0a0a]">
          <div className="w-auto h-full rounded-[2.375vh] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)] px-[1vw] py-[2vh]">
            <div
              className="absolute left-0 top-0 rounded-[2.5vh] w-full h-full"
              style={{
                background: `linear-gradient(180deg, ${color}2F, #0202021B)`,
              }}
            ></div>
            <div className="flex items-center justify-center w-full h-[23vh] overflow-hidden">
              <Image
                src={logoPath}
                alt={name + "Logo"}
                width={275}
                height={275}
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-[1vw] left-[1.25vw] max-w-[80%] min-h-[4.5vh]">
              <p
                className="font-medium text-[3vh]/[3vh]"
                style={{ whiteSpace: "pre-line", color: color }}
              >
                {name}
              </p>
            </div>
            <div className="absolute bottom-[1vw] right-[1vw]">
              <Image
                src="/right-arrow-white.png"
                alt="right-arrow"
                width={50}
                height={50}
                className="z-[10] inline mr-[-0.5vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
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
    <section className="relative justify-center w-full h-full">
      <div className="relative flex flex-row items-stretch justify-center space-x-[2vw] h-full">
        <Link
          href={link}
          className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw] h-auto hover:opacity-75 hover:scale-103 transition-transform duration-150 cursor-pointer"
        >
          <div className="w-full h-full rounded-[2.375vh] bg-[#0a0a0a]">
            <div className="w-full h-full rounded-[2.5vh] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)]">
              <div
                className="absolute left-0 top-0 rounded-[2.5vh] w-full h-full"
                style={{
                  background: `linear-gradient(180deg, ${color}2F, #0202021B)`,
                }}
              ></div>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 px-[1.25vw] py-[2vh]">
            <Image
              src={logoPath}
              alt={name + "Logo"}
              width={275}
              height={275}
              className="h-auto w-[10vw]"
            />
          </div>
          <div className="absolute right-0 bottom-0 px-[1vw] py-[1vw]">
            <div className="relative h-auto w-auto p-[0.25vh] bg-[linear-gradient(180deg,_#FFA5A5,_#EC7171)] rounded-full">
              <div className="relative h-full w-full bg-[#4B1717] rounded-full px-[1.25vw]">
                <p className="font-semibold text-[1.5vh] text-[#FFBEBE]">New</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw]">
          <div className="h-full rounded-[2.375vh] bg-[#0a0a0a]">
            <div className="h-full rounded-[2.375vh] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)] px-[1vw] py-[1vh]">
              <h1
                className="font-semibold text-[3.5vh]"
                style={{ color: color }}
              >
                {name}
              </h1>
              <p className="text-[2vh] font-medium text-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: { perView: 4, spacing: 16 },
    drag: false, // or true, depending on preference
  });

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    let timeout: NodeJS.Timeout;

    const next = () => {
      slider.moveToIdx(slider.track.details.abs + 1, true, { duration: 1200 });
      timeout = setTimeout(next, 1200);
    };

    next();

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  const sponsors = [
    "/brick_yellow.png",
    "/bricklogo.png",
    "/random.jpg",
    "/right-arrow-white.png",
    "/right-arrow-yellow.png",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center h-full w-full px-[3vw]">
      <h1 className="text-[#ffd100] font-extrabold text-[4vh] mr-auto">
        Sponsors
      </h1>
      <div
        ref={sliderRef}
        className="keen-slider py-[4vh]"
      >
        {sponsors.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-center items-center"
          >
            <img
              src={src}
              alt={`Sponsor ${idx}`}
              className="h-[10vh]"
            />
          </div>
        ))}
      </div>
      <NavButton
        text="BECOME OUR NEXT SPONSOR"
        arrow={false}
      />
    </section>
  );
}
type NavButtonProps = {
  text: string;
  arrow?: boolean;
};

function NavButton({ text, arrow }: NavButtonProps) {
  return (
    <button className="flex flex-row justify-center items-center space-x-[0.25vw] bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] px-[1.25vw] py-[0.5vh] rounded-full border-[0.25vh] border-[#ffd100] hover:opacity-75 hover:scale-107 transition-transform duration-150 cursor-pointer">
      <p className="text-[#ffd100] font-extrabold text-[2.25vh]">{text}</p>
      {arrow && (
        <Image
          src="/right-arrow-yellow.png"
          alt="right-arrow"
          width={30}
          height={25}
          className="z-[10] inline mr-[-0.5vw]"
        />
      )}
    </button>
  );
}
