"use client";

import Button from "@/app/[locale]/_components/brick-button";
import SimpleBox from "@/app/[locale]/_components/simple-box";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/_components/animations";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LoadFadeImage from "@/app/[locale]/_components/fade-in-on-load-image";
import { useRouter } from "next/navigation";
import { i18nPath } from "@/app/[locale]/_utils/redirectPath";
import { useLocale } from "@/app/[locale]/_hooks/use-locale";

export default function HowToHelpSection() {
  const t = useTranslations("SupportUs.HowToHelp");

  return (
    <section className="w-full h-auto gap-x-[var(--xl-space-x)] gap-y-[var(--xl-space-y)]">
      <div className="flex flex-col items-start justify-start w-full">
        <h2 className="mb-[var(--md-space-y)]">{t("title")}</h2>
        <p className="w-[100%] lg:w-[70%] mb-[var(--xl-space-y)]">
          {t("text")}
        </p>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-19 gap-x-[var(--md-space-x)] gap-y-[var(--md-space-y)]">
          <AnimationWhenInView
            variants={defaultFadeIn}
            className="2xl:col-span-5"
          >
            <RedirectTax />
          </AnimationWhenInView>

          <AnimationWhenInView
            variants={defaultFadeIn}
            className="2xl:col-span-5"
          >
            <Donate />
          </AnimationWhenInView>

          <AnimationWhenInView
            variants={defaultFadeIn}
            className="col-span-1 sm:col-span-2 2xl:col-span-9"
          >
            <Contract />
          </AnimationWhenInView>
        </div>
      </div>
    </section>
  );
}

function RedirectTax() {
  const t = useTranslations("SupportUs.HowToHelp.Redirect");
  return (
    <Link
      href="https://formular230.ro/asociatia-brickbot"
      target="_blank"
      className="group cursor-pointer h-full"
    >
      <SimpleBox
        hoverEffect={true}
        className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem]"
        style={{ height: "100%" }}
      >
        <div className="relative h-[4rem] lg:h-[4.5rem] xl:h-[5rem] aspect-1/1 w-auto mb-[calc(var(--sm-space-y)/2)]">
          <LoadFadeImage
            src="/assets/support-us/230.svg"
            alt="230 Form Icon"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h3
          className="group-hover:underline mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          {t("title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="inline-flex whitespace-nowrap items-center group-hover:underline">
            {t("title").split(" ").slice(-1)}
            <HiArrowNarrowRight className="h-auto w-auto fill-[var(--default-yellow)] inline ml-[0.5rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-all duration-200" />
          </span>
        </h3>
        <p className="support-us-card-text">{t("text")}</p>
      </SimpleBox>
    </Link>
  );
}

function Donate() {
  const t = useTranslations("SupportUs.HowToHelp.Donate");
  return (
    <Link
      href=""
      target="_blank"
      className="group cursor-pointer h-full"
    >
      <SimpleBox
        hoverEffect={true}
        className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem]"
        style={{ height: "100%" }}
      >
        <div className="relative h-[3rem] lg:h-[3.5rem] xl:h-[4rem] aspect-1/1 w-auto mb-[var(--sm-space-y)]">
          <LoadFadeImage
            src="/assets/support-us/donate.svg"
            alt="Donate Icon"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h3
          className="group-hover:underline mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          {t("title")}
          <HiArrowNarrowRight className="h-auto w-auto fill-[var(--default-yellow)] inline ml-[0.5rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-all duration-200" />
        </h3>
        <p className="support-us-card-text">{t("text")}</p>
      </SimpleBox>
    </Link>
  );
}

export function Contract() {
  const [buttonsCol, setButtonsCol] = useState(false);
  const t = useTranslations("SupportUs.HowToHelp.Contracts");
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const handleResize = () => {
      setButtonsCol(window.innerWidth <= 530);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SimpleBox
      className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem] space-x-[var(--sm-space-x)]"
      style={{ height: "100%" }}
    >
      <div
        className={`flex flex-col items-start md:flex-[0_0_68%] 2xl:flex-[0_0_58%] mr-auto ${
          buttonsCol ? "mb-[var(--md-space-y)] md:mb-[0rem]" : ""
        }`}
      >
        <div className="relative h-[3rem] lg:h-[3.5rem] xl:h-[4rem] aspect-1/1 w-auto mb-[var(--sm-space-y)]">
          <LoadFadeImage
            src="/assets/support-us/contract.svg"
            alt="Contract Icon"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h3
          className="mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          {t("title")}
        </h3>
        <p className="support-us-card-text mt-auto">{t("text")}</p>
      </div>

      <div
        className={`w-full flex items-center justify-center mr-auto
        ${
          buttonsCol
            ? "flex-col space-y-[var(--sm-space-y)] ml-auto mr-auto justify-center"
            : "flex-row space-x-[var(--md-space-x)] justify-start mt-[var(--sm-space-y)]"
        }`}
      >
        <Button
          text={t("sampleButton")}
          action={() => {
            window.open("/assets/contract-brickbot.pdf", "_blank");
          }}
          className="px-[2rem] flex-[0_0_30%]"
          width={buttonsCol ? "14rem" : ""}
        />
        <Button
          text={t("contactButton")}
          action={() => {
            router.push(i18nPath(locale, "contact"));
          }}
          className="px-[1.5rem] sm:px-[2rem]"
          width={buttonsCol ? "14rem" : ""}
        />
      </div>
    </SimpleBox>
  );
}
