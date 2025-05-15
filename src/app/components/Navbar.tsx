import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[4vw] bg-[#121212] z-50 flex justify-center items-center text-[#ffffff] font-bold text-[clamp(0px,_2vw,24px)]">
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
            className="w-[clamp(0px,_10vw,_180px)] h-auto object-contain mt-[2vw]"
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
  );
}
