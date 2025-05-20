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
              <button className="bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[2.25vh] px-[2vh] py-[0.5vh] rounded-[2.5vh] border-[0.25vh] border-[#ffd100] hover:opacity-75 hover:scale-107 transition-transform duration-150 cursor-pointer">
                BECOME A SPONSOR
              </button>
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
    <section className="relative flex flex-col items-start justify-center h-full w-full ml-[3vw] mt-[2vh]">
      <h1 className="text-[#ffd100] font-extrabold text-[4vh] mb-[1vh]">
        About Us
      </h1>
      <div className="relative flex flex-row justify-center space-x-[2vw]">
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)]">
          {/* this is so cursed */}
          <div className="w-[46vw] h-[25vh] rounded-[2.375vh] bg-[#0a0a0a]">
            <div className="w-[46vw] h-[25vh] rounded-[2.375vh] bg-[linear-gradient(180deg,_#6363630D,_#0202020D)] px-[1vw] py-[1vh]">
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
        <div className="relative rounded-[2.5vh] p-[0.25vh] bg-[linear-gradient(180deg,_#ffffff26,_#58585826)] w-[46vw] h-[25vh] object-contain">
          <Image
            src="/random.jpg"
            alt="random"
            width={1920}
            height={1080}
            className="w-full h-full object-cover rounded-[2.375vh] overflow-hidden"
          />
        </div>
      </div>
      <div className="mt-[2vh]">
        <Link href="/achievements">
          <button className="bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[2.25vh] px-[2vh] py-[0.5vh] rounded-[2.5vh] border-[0.25vh] border-[#ffd100] hover:opacity-75 hover:scale-107 transition-transform duration-150 cursor-pointer">
            OUR ACHIEVEMENTS
          </button>
        </Link>
      </div>
    </section>
  );
}
