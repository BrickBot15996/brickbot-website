import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import Button from "../../components/brick-button";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";
import { sponsorList } from "../sponsor-data";

export default function SponsorMarquee() {
  const router = useRouter();

  return (
    <motion.section
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="h-full w-auto overflow-visible"
    >
      <h2 className="ml-[calc((100vw-var(--page-width))/2)] mb-[var(--xl-space-y)]">
        Sponsors
      </h2>
      <div className="w-[100vw] mb-[var(--xl-space-y)] h-full">
        {/* Desktop Marquee */}
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={100}
          autoFill={true}
          gradient={true}
          gradientColor="var(--default-dark)"
          className="h-[0rem] lg:h-[5rem] select-none hidden"
        >
          {sponsorList.map((SponsorData, index) => (
            <Link
              href={SponsorData.websiteLink}
              target="_blank"
              key={index}
              className="cursor-pointer hover:opacity-50 items-center"
            >
              <Image
                key={index}
                src={SponsorData.logoPath}
                alt={`Item ${index}`}
                height={100}
                width={100}
                className="h-[5rem] w-auto px-[3.5rem] lg:px-[4.5rem]"
              />
            </Link>
          ))}
        </Marquee>

        {/* Mobile Marquee */}
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={55}
          autoFill={true}
          gradient={true}
          gradientColor="var(--default-dark)"
          className="h-[3rem] md:h-[4rem] lg:h-[0rem] select-none mb-[var(--xl-space-y)] lg:mb-[0rem]"
        >
          {sponsorList
            .slice(0, sponsorList.length / 2 + 1)
            .map((SponsorData, index) => (
              <Link
                href={SponsorData.websiteLink}
                target="_blank"
                key={index}
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <Image
                  key={index}
                  src={SponsorData.logoPath}
                  alt={`Item ${index}`}
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
          {sponsorList
            .slice(sponsorList.length / 2 + 1, sponsorList.length)
            .map((SponsorData, index) => (
              <Link
                href={SponsorData.websiteLink}
                target="_blank"
                key={index}
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <Image
                  key={index}
                  src={SponsorData.logoPath}
                  alt={`Item ${index}`}
                  height={100}
                  width={100}
                  className="h-[3rem] md:h-[4rem] w-auto px-[2.5rem]"
                />
              </Link>
            ))}
        </Marquee>
      </div>
      {/* Sponsor Button */}
      <div className="flex justify-center mb-[var(--2xl-space-y)]">
        <Button
          text="BECOME OUR NEXT SPONSOR"
          arrow={false}
          accentColor="var(--default-yellow)"
          gradientColorLight="var(--yellow-gradient-light)"
          gradientColorDark="var(--yellow-gradient-dark)"
          action={() => router.push("/support-us")}
        />
      </div>
    </motion.section>
  );
}
