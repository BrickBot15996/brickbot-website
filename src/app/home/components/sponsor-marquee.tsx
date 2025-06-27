import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import Button from "../../components/brick-button";
import { SponsorData, sponsorList } from "../sponsor-data";
import { diamond, ultimate } from "@/app/support-us/sponsor-tiers-data";

export default function SponsorMarquee() {
  const router = useRouter();
  const marqueeSponsors: SponsorData[] = sponsorList.filter((sponsor) => {
    return sponsor.tier === ultimate || sponsor.tier === diamond;
  });

  return (
    <section className="h-full w-auto overflow-visible">
      <h2 className="ml-[calc((100vw-var(--page-width))/2)] mb-[var(--2xl-space-y)]">
        Sponsors
      </h2>
      <div className="w-[100vw] mb-[var(--2xl-space-y)] h-full">
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
          {marqueeSponsors.map((sponsor, index) => (
            <Link
              href={sponsor.websiteLink}
              target="_blank"
              key={index}
              className="cursor-pointer hover:opacity-50 items-center"
            >
              <Image
                key={index}
                src={sponsor.logoPath}
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
          className="h-[3rem] md:h-[4rem] lg:h-[0rem] select-none mb-[var(--2xl-space-y)] lg:mb-[0rem]"
        >
          {marqueeSponsors
            .slice(0, marqueeSponsors.length / 2 + 1)
            .map((sponsor, index) => (
              <Link
                href={sponsor.websiteLink}
                target="_blank"
                key={index}
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <Image
                  key={index}
                  src={sponsor.logoPath}
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
          {marqueeSponsors
            .slice(marqueeSponsors.length / 2 + 1, marqueeSponsors.length)
            .map((sponsor, index) => (
              <Link
                href={sponsor.websiteLink}
                target="_blank"
                key={index}
                className="cursor-pointer hover:opacity-50 items-center"
              >
                <Image
                  key={index}
                  src={sponsor.logoPath}
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
    </section>
  );
}
