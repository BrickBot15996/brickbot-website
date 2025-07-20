import { useTranslations } from "next-intl";
import { LanguageToggle } from "../brick-nav";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectProps, useProjectList } from "../../../_data/projects-data";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function ProjectMenu({
  isOpen,
  setActiveMenu,
  skipInitialAnimation,
}: {
  isOpen: boolean;
  setActiveMenu: Dispatch<SetStateAction<string>>;
  skipInitialAnimation: boolean;
}) {
  const t = useTranslations("Projects");
  const projectList = useProjectList();

  return (
    <div className="flex flex-col items-center justify-start w-full h-full space-y-[var(--sm-space-y)]">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="projects-menu"
              initial={
                skipInitialAnimation
                  ? { opacity: 1, translateY: 0 }
                  : {
                      opacity: 0,
                      translateY: -30,
                    }
              }
              animate={{ opacity: 1, translateY: 0 }}
              exit={{
                opacity: 0,
                translateY: -30,
                transition: { duration: 0.05, ease: "easeInOut" },
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="relative flex flex-row items-center w-full h-auto px-[var(--sm-space-x)] mb-[var(--md-space-y)]"
            >
              <MdKeyboardArrowLeft
                onClick={() => {
                  if (setActiveMenu) setActiveMenu("default");
                }}
                className="fill-[var(--alternate-text)] w-10 h-auto aspect-square mr-[1rem] cursor-pointer"
              />
              <h2
                className="mr-auto"
                style={{ color: "var(--alternate-text)" }}
              >
                {t("title")}
              </h2>
              <div className="ml-auto w-fit h-fit">
                <LanguageToggle />
              </div>
            </motion.div>
            <div className="flex flex-col items-start w-full justify-center space-y-[var(--md-space-y)] px-[var(--sm-space-x)]">
              {projectList.map((project, index) => {
                return (
                  <MobileProjectButton
                    key={project.name}
                    skipInitialAnimation={skipInitialAnimation}
                    translateY={30 * (index + 2)}
                    project={project}
                  />
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileProjectButton({
  project,
  skipInitialAnimation = false,
  translateY = 30,
}: {
  project: ProjectProps;
  skipInitialAnimation?: boolean;
  translateY: number;
}) {
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
    <motion.div
      key="projects-menu"
      initial={
        skipInitialAnimation
          ? { opacity: 1, translateY: 0 }
          : {
              opacity: 0,
              translateY: -translateY,
            }
      }
      animate={{ opacity: 1, translateY: 0 }}
      exit={{
        opacity: 0,
        translateY: -translateY,
        transition: { duration: 0.05, ease: "easeInOut" },
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
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
      <div className="relative h-[3rem] w-auto aspect-square p-[0.3rem]">
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
        <h5
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
        </h5>
        <h5
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
        </h5>
      </div>
    </motion.div>
  );
}
