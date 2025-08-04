import Image from "next/image";

import Button from "../../../_components/brick-button";
import { opacityFadeIn } from "@/app/[locale]/_components/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { i18nPath } from "@/app/[locale]/_utils/redirectPath";
import { useLocale } from "@/app/[locale]/_hooks/use-locale";
import { useRouter } from "next/navigation";

export default function Banner() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Home.Banner");

  return (
    <section className="relative w-full h-[30rem] md:h-[40rem] lg:h-[calc(100vh-var(--navbar-height))]">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(0deg,_var(--default-dark)_5%,_transparent)] z-2" />
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-3">
        <div className="relative h-[5rem] w-[30rem] md:h-[7rem] md:w-[40rem] lg:h-[10rem] lg:w-[50rem] max-w-[80vw] mb-[var(--2xl-space-y)]">
          <Image
            src="/assets/banner-text.svg"
            alt="We build our future brick by brick!"
            fill
            priority
            className="object-contain select-none opacity-100 h-full w-full"
          />
        </div>
        <Button
          text={t("buttonText")}
          arrow={true}
          action={() => router.push(i18nPath(locale, "supportUs"))}
          className="px-[1.35rem] md:px-[1.55rem] lg:px-[1.75rem]"
        />
      </div>
      <motion.div
        variants={opacityFadeIn}
        initial="hidden"
        animate="visible"
        className="w-full h-full relative z-1"
      >
        <Image
          src="/assets/new-banner.webp"
          alt="BrickBot Website Banner"
          fill
          priority
          className="object-cover select-none opacity-10"
        />
      </motion.div>
    </section>
  );
}
