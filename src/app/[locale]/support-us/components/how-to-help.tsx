"use client";

import Button from "@/app/[locale]/components/brick-button";
import SimpleBox from "@/app/[locale]/components/simple-box";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/components/animations";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HowToHelpSection() {
  const t = useTranslations("SupportUs.HowToHelp");

  return (
    <section className="w-full h-auto gap-x-[var(--xl-space-x)] gap-y-[var(--xl-space-y)]">
      <div className="flex flex-col items-start justify-start w-full">
        <h2 className="mb-[var(--md-space-y)]">{t("title")}</h2>
        <p className="w-[100%] lg:w-[70%] mb-[var(--xl-space-y)]">
          {t("text")}
        </p>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-x-[var(--md-space-x)] gap-y-[var(--md-space-y)]">
          <AnimationWhenInView
            variants={defaultFadeIn}
            className=""
          >
            <RedirectTax />
          </AnimationWhenInView>

          <AnimationWhenInView
            variants={defaultFadeIn}
            className=""
          >
            <Donate />
          </AnimationWhenInView>

          <AnimationWhenInView
            variants={defaultFadeIn}
            className="col-span-1 sm:col-span-2"
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
      href="https://formular230.ro/"
      target="_blank"
      className="group cursor-pointer h-full"
    >
      <SimpleBox
        clickEffect={true}
        className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem]"
        style={{ height: "100%" }}
      >
        <div className="relative h-[4rem] lg:h-[4.5rem] xl:h-[5rem] aspect-1/1 w-auto mb-[calc(var(--sm-space-y)/2)]">
          <Image
            src="/support-us/230.svg"
            alt="230 Form Icon"
            fill
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
        <p>{t("text")}</p>
      </SimpleBox>
    </Link>
  );
}

function Donate() {
  const t = useTranslations("SupportUs.HowToHelp.Donate");
  return (
    <Link
      href="https://support.stripe.com/questions/how-to-accept-donations-through-stripe"
      target="_blank"
      className="group cursor-pointer h-full"
    >
      <SimpleBox
        clickEffect={true}
        className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem]"
        style={{ height: "100%" }}
      >
        <div className="relative h-[3rem] lg:h-[3.5rem] xl:h-[4rem] aspect-1/1 w-auto mb-[var(--sm-space-y)]">
          <Image
            src="/support-us/donate.svg"
            alt="Donate Icon"
            fill
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
        <p>{t("text")}</p>
      </SimpleBox>
    </Link>
  );
}

function Contract() {
  const [buttonsCol, setButtonsCol] = useState(false);
  const t = useTranslations("SupportUs.HowToHelp.Contracts");

  useEffect(() => {
    const handleResize = () => {
      setButtonsCol(window.innerWidth <= 500 || window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [buttonsCol]);
  return (
    <SimpleBox
      className="flex flex-col lg:flex-row items-start justify-start px-[1.5rem] py-[2rem] space-x-[var(--sm-space-x)]"
      style={{ height: "100%" }}
    >
      <div
        className={`flex flex-col items-start md:flex-[0_0_75%] 2xl:flex-[0_0_65%] mr-auto ${
          buttonsCol ? "mb-[var(--md-space-y)] md:mb-[0rem]" : ""
        }`}
      >
        <div className="relative h-[3rem] lg:h-[3.5rem] xl:h-[4rem] aspect-1/1 w-auto mb-[var(--sm-space-y)]">
          <Image
            src="/support-us/contract.svg"
            alt="Contract Icon"
            fill
            className="object-contain"
          />
        </div>
        <h3
          className="mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          {t("title")}
        </h3>
        <p>{t("text")}</p>
      </div>
      <div
        className={`w-full lg:w-auto md:flex-[0_0_25%] 2xl:flex-[0_0_33%] flex items-center justify-center
    ${
      buttonsCol
        ? "flex-col space-y-[var(--sm-space-y)]"
        : "flex-row space-x-[var(--sm-space-x)] mt-[var(--md-space-y)]"
    }
    lg:space-x-[0rem] lg:ml-auto lg:mt-auto`}
      >
        <Button
          text={t("sampleButton")}
          action={() => {}}
          style={{ width: "full" }}
          className="px-[1.82rem]"
        />
        <Button
          text={t("contactButton")}
          action={() => {}}
          style={{ width: "full" }}
          className="px-[2.35rem]"
        />
      </div>
    </SimpleBox>
  );
}
