import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import Button from "../../components/brick-button";

type SponsorData = {
  logoPath: string;
  websiteLink: string;
};

const sponsors: SponsorData[] = [
  {
    logoPath: "/sponsors/autovip.webp",
    websiteLink: "https://autoviptransfer.ro/",
  },
  {
    logoPath: "/sponsors/aviputna.webp",
    websiteLink: "https://aviputna.ro/",
  },
  {
    logoPath: "/sponsors/banca_transilvania.webp",
    websiteLink: "https://www.bancatransilvania.ro/",
  },
  {
    logoPath: "/sponsors/fundatia_fan.webp",
    websiteLink: "https://fundatiafancourier.ro/",
  },
  {
    logoPath: "/sponsors/reina.webp",
    websiteLink: "http://www.reinabijou.ro/",
  },
  {
    logoPath: "/sponsors/remat.webp",
    websiteLink: "https://rematholding.ro/",
  },
  {
    logoPath: "/sponsors/vrancart.webp",
    websiteLink: "https://vrancart.ro/",
  },
  {
    logoPath: "/sponsors/zaga_zaga.webp",
    websiteLink: "https://zagazaga.ro/",
  },
  {
    logoPath: "/sponsors/idna_power.webp",
    websiteLink: "https://idnasolarpower.ro/",
  },
  {
    logoPath: "/sponsors/micromet.webp",
    websiteLink: "https://www.micromet.ro/",
  },
  {
    logoPath: "/sponsors/rikora.webp",
    websiteLink: "https://rikora.net/",
  },
  {
    logoPath: "/sponsors/romans.webp",
    websiteLink: "https://romans.ro/",
  },
];

export default function SponsorMarquee() {
  const router = useRouter();

  return (
    <section className="h-full w-auto overflow-visible">
      <h2 className="mb-[var(--xl-space-y)]">Sponsors</h2>
      <div className="ml-[calc((-100vw + var(--page-width))/2)] w-[100vw] mb-[var(--xl-space-y)] h-full">
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
          {sponsors.map((SponsorData, index) => (
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
          {sponsors
            .slice(0, sponsors.length / 2 + 1)
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
          {sponsors
            .slice(sponsors.length / 2 + 1, sponsors.length)
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
    </section>
  );
}
