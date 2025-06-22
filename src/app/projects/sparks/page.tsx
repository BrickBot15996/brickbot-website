"use client";

import { useRouter } from "next/navigation";

import Button from "@/app/components/brick-button";
import ProjectTitle from "../components/project-title";
import ImageCarousel from "@/app/components/image-carousel";

export default function Sparks() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center">
      <ProjectTitle
        gradientColor="#0F031E"
        textColor="var(--sparks-text)"
        title="Sparks"
        subtitle="Connecting FTC Teams"
        description="A record of the meetings, events, and activities we've had with other FTC teams to stay connected and involved."
        logoPath="/projects/sparks-logo.svg"
      />
      <section className="w-[var(--page-width)] flex flex-col items-center justify-center">
        <div className="w-full mt-[5rem]">
          <h2 className="font-bold text-[3rem]/[3.5rem] md:text-[3.25rem]/[3.75rem] lg:text-[3.5rem]/[4rem] xl:text-[4rem]/[4.5rem] text-[var(--sparks-text)]">
            Interacting With Students
          </h2>
          <p className="text-[1.25rem]/[1.85rem] md:text-[1.5rem]/[2.1rem] xl:text-[1.75rem]/[2.35rem] font-medium text-[var(--default-text)] w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[2.5rem] lg:mb-[3.5rem] mt-[2rem] lg:mt-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            velit quaerat doloribus sunt qui, praesentium vero autem excepturi
            voluptates provident ipsum voluptate temporibus! Deserunt nobis
            blanditiis maiores doloribus! Numquam, dolores?
          </p>
          <ImageCarousel
            buttonAccentColor="#d3d3fc"
            buttonGradientLight="#69697e"
            buttonGradientDark="#464666"
            buttonLitUpLight="#79798e"
            buttonLitUpDark="#565676"
            content={[
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
              {
                imageSrc: "/random.jpg",
                alt: "Random",
                aspectRatio: "16/9",
              },
            ]}
          />
        </div>
        <div className="my-[5rem]">
          <Button
            text="EXPLORE ALL PROJECTS"
            accentColor="var(--default-yellow)"
            arrow={true}
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
            action={() => {
              router.push("/projects");
            }}
          />
        </div>
      </section>
    </section>
  );
}
