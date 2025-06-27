import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";

import Box from "@/app/components/brick-box";
import { TierProps } from "../sponsor-tiers-data";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";

export function SponsorshipTierDesktop({
  tier,
  className,
  expansionState,
}: SponsorshipTierDesktopProps) {
  return (
    <Box
      gradient={true}
      color={tier.gradientColor}
      borderRadius="2rem"
      className={`flex flex-col h-auto w-auto py-[var(--sm-space-y)] select-none ${className}`}
    >
      <h5
        className="px-[1.25rem]"
        style={{
          color: tier.textColor,
        }}
      >
        {tier.name}
        <br />≥ {tier.priceThreshold} EUR
      </h5>
      <ul
        className="mt-[1rem] list-none transition-all duration-300 font-medium text-[1.25rem] mb-[var(--md-space-y)]"
        style={{
          opacity: expansionState ? "100" : "0",
          translate: expansionState ? "0 0" : "0 -1.5rem",
        }}
      >
        {tier.benefits.map((benefit, index) => {
          return (
            <li
              key={index}
              className="flex items-start before:content-[''] before:w-[1rem] before:h-[1rem] before:bg-[url(/green-checkmark.png)] before:bg-contain before:bg-no-repeat before:mr-[0.5rem] before:flex-shrink-0 before:mt-[0.4rem] mx-[1rem]"
            >
              {benefit}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

type SponsorshipTierDesktopProps = {
  tier: TierProps;
  className?: string;
  expansionState: boolean;
};

export function SponsorshipTierMobile({ tier }: SponsorshipTierMobileProps) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      <Box
        gradient={true}
        color={tier.gradientColor}
        borderRadius="1.3rem"
        className="flex flex-col w-full select-none px-[1rem] py-[1rem] cursor-pointer overflow-hidden"
        action={() => {
          setExpanded(!isExpanded);
        }}
      >
        <div className="relative flex flex-row items-center justify-center w-full">
          <h5
            className="mr-auto"
            style={{ color: tier.textColor }}
          >
            {tier.name}
          </h5>
          <div className="absolute left-auto right-auto w-[8rem] flex justify-end">
            <h5 style={{ color: tier.textColor }}>
              ≥ {tier.priceThreshold} EUR
            </h5>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-auto flex items-center justify-center h-[1.75rem] w-[1.75rem]"
          >
            <IoIosArrowDown
              className="h-full w-full"
              style={{ color: tier.textColor }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            opacity: {
              duration: isExpanded ? 0.3 : 0.3,
            },
          }}
          className="overflow-hidden"
        >
          <ul
            className="pt-[1rem] font-medium text-[1.1rem]/[1.35rem] md:text-[1.25rem]/[1.5rem] text-[var(--alternate-text)] list-none transition-all duration-300"
            style={{
              opacity: isExpanded ? "100" : "0",
              translate: isExpanded ? "0 0" : "0 -1.5rem",
            }}
          >
            {tier.benefits.map((benefit, index) => (
              <li
                key={index}
                className="mb-[0.25rem] last:mb-0 flex items-start before:content-[''] before:w-[1rem] before:h-[1rem] before:bg-[url(/green-checkmark.png)] before:bg-contain before:bg-no-repeat before:mr-[1rem] before:flex-shrink-0 before:mt-[0.15rem]"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </Box>
    </motion.div>
  );
}

type SponsorshipTierMobileProps = {
  tier: TierProps;
};
