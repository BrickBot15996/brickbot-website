import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Marquee from "react-fast-marquee";
import { Tooltip } from "react-tooltip";

import Button from "../../../_components/brick-button";
import { SponsorData, useSponsorList } from "../../../_data/sponsor-data";
import {
  useDiamond,
  useUltimate,
} from "@/app/[locale]/_data/sponsor-tiers-data";
import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/_components/animations";
import { useTranslations } from "next-intl";
import { useLocale } from "@/app/[locale]/_hooks/use-locale";
import { i18nPath } from "@/app/[locale]/_utils/redirectPath";
import LoadFadeImage from "@/app/[locale]/_components/fade-in-on-load-image";

export default function SponsorMarquee() {
  const router = useRouter();
  const locale = useLocale();

  const diamond = useDiamond();
  const ultimate = useUltimate();
  const sponsorList = useSponsorList();
  const marqueeSponsors: SponsorData[] = sponsorList.filter(
    (sponsor) =>
      sponsor.tier.name == ultimate.name || sponsor.tier.name == diamond.name
  );

  const t = useTranslations("Home.Sponsors");

  return (
    <section className="h-full w-auto overflow-visible relative">
      <h2 className="ml-[calc((100vw-var(--page-width))/2)] mb-[var(--2xl-space-y)]">
        {t("title")}
      </h2>

      <AnimationWhenInView
        variants={defaultFadeIn}
        className="w-[100vw] mb-[var(--2xl-space-y)] h-full overflow-visible"
      >
        {/* Desktop Marquee */}
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={100}
          autoFill={true}
          gradient={true}
          gradientColor="var(--default-dark)"
          className="h-[0rem] lg:h-[6rem] select-none hidden lg:flex overflow-visible"
          style={{ overflow: "visible" }}
        >
          {marqueeSponsors.map((sponsor, index) => (
            <React.Fragment key={index}>
              <Link
                href={sponsor.websiteLink}
                target="_blank"
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <LoadFadeImage
                  src={sponsor.logoPath}
                  alt={sponsor.name}
                  height={100}
                  width={100}
                  className="h-[0rem] lg:h-[5rem] w-auto px-[3.5rem] lg:px-[4.5rem]"
                  data-tooltip-id={`desktop-${sponsor.name}`}
                  data-tooltip-content={sponsor.name}
                  data-tooltip-place="top"
                />
              </Link>
              <Tooltip
                id={`desktop-${sponsor.name}`}
                place="top"
                noArrow={false}
                style={{
                  position: "absolute",
                  zIndex: 9999,
                }}
                offset={15}
                opacity={1}
              />
            </React.Fragment>
          ))}
        </Marquee>

        {/* Mobile Marquee (no tooltip) */}
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={55}
          autoFill={true}
          gradient={true}
          gradientColor="var(--default-dark)"
          className="h-[3rem] md:h-[4rem] lg:h-[0rem] select-none mb-[var(--2xl-space-y)] lg:mb-[0rem]"
        >
          {marqueeSponsors
            .slice(0, Math.ceil(marqueeSponsors.length / 2))
            .map((sponsor) => (
              <Link
                href={sponsor.websiteLink}
                target="_blank"
                key={sponsor.name}
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <LoadFadeImage
                  src={sponsor.logoPath}
                  alt={sponsor.name}
                  height={100}
                  width={100}
                  className="h-[3rem] md:h-[4rem] w-auto px-[2.5rem]"
                />
              </Link>
            ))}
        </Marquee>

        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={55}
          autoFill={true}
          gradient={true}
          direction="right"
          gradientColor="var(--default-dark)"
          className="h-[3rem] md:h-[4rem] lg:h-[0rem] select-none"
        >
          {marqueeSponsors
            .slice(Math.ceil(marqueeSponsors.length / 2))
            .map((sponsor) => (
              <Link
                href={sponsor.websiteLink}
                target="_blank"
                key={sponsor.name}
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <LoadFadeImage
                  src={sponsor.logoPath}
                  alt={sponsor.name}
                  height={100}
                  width={100}
                  className="h-[3rem] md:h-[4rem] w-auto px-[2.5rem]"
                />
              </Link>
            ))}
        </Marquee>
      </AnimationWhenInView>

      {/* Sponsor Button */}
      <div className="flex justify-center">
        <Button
          text={t("buttonText")}
          arrow={false}
          action={() => router.push(i18nPath(locale, "supportUs"))}
          className="px-[2rem]"
        />
      </div>
    </section>
  );
}
