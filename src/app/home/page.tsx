import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div lang="en">
      <header className="absolute top-0 left-0 w-full h-[70px] bg-[#171717] z-50 flex justify-center text-[#ffffff] font-bold text-[20px]">
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
              className="w-[200px] h-[100px] object-cover mt-[70px]"
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
            className="absolute top-[70px] right-[0px] w-[1770px] h-[600px] object-cover z-[-1] opacity-50"
          />
        </div>
        <div className="absolute top-[70px] left-0 w-[1770px] h-[600px] bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-10">
          <div className="relative z-20 text-[#ffd100] text-[50px] font-extrabold top-[30%] left-[5%]">
            <p className="mt-[-10px] mb-[-10px]">We build our future</p>
            <p className="mt-[-10px] mb-[-10px]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="h-[50px] w-[300px] bg-[#745f02] text-[#ffd100] font-extrabold text-[20px] rounded-[25px] hover:opacity-75 border-4 border-[#ffd100]">
                Become a Sponsor
              </button>
            </Link>
          </div>
        </div>
        <div className="relative top-[670px] left-0 w-full h-[3px] bg-[linear-gradient(90deg,_#000000_15%,_#ffd100_40%,_#000000_85%)] opacity-50 z-10"></div>
      </main>
      <footer>{/* Your footer content goes here */}</footer>
    </div>
  );
}
