"use client";

import Button from "@/app/[locale]/components/brick-button";
import SimpleBox from "@/app/[locale]/components/simple-box";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/components/animations";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { RiFacebookFill, RiInstagramLine, RiMailFill } from "react-icons/ri";
import { createPortal } from "react-dom";

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
        hoverEffect={true}
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
          {t("title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="inline-flex whitespace-nowrap items-center group-hover:underline">
            {t("title").split(" ").slice(-1)}
            <HiArrowNarrowRight className="h-auto w-auto fill-[var(--default-yellow)] inline ml-[0.5rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-all duration-200" />
          </span>
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
        hoverEffect={true}
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

export function Contract() {
  const [buttonsCol, setButtonsCol] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("SupportUs.HowToHelp.Contracts");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setButtonsCol(window.innerWidth <= 520 || window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPopUpOpen) {
      const calculatePosition = () => {
        if (!buttonRef.current || !popupRef.current) return;
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const popupRect = popupRef.current.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        setPopupPosition({
          top: buttonRect.bottom + window.scrollY + 8,
          left: buttonCenterX - popupRect.width / 2 + window.scrollX,
        });
      };
      calculatePosition();

      window.addEventListener("resize", calculatePosition);
      window.addEventListener("scroll", calculatePosition, { passive: true });
      return () => {
        window.removeEventListener("resize", calculatePosition);
        window.removeEventListener("scroll", calculatePosition);
      };
    }
  }, [isPopUpOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsPopUpOpen(false);
      }
    };
    if (isPopUpOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPopUpOpen]);

  return (
    <SimpleBox
      className="flex flex-col lg:flex-row items-start justify-start px-[1.5rem] py-[2rem] space-x-[var(--sm-space-x)]"
      style={{ height: "100%" }}
    >
      <div
        className={`flex flex-col items-start md:flex-[0_0_68%] 2xl:flex-[0_0_58%] mr-auto ${
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
        className={`w-full lg:w-auto lg:flex-[0_0_30%] 2xl:flex-[0_0_40%] flex items-center justify-center
        ${
          buttonsCol
            ? "flex-col space-y-[var(--sm-space-y)] ml-auto mr-auto lg:mr-0 max-w-[15rem] lg:max-w-full"
            : "flex-row space-x-[var(--sm-space-x)] mt-[var(--md-space-y)]"
        }
        lg:space-x-[0rem] lg:ml-auto lg:mt-auto`}
      >
        <Button
          text={t("sampleButton")}
          action={() => {
            window.open("/contract-brickbot.pdf", "_blank");
          }}
          width="100%"
        />
        <Button
          ref={buttonRef}
          text={t("contactButton")}
          action={() => {
            if (isPopUpOpen) {
              setIsPopUpOpen(false);
            } else {
              setPopupPosition(null);
              setIsPopUpOpen(true);
            }
          }}
          width="100%"
        />
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isPopUpOpen && (
              <motion.div
                ref={popupRef}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{
                  scale: popupPosition ? 1 : 0.95,
                  opacity: popupPosition ? 1 : 0,
                }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="popup-content absolute origin-top-center"
                style={{
                  top: popupPosition?.top ?? 0,
                  left: popupPosition?.left ?? 0,
                  visibility: popupPosition ? "visible" : "hidden",
                  zIndex: 9999,
                }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <ContactUsPopUp />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </SimpleBox>
  );
}

function ContactUsPopUp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("brickbot@liceulunirea.ro").then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 1000);
    });
  };

  return (
    <SimpleBox className="relative flex flex-col items-center justify-start py-[var(--sm-space-y)] px-[var(--md-space-x)] space-y-[var(--sm-space-y)] select-none">
      <SimpleBox
        width="100%"
        className="group relative flex flex-row flex-1 w-full items-center justify-start space-x-[var(--sm-space-x)] px-[var(--sm-space-x)] py-[calc(var(--sm-space-y)/2)] cursor-pointer"
        hoverEffect={true}
        action={handleCopy}
      >
        <RiMailFill className="w-[2rem] h-[2rem]" />
        <div className="flex flex-col pr-[var(--lg-space-x)]">
          <h6
            className="group-hover:underline"
            style={{ color: "var(--default-text)", fontWeight: 500 }}
          >
            brickbot@liceulunirea.ro
          </h6>
        </div>
        <h6
          className="pointer-events-none absolute top-[-3rem] left-1/2 -translate-x-1/2 bg-[var(--default-dark)] text-white text-sm px-3 py-1 rounded-md shadow z-10 whitespace-nowrap transition-opacity duration-300"
          style={{ fontWeight: 500, opacity: showTooltip ? "1" : "0" }}
        >
          Copied!
        </h6>
      </SimpleBox>
      <SimpleBox
        width="100%"
        className="flex flex-row flex-1 w-full items-center justify-start space-x-[var(--sm-space-x)] px-[var(--sm-space-x)] py-[calc(var(--sm-space-y)/2)] cursor-pointer"
        hoverEffect={true}
        action={() => {
          window.open("https://www.instagram.com/brickbotcnu/", "_blank");
        }}
      >
        <RiInstagramLine className="w-[2rem] h-[2rem]" />
        <div className="flex flex-col pr-[var(--lg-space-x)]">
          <h6 style={{ color: "var(--default-text)", fontWeight: 500 }}>
            brickbotcnu
          </h6>
        </div>
      </SimpleBox>
      <SimpleBox
        width="100%"
        className="flex flex-row flex-1 w-full items-center justify-start space-x-[var(--sm-space-x)] px-[var(--sm-space-x)] py-[calc(var(--sm-space-y)/2)] cursor-pointer"
        hoverEffect={true}
        action={() => {
          window.open(
            "https://www.facebook.com/brickbotcnu/?locale=ro_RO",
            "_blank"
          );
        }}
      >
        <RiFacebookFill className="w-[2rem] h-[2rem]" />
        <div className="flex flex-col pr-[var(--lg-space-x)]">
          <h6 style={{ color: "var(--default-text)", fontWeight: 500 }}>
            brickbotcnu
          </h6>
        </div>
      </SimpleBox>
    </SimpleBox>
  );
}
