"use client";

import { useRef, useEffect, useState } from "react";

import Link from "next/link";

import { RiInstagramLine, RiLinkedinFill, RiMailFill } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      ref={ref}
      className="bg-[var(--footer)] h-auto w-full flex flex-row items-center mt-[var(--2xl-space-y)] py-[var(--xl-space-y)] px-[calc((100vw-var(--page-width))/2)]"
    >
      <span className="h-auto w-auto mr-auto">
        <Link
          href="https://www.datahost.ro/"
          className="hover:brightness-75 active:scale-3d active:brightness-100 transition-transform duration-150 cursor-pointer w-fit"
          target="_blank"
        >
          <p style={{ color: "var(--alternate-text)" }}>Powered by DataHost</p>
        </Link>
        <p className="mt-[0.5rem]">Brickbot © {year}</p>
      </span>
      <span className="relative h-auto ml-auto w-fit select-none">
        <div className="grid grid-rows-2 grid-cols-3 items-start gap-x-[1rem] md:gap-x-[1.5rem] gap-y-[0.8rem] md:gap-y-[1rem] pt-[0.25rem]">
          <Link
            href="https://www.instagram.com/brickbotcnu/"
            target="_blank"
          >
            <RiInstagramLine className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.tiktok.com/@brickbotcnu"
            target="_blank"
          >
            <RiTiktokFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.facebook.com/brickbotcnu/"
            target="_blank"
          >
            <RiFacebookFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            target="_blank"
          >
            <RiYoutubeFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/brickbot/"
            target="_blank"
          >
            <RiLinkedinFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="mailto:brickbot@liceulunirea.ro"
            target="_blank"
          >
            <RiMailFill className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
        </div>
      </span>
    </footer>
  );
}
