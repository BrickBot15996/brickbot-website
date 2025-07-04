"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Hamburger from "hamburger-react";
import { useGlobalContext } from "../global-context";
import { motion, Variants } from "framer-motion";

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
    <div>
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
          <li className="mx-[1.5rem] lg:mx-[2rem] hover:opacity-75 hover:scale-115 transition-transform duration-150 hover:translate-y-[0.15rem] hover:lg:translate-y-[0.275rem] active:opacity-100 active:scale-95 active:translate-y-[-0.10rem] active:lg:translate-y-[-0.2rem]">
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
              className={`w-full h-full px-[var(--sm-space-x)] text-[var(--alternate-text)] flex flex-col space-y-[var(--sm-space-y)] ${
                isClosing
                  ? "animate-[fadeInDelay_0.2s_ease-in-out_0.1s_forwards]"
                  : "opacity-0 animate-[fadeInDelay_0.2s_ease-in-out_0.1s_forwards]"
              }`}
            >
              <h1
                className="mt-[var(--sm-space-y)] mb-[var(--md-space-y)] px-[var(--sm-space-x)]"
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
    </div>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative w-[10rem] lg:w-[12rem] h-full flex items-center justify-center cursor-pointer"
      onClick={action}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="group absolute w-full h-[calc(100%+0.1rem)] overflow-visible flex flex-col items-center justify-end">
        <div
          className={`relative h-[0rem] group-hover:h-full w-full transition-all duration-300 ${
            isActive ? "h-full opacity-20" : "h-[0rem] opacity-15"
          }`}
          style={{
            background: `linear-gradient(0deg, ${navbarAnimation.color} 0%, transparent 60%)`,
          }}
        />
        <div
          className={`relative w-[0rem] group-hover:w-full h-[0.1rem] transition-all group-hover:duration-300 duration-600 ${
            isActive
              ? "w-full opacity-90"
              : "w-[0rem] group-hover:w-full opacity-75"
          }`}
          style={{
            background: `linear-gradient(90deg, ${navbarAnimation.colorLight} 0%, ${navbarAnimation.color} 50%, ${navbarAnimation.colorLight} 100%)`,
          }}
        />
      </div>
      <h5
        style={{
          color:
            isActive || isHovered
              ? navbarAnimation.color
              : "var(--alternate-text)",
        }}
      >
        {text}
      </h5>
    </li>
  );
}

function SidebarButton({ text, action, isActive = false }: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  const getAnimationState = () => {
    if (isTouchScreen)
      return isActive ? "clicked" : isClicked ? "clicked" : "default";
    else
      return isActive
        ? "clicked"
        : isClicked
        ? "clicked"
        : isHovered
        ? "hovered"
        : "default";
  };

  useEffect(() => {
    if (!isClicked) return;

    const handleRelease = () => {
      setIsClicked(false);
    };

    window.addEventListener("mouseup", handleRelease);
    window.addEventListener("touchend", handleRelease);
    return () => {
      window.removeEventListener("mouseup", handleRelease);
    };
  }, [isClicked]);

  return (
    <div
      className="relative w-full h-auto cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseDown={() => {
        setIsClicked(true);
        setIsTouchScreen(false);
      }}
      onTouchStart={() => {
        setIsClicked(true);
        setIsTouchScreen(true);
      }}
      onClick={() => {
        action();
      }}
    >
      <motion.div
        variants={sidebarButtonBackgroundAnimation}
        initial="default"
        animate={getAnimationState()}
        className="relative bg-[var(--default-dark)] rounded-full border-[0.1rem]"
      >
        <motion.div
          initial={{ color: "var(--alternate-text)" }}
          animate={
            getAnimationState() == "clicked" || getAnimationState() == "hovered"
              ? { color: "var(--default-yellow)" }
              : { color: "var(--alternate-text)" }
          }
          className="text-[1.5rem]/[2.5rem] font-bold transition-transform duration-150 cursor-pointer px-[1.15rem] py-[0.25rem]"
        >
          {text}
        </motion.div>
        <motion.div
          variants={sidebarButtonOverlayAnimation}
          initial="default"
          animate={getAnimationState()}
          className="absolute inset-0 w-full h-full rounded-full bg-white outline-[0.1rem] outline-white"
        />
      </motion.div>
    </div>
  );
}

export const sidebarButtonBackgroundAnimation: Variants = {
  default: {
    background: "transparent",
    borderColor: "transparent",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hovered: {
    background: "#121212",
    borderColor: "#121212",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  clicked: {
    background: "#121212",
    borderColor: "#333333",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const sidebarButtonOverlayAnimation: Variants = {
  default: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hovered: {
    opacity: 0.035,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  clicked: {
    opacity: 0.07,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
