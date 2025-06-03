"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const el =
      document.scrollingElement || document.documentElement || document.body;
    el.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#191919] h-[30vh] w-full">
      <div className="absolute left-[10vh]">
        <h1 className="text-[#ffffff] font-bold text-[2.25vh] pt-[4vh]">
          BrickBot
        </h1>
        <p className="text-[#929292] font-semibold pt-[1vh]">
          &quot;Unirea&quot; National College
        </p>
        <p className="text-[#929292] font-semibold pt-[1vh]">
          Str. Cezar-Bolliac Nr. 13-15
          <br /> Focșani, Vrancea, Romania
        </p>
        <p className="text-[#929292] font-semibold pt-[2vh]">
          Powered by DataHost
        </p>
        <p className="text-[#ffffff] font-normal pt-[3vh]">
          Brickbot © {currentYear}
        </p>
      </div>
      <div className="absolute right-[10vh] w-[15vw]">
        <h1 className="text-[#ffffff] font-bold text-[2.25vh] pt-[4vh]">
          Follow Us
        </h1>
        <div className="grid grid-cols-4 items-start space-x-[1vw] pt-[1vh] ml-[-1.1vh] mr-[-2vh]">
          <Link
            href="https://www.instagram.com/brickbotcnu/"
            target="_blank"
          >
            <Image
              src="/socials/instagram.svg"
              alt="Instagram"
              width={100}
              height={100}
              className="hover:opacity-75 hover:scale-105 active:opacity-100 active:scale-95 h-[4vh]"
            />
          </Link>
          <Link
            href="https://www.facebook.com/brickbotcnu/"
            target="_blank"
          >
            <Image
              src="/socials/facebook.svg"
              alt="Facebook"
              width={100}
              height={100}
              className="hover:opacity-75 hover:scale-105 active:opacity-100 active:scale-95 h-[4vh] fill-[#ffffff]"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            target="_blank"
          >
            <Image
              src="/socials/youtube.svg"
              alt="Instagram"
              width={100}
              height={100}
              className="hover:opacity-75 hover:scale-105 active:opacity-100 active:scale-95 h-[4vh] fill-[#ffffff]"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@brickbotcnu"
            target="_blank"
          >
            <Image
              src="/socials/tiktok.svg"
              alt="Instagram"
              width={100}
              height={100}
              className="hover:opacity-75 hover:scale-105 active:opacity-100 active:scale-95 h-[4vh] fill-[#ffffff]"
            />
          </Link>
        </div>
        <div className="flex flex-col pt-[4vh] items-end">
          <Button
            text="BACK TO TOP"
            arrow={false}
            color="#ffffff"
            action={scrollToTop}
          ></Button>
        </div>
      </div>
    </footer>
  );
}
