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
        <div className="w-full mt-[var(--2xl-space-y)]">
          <h2 style={{ color: "var(--sparks-text)" }}>
            Interacting With Students
          </h2>
          <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--xl-space-y)]">
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
        <div className="mt-[var(--2xl-space-y)] mb-[var(--2xl-space-y)]">
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
