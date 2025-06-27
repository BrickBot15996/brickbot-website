import Link from "next/link";
import { SponsorData } from "../home/sponsor-data";
import Image from "next/image";

export type SponsorLogoProps = {
  sponsor: SponsorData;
};

export default function SponsorLogo({ sponsor }: SponsorLogoProps) {
  return (
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
      />
    </Link>
  );
}
