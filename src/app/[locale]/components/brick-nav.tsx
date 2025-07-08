import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "../global-context";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DesktopNav from "./brick-desktop-nav";
import MobileNav from "./brick-mobile-nav";
import { useLocale } from "next-intl";
import { useScrollLock } from "../hooks/lock-scroll";

export default function Nav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { hideNavbar, setNavbarAnimation } = useGlobalContext();

  useScrollLock(isOpen && isMobile);

  useEffect(() => {
    const changeNavbar = () => {
      if (pathname.includes("/projects") && !pathname.endsWith("/projects"))
        return;
      setNavbarAnimation({
        color: `var(--default-yellow)`,
        colorLight: `var(--yellow-gradient-light)`,
      });
    };

    changeNavbar();
  }, [pathname, setNavbarAnimation]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 880;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {!hideNavbar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            initial={{
              height: "var(--navbar-height)",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            animate={
              isOpen && isMobile
                ? { height: "100vh" }
                : { height: "var(--navbar-height)" }
            }
            className="fixed top-0 w-full h-[var(--navbar-height)] bg-[linear-gradient(180deg,_var(--dark-transparent)_30%,_var(--accents-dark-transparent))] z-10000 flex justify-center items-center select-none backdrop-blur overflow-visible"
          >
            {isMobile && (
              <MobileNav
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
            {!isMobile && <DesktopNav />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageToggle = () => {
    const newLocale = locale === "en" ? "ro" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <div
      className="group relative w-full h-full cursor-pointer"
      onClick={handleLanguageToggle}
    >
      <div className="absolute inset-0 transition-opacity duration-200 bg-[#1A1A1A] border-[#5d5d5d] rounded-full border-[0.15rem]">
        <div className="w-full h-full bg-[#ffffff] opacity-0 group-hover:opacity-5 group-active:opacity-10 rounded-full" />
      </div>

      <div
        className="relative z-2 h-full w-full px-[1.2rem] text-[#5D5D5D] py-[0.1rem] font-semibold"
        style={{ fontSize: "1.4rem" }}
      >
        {locale == "en" ? "RO" : "EN"}
      </div>
    </div>
  );
}
