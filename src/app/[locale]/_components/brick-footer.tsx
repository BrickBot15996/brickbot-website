import Link from "next/link";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useProjectList } from "../_data/projects-data";
import { FaInstagram } from "react-icons/fa";
import {
  AiOutlineLinkedin,
  AiOutlineTikTok,
  AiOutlineYoutube,
} from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { i18nPath } from "../_utils/redirectPath";
import { useLocale } from "../_hooks/use-locale";
import LoadFadeImage from "./fade-in-on-load-image";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer)] h-auto w-full flex flex-col items-center justify-center mt-[var(--2xl-space-y)] py-[var(--xl-space-y)] px-[calc((100vw-var(--page-width))/2)]">
      <NavMenuDesktop />
      <NavMenuMobile />
      <section className="flex flex-col sm:flex-row w-full h-auto mt-[var(--lg-space-y)] space-x-0 sm:space-x-[var(--md-space-x)] lg:space-x-[var(--lg-space-x)] items-center justify-center">
        <Link
          href="https://anpc.ro/ce-este-sal/"
          aria-label="ANPC – Soluționarea alternativă a litigiilor"
          className="cursor-pointer hover:brightness-85"
        >
          <LoadFadeImage
            src="/assets/anpc/anpc-sal.webp"
            alt="ANPC – Soluționarea alternativă a litigiilor"
            width={250}
            height={50}
          />
        </Link>
        <Link
          href="https://ec.europa.eu/consumers/odr"
          aria-label="ANPC – Soluționarea online a litigiilor"
          className="cursor-pointer hover:brightness-85"
        >
          <LoadFadeImage
            src="/assets/anpc/anpc-sol.webp"
            alt="ANPC – Soluționarea online a litigiilor"
            width={250}
            height={50}
          />
        </Link>
      </section>
      <Link
        href="https://natieprineducatie.ro/home"
        className="relative h-[3rem] lg:h-[4rem] w-fit hover:brightness-75 mt-[var(--lg-space-y)] overflow-hidden"
      >
        <Image
          src="/assets/natie/natie-bar.svg"
          alt="Nație prin Educație logos"
          width={1000}
          height={200}
          className="object-contain h-full w-full"
        />
      </Link>
    </footer>
  );
}

