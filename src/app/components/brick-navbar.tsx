"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const nextDiv = document.getElementById("__next");

    if (isOpen && isMobile) {
      body.style.overflowY = "hidden";
      html.style.overflowY = "hidden";
      if (nextDiv) {
        nextDiv.style.overflowY = "hidden";
      }
    }

    return () => {
      body.style.overflowY = "unset";
      html.style.overflowY = "unset";
      if (nextDiv) {
        nextDiv.style.overflowY = "unset";
      }
    };
  }, [isOpen, isMobile]);

  return (
    <>
      <header
        className="fixed top-0 h-[var(--navbar-height)] w-full bg-[linear-gradient(180deg,_var(--dark-transparent)_30%,_var(--accents-dark-transparent))] z-[100] flex justify-center items-center select-none transition-all duration-200 backdrop-blur"
        style={{
          height: isOpen && isMobile ? "100vh" : undefined,
        }}
      >
        {/* Desktop Navbar */}
        <ul className="hidden md:flex justify-center items-center md:text-[var(--alternate-text)] font-bold text-[1.2rem] lg:text-[1.4rem] w-full h-full">
          <NavbarButton
            text="BRICKLOG"
            action={() => router.push("/blog")}
          />
          <NavbarButton
            text="OUR TEAM"
            action={() => router.push("/our-team")}
          />
          <li className="mx-[1.5rem] lg:mx-[2rem] hover:opacity-75 hover:scale-110 transition-transform duration-150 hover:translate-y-[0.15rem] hover:lg:translate-y-[0.2rem] active:opacity-100 active:scale-95 active:translate-y-[-0.10rem] active:lg:translate-y-[-0.2rem]">
            <Link href="/home">
              <Image
                src="/brick-yellow.svg"
                alt="BrickBot Logo"
                priority
                width={928}
                height={502}
                className="h-[4rem] lg:h-[5rem] w-auto object-contain mt-[0.8rem] lg:mt-[1rem]"
              />
            </Link>
          </li>
          <NavbarButton
            text="PROJECTS"
            action={() => router.push("/projects")}
          />
          <NavbarButton
            text="SUPPORT US"
            action={() => router.push("/support-us")}
          />
        </ul>

        {/* Mobile Navbar */}
        <div className="absolute top-0 left-0 flex justify-center items-center md:hidden h-[var(--navbar-height)] w-full">
          <Link
            href="/home"
            className="relative ml-[1rem] mr-auto hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
          >
            <Image
              src="/brick-mobile-logo.svg"
              alt="BrickBot Logo"
              priority
              width={1325}
              height={151}
              className="h-[2rem] w-auto object-contain inline-block mr-[0.5rem]"
            />
          </Link>
          <div className="relative ml-auto mr-[0.1rem] mt-[0.4rem] cursor-pointer fill-[var(--default-yellow)] h-full hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="var(--default-yellow)"
              size={24}
            />
          </div>
        </div>
        {/* Mobile Sidebar Overlay */}
        <div
          className="fixed top-[var(--navbar-height)] left-0 w-full h-[calc(100vh-3rem)] z-[100] flex flex-col md:hidden select-none transition-all duration-200"
          style={{
            height: isOpen && isMobile ? "100vh" : "3.5rem",
            visibility: isOpen && isMobile ? "visible" : "hidden",
          }}
        >
          {isOpen && (
            <div
              className={`w-full h-full px-[1rem] text-[var(--alternate-text)] flex flex-col ${
                isClosing
                  ? "animate-[fadeOut_0.2s_ease-in-out_forwards]"
                  : "opacity-0 animate-[fadeInDelay_0.15s_ease-in-out_0.05s_forwards]"
              }`}
            >
              <h1 className="text-[2.25rem] font-extrabold text-[var(--alternate-text)] mb-[1rem] mt-[1.5rem] px-[1rem]">
                Menu
              </h1>
              <SidebarButton
                text="Home"
                action={() => {
                  router.push("/home");
                  handleClose();
                }}
              />
              <SidebarButton
                text="Bricklog"
                action={() => {
                  router.push("/blog");
                  handleClose();
                }}
              />
              <SidebarButton
                text="Our Team"
                action={() => {
                  router.push("/our-team");
                  handleClose();
                }}
              />
              <SidebarButton
                text="Projects"
                action={() => {
                  router.push("/projects");
                  handleClose();
                }}
              />
              <SidebarButton
                text="Support Us"
                action={() => {
                  router.push("/support-us");
                  handleClose();
                }}
              />
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes fadeInDelay {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-10px);
            }
          }
        `}</style>
      </header>
    </>
  );
}

type NavButtonProps = {
  text: string;
  action: () => void;
};

function NavbarButton({ text, action }: NavButtonProps) {
  return (
    <li
      className="relative w-[10rem] lg:w-[12rem] h-full flex items-center justify-center cursor-pointer"
      onClick={action}
    >
      <div className="group absolute w-full h-full overflow-visible">
        <div className="relative opacity-0 group-hover:opacity-20 h-full w-full bg-[linear-gradient(0deg,_var(--default-yellow)_0%,_transparent_100%)] transition-opacity duration-250" />
        <div className="relative opacity-0 group-hover:opacity-75 w-full h-[0.1rem] bg-[linear-gradient(90deg,_var(--yellow-gradient-light)_0%,_var(--default-yellow)_50%,_var(--yellow-gradient-light)_100%)] transition-opacity duration-250" />
      </div>
      <p>{text}</p>
    </li>
  );
}
function SidebarButton({ text, action }: NavButtonProps) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchOutside = (e: TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setHovered(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setHovered(false);
      }
    };

    document.addEventListener("touchstart", handleTouchOutside);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => {
        setHovered(false);
        action();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      className="text-[1.5rem]/[2.5rem] font-bold transition-transform duration-150 cursor-pointer"
      style={{
        color: isHovered ? "var(--default-yellow)" : "var(--alternate-text)",
      }}
    >
      <div
        className="rounded-[1.5rem] h-full w-full p-[0.15rem]"
        style={{
          background: isHovered
            ? "linear-gradient(180deg, var(--box-gradient-light), var(--box-gradient-dark))"
            : "transparent",
        }}
      >
        <div
          className="h-full rounded-[1.4rem]"
          style={{
            backgroundColor: isHovered ? "var(--default-dark)" : "transparent",
          }}
        >
          <div
            className="rounded-[1.4rem] px-[1rem] py-[0.25rem] h-full"
            style={{
              backgroundColor: isHovered ? "#1e1e1e" : "transparent",
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
