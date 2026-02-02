"use client";

import SimpleBox from "@/app/[locale]/_components/simple-box";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CgFileDocument } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { CDN_LINK } from "@/app/[locale]/constants";

export default function AssociationDetails() {
  const t = useTranslations("Contact.Association");
  const [displayTick, setDisplayTick] = useState(false);

  return (
    <section className="w-full h-fit flex flex-col space-y-[var(--lg-space-y)]">
      <h2>{t("title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch gap-x-[var(--lg-space-x)] gap-y-[var(--md-space-y)]">
        <SimpleBox
          className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]"
          hoverEffect={true}
          action={() => {
            window.open("https://www.bancatransilvania.ro/", "_blank");
          }}
        >
          <div className="relative h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-1/1">
            <Image
              src={CDN_LINK + "/sponsors/banca-transilvania.webp"}
              alt="Banca Transilvania logo"
              fill
              priority
              fetchPriority="high"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h5>Banca Transilvania</h5>
            <p>{t("subsidiary")}</p>
          </div>
        </SimpleBox>
        <SimpleBox
          className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]"
          hoverEffect={true}
          action={() => {
            navigator.clipboard.writeText(t("iban"));
            setDisplayTick(true);
            setTimeout(() => setDisplayTick(false), 1000);
          }}
        >
          <AnimatePresence mode="wait">
            {displayTick ? (
              <motion.div
                key="tick"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-1/1"
              >
                <FaCheck className="w-full h-full p-[0.25rem] lg:p-[0.5rem] fill-white" />
              </motion.div>
            ) : (
              <motion.div
                key="doc"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="w-fit h-fit"
              >
                <CgFileDocument className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-1/1 fill-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col">
            <h5>IBAN</h5>
            <p>{t("iban")}</p>
          </div>
        </SimpleBox>
      </div>
    </section>
  );
}
