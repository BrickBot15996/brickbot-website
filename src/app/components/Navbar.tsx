import Image from "next/image";
import Link from "next/link";

export default function NewNavbar() {
  return (
    <header className="fixed top-0 h-[3rem] md:h-[3.5rem] lg:h-[4rem] w-full bg-opacity-70 bg-[rgba(18,18,18,0.8)] backdrop-blur z-[100] flex justify-center items-center">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-[1.5rem] lg:gap-[2rem] justify-center items-center md:text-[#ffffff] font-bold text-[1.2rem] lg:text-[1.4rem]">
        <li className="w-[7rem] lg:w-[8rem] items-center hover:opacity-75 hover:scale-107 transition-transform duration-150">
          <Link href="/tbd">BRICKBOTING</Link>
        </li>
        <li className="w-[7rem] lg:w-[8rem] items-center hover:opacity-75 hover:scale-107 transition-transform duration-150">
          <Link href="/achievements">ACHIEVEMENTS</Link>
        </li>
        <li className="mx-[1.5rem] lg:mx-[2rem] hover:opacity-75 hover:scale-107 transition-transform duration-150 hover:translate-y-[0.15rem] hover:lg:translate-y-[0.2rem] active:opacity-100 active:scale-93 active:translate-y-[-0.15rem] active:lg:translate-y-[-0.2rem]">
          <Link href="/home">
            <Image
              src="/brick_yellow.png"
              alt="BrickBot Logo"
              priority
              width={928}
              height={502}
              className="h-[4rem] lg:h-[5rem] w-auto object-contain mt-[0.8rem] lg:mt-[1rem]"
            />
          </Link>
        </li>
        <li className="w-[7rem] lg:w-[8rem] items-center hover:opacity-75 hover:scale-107 transition-transform duration-150">
          <Link href="/resources">RESOURCES</Link>
        </li>
        <li className="w-[7rem] lg:w-[8rem] items-center hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150">
          <Link href="/support-us">SUPPORT US</Link>
        </li>
      </ul>

      {/* Mobile Navbar */}
      <div className="flex justify-center items-center md:hidden">
        <div className="absolute left-[1rem] flex flex-row gap-[1rem] items-center hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150">
          <Link href="/home">
            <Image
              src="/brick_yellow.png"
              alt="BrickBot Logo"
              priority
              width={928}
              height={502}
              className="h-[2.5rem] w-auto object-contain"
            />
          </Link>
          <h1 className="text-[#ffd100] text-[1.5rem] font-bold">BRICKBOT</h1>
        </div>
        <p className="absolute right-[1rem] cursor-pointer">burger</p>
      </div>
    </header>
  );
}

export function Navbar() {
  return (
    <div className="fixed top-0 sm:h-[2.5rem] md:h-[3rem] lg:h-[4rem] w-full bg-[#121212] flex flex-row justify-center items-center text-[#ffffff] font-bold sm:text-[0.84rem] md:text-[1rem] lg:text-[1.3rem] overflow-visible z-[100]">
      <div className="flex justify-center items-center w-full space-x-[3vw]">
        <Link
          href="/tbd"
          className="hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
        >
          TBD
        </Link>
        <Link
          href="/achievements"
          className="hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
        >
          ACHIEVEMENTS
        </Link>
        <Link
          href="/home"
          className="relative z-10 hover:opacity-75 hover:scale-107 transition-transform duration-150 hover:translate-y-[0.28vh] active:opacity-100 active:scale-93 active:translate-y-[-0.28vh]"
        >
          <Image
            src="/brick_yellow.png"
            alt="BrickBot Logo"
            priority
            width={928}
            height={502}
            className="sm:h-[3rem] md:h-[4rem] lg:h-[5rem] w-auto object-contain sm:mt-[0.8rem] md:mt-[0.8rem] lg:mt-[1rem]"
          />
        </Link>
        <Link
          href="/resources"
          className="hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
        >
          RESOURCES
        </Link>
        <Link
          href="/support-us"
          className="hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
        >
          SUPPORT US
        </Link>
      </div>
    </div>
  );
}
