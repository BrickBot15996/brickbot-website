import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Button from "../../components/brickbot-button";

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Projects() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center space-y-[2rem] w-full h-fit">
      <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] mb-[3rem]">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-y-[2rem] md:gap-x-[2rem] w-full">
        <SmallProject
          color="var(--the-vault)"
          name={"Portfolio Library"}
          logoPath="/projects/thevaultlogo1.png"
          link="/projects/the-vault"
        />
        <SmallProject
          color="var(--brick-docs)"
          name={"BrickBot Guide & Documentation"}
          logoPath="/projects/brickdocslogo1.png"
          link="https://brickbot15996.github.io/brickbot-docs/"
        />
        <SmallProject
          color="var(--sparks)"
          name={"Connecting FTC Teams"}
          logoPath="/projects/sparkslogo.png"
          link="projects/sparks"
        />
        <SmallProject
          color="var(--brickbot-is-here)"
          name={"BrickBot is Here!"}
          logoPath="/projects/brickbotishere.png"
          link="projects/brickbot-is-here"
        />
      </div>
      <div className="ml-auto">
        <Button
          text="SEE ALL"
          arrow={false}
          accentColor="var(--default-yellow)"
          gradientColorLight="var(--yellow-gradient-light)"
          gradientColorDark="var(--yellow-gradient-dark)"
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
};

function SmallProject({ color, name, logoPath, link }: ProjectProps) {
  return (
    <>
      <Link
        href={link}
        className="group relative rounded-[1.5rem] p-[0.2rem] bg-[linear-gradient(180deg,_var(--box-gradient-light),_var(--box-gradient-dark))] min-h-[17rem] aspect-3/4 w-auto hover:brightness-75 hover:scale-103 md:hover:scale-105 lg:hover:scale-103 xl:hover:scale-105 active:brightness-100 active:scale-95 transition-transform duration-150 cursor-pointer select-none"
      >
        <div
          className="absolute inset-0 rounded-[1.5rem] z-10"
          style={{
            background: `linear-gradient(180deg, ${color}, var(--accents-dark-transparent))`,
            filter: "opacity(0.20)",
          }}
        />
        <div className="w-full h-full rounded-[1.3rem] bg-[var(--default-dark)]">
          <div className="w-full h-full rounded-[1.3rem] bg-[linear-gradient(180deg,_var(--box-inner-gradient-light),_var(--box-inner-gradient-dark))]">
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
