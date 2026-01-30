"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { CDN_LINK } from "../constants";

const MIN_DURATION = 150;

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);
  const [mountedAt] = useState(Date.now());

  useEffect(() => {
    const handleLoad = () => {
      const elapsed = Date.now() - mountedAt;
      const delay = Math.max(0, MIN_DURATION - elapsed);

      setTimeout(() => {
        setHide(true);
      }, delay);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [mountedAt]);

  return (
    <section
      className="fixed inset-0 h-[100vh] w-[100vw] z-[10000] bg-[var(--default-dark)] flex items-center justify-center transition-opacity duration-200"
      style={{
        opacity: hide ? "0" : "100",
        pointerEvents: hide ? "none" : undefined,
      }}
    >
      <div className="relative w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] overflow-hidden rotate-slow mt-[-6rem]">
        <Image
          src={CDN_LINK + "/website/branding/loading-logo.svg"}
          alt="Radioactive Logo"
          fill
          className="object-contain rounded-[0.75rem]"
        />
      </div>
    </section>
  );
}
