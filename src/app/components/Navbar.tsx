"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";

type NavButtonProps = {
  text: string;
  path: string;
  action?: () => void;
};

function NavbarButton({ text, path }: NavButtonProps) {
  return (
    <li className="relative w-[10rem] lg:w-[12rem] h-full flex items-center justify-center cursor-pointer">
      <div className="absolute w-full h-full overflow-visible opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="relative opacity-20 h-full w-full bg-[linear-gradient(0deg,_#ffd100_0%,_transparent_100%)]" />
        <div className="relative opacity-75 w-full h-[0.1rem] bg-[linear-gradient(90deg,_#ffd1003f_0%,_#ffd100_50%,_#ffd1003f_100%)]" />
      </div>
      <Link href={path}>{text}</Link>
    </li>
  );
}

function SidebarButton({ text, path, action }: NavButtonProps) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

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
    <Link
      ref={ref}
      href={path}
      onClick={() => {
        setHovered(false);
        if (action) action();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      className="text-[1.5rem]/[2.5rem] font-bold transition-transform duration-150"
      style={{
        color: isHovered ? "#ffd100" : "#ffffff",
      }}
    >
      <div
        className="rounded-[1.5rem] h-full w-full p-[0.15rem]"
        style={{
          background: isHovered
            ? "linear-gradient(180deg, #FFFFFF32, #66666632)"
            : "transparent",
        }}
      >
        <div
          className="h-full rounded-[1.4rem]"
          style={{
            backgroundColor: isHovered ? "rgba(18,18,18,1.0)" : "transparent",
          }}
        >
          <div
            className="rounded-[1.4rem] px-[1rem] py-[0.25rem] h-full"
            style={{
              backgroundColor: isHovered ? "#ffffff05" : "transparent",
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <>
      <header
        className="fixed top-0 h-[3.5rem] lg:h-[4rem] w-full bg-[rgba(18,18,18,0.8)] z-[100] flex justify-center items-center select-none transition-all duration-200 backdrop-blur"
        style={{
          height: isOpen && isMobile ? "100vh" : undefined,
        }}
      >
        {/* Desktop Navbar */}
        <ul className="hidden md:flex justify-center items-center md:text-[#ffffff] font-bold text-[1.2rem] lg:text-[1.4rem] w-full h-full">
          <NavbarButton
            text="BRICKLOG"
            path="/tbd"
          />
          <NavbarButton
            text="OUR TEAM"
            path="/achievements"
          />
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
          <NavbarButton
            text="PROJECTS"
            path="/resources"
          />
          <NavbarButton
            text="SUPPORT US"
            path="/support-us"
          />
        </ul>

        {/* Mobile Navbar */}
        <div className="absolute top-0 left-0 flex justify-center items-center md:hidden h-[3.5rem] lg:h-[4rem] w-full">
          <Link
            href="/home"
            className="relative ml-[1rem] mr-auto hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
          >
            <Image
              src="/brick_yellow.png"
              alt="BrickBot Logo"
              priority
              width={1325}
              height={151}
              className="h-[2rem] w-auto object-contain inline-block mr-[0.5rem]"
            />
            <Image
              src="/brickbot_text.png"
              alt="BrickBot Text Logo"
              priority
              width={928}
              height={502}
              className="h-[1.25rem] w-auto object-contain inline-block"
            />
          </Link>
          <div className="relative ml-auto mr-[0.1rem] mt-[0.4rem] cursor-pointer fill-[#ffd100] h-full hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#ffd100"
              size={24}
            />
          </div>
        </div>
        {/* Mobile Sidebar Overlay */}
        <div
          className="fixed top-[3.5rem] left-0 w-full h-[calc(100vh-3rem)] z-[100] flex flex-col md:hidden select-none transition-all duration-200"
          style={{
            height: isOpen && isMobile ? "100vh" : "3.5rem",
            visibility: isOpen && isMobile ? "visible" : "hidden",
          }}
        >
          {isOpen && (
            <div
              className={`w-full h-full px-[1rem] text-[#ffffff] flex flex-col ${
                isClosing
                  ? "animate-[fadeOut_0.2s_ease-in-out_forwards]"
                  : "opacity-0 animate-[fadeInDelay_0.15s_ease-in-out_0.05s_forwards]"
              }`}
            >
              <h1 className="text-[2.25rem] font-extrabold text-[#ffffff] mb-[1rem] mt-[1.5rem] px-[1rem]">
                Menu
              </h1>
              <SidebarButton
                text="Home"
                path="/home"
                action={handleClose}
              />
              <SidebarButton
                text="Bricklog"
                path="/tbd"
                action={handleClose}
              />
              <SidebarButton
                text="Our Team"
                path="/achievements"
                action={handleClose}
              />
              <SidebarButton
                text="Projects"
                path="/resources"
                action={handleClose}
              />
              <SidebarButton
                text="Support Us"
                path="/support-us"
                action={handleClose}
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
