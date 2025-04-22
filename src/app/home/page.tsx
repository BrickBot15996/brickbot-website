import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div lang="en">
      <header className="absolute top-0 left-0 w-full h-[63px] bg-[#121212] z-50 flex justify-center text-[#ffffff] font-bold text-[18px]">
        <div className="flex space-x-10 items-center">
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
              className="w-[140px] h-[76px] object-cover mt-[10px]"
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
            className="absolute top-[63px] right-[0px] w-[1770px] h-[600px] object-cover z-[-1] opacity-50"
          />
        </div>
        <div className="absolute top-[63px] left-0 w-[1770px] h-[600px] bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-10">
          <div className="relative z-20 text-[#ffd100] text-[50px] font-extrabold top-[30%] left-[5%]">
            <p className="mt-[-10px] mb-[-10px]">We build our future</p>
            <p className="mt-[-10px] mb-[-10px]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="flex items-center justify-center h-[50px] w-[250px] bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[18px] rounded-[25px] hover:opacity-75 border-2 border-[#ffd100]">
                BECOME A SPONSOR
                <Image
                  src="/right-arrow.png"
                  alt="arrow"
                  width={25}
                  height={10}
                  className="ml-[8px]"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative top-[670px] left-0 w-full h-[2px] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] opacity-50 z-10"></div>
      </main>
      <footer>{/* Your footer content goes here */}</footer>
    </div>
  );
}
