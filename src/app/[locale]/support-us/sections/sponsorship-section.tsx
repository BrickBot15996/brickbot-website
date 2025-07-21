import ArrowButton from "@/app/[locale]/_components/arrow-button";
import { useEffect, useState } from "react";
import { SponsorshipTierDesktop, SponsorshipTierMobile } from "./sponsor-tiers";
import { useTierList, TierProps } from "../../_data/sponsor-tiers-data";
import { defaultFadeIn } from "@/app/[locale]/_components/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function SponsorshipSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <TierSectionMobile /> : <TierSectionDesktop />;
}

function TierSectionMobile() {
  const tierList = useTierList();

  let tiers: TierProps[];
  if (tierList.length % 2 === 0) {
    tiers = tierList;
  } else {
    tiers = tierList.slice(0, tierList.length - 1);
  }

  const t = useTranslations("SupportUs.SponsorshipTiers");

  return (
    <section className="relative">
      <h2 className="mb-[var(--lg-space-y)]">{t("title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--md-space-y)] items-start">
        {tiers.map((tier, index) => {
          return (
            <motion.div
              key={index}
              variants={defaultFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="self-start"
            >
              <SponsorshipTierMobile tier={tier} />
            </motion.div>
          );
        })}
        {tiers.length != tierList.length && (
          <motion.div
            variants={defaultFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="lg:col-span-2 lg:px-[25%]"
          >
            <SponsorshipTierMobile tier={tierList.at(tierList.length - 1)!} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function TierSectionDesktop() {
  const [isExpanded, setExpanded] = useState(false);
  const t = useTranslations("SupportUs.SponsorshipTiers");
  const tierList = useTierList();

  return (
    <section className="relative">
      <h2 className="mb-[var(--xl-space-y)]">{t("title")}</h2>
      <div
        className="w-full overflow-hidden transition-all duration-400 flex flex-row"
        style={{
          height: isExpanded ? "29rem" : "13rem",
        }}
      >
        <div className="grid grid-cols-5 flex-[0_0_94%] h-full gap-[var(--sm-space-x)]">
          {tierList.map((tier, index) => {
            return (
              <SponsorshipTierDesktop
                key={index}
                tier={tier}
                expansionState={isExpanded}
              />
            );
          })}
        </div>
        <div className="flex-[0_0_6%] ml-auto h-full flex items-end justify-end">
          <ArrowButton
            key="sponsorship-expand-button"
            action={() => {
              setExpanded(!isExpanded);
            }}
            color="var(--default-yellow)"
            gradientLight="var(--yellow-gradient-light)"
            gradientDark="var(--yellow-gradient-dark)"
            arrowDirection="down"
            toggleDirection={true}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 bg-[linear-gradient(0deg,_var(--default-dark),_transparent)] w-[94%] z-10 transition-all duration-400 delay-50"
        style={{
          height: isExpanded ? "0rem" : "10rem",
        }}
      />
    </section>
  );
}
