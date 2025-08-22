"use client";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useTranslations } from "next-intl";
import SimpleBox from "@/app/[locale]/_components/simple-box";

export default function PrimaryContact() {
  const t = useTranslations("Contact");
  return (
    <section className="w-full h-fit flex flex-col space-y-[var(--lg-space-y)]">
      <h2>{t("primary")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch gap-x-[var(--lg-space-x)] gap-y-[var(--md-space-y)]">
        <SimpleBox
          action={() => {
            window.open("mailto:brickbot@liceulunirea.ro", "_blank");
          }}
          hoverEffect={true}
          className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]"
        >
          <MdOutlineMailOutline className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-square fill-white" />
          <div className="flex flex-col">
            <h5>Email</h5>
            <p>brickbot@liceulunirea.ro</p>
          </div>
        </SimpleBox>
        <SimpleBox
          action={() => {
            window.open("https://www.instagram.com/brickbotcnu/", "_blank");
          }}
          hoverEffect={true}
          className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]"
        >
          <FaInstagram className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-square fill-white" />
          <div className="flex flex-col">
            <h5>Instagram</h5>
            <p>brickbotcnu</p>
          </div>
        </SimpleBox>
        <SimpleBox
          action={() => {
            window.open("https://www.linkedin.com/company/brickbot/", "_blank");
          }}
          hoverEffect={true}
          className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]"
        >
          <AiOutlineLinkedin className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-square fill-white" />
          <div className="flex flex-col">
            <h5>Linkedin</h5>
            <p>BrickBot</p>
          </div>
        </SimpleBox>
      </div>
    </section>
  );
}
