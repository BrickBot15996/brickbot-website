import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DefaultMenu from "./mobile-menus/default-menu";
import ProjectMenu from "./mobile-menus/project-menu";
import { usePathname } from "next/navigation";
import { i18nPath } from "../../_utils/redirectPath";
import { useLocale } from "../../_hooks/use-locale";
import { CDN_LINK } from "../../constants";

export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [skipInitialAnimation, setSkipInitialAnimation] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("default");
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    if (!isOpen) {
      setSkipInitialAnimation(false);
      setActiveMenu("default");
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center justify-start w-full h-full"
    >
      <div className="flex flex-row items-start justify-center w-full h-auto">
        <Link
          href={i18nPath(locale, "home")}
          className="relative ml-[var(--sm-space-x)] mr-auto hover:opacity-75 active:opacity-100 active:scale-93 transition-transform duration-150"
        >
          <Image
            src={CDN_LINK + "/website/branding/brick-mobile-logo.svg"}
            alt="BrickBot Logo"
            priority
            fetchPriority="high"
            width={600}
            height={75}
            className="h-[2rem] w-auto object-contain inline-block mr-[0.5rem] mt-[calc((var(--navbar-height)-2rem)/2)]"
          />
        </Link>
        <div className="relative ml-auto mr-[0.1rem] mt-[0.45rem] cursor-pointer fill-[var(--default-yellow)] h-full hover:opacity-75 active:opacity-100 transition-transform duration-150">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            onToggle={() => {
              setSkipInitialAnimation(false);
            }}
            label="Expand navigation menu"
            color="var(--default-yellow)"
            size={32}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {activeMenu === "default" && (
          <motion.div
            key="default"
            initial={{
              opacity: 0,
              translateX: skipInitialAnimation ? -30 : 0,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{
              opacity: 0,
              translateX: -30,
            }}
            transition={{
              translateX: { type: "spring", bounce: 0.3, visualDuration: 0.2 },
              opacity: { ease: "linear", duration: 0.15 },
            }}
            className="relative flex flex-row w-full h-auto px-[var(--md-space-x)] mt-[var(--lg-space-y)]"
          >
            <DefaultMenu
              isOpen={isOpen}
              setActiveMenu={setActiveMenu}
              skipInitialAnimation={skipInitialAnimation}
              setSkipInitialAnimation={setSkipInitialAnimation}
            />
          </motion.div>
        )}
        {activeMenu === "projects" && (
          <motion.div
            key="projects"
            initial={{
              opacity: 0,
              translateX: skipInitialAnimation ? 30 : 0,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{
              opacity: 0,
              translateX: 30,
            }}
            transition={{
              translateX: { type: "spring", bounce: 0.3, visualDuration: 0.2 },
              opacity: { ease: "linear", duration: 0.15 },
            }}
            className="relative flex flex-row w-full h-auto px-[var(--md-space-x)] mt-[var(--lg-space-y)]"
          >
            <ProjectMenu
              isOpen={isOpen}
              setActiveMenu={setActiveMenu}
              skipInitialAnimation={skipInitialAnimation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function MobileButton({
  text,
  action,
  extraAction,
  skipInitialAnimation,
  isActive = false,
  translateY = 30,
}: {
  text: string;
  action: () => void;
  extraAction?: () => void;
  skipInitialAnimation: boolean;
  setSkipInitialAnimation?: Dispatch<SetStateAction<boolean>>;
  isActive?: boolean;
  translateY: number;
}) {
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

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!extraAction) {
      action();
      return;
    }

    const buttonElement = e.currentTarget as HTMLElement;
    const rect = buttonElement.getBoundingClientRect();

    let clientX: number;
    if ("touches" in e) {
      clientX = e.touches[0]?.clientX || e.changedTouches[0]?.clientX || 0;
    } else {
      clientX = e.clientX;
    }

    const clickX = clientX - rect.left;
    const buttonWidth = rect.width;

    const arrowWidth = 48;

    if (clickX >= buttonWidth - arrowWidth) {
      extraAction();
    } else {
      action();
    }
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
      window.removeEventListener("touchend", handleRelease);
    };
  }, [isClicked]);

  return (
    <motion.div
      initial={
        skipInitialAnimation
          ? {
              opacity: 1,
              translateY: 0,
            }
          : {
              opacity: 0,
              translateY: -translateY,
              transition: { duration: 0.05, ease: "easeInOut" },
            }
      }
      animate={{ opacity: 1, translateY: 0 }}
      exit={{
        opacity: 0,
        translateY: -translateY,
        transition: { duration: 0.05, ease: "easeInOut" },
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
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
      onClick={handleClick}
    >
      <motion.div
        variants={sidebarButtonBackgroundAnimation}
        initial="default"
        animate={getAnimationState()}
        className="relative flex flex-row items-center g-[var(--default-dark)] rounded-full border-[0.1rem]"
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
        {extraAction && (
          <MdKeyboardArrowRight
            className="h-auto w-10 ml-auto mr-[0.4rem] aspect-square"
            style={
              getAnimationState() == "clicked" ||
              getAnimationState() == "hovered"
                ? { fill: "var(--default-yellow)" }
                : { fill: "var(--alternate-text)" }
            }
          />
        )}
        <motion.div
          variants={sidebarButtonOverlayAnimation}
          initial="default"
          animate={getAnimationState()}
          className="absolute inset-0 w-full h-full rounded-full bg-white outline-[0.1rem] outline-white"
        />
      </motion.div>
    </motion.div>
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
