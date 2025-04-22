import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      lang="en"
      className="overflow-x-hidden"
    >
      <header className="absolute top-0 left-0 w-full bg-[#121212] z-50 flex justify-center text-[#ffffff] font-bold text-[clamp(0.5rem,_5vw,_1.25rem)] h-[63px]">
        <div className="flex justify-center items-center w-full max-w-screen-xl px-4 mx-auto space-x-8">
          <Link
            href="/tbd"
            className="hover:opacity-75"
          >
            TBD
          </Link>
          <Link
            href="/achievements"
            className="hover:opacity-75"
          >
            ACHIEVEMENTS
          </Link>
          <Link
            href="/home"
            className="hover:opacity-75"
          >
            <Image
              src="/brick_yellow.png"
              alt="BrickBot Logo"
              width={928}
              height={502}
              className="w-[140px] h-[76px] object-contain mt-[10px]"
            />
          </Link>
          <Link
            href="/resources"
            className="hover:opacity-75"
          >
            RESOURCES
          </Link>
          <Link
            href="/support-us"
            className="hover:opacity-75"
          >
            SUPPORT US
          </Link>
        </div>
      </header>

      <main>
        <div>
          <Image
            src="/random.jpg"
            alt="random"
            height={1280}
            width={1920}
            className="absolute top-[63px] right-0 w-full h-[600px] object-cover z-[-1] opacity-50"
          />
        </div>

        <div className="absolute top-[63px] left-0 w-full h-[600px] bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-10">
          <div className="relative z-20 text-[#ffd100] text-[clamp(1.5rem,_5vw,_3rem)] font-extrabold top-[30%] left-[5%] px-4">
            <p className="mt-[-10px] mb-[-10px]">We build our future</p>
            <p className="mt-[-10px] mb-[-10px]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="flex items-center justify-center h-[clamp(20px,_10vw,_50px)] w-[clamp(100px,_40vw,_200px)] max-w-full bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[clamp(0.5rem,_5vw,_1.1rem)] rounded-[clamp(10px,_10vw,_25px)] hover:opacity-75 border-2 border-[#ffd100] mt-[20px]">
                BECOME A SPONSOR
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute top-[663px] left-0 w-full h-[2px] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] opacity-50 z-10"></div>
      </main>

      <footer>{/* Your footer content goes here */}</footer>
    </div>
  );
}
