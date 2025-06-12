"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { RiInstagramLine } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[var(--footer)] h-auto min-h-[10rem] w-full inline-flex items-center">
      <span className="h-auto w-auto ml-[1.5rem] md:ml-[3rem] lg:ml-[5rem] mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]">
        <Link
          href="https://www.datahost.ro/"
          className="text-[var(--alternate-text)] font-medium text-[0.8rem]/[2rem] md:text-[1rem]/[2.5rem] lg:text-[1.25rem]/[3rem] hover:brightness-75 active:scale-3d active:brightness-100 transition-transform duration-150 cursor-pointer w-fit"
          target="_blank"
        >
          Powered by DataHost
        </Link>
        <p className="text-[var(--alternate-text)] font-medium text-[0.8rem]/[2rem] md:text-[1rem]/[2.5rem] lg:text-[1.25rem]/[3rem] pb-[1.5rem] md:pb-[2rem] lg:pb-[2.5rem]">
          Brickbot © {year}
        </p>
      </span>
      <span className="relative h-auto ml-auto mr-[1.5rem] md:mr-[3rem] lg:mr-[5rem] w-fit select-none">
        <div className="grid grid-cols-4 items-start space-x-[1.2rem] md:space-x-[1.5rem] pt-[0.25rem] mr-[-1rem]">
          <Link
            href="https://www.instagram.com/brickbotcnu/"
            target="_blank"
          >
            <RiInstagramLine className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
          <Link
            href="https://www.tiktok.com/@brickbotcnu"
            target="_blank"
          >
            <RiTiktokFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
          <Link
            href="https://www.facebook.com/brickbotcnu/"
            target="_blank"
          >
            <RiFacebookFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            target="_blank"
          >
            <RiYoutubeFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
        </div>
      </span>
    </footer>
  );
}
