import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { useGlobalContext } from "../global-context";
import { motion } from "framer-motion";
import { LanguageToggle } from "./brick-nav";

export default function DesktopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { navbarAnimation } = useGlobalContext();

  return (
    <div className="flex flex-row items-center justify-center h-full w-full overflow-visible">
      <DesktopButton
        textTag="BrickLog"
        isActive={pathname.includes("/blog")}
        action={() => {
          router.push("/blog");
        }}
        navbarAnimation={navbarAnimation}
      />
      <DesktopButton
        textTag="OurTeam"
        isActive={pathname.includes("/our-team")}
        action={() => {
          router.push("/our-team");
        }}
        navbarAnimation={navbarAnimation}
      />
      <Link
        href="/home"
        className="mx-[0.5rem] xl:mx-[1rem] hover:opacity-75 hover:scale-115 transition-transform duration-150 hover:translate-y-[0.15rem] hover:lg:translate-y-[0.275rem] active:opacity-100 active:scale-95 active:translate-y-[-0.8rem] active:lg:translate-y-[-0.12rem]"
      >
        <Image
          src="/brick-yellow.svg"
          alt="BrickBot Logo"
          priority
          width={928}
          height={502}
          className="h-[4rem] lg:h-[5rem] w-auto object-contain mt-[0.8rem] lg:mt-[1rem]"
        />
      </Link>
      <DesktopButton
        textTag="Projects"
        isActive={pathname.includes("/projects")}
        action={() => {
          router.push("/projects");
        }}
        navbarAnimation={navbarAnimation}
      />
      <DesktopButton
        textTag="SupportUs"
        isActive={pathname.includes("/support-us")}
        action={() => {
          router.push("/support-us");
        }}
        navbarAnimation={navbarAnimation}
      />
      <div className="absolute right-[var(--sm-space-x)]">
        <LanguageToggle />
      </div>
    </div>
  );
}

function DesktopButton({
  textTag,
  navbarAnimation,
  isActive,
  action,
}: {
  textTag: string;
  isActive: boolean;
  action: () => void;
  navbarAnimation: {
    color: string;
    colorLight: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("Nav.DesktopButtons");
  return (
    <div
      className="relative w-[9rem] lg:w-[10rem] xl:w-[12rem] h-full inline-flex items-center justify-center overflow-visible cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        action();
      }}
    >
      <motion.div
        initial={{
          height: "0rem",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={
          isActive || isHovered
            ? {
                height: "100%",
                transition: { duration: 0.3, ease: "easeIn" },
              }
            : {
                height: "0rem",
                transition: { duration: 0.3, ease: "easeOut" },
              }
        }
        className="absolute bottom-0 left-0 w-full"
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
          isActive || isHovered
            ? {
                width: "100%",
                transition: { duration: 0.3, ease: "easeOut" },
              }
            : {
                width: "0rem",
                transition: { duration: 0.5, ease: "easeIn" },
              }
        }
        className="absolute bottom-[calc(0rem-0.1rem)] h-[0.1rem]"
        style={{
          background: `linear-gradient(90deg, ${navbarAnimation.colorLight} 0%, ${navbarAnimation.color} 50%, ${navbarAnimation.colorLight} 100%)`,
          opacity: isActive ? "0.9" : "0.75",
        }}
      />
      <h5
        style={{
          color:
            isActive || isHovered
              ? navbarAnimation.color
              : "var(--alternate-text)",
        }}
      >
        {t(textTag).toUpperCase()}
      </h5>
    </div>
  );
}
