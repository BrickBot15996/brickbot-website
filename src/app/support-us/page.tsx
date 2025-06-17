"use client";

import { useState } from "react";
import Box from "../components/brick-box";
import Button from "../components/brick-button";
import ArrowButton from "../components/arrow-button";

let expanded: boolean = false;

export default function SupportUs() {
  return (
    <section className="flex flex-col items-center min-h-[calc(100vh-var(--navbar-height))]">
      <section className="relative flex flex-col space-y-[6rem] my-[4rem] md:my-[6rem] lg:my-[8rem] w-[var(--page-width)]">
        <ContractSection />
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

function ContractSection() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <section className="relative mb-[5rem]">
      <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] mb-[0.5rem]">
        Sponsorship Contract
      </h1>
      <h4 className="text-[var(--alternate-text)] font-medium mr-auto text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] mb-[2.5rem]">
        Sponsorship Tiers
      </h4>
      <div
        className="w-full overflow-hidden transition-all duration-400"
        style={{ height: isExpanded ? "30rem" : "13rem" }}
      >
        <div className="grid grid-cols-5 w-[90%] h-full gap-x-[1rem]">
          <SponsorshipTier
            name="Bronze"
            priceThreshold={100}
            color="var(--bronze-tier)"
            benefits={[
              "Logo pe robot",
              "Postari pe conturile echipei",
              "Logo pe site",
            ]}
          />
          <SponsorshipTier
            name="Silver"
            priceThreshold={200}
            color="var(--silver-tier)"
            benefits={[
              "Logo pe robot",
              "Postari pe conturile echipei",
              "Logo pe site",
            ]}
          />
          <SponsorshipTier
            name="Gold"
            priceThreshold={500}
            color="var(--gold-tier)"
            benefits={[
              "Logo pe robot",
              "Postari pe conturile echipei",
              "Logo pe site",
            ]}
          />
          <SponsorshipTier
            name="Diamond"
            priceThreshold={1000}
            color="var(--diamond-tier)"
            benefits={[
              "Logo pe robot",
              "Postari pe conturile echipei",
              "Logo pe site",
            ]}
          />
          <SponsorshipTier
            name="Super"
            priceThreshold={2000}
            color="var(--super-tier)"
            benefits={[
              "Logo pe robot",
              "Postari pe conturile echipei",
              "Logo pe site",
            ]}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 bg-[linear-gradient(0deg,_var(--default-dark),_transparent)] w-[90%] z-10 transition-all duration-400 delay-50"
        style={{
          height: isExpanded ? "0rem" : "10rem",
        }}
      />
      <ArrowButton
        action={() => {
          setExpanded(!isExpanded);
          expanded = !expanded;
        }}
        ariaLabel="Sponsorship Tiers expand or retract"
        color="var(--default-yellow)"
        gradientLight="var(--yellow-gradient-light)"
        gradientDark="var(--yellow-gradient-dark"
        litUpGradientLight="var(--lit-up-yellow-gradient-light)"
        litUpGradientDark="var(--lit-up-yellow-gradient-dark)"
        arrowDirection="down"
        toggleDirection={true}
        style={{
          borderColor: "var(--default-yellow)",
        }}
        className="absolute right-0 bottom-0"
      />
    </section>
  );
}

type SponsorshipTierProps = {
  name: string;
  priceThreshold: number;
  color: string;
  benefits: string[];
};

function SponsorshipTier({
  name,
  priceThreshold,
  color,
  benefits,
}: SponsorshipTierProps) {
  return (
    <Box
      gradient={true}
      color={color}
      borderRadius="2rem"
      className="flex flex-col h-auto w-auto px-[1.25rem] py-[1.5rem]"
    >
      <h4
        className="font-semibold text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]"
        style={{
          color: color,
        }}
      >
        {name}
        <br />≥ {priceThreshold} EUR
      </h4>
      <ul
        className="pl-[1.25rem] mt-[1rem] list-disc transition-all duration-400 font-medium text-[1.25rem] mb-[3rem]"
        style={{
          opacity: expanded ? "100" : "0",
        }}
      >
        {benefits.map((benefit, index) => {
          return <li key={index}>{benefit}</li>;
        })}
      </ul>
    </Box>
  );
}

function DonationSection() {
  return (
    <section className="flex flex-col items-center justify-center w-[100vw] ml-[calc((-100vw+var(--page-width))/2)] h-auto min-h-[15rem] bg-[linear-gradient(180deg,_var(--default-dark),_#1e1e1e)]">
      <div className="flex flex-col lg:flex-row w-[var(--page-width)] h-full gap-x-[2.5rem] lg:gap-x-[5rem] gap-y-[4rem] my-[5rem]">
        <div className="flex flex-col w-full lg:w-1/2 gap-y-[2rem] md:gap-y-[2.5rem] lg:gap-y-[3rem]">
          <h1 className="text-[var(--default-yellow)] font-bold text-[1.75rem] md:text-[2.75rem] lg:text-[3.25rem]">
            Redirect 3.5%
          </h1>
          <p className="text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] font-medium text-[var(--default-text)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, a
            earum! Sapiente, modi perferendis? Et quibusdam eligendi ab
            aspernatur, voluptates, eveniet, quam reiciendis recusandae cum odio
            saepe! Natus, pariatur modi!
          </p>
          <Button
            text="COMPLETE THE FORM"
            arrow={true}
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-y-[2rem] md:gap-y-[2.5rem] lg:gap-y-[3rem]">
          <h1 className="text-[var(--default-yellow)] font-bold text-[1.75rem] md:text-[2.75rem] lg:text-[3.25rem]">
            Collaboration
          </h1>
          <p className="text-[1.1rem] md:text-[1.5rem] xl:text-[1.75rem] font-medium text-[var(--default-text)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            praesentium ipsam magni, voluptatibus fugit nihil iste sunt
            expedita. Optio rerum aliquam perspiciatis dolores, quia ipsum! Fuga
            quibusdam facilis eaque facere.
          </p>
          <Button
            text="COMPLETE THE FORM"
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
