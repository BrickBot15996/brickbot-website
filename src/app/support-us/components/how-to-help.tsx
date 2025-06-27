"use client";

import Button from "@/app/components/brick-button";
import SimpleBox from "@/app/components/simple-box";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LiaDonateSolid } from "react-icons/lia";
import { RiContractLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HowToHelpSection() {
  return (
    <section className="w-full h-auto gap-x-[var(--xl-space-x)] gap-y-[var(--xl-space-y)]">
      <div className="flex flex-col items-start justify-start w-full">
        <h2 className="mb-[var(--md-space-y)]">How To Help</h2>
        <p className="w-[100%] lg:w-[70%] mb-[var(--xl-space-y)]">
          BrickBot operates with the support of sponsors (companies, businesses,
          individuals). There are three ways to support us:
        </p>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 grid-flow-row items-stretch gap-x-[var(--md-space-x)] gap-y-[var(--md-space-y)]">
          <motion.div
            variants={defaultFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <RedirectTax />
          </motion.div>

          <motion.div
            variants={defaultFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <Donate />
          </motion.div>

          <motion.div
            variants={defaultFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="col-span-1 sm:col-span-2"
          >
            <Contract />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RedirectTax() {
  return (
    <Link
      href="https://formular230.ro/"
      target="_blank"
      className="group cursor-pointer"
    >
      <SimpleBox className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem]">
        <LiaDonateSolid className="h-[4rem] w-auto mb-[var(--sm-space-y)]" />
        <h3
          className="group-hover:underline mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          Redirect 3.5%
          <HiArrowNarrowRight className="h-auto w-auto fill-[var(--default-yellow)] inline ml-[0.5rem] group-hover:translate-x-[1rem] transition-all duration-200" />
        </h3>
        <p>
          Romanian citizens can support BrickBot by redirecting 3.5% of income
          tax through Form 230.
        </p>
      </SimpleBox>
    </Link>
  );
}

function Donate() {
  return (
    <Link
      href="https://support.stripe.com/questions/how-to-accept-donations-through-stripe"
      target="_blank"
      className="group cursor-pointer"
    >
      <SimpleBox className="flex flex-col items-start justify-start px-[1.5rem] py-[2rem]">
        <LiaDonateSolid className="h-[4rem] w-auto mb-[var(--sm-space-y)]" />
        <h3
          className="group-hover:underline mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          Donate
          <HiArrowNarrowRight className="h-auto w-auto fill-[var(--default-yellow)] inline ml-[0.5rem] group-hover:translate-x-[1rem] transition-all duration-200" />
        </h3>
        <p>
          Anyone can support the BrickBot Association by making a secure
          donation through Stripe.
        </p>
      </SimpleBox>
    </Link>
  );
}

function Contract() {
  const [buttonsCol, setButtonsCol] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setButtonsCol(window.innerWidth <= 440 || window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [buttonsCol]);
  return (
    <SimpleBox className="flex flex-col lg:flex-row items-start justify-start px-[1.5rem] py-[2rem] space-x-[var(--sm-space-x)]">
      <div
        className={`flex flex-col items-start md:flex-[0_0_75%] 2xl:flex-[0_0_65%] mr-auto ${
          buttonsCol ? "mb-[var(--md-space-y)] md:mb-[0rem]" : ""
        }`}
      >
        <RiContractLine className="h-[4rem] w-auto mb-[var(--sm-space-y)]" />
        <h3
          className="mb-[var(--sm-space-y)]"
          style={{ fontWeight: 700 }}
        >
          Sponsorship Contracts
        </h3>
        <p>
          Companies can support our initiative through financial contributions
          and services. The partnership will be formalized via a contract
          between your business and our organization.
        </p>
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
          text="View Sample"
          action={() => {
            router.push(
              "https://static.wikia.nocookie.net/4188b765-79b7-4a09-a471-f55fb174dcc6/scale-to-width/755"
            );
          }}
          style={{ width: "full" }}
        />
        <Button
          text="Contact Us"
          action={() => {
            router.push("https://www.youtube.com/watch?v=NT4eF9YsYnM");
          }}
          style={{ width: "full" }}
        />
      </div>
    </SimpleBox>
  );
}
