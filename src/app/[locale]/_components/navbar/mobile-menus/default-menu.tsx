import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageToggle } from "../brick-nav";
import { MobileButton } from "../brick-mobile-nav";
import { useLocale } from "@/app/[locale]/_hooks/use-locale";
import { i18nPath } from "@/app/[locale]/_utils/redirectPath";

export default function DefaultMenu({
  isOpen,
  setActiveMenu,
  skipInitialAnimation,
  setSkipInitialAnimation,
}: {
  isOpen: boolean;
  setActiveMenu?: Dispatch<SetStateAction<string>>;
  skipInitialAnimation: boolean;
  setSkipInitialAnimation?: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <div className="flex flex-col items-center justify-start w-full h-full space-y-[var(--sm-space-y)]">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="menu-header"
              initial={
                skipInitialAnimation
                  ? {
                      opacity: 1,
                      translateY: 0,
                    }
                  : {
                      opacity: 0,
                      translateY: -30,
                      transition: { duration: 0.05, ease: "easeInOut" },
                    }
              }
              animate={{ opacity: 1, translateY: 0 }}
              exit={{
                opacity: 0,
                translateY: -30,
                transition: { duration: 0.05, ease: "easeInOut" },
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="relative flex flex-row w-full h-auto px-[var(--sm-space-x)] mb-[var(--md-space-y)]"
            >
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
            <MobileButton
              text={t("MobileButtons.Home")}
              action={() => {
                router.push(i18nPath(locale, "home"));
              }}
              skipInitialAnimation={skipInitialAnimation}
              isActive={pathname.split("/").length == 2}
              translateY={60}
            />
            <MobileButton
              text={t("MobileButtons.BrickLog")}
              action={() => {
                router.push(i18nPath(locale, "blog"));
              }}
              skipInitialAnimation={skipInitialAnimation}
              isActive={pathname.includes(i18nPath(locale, "blog"))}
              translateY={90}
            />
            <MobileButton
              text={t("MobileButtons.OurTeam")}
              action={() => {
                router.push(i18nPath(locale, "ourTeam"));
              }}
              skipInitialAnimation={skipInitialAnimation}
              isActive={pathname.includes(i18nPath(locale, "ourTeam"))}
              translateY={120}
            />
            <MobileButton
              text={t("MobileButtons.Projects")}
              action={() => {
                router.push(i18nPath(locale, "projects"));
              }}
              extraAction={() => {
                if (setActiveMenu) setActiveMenu("projects");
                if (setSkipInitialAnimation) setSkipInitialAnimation(true);
              }}
              skipInitialAnimation={skipInitialAnimation}
              setSkipInitialAnimation={setSkipInitialAnimation!}
              isActive={pathname.includes(i18nPath(locale, "projects"))}
              translateY={150}
            />
            <MobileButton
              text={t("MobileButtons.SupportUs")}
              action={() => {
                router.push(i18nPath(locale, "supportUs"));
              }}
              skipInitialAnimation={skipInitialAnimation}
              isActive={pathname.includes(i18nPath(locale, "supportUs"))}
              translateY={180}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
