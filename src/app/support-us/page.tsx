"use client";

import { useState, useEffect } from "react";
import Box from "../components/brick-box";
import Button from "../components/brick-button";
import ArrowButton from "../components/arrow-button";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import PageTitle from "../components/page-title";

export default function SupportUs() {
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

  return (
    <section className="flex flex-col items-center">
      <section className="relative flex flex-col space-y-[3rem] lg:space-y-[6rem] mb-[4rem] md:mb-[6rem] lg:mb-[8rem] w-[var(--page-width)]">
        <PageTitle title="SUPPORT US" />
        {!isMobile && <ContractSectionDesktop />}
        {isMobile && <ContractSectionMobile />}
        <DonationSection />
        <div className="flex flex-col items-center justify-center w-full">
          <h3 className="text-[var(--alternate-text)] text-[1.5rem] md:text-[2.25rem] lg:text-[2.75rem] font-extrabold mb-[2rem]">
            Want to help in other ways?
          </h3>
          <Button
            text="CONTACT US"
            arrow={true}
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
          />
        </div>
      </section>
    </section>
  );
}

function ContractSectionMobile() {
  return (
    <section className="relative mb-[1rem]">
      <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[2.75rem]/[3rem] md:text-[3.25rem]/[3.5rem] lg:text-[3.75rem]/[4rem] mb-[2rem]">
        Sponsorship Tiers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] items-start">
        <div className="self-start">
          <SponsorshipTierMobile
            name="Bronze"
            priceThreshold={100}
            textColor="var(--bronze-tier-text)"
            gradientColor="var(--bronze-tier-gradient)"
            benefits={["Social Media Mentions", "Logo on Robot"]}
          />
        </div>
        <div className="self-start">
          <SponsorshipTierMobile
            name="Silver"
            priceThreshold={250}
            textColor="var(--silver-tier-text)"
            gradientColor="var(--silver-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
            ]}
            className="self-start"
          />
        </div>
        <div className="self-start">
          <SponsorshipTierMobile
            name="Gold"
            priceThreshold={750}
            textColor="var(--gold-tier-text)"
            gradientColor="var(--gold-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
              "Logo on Roll-Up",
            ]}
            className="self-start"
          />
        </div>
        <div className="self-start">
          <SponsorshipTierMobile
            name="Diamond"
            priceThreshold={1500}
            textColor="var(--diamond-tier-text)"
            gradientColor="var(--diamond-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
              "Logo on Roll-Up",
              "Merch with your Logo",
            ]}
            className="self-start"
          />
        </div>
        <div className="lg:col-span-2 lg:px-[25%]">
          <SponsorshipTierMobile
            name="Ultimate"
            priceThreshold={3000}
            textColor="var(--ultimate-tier-text)"
            gradientColor="var(--ultimate-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
              "Logo on Roll-Up",
              "Merch with your Logo",
              "Social Media Campaign",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ContractSectionDesktop() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <section className="relative mb-[5rem]">
      <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[3.75rem]/[4rem] mb-[3rem]">
        Sponsorship Tiers
      </h1>
      <div
        className="w-full overflow-hidden transition-all duration-400 flex flex-row"
        style={{
          height: isExpanded ? "29rem" : "13rem",
        }}
      >
        <div className="grid grid-cols-5 flex-[0_0_93%] h-full gap-[1rem]">
          <SponsorshipTierDesktop
            name="Bronze"
            priceThreshold={100}
            textColor="var(--bronze-tier-text)"
            gradientColor="var(--bronze-tier-gradient)"
            benefits={["Social Media Mentions", "Logo on Robot"]}
            expansionState={isExpanded}
          />
          <SponsorshipTierDesktop
            name="Silver"
            priceThreshold={250}
            textColor="var(--silver-tier-text)"
            gradientColor="var(--silver-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
            ]}
            expansionState={isExpanded}
          />
          <SponsorshipTierDesktop
            name="Gold"
            priceThreshold={750}
            textColor="var(--gold-tier-text)"
            gradientColor="var(--gold-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
              "Logo on Roll-Up",
            ]}
            expansionState={isExpanded}
          />
          <SponsorshipTierDesktop
            name="Diamond"
            priceThreshold={1500}
            textColor="var(--diamond-tier-text)"
            gradientColor="var(--diamond-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
              "Logo on Roll-Up",
              "Merch with your Logo",
            ]}
            expansionState={isExpanded}
          />
          <SponsorshipTierDesktop
            name="Ultimate"
            priceThreshold={3000}
            textColor="var(--ultimate-tier-text)"
            gradientColor="var(--ultimate-tier-gradient)"
            benefits={[
              "Social Media Mentions",
              "Logo on Robot",
              "Logo on Website",
              "Logo on Roll-Up",
              "Merch with your Logo",
              "Social Media Campaign",
            ]}
            expansionState={isExpanded}
          />
        </div>
        <div className="flex-[0_0_7%] ml-auto h-full flex items-end justify-end">
          <ArrowButton
            key="sponsorship-expand-button"
            action={() => {
              setExpanded(!isExpanded);
            }}
            ariaLabel="Sponsorship Tiers expand or retract"
            color="var(--default-yellow)"
            gradientLight="var(--yellow-gradient-light)"
            gradientDark="var(--yellow-gradient-dark) "
            litUpGradientLight="var(--lit-up-yellow-gradient-light)"
            litUpGradientDark="var(--lit-up-yellow-gradient-dark)"
            arrowDirection="down"
            toggleDirection={true}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 bg-[linear-gradient(0deg,_var(--default-dark),_transparent)] w-[93%] z-10 transition-all duration-400 delay-50"
        style={{
          height: isExpanded ? "0rem" : "10rem",
        }}
      />
    </section>
  );
}

