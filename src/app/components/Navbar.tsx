import Image from "next/image";
import Link from "next/link";

type NavbarButtonProps = {
  text: string;
};

function NavbarButton({ text }: NavbarButtonProps) {
  return (
    <li className="relative w-[10rem] lg:w-[12rem] h-full flex items-center justify-center cursor-pointer">
      <div className="absolute w-full h-full overflow-visible opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="relative opacity-20 h-full w-full bg-[linear-gradient(0deg,_#ffd100_0%,_transparent_100%)]" />
        <div className="relative opacity-75 w-full h-[0.1rem] bg-[linear-gradient(90deg,_#ffd1003f_0%,_#ffd100_50%,_#ffd1003f_100%)]" />
      </div>
      <Link href="/tbd">{text}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 h-[3rem] md:h-[3.5rem] lg:h-[4rem] w-full bg-opacity-70 bg-[rgba(18,18,18,0.8)] backdrop-blur z-[100] flex justify-center items-center">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex justify-center items-center md:text-[#ffffff] font-bold text-[1.2rem] lg:text-[1.4rem] w-full h-full">
        <NavbarButton text="BRICKBOTING" />
        <NavbarButton text="ACHIEVEMENTS" />
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
        <NavbarButton text="RESOURCES" />
        <NavbarButton text="SUPPORT US" />
      </ul>

      {/* Mobile Navbar */}
      <div className="flex justify-center items-center md:hidden">
        <div className="absolute left-[1rem] flex flex-row gap-[0.5rem] items-center hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150">
          <Link href="/home">
            <Image
              src="/brick_yellow.png"
              alt="BrickBot Logo"
              priority
              width={1325}
              height={151}
              className="h-[2.5rem] w-auto object-contain"
            />
          </Link>
          <Image
            src="/brickbot_text.png"
            alt="BrickBot Text Logo"
            priority
            width={928}
            height={502}
            className="h-[1rem] w-auto object-contain"
          />
        </div>
        <p className="absolute right-[1rem] cursor-pointer">burger</p>
      </div>
    </header>
  );
}
