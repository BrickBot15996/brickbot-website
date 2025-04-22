import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      lang="en"
      className="overflow-x-hidden"
    >
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full h-[4vw] bg-[#121212] z-50 flex justify-center items-center text-[#ffffff] font-bold text-[clamp(0px,_2vw,24px)]">
        <div className="flex justify-center items-center w-full max-w-screen-xl px-4 mx-auto space-x-[3vw]">
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
              className="w-[clamp(60px,_10vw,_180px)] h-auto object-contain mt-[2vw]"
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
      </div>

      <main>
        {/* Background Image Section */}
        <div>
          <Image
            src="/random.jpg"
            alt="random"
            height={1280}
            width={1920}
            className="absolute top-[4vw] right-0 w-full h-[35vw] object-cover z-[-1] opacity-50"
          />
          <div className="absolute top-[39vw] left-0 w-full h-[2px] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] opacity-50 z-10"></div>
        </div>

        {/* Text Section Overlay */}
        <div className="absolute top-[4vw] left-0 w-full h-[35vw] bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-10">
          <div className="relative z-20 text-[#ffd100] text-[3vw] font-extrabold top-[30%] left-[5%] px-4">
            <p className="mt-[-10px] mb-[-10px]">We build our future</p>
            <p className="mt-[-10px] mb-[-10px]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="flex items-center justify-center h-[3vw] w-[15vw] max-w-full bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[1.25vw] rounded-[1.5vw] hover:opacity-75 border-2 border-[#ffd100] mt-[3vw]">
                BECOME A SPONSOR
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer>{/* Your footer content */}</footer>
    </div>
  );
}