function NavMenuDesktop() {
  const date = new Date();
  const t = useTranslations("Footer");
  const shameless = useTranslations();
  const locale = useLocale();
  const projectList = useProjectList();

  return (
    <div className="hidden md:flex flex-row w-[var(--page-width)] h-auto justify-between">
      <div className="flex flex-col w-auto h-auto space-y-[var(--md-space-y)] items-start">
        <div className="relative w-full h-[2rem]">
          <Image
            src="/assets/branding/brick-text.svg"
            alt="BrickBot"
            fill
            className="object-left object-contain w-full h-full"
          />
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-y-[var(--sm-space-y)] gap-x-[var(--md-space-x)]">
          <Link
            href="https://www.instagram.com/brickbotcnu/"
            aria-label="BrickBot Instagram Page"
            target="_blank"
          >
            <FaInstagram className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.tiktok.com/@brickbotcnu"
            aria-label="BrickBot TikTok Page"
            target="_blank"
          >
            <AiOutlineTikTok className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.facebook.com/brickbotcnu/"
            aria-label="BrickBot Facebook Page"
            target="_blank"
          >
            <BiLogoFacebook className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            aria-label="BrickBot YouTube Channel"
            target="_blank"
          >
            <AiOutlineYoutube className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/brickbot/"
            aria-label="BrickBot LinkedIn Page"
            target="_blank"
          >
            <AiOutlineLinkedin className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="mailto:brickbot@liceulunirea.ro"
            aria-label="BrickBot Email"
            target="_blank"
          >
            <MdOutlineMailOutline className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
        </div>
        <span className="inline h-auto w-auto mr-auto">
          <Link
            href="https://mariusbaican.com/"
            className="hover:brightness-75 active:scale-3d active:brightness-100 transition-transform duration-150 cursor-pointer w-fit"
            target="_blank"
          >
            <p style={{ color: "var(--alternate-text)" }}>
              {shameless("Author")}
            </p>
          </Link>
          <p className="mt-[0.5rem]">Brickbot © {date.getFullYear()}</p>
        </span>
      </div>
      <div className="flex flex-col space-y-[0.75rem]">
        <h3
          className="mb-[calc(var(--md-space-y)-0.75rem)]"
          style={{ color: "var(--alternate-text)", fontWeight: 600 }}
        >
          {t("Projects.title")}
        </h3>
        {projectList.map((project) => {
          return (
            <Link
              href={project.pagePath}
              key={project.name}
            >
              <p className="hover:brightness-75">{project.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col space-y-[0.75rem]">
        <h3
          className="mb-[calc(var(--md-space-y)-0.75rem)]"
          style={{ color: "var(--alternate-text)", fontWeight: 600 }}
        >
          {t("Team.title")}
        </h3>
        <Link href={i18nPath(locale, "ourTeam")}>
          <p className="hover:brightness-75">{t("Team.links.OurTeam")}</p>
        </Link>
        <Link href={i18nPath(locale, "blog")}>
          <p className="hover:brightness-75">{t("Team.links.BrickLog")}</p>
        </Link>
        <Link href={"/apply"}>
          <p className="hover:brightness-75">{t("Team.links.JoinBrickBot")}</p>
        </Link>
        <Link href={"https://links.brickbot.ro"}>
          <p className="hover:brightness-75">{t("Team.links.BrickLinks")}</p>
        </Link>
      </div>
      <div className="flex flex-col space-y-[0.75rem]">
        <h3
          className="mb-[calc(var(--md-space-y)-0.75rem)]"
          style={{ color: "var(--alternate-text)", fontWeight: 600 }}
        >
          {t("GetInvolved.title")}
        </h3>
        <Link href={i18nPath(locale, "supportUs")}>
          <p className="hover:brightness-75">
            {t("GetInvolved.links.SupportUs")}
          </p>
        </Link>
        <Link href={i18nPath(locale, "contact")}>
          <p className="hover:brightness-75">
            {t("GetInvolved.links.Contact")}
          </p>
        </Link>
      </div>
    </div>
  );
}

function NavMenuMobile() {
  const date = new Date();
  const t = useTranslations("Footer");
  const shameless = useTranslations();
  const locale = useLocale();
  const projectList = useProjectList();

  return (
    <div className="flex md:hidden flex-col w-[var(--page-width)] h-auto space-y-[var(--xl-space-y)]">
      <div className="flex flex-col w-auto h-auto space-y-[var(--lg-space-y)] items-start">
        <div className="relative w-full h-[1.5rem] overflow-hidden">
          <Image
            src="/assets/branding/brick-text.svg"
            alt="BrickBot"
            fill
            className="object-left object-contain w-full h-full"
          />
        </div>
        <div className="grid grid-cols-6 gap-x-[var(--md-space-x)]">
          <Link
            href="https://www.instagram.com/brickbotcnu/"
            aria-label="BrickBot Instagram Page"
            target="_blank"
          >
            <FaInstagram className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.tiktok.com/@brickbotcnu"
            aria-label="BrickBot TikTok Page"
            target="_blank"
          >
            <AiOutlineTikTok className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.facebook.com/brickbotcnu/"
            aria-label="BrickBot Facebook Page"
            target="_blank"
          >
            <BiLogoFacebook className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            aria-label="BrickBot YouTube Channel"
            target="_blank"
          >
            <AiOutlineYoutube className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/brickbot/"
            aria-label="BrickBot LinkedIn Page"
            target="_blank"
          >
            <AiOutlineLinkedin className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
          <Link
            href="mailto:brickbot@liceulunirea.ro"
            aria-label="BrickBot Email"
            target="_blank"
          >
            <MdOutlineMailOutline className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto transition-transform duration-150 fill-[var(--alternate-text)]" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row w-full h-fit justify-between">
        <div className="flex flex-col h-full space-y-[var(--xl-space-y)]">
          <div className="flex flex-col space-y-[1rem]">
            <h3
              className="mb-[calc(var(--lg-space-y)-1rem)]"
              style={{ color: "var(--alternate-text)", fontWeight: 600 }}
            >
              {t("Projects.title")}
            </h3>
            {projectList.map((project) => {
              return (
                <Link
                  href={project.pagePath}
                  key={project.name}
                >
                  <p className="hover:brightness-75">{project.name}</p>
                </Link>
              );
            })}
          </div>
          <span className="inline lg:hidden h-auto w-auto mr-auto">
            <Link
              href="https://mariusbaican.com/"
              className="hover:brightness-75 active:scale-3d active:brightness-100 transition-transform duration-150 cursor-pointer w-fit"
              target="_blank"
            >
              <p style={{ color: "var(--alternate-text)" }}>
                {shameless("Author")}
              </p>
            </Link>
            <p className="mt-[0.5rem]">Brickbot © {date.getFullYear()}</p>
          </span>
        </div>
        <div className="flex flex-col h-full space-y-[var(--xl-space-y)]">
          <div className="flex flex-col space-y-[1rem]">
            <h3
              className="mb-[calc(var(--lg-space-y)-1rem)]"
              style={{ color: "var(--alternate-text)", fontWeight: 600 }}
            >
              {t("Team.title")}
            </h3>
            <Link href={i18nPath(locale, "ourTeam")}>
              <p className="hover:brightness-75">{t("Team.links.OurTeam")}</p>
            </Link>
            <Link href={i18nPath(locale, "blog")}>
              <p className="hover:brightness-75">{t("Team.links.BrickLog")}</p>
            </Link>
            <Link href={"/apply"}>
              <p className="hover:brightness-75">
                {t("Team.links.JoinBrickBot")}
              </p>
            </Link>
            <Link href={"https://links.brickbot.ro"}>
              <p className="hover:brightness-75">
                {t("Team.links.BrickLinks")}
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-[1rem]">
            <h3
              className="mb-[calc(var(--lg-space-y)-1rem)]"
              style={{ color: "var(--alternate-text)", fontWeight: 600 }}
            >
              {t("GetInvolved.title")}
            </h3>
            <Link href={i18nPath(locale, "supportUs")}>
              <p className="hover:brightness-75">
                {t("GetInvolved.links.SupportUs")}
              </p>
            </Link>
            <Link href={i18nPath(locale, "contact")}>
              <p className="hover:brightness-75">
                {t("GetInvolved.links.Contact")}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
