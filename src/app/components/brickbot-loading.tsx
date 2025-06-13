"use client";

import { useEffect, useState } from "react";

import { GiRadioactive } from "react-icons/gi";

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
      className="fixed top-0 left-0 h-[100vh] w-[100vw] z-[10000] bg-[var(--default-dark)] inline-flex transition-opacity duration-200 items-center justify-center"
      style={{
        opacity: hide ? "0" : "100",
        pointerEvents: hide ? "none" : undefined,
      }}
    >
      <div className="relative w-fit h-fit overflow-hidden rotate-slow">
        <GiRadioactive className="w-[15rem] h-[15rem] fill-[var(--default-yellow)]" />
      </div>
    </section>
  );
}
