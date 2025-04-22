import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div lang="en">
      <div className="absolute top-0 left-0 w-full h-[clamp(30px,_5vw,_64px)] bg-[#121212] z-50 flex justify-center text-[#ffffff] font-bold text-[clamp(9px,_2vw,_18px)]">
        <div className="flex justify-center items-center w-full max-w-screen-xl px-4 mx-auto space-x-[clamp(3px,_2vw,_16px)]">
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
              className="w-[clamp(60px,_10vw,_140px)] h-auto object-contain mt-[10px]"
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
        <div>
          <Image
            src="/random.jpg"
            alt="random"
            height={1280}
            width={1920}
            className="absolute top-[clamp(32px,_5vw,_64px)] right-[-clamp(150px,_30vw,_300px)] w-full h-[clamp(300px,_40vw,_600px)] object-cover z-[-1] opacity-50"
          />
          <div className="absolute top-[calc(clamp(32px,_5vw,_64px)+clamp(300px,_40vw,_600px))] left-0 w-full h-[2px] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] opacity-50 z-10"></div>
        </div>

        <div className="absolute top-[clamp(32px,_5vw,_64px)] left-0 w-full h-[clamp(300px,_40vw,_600px)] bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-10">
          <div className="relative z-20 text-[#ffd100] text-[clamp(18px,_3vw,_36px)] font-extrabold top-[30%] left-[5%] px-4">
            <p className="mt-[-10px] mb-[-10px]">We build our future</p>
            <p className="mt-[-10px] mb-[-10px]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="flex items-center justify-center h-[clamp(20px,_3vw,_40px)] w-[clamp(100px,_15vw,_200px)] max-w-full bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[clamp(9px,_1vw,_18px)] rounded-[clamp(10px,_10vw,_25px)] hover:opacity-75 border-2 border-[#ffd100] mt-[20px]">
                BECOME A SPONSOR
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer>{/* Your footer content goes here */}</footer>
    </div>
  );
}
