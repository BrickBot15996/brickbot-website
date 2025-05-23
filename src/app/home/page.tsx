import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

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
      </main>

      <footer></footer>
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
          className="object-cover z-[-1] opacity-50"
        />
        <div className="flex flex-col items-start justify-center h-full w-full bg-[linear-gradient(70deg,_#000000_30%,_transparent)] space-y-[1vh]">
          <div className="text-[#ffd100] font-extrabold z-10 ml-[3vw]">
            <p className="text-[4.5vh]/[5.5vh]">We build our future</p>
            <p className="text-[4.5vh]/[5.5vh]">Brick by Brick!</p>
          </div>
          <div className="ml-[3vw]">
            <Link href="/support-us">
              <div className="">
                <button className="flex flex-row justify-center space-x-[0.25vw] bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] px-[1.25vw] py-[0.5vh] rounded-[2.5vh] border-[0.25vh] border-[#ffd100] hover:opacity-75 hover:scale-107 transition-transform duration-150 cursor-pointer">
                  <p className="text-[#ffd100] font-extrabold text-[2.25vh]">
                    BECOME A SPONSOR
                  </p>
                  <Image
                    src="/right-arrow.png"
                    alt="right-arrow"
                    width={30}
                    height={25}
                    className="z-[10] inline mr-[-0.5vw]"
                  />
                </button>
              </div>
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
    <section className="relative flex flex-col items-start justify-center h-full w-full ml-[3vw] mt-[4vh] mb-[10vh]">
      <h1 className="text-[#ffd100] font-extrabold text-[4vh] mb-[1vh]">
        About Us
      </h1>
      <div className="relative flex flex-row items-stretch justify-center space-x-[2vw]">
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] min-h-[250px]">
          {/* this is so cursed */}
          <div className="w-[46vw] h-auto rounded-[2.375vh] bg-[#0a0a0a]">
            <div className="w-[46vw] h-auto rounded-[2.375vh] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)] px-[1vw] py-[2vh] min-h-[250px]">
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
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw] object-contain">
          <Image
            src="/random.jpg"
            alt="random"
            fill
            className="object-cover rounded-[2.375vh] overflow-hidden"
          />
        </div>
      </div>
      <div className="mt-[2vh]">
        <Link href="/achievements">
          <div className="">
            <button className="flex flex-row justify-center space-x-[0.25vw] bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] px-[2vh] py-[0.5vh] rounded-[2.5vh] border-[0.25vh] border-[#ffd100] hover:opacity-75 hover:scale-107 transition-transform duration-150 cursor-pointer">
              <p className="text-[#ffd100] font-extrabold text-[2.25vh]">
                OUR ACHIEVEMENTS
              </p>
              <Image
                src="/right-arrow.png"
                alt="right-arrow"
                width={30}
                height={25}
                className="z-[10] inline mr-[-0.25vw]"
              />
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="relative flex flex-col items-start justify-center h-full w-full ml-[3vw] mt-[2vh]">
      <h1 className="text-[#ffd100] font-extrabold text-[4vh] mb-[1vh]">
        Projects
      </h1>
      <div className="flex flex-row">
        <SmallProject />
        <SmallProject />
        <SmallProject />
        <SmallProject />
      </div>
    </section>
  );
}

function SmallProject() {
  return (
    <div>
      <div></div>
    </div>
  );
}