type SponsorshipTierProps = {
  name: string;
  priceThreshold: number;
  textColor: string;
  gradientColor: string;
  benefits: string[];
  className?: string;
  expansionState?: boolean;
};

function SponsorshipTierDesktop({
  name,
  priceThreshold,
  textColor,
  gradientColor,
  benefits,
  className = "",
  expansionState = false,
}: SponsorshipTierProps) {
  return (
    <Box
      gradient={true}
      color={gradientColor}
      borderRadius="2rem"
      className={`flex flex-col h-auto w-auto px-[1.25rem] py-[1.5rem] select-none ${className}`}
    >
      <h4
        className="font-semibold text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]"
        style={{
          color: textColor,
        }}
      >
        {name}
        <br />≥ {priceThreshold} EUR
      </h4>
      <ul
        className="mt-[1rem] list-none transition-all duration-400 font-medium text-[1.25rem] mb-[3rem]"
        style={{
          opacity: expansionState ? "100" : "0",
        }}
      >
        {benefits.map((benefit, index) => {
          return (
            <li
              key={index}
              className="flex items-start before:content-[''] before:w-[1rem] before:h-[1rem] before:bg-[url(/green-checkmark.png)] before:bg-contain before:bg-no-repeat before:mr-[1rem] before:flex-shrink-0 before:mt-[0.2rem]"
            >
              {benefit}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

function SponsorshipTierMobile({
  name,
  priceThreshold,
  textColor,
  gradientColor,
  benefits,
}: SponsorshipTierProps) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <Box
      gradient={true}
      color={gradientColor}
      borderRadius="1.3rem"
      className="flex flex-col w-full select-none p-[1rem] cursor-pointer overflow-hidden"
      action={() => {
        setExpanded(!isExpanded);
      }}
    >
      <div className="flex items-center justify-between w-full min-h-[3rem]">
        <h5
          className="font-semibold text-[1.25rem]/[1.25rem] md:text-[1.5rem]/[1.5rem]"
          style={{ color: textColor }}
        >
          {name}
        </h5>

        <h5
          className="font-semibold text-[1.25rem]/[1.25rem] md:text-[1.5rem]/[1.5rem]"
          style={{ color: textColor }}
        >
          ≥ {priceThreshold} EUR
        </h5>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center h-[1.75rem] w-[1.75rem]"
        >
          <IoIosArrowDown
            className="h-full w-full"
            style={{ color: textColor }}
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
        <ul className="pt-[1rem] font-medium text-[1.1rem]/[1.35rem] md:text-[1.25rem]/[1.5rem] text-[var(--alternate-text)] list-none">
          {benefits.map((benefit, index) => (
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
  );
}

function DonationSection() {
  return (
    <section className="flex flex-col items-center justify-center w-[100vw] ml-[calc((-100vw+var(--page-width))/2)] h-auto min-h-[15rem] bg-[linear-gradient(180deg,_var(--default-dark),_#1e1e1e)]">
      <div className="flex flex-col lg:flex-row w-[var(--page-width)] h-full gap-x-[2.5rem] lg:gap-x-[5rem] gap-y-[4rem] my-[5rem]">
        <div className="flex flex-col w-full lg:w-1/2 gap-y-[2rem] md:gap-y-[2.5rem] lg:gap-y-[3rem]">
          <h1 className="text-[var(--default-yellow)] font-bold text-[2.75rem]/[3rem] md:text-[3.25rem]/[3.5rem] lg:text-[3.75rem]/[4rem]">
            Redirect 3.5%
          </h1>
          <p className="text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] font-medium text-[var(--default-text)]">
            For Romanian citizens, redirecting 3.5% of your income tax through
            Form 230 is a simple way to support the BrickBot Association. It
            costs nothing and helps fund our robotics, education, and outreach
            efforts.
          </p>
          <Button
            text="COMPLETE THE FORM"
            action={() => {
              window.open("https://formular230.ro/", "_blank");
            }}
            arrow={true}
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-y-[2rem] md:gap-y-[2.5rem] lg:gap-y-[3rem]">
          <h1 className="text-[var(--default-yellow)] font-bold text-[2.75rem]/[3rem] md:text-[3.25rem]/[3.5rem] lg:text-[3.75rem]/[4rem]">
            Donation
          </h1>
          <p className="text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] font-medium text-[var(--default-text)]">
            Anyone can support the BrickBot Association by making a secure
            donation through Stripe. Your contribution directly funds our
            robotics development, competition participation, and outreach
            events.
          </p>
          <Button
            text="DONATE HERE"
            action={() => {
              window.open(
                "https://support.stripe.com/questions/how-to-accept-donations-through-stripe",
                "_blank"
              );
            }}
            arrow={true}
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
          />
        </div>
      </div>
    </section>
  );
}
