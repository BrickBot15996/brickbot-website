import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { useGlobalContext } from "../../global-context";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageToggle } from "./brick-nav";
import Box from "../brick-box";
import { ProjectProps, useProjectList } from "../../_data/projects-data";
import { useRouter } from "next/navigation";
import { i18nPath } from "../../_utils/redirectPath";
import { useLocale } from "../../_hooks/use-locale";

export default function DesktopNav() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const { navbarAnimation } = useGlobalContext();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row items-center justify-center h-full w-full overflow-visible"
    >
      <DesktopButton
        textTag="BrickLog"
        isActive={pathname.includes(i18nPath(locale, "blog"))}
        action={() => {
          router.push(i18nPath(locale, "blog"));
        }}
        navbarAnimation={navbarAnimation}
      />
      <DesktopButton
        textTag="OurTeam"
        isActive={pathname.includes(i18nPath(locale, "ourTeam"))}
        action={() => {
          router.push(i18nPath(locale, "ourTeam"));
        }}
        navbarAnimation={navbarAnimation}
      />
      <div
        onClick={() => {
          router.push(i18nPath(locale, "home"));
        }}
        className="mx-[0.5rem] xl:mx-[1rem] hover:opacity-75 hover:scale-115 transition-transform duration-150 hover:translate-y-[0.15rem] hover:lg:translate-y-[0.275rem] active:opacity-100 active:scale-95 active:translate-y-[-0.8rem] active:lg:translate-y-[-0.12rem] cursor-pointer"
      >
        <Image
          src="/assets/branding/brick-yellow.svg"
          alt="BrickBot Logo"
          priority
          fetchPriority="high"
          width={928}
          height={502}
          className="h-[4rem] lg:h-[5rem] w-auto object-contain mt-[0.8rem] lg:mt-[1rem]"
        />
      </div>
      <DesktopButton
        textTag="Projects"
        isActive={pathname.includes(i18nPath(locale, "projects"))}
        action={() => {
          router.push(i18nPath(locale, "projects"));
        }}
        navbarAnimation={navbarAnimation}
        popUp={<ProjectsPopUp />}
      />
      <DesktopButton
        textTag="SupportUs"
        isActive={pathname.includes(i18nPath(locale, "supportUs"))}
        action={() => {
          router.push(i18nPath(locale, "supportUs"));
        }}
        navbarAnimation={navbarAnimation}
      />
      <div className="absolute right-[var(--sm-space-x)]">
        <LanguageToggle />
      </div>
    </motion.div>
  );
}

function DesktopButton({
  textTag,
  navbarAnimation,
  isActive,
  action,
  popUp,
}: {
  textTag: string;
  isActive: boolean;
  action: () => void;
  popUp?: ReactNode;
  navbarAnimation: {
    color: string;
    colorLight: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);
  const pathname = usePathname();

  const t = useTranslations("Nav.DesktopButtons");

  useEffect(() => {
    setWasClicked(false);
  }, [pathname]);

  return (
    <div
      className="relative w-[9rem] lg:w-[10rem] xl:w-[12rem] h-full inline-flex items-center justify-center overflow-visible"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        action();
        setWasClicked(true);
      }}
    >
      <motion.div
        initial={{
          height: "0rem",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={
          isActive || isHovered || wasClicked
            ? {
                height: "100%",
                transition: { duration: 0.3, ease: "easeIn" },
              }
            : {
                height: "0rem",
                transition: { duration: 0.3, ease: "easeOut" },
              }
        }
        className="absolute bottom-0 left-0 w-full cursor-pointer transition-opacity duration-200"
        style={{
          background: `linear-gradient(0deg, ${navbarAnimation.color} 0%, transparent 60%)`,
          opacity: isActive ? "0.2" : "0.15",
        }}
      />
      <motion.div
        initial={{
          width: "0rem",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={
          isActive || isHovered || wasClicked
            ? {
                width: "100%",
                transition: { duration: 0.3, ease: "easeOut" },
              }
            : {
                width: "0rem",
                transition: { duration: 0.4, ease: "easeIn" },
              }
        }
        className="absolute bottom-[calc(0rem-0.1rem)] h-[0.1rem] pointer-events-none transition-opacity duration-200"
        style={{
          background: `linear-gradient(90deg, ${navbarAnimation.colorLight} 0%, ${navbarAnimation.color} 50%, ${navbarAnimation.colorLight} 100%)`,
          opacity: isActive ? "0.9" : "0.75",
        }}
      />
      <h5
        className="cursor-pointer"
        style={{
          color:
            isActive || isHovered || wasClicked
              ? navbarAnimation.color
              : "var(--alternate-text)",
        }}
      >
        {t(textTag).toUpperCase()}
      </h5>

      <AnimatePresence>
        {popUp && isHovered && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
              visibility: "hidden",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
            animate={{
              scale: 1,
              opacity: 1,
              visibility: "visible",
              transition: { duration: 0.1, ease: "easeOut" },
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              visibility: "hidden",
              transition: { duration: 0.1, ease: "easeIn" },
            }}
            className="absolute left-0 z-10000 origin-top overflow-hidden"
            style={{
              top: "calc(var(--navbar-height))",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {popUp}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectsPopUp() {
  const projectList = useProjectList();

  return (
    <div className="pt-[1rem] w-[25rem] h-fit overflow-hidden">
      <Box className="flex flex-col py-[var(--sm-space-y)] space-y-[var(--sm-space-y)] px-[var(--md-space-x)]">
        {projectList.map((project) => {
          return (
            <DesktopProjectButton
              key={project.extendedName}
              project={project}
            />
          );
        })}
      </Box>
    </div>
  );
}

function DesktopProjectButton({ project }: { project: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getAnimationState = () => {
    if (isTouchScreen)
      return pathname.includes(project.pagePath)
        ? "clicked"
        : isClicked
        ? "clicked"
        : "default";
    else
      return pathname.includes(project.pagePath)
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
      window.removeEventListener("touchend", handleRelease);
    };
  }, [isClicked]);

  return (
    <div
      className="flex flex-row items-center justify-start space-x-[var(--sm-space-x)] w-full h-full cursor-pointer"
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
        router.push(project.pagePath);
      }}
    >
      <div className="relative h-[2rem] w-auto aspect-square">
        <div
          className="w-full h-full transition-colors duration-200"
          style={{
            backgroundColor:
              getAnimationState() == "clicked" ||
              getAnimationState() == "hovered"
                ? project.textColor
                : "white",
            mask: `url(${project.iconPath}) no-repeat center`,
            maskSize: "contain",
            WebkitMask: `url(${project.iconPath}) no-repeat center`,
            WebkitMaskSize: "contain",
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center h-full">
        <h6
          className="transition-colors duration-200"
          style={{
            color:
              getAnimationState() == "clicked" ||
              getAnimationState() == "hovered"
                ? project.textColor
                : "var(--alternate-text)",
          }}
        >
          {project.name}
        </h6>
        <h6
          className="transition-colors duration-200"
          style={{
            fontWeight: 500,
            color:
              getAnimationState() == "clicked" ||
              getAnimationState() == "hovered"
                ? project.textColor
                : "var(--default-text)",
          }}
        >
          {project.subtitle}
        </h6>
      </div>
    </div>
  );
}
