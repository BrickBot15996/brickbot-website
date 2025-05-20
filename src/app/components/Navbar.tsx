import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[6vh] bg-[#121212] flex justify-center items-center text-[#ffffff] font-bold text-[2vh] overflow-visible">
      <div className="flex justify-center items-center w-full max-w-screen-xl px-4 mx-auto space-x-[3vw]">
        <Link
          href="/tbd"
          className="hover:opacity-75 hover:scale-110 transition-transform duration-300"
        >
          TBD
        </Link>
        <Link
          href="/achievements"
          className="hover:opacity-75 hover:scale-110 transition-transform duration-300"
        >
          ACHIEVEMENTS
        </Link>
        <Link
          href="/home"
          className="relative z-10 hover:opacity-75 hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/brick_yellow.png"
            alt="BrickBot Logo"
            priority
            width={928}
            height={502}
            className="h-[8vh] w-auto object-contain -mb-[1.5vh]"
          />
        </Link>
        <Link
          href="/resources"
          className="hover:opacity-75 hover:scale-110 transition-transform duration-300"
        >
          RESOURCES
        </Link>
        <Link
          href="/support-us"
          className="hover:opacity-75 hover:scale-110 transition-transform duration-300"
        >
          SUPPORT US
        </Link>
      </div>
    </div>
  );
}
