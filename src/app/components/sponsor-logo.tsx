import Link from "next/link";
import { SponsorData } from "../home/sponsor-data";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export type SponsorLogoProps = {
  sponsor: SponsorData;
};

export default function SponsorLogo({ sponsor }: SponsorLogoProps) {
  return (
    <>
      <Link
        href={sponsor.websiteLink}
        target="_blank"
        className="flex cursor-pointer hover:opacity-50 items-center justify-center relative h-[3rem] md:h-[4rem] lg:h-[5rem]"
      >
        <Image
          src={sponsor.logoPath}
          alt={sponsor.name}
          fill
          className="object-contain"
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
    </>
  );
}
