import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import Button from "./brickbot-button";

type SponsorData = {
  logoPath: string;
  websiteLink: string;
};

const sponsors: SponsorData[] = [
  {
    logoPath: "/sponsors/autovip.png",
    websiteLink: "https://autoviptransfer.ro/",
  },
  {
    logoPath: "/sponsors/aviputna.png",
    websiteLink: "https://aviputna.ro/",
  },
  {
    logoPath: "/sponsors/banca_transilvania.png",
    websiteLink: "https://www.bancatransilvania.ro/",
  },
  {
    logoPath: "/sponsors/fundatia_fan.png",
    websiteLink: "https://fundatiafancourier.ro/",
  },
  {
    logoPath: "/sponsors/reina.png",
    websiteLink: "http://www.reinabijou.ro/",
  },
  {
    logoPath: "/sponsors/remat.png",
    websiteLink: "https://rematholding.ro/",
  },
  {
    logoPath: "/sponsors/vrancart.png",
    websiteLink: "https://vrancart.ro/",
  },
  {
    logoPath: "/sponsors/zaga_zaga.png",
    websiteLink: "https://zagazaga.ro/",
  },
  {
    logoPath: "/sponsors/idna_power.png",
    websiteLink: "https://idnasolarpower.ro/",
  },
  {
    logoPath: "/sponsors/micromet.png",
    websiteLink: "https://www.micromet.ro/",
  },
  {
    logoPath: "/sponsors/rikora.png",
    websiteLink: "https://rikora.net/",
  },
  {
    logoPath: "/sponsors/romans.png",
    websiteLink: "https://romans.ro/",
  },
];

export default function SponsorMarquee() {
  const router = useRouter();

  return (
    <section className="h-full w-auto py-[2.5rem] md:py-[3rem] lg:py-[3.25rem] space-y-[2rem] md:space-y-[3rem] overflow-visible">
      <h1 className="text-[var(--default-yellow)] font-extrabold mr-auto text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
        Sponsors
      </h1>
      <div className="ml-[calc((-100vw + 37rem)/2)] md:ml-[calc((-100vw+44rem)/2)] lg:ml-[calc((-100vw+58rem)/2)] xl:ml-[calc((-100vw+72rem)/2)] 2xl:ml-[calc((-100vw+88rem)/2)] w-[100vw] h-full">
        {/* Desktop Marquee */}
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={100}
          autoFill={true}
          gradient={true}
          gradientColor="var(--default-dark)"
          className="h-[0rem] md:h-[6.5rem] lg:h-[8rem] select-none hidden"
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
                className="h-[4rem] lg:h-[5rem] w-auto px-[3.5rem] lg:px-[4.5rem]"
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
          className="h-[5rem] md:h-[0rem] select-none"
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
                  className="h-[3rem] w-auto px-[2.5rem]"
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
          className="h-[5rem] md:h-[0rem] select-none"
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
                  className="h-[3rem] w-auto px-[2.5rem]"
                />
              </Link>
            ))}
        </Marquee>
      </div>
      {/* Sponsor Button */}
      <div className="flex justify-center">
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
