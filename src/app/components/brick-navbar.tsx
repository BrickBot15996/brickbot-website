"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import Hamburger from "hamburger-react";
import { useGlobalContext } from "../global-context";
import { motion } from "framer-motion";
import { opacityFadeIn } from "@/app/components/animations";

export default function Navbar() {
  const { navbarAnimation } = useGlobalContext();

  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { setNavbarAnimation } = useGlobalContext();

  useEffect(() => {
    const changeNavbar = () => {
      if (pathname.startsWith("/projects") && pathname !== "/projects") return;
      setNavbarAnimation({
        color: `var(--default-yellow)`,
        colorLight: `var(--yellow-gradient-light)`,
      });
    };

    changeNavbar();
  }, [pathname, setNavbarAnimation]);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
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
    <motion.div
      variants={opacityFadeIn}
      initial="hidden"
      animate="visible"
      style={{ zIndex: 10000 }}
    >
      <header
        className="fixed top-0 h-[var(--navbar-height)] w-full bg-[linear-gradient(180deg,_var(--dark-transparent)_30%,_var(--accents-dark-transparent))] z-10000 flex justify-center items-center select-none transition-all duration-300 backdrop-blur"
        style={{
          height: isOpen && isMobile ? "100vh" : undefined,
        }}
      >
        {/* Desktop Navbar */}
        <ul className="hidden md:flex justify-center items-center w-full h-full">
          <NavbarButton
            text="BRICKLOG"
            action={() => router.push("/blog")}
            isActive={pathname.startsWith("/blog")}
            navbarAnimation={navbarAnimation}
          />
          <NavbarButton
            text="OUR TEAM"
            action={() => router.push("/our-team")}
            isActive={pathname.startsWith("/our-team")}
            navbarAnimation={navbarAnimation}
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
            isActive={pathname.startsWith("/projects")}
            navbarAnimation={navbarAnimation}
          />
          <NavbarButton
            text="SUPPORT US"
            action={() => router.push("/support-us")}
            isActive={pathname.startsWith("/support-us")}
            navbarAnimation={navbarAnimation}
          />
        </ul>

        {/* Mobile Navbar */}
        <div className="absolute top-0 left-0 flex justify-center items-center md:hidden h-[var(--navbar-height)] w-full">
          <Link
            href="/home"
            className="relative ml-[var(--sm-space-x)] mr-auto hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
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
          className="fixed top-[var(--navbar-height)] left-0 w-full h-[calc(100vh-var(--navbar-height))] flex flex-col md:hidden select-none transition-all duration-300"
          style={{
            height: isOpen && isMobile ? "100vh" : "var(--navbar-height)",
          }}
        >
          {isOpen && (
            <div
              className={`w-full h-full px-[var(--sm-space-x)] text-[var(--alternate-text)] flex flex-col ${
                isClosing
                  ? "animate-[fadeInDelay_0.2s_ease-in-out_0.1s_forwards]"
                  : "opacity-0 animate-[fadeInDelay_0.2s_ease-in-out_0.1s_forwards]"
              }`}
            >
              <h1
                className="my-[var(--sm-space-y)] px-[var(--sm-space-x)]"
                style={{ color: "var(--alternate-text)" }}
              >
                Menu
              </h1>
              <SidebarButton
                text="Home"
                action={() => {
                  router.push("/home");
                  handleClose();
                }}
                isActive={pathname.startsWith("/home")}
              />
              <SidebarButton
                text="Bricklog"
                action={() => {
                  router.push("/blog");
                  handleClose();
                }}
                isActive={pathname.startsWith("/blog")}
              />
              <SidebarButton
                text="Our Team"
                action={() => {
                  router.push("/our-team");
                  handleClose();
                }}
                isActive={pathname.startsWith("/our-team")}
              />
              <SidebarButton
                text="Projects"
                action={() => {
                  router.push("/projects");
                  handleClose();
                }}
                isActive={pathname.startsWith("/projects")}
              />
              <SidebarButton
                text="Support Us"
                action={() => {
                  router.push("/support-us");
                  handleClose();
                }}
                isActive={pathname.startsWith("/support-us")}
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
    </motion.div>
  );
}

type NavButtonProps = {
  text: string;
  action: () => void;
  isActive?: boolean;
  navbarAnimation?: {
    color: string;
    colorLight: string;
  };
};

function NavbarButton({
  text,
  action,
  isActive = false,
  navbarAnimation = {
    color: "var(--default-yellow)",
    colorLight: "var(--yellow-gradient-light)",
  },
}: NavButtonProps) {
  return (
    <li
      className="relative w-[10rem] lg:w-[12rem] h-full flex items-center justify-center cursor-pointer"
      onClick={action}
    >
      <div className="group absolute w-full h-[calc(100%+0.1rem)] overflow-visible flex flex-col items-center justify-end">
        <div
          className={`relative h-[0rem] w-[0rem] group-hover:h-full group-hover:w-full transition-all duration-300 opacity-20 ${
            isActive
              ? "w-full h-full opacity-30"
              : "w-[0rem] h-[0rem] group-hover:h-full opacity-20"
          }`}
          style={{
            background: `linear-gradient(0deg, ${navbarAnimation.color} 0%, transparent 100%)`,
          }}
        />
        <div
          className={`relative w-[0rem] group-hover:w-full h-[0.1rem] transition-all group-hover:duration-300 duration-600 opacity-75 ${
            isActive
              ? "w-full opacity-90"
              : "w-[0rem] group-hover:w-full opacity-75"
          }`}
          style={{
            background: `linear-gradient(90deg, ${navbarAnimation.colorLight} 0%, ${navbarAnimation.color} 50%, ${navbarAnimation.colorLight} 100%)`,
          }}
        />
      </div>
      <h5>{text}</h5>
    </li>
  );
}

function SidebarButton({ text, action, isActive = false }: NavButtonProps) {
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

  const shouldShowActiveStyle = isActive || isHovered;

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
        color: shouldShowActiveStyle
          ? "var(--default-yellow)"
          : "var(--alternate-text)",
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
