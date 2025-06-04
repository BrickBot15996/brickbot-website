import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import SponsorMarquee from "../components/SponsorMarquee";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <section>
      <Banner />
      <AboutUs />
      <Projects />
      <SponsorMarquee />
    </section>
  );
}

function Banner() {
  return (
    <section className="relative w-full flex flex-col">
      <div className="relative flex h-[20rem] md:h-[25rem] lg:h-[30rem] w-full">
        <Image
          src="/random.jpg"
          alt="random"
          fill
          priority
          className="object-cover z-1 opacity-90 translate-x-[17.5%] select-none"
        />
        <div className="flex flex-col mr-auto items-start justify-center h-full w-full bg-[linear-gradient(70deg,_#000000_30%,_transparent)] space-y-[1vh] z-2">
          <div className="text-[#ffd100] font-extrabold z-10 px-[1.5rem] md:px-[1.75rem] lg:px-[2rem] text-[2rem]/[2.5rem] md:text-[2.5rem]/[3rem] lg:text-[2.75rem]/[3.25rem]">
            <p>We build our future</p>
            <p>Brick by Brick!</p>
          </div>
          <div className="px-[1.5rem] md:px-[1.75rem] lg:px-[2rem]">
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
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw] select-none">
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
          <Button
            text="OUR ACHIEVEMENTS"
            arrow={true}
            color="#ffd100"
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
        color="#ADFF50"
        name="SimplicityFTC"
        logoPath="/projects/simplicityftclogo1.png"
        link="https://simplicityftc.github.io/SimplicityFTC-Docs/"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas expedita nostrum dolore minima nulla aperiam totam. Id excepturi repudiandae, dolores enim aspernatur tenetur libero debitis voluptatibus facilis, ea natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium fuga deleniti? Architecto temporibus voluptates possimus rerum vero ducimus suscipit praesentium sed? Id rem saepe dicta eligendi molestiae odit a."
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
    <Link
      href={link}
      className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] h-[35vh] hover:opacity-75 hover:scale-105 active:opacity-100 active:scale-95 transition-transform duration-150 cursor-pointer select-none"
    >
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
              className="object-contain scale-70"
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
          <div className="absolute bottom-[1rem] right-[1.5rem]">
            <HiArrowNarrowRight className="z-[10] inline mr-[-0.5vw] h-[3rem] w-auto fill-white" />
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
          className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw] h-auto hover:opacity-75 hover:scale-103 active:opacity-100 active:scale-97 transition-transform duration-150 cursor-pointer select-none"
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
              <p className="text-[2vh] font-medium text-white pb-[1vh]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
