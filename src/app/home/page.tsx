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
        <div className="flex flex-col items-start justify-center h-full w-full bg-[linear-gradient(70deg,_#000000_30%,_transparent)] px-6">
          <div className="text-[#ffd100] font-extrabold z-10 ml-[2vw]">
            <p className="text-[4.5vh]/[5.5vh]">We build our future</p>
            <p className="text-[4.5vh]/[5.5vh]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="mt-4 bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[2.25vh] px-[2vh] py-[0.5vh] rounded-[2.5vh]  border-[0.25vh] border-[#ffd100] hover:opacity-75 hover:scale-107 transition-transform duration-150 cursor-pointer">
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
