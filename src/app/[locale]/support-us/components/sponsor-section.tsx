import {
  AnimationWhenInView,
  defaultFadeIn,
} from "@/app/[locale]/_components/animations";
import { useSponsorList } from "@/app/[locale]/_data/sponsor-data";
import { useBronze } from "../../_data/sponsor-tiers-data";
import SponsorLogo from "@/app/[locale]/_components/sponsor-logo";
import { useTranslations } from "next-intl";

export default function SponsorSection() {
  const t = useTranslations("SupportUs.Sponsors");
  const bronze = useBronze();
  const sponsorList = useSponsorList();

  return (
    <section className="flex flex-col items-start justify-center">
      <h2>{t("title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-stretch w-full gap-x-[var(--md-space-x)] gap-y-[var(--lg-space-y)] mt-[var(--xl-space-y)]">
        {sponsorList
          .filter((sponsor) => {
            return sponsor.tier !== bronze;
          })
          .map((sponsor, indexS) => {
            return (
              <AnimationWhenInView
                key={indexS}
                variants={defaultFadeIn}
              >
                <SponsorLogo sponsor={sponsor} />
              </AnimationWhenInView>
            );
          })}
      </div>
    </section>
  );
}
