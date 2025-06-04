import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Marquee from "react-fast-marquee";

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
];

export default function SponsorMarquee() {
  return (
    <section className="relative flex flex-col items-center justify-center h-full w-full px-[1.5rem] md:px-[3rem] lg:px-[5rem] py-[2.5rem] md:py-[3rem] lg:py-[3.25rem]  space-y-[2rem] md:space-y-[3rem]">
      <h1 className="text-[#ffd100] font-extrabold text-[2rem] md:text-[2.35rem] lg:text-[2.75rem] mr-auto">
        Sponsors
      </h1>
      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        speed={120}
        autoFill={true}
        gradient={false}
        className="h-[5rem] md:h-[6.5rem] lg:h-[8rem] select-none"
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
              className="h-[3rem] md:h-[4rem] lg:h-[5rem] w-auto px-[2.5rem] md:px-[3.5rem] lg:px-[4.5rem]"
            />
          </Link>
        ))}
      </Marquee>
      <Link
        href="https://letmegooglethat.com/?q=BrickBot"
        className="mb-[3rem] md:mb-[4rem]"
      >
        <Button
          text="BECOME OUR NEXT SPONSOR"
          arrow={false}
          color="#ffd100"
        />
      </Link>
    </section>
  );
}
