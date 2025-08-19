import { useTranslations } from "next-intl";
import PageTitle from "../../_components/page-title";
import HowToHelpSection from "./sections/how-to-help";
import SponsorSection from "./sections/sponsor-section";
import SponsorshipSection from "./sections/sponsorship-section";

export function SupportUsPage() {
  const t = useTranslations("SupportUs");
  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <HowToHelpSection />
        <SponsorshipSection />
        <SponsorSection />
      </section>
    </section>
  );
}
