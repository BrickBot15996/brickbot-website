import { useTranslations } from "next-intl";
import PageTitle from "../../_components/page-title";
import SimpleBox from "../../_components/simple-box";
import PrimaryContact from "./sections/primary-contact";
import AssociationDetails from "./sections/association-details";

export default function ContactPage() {
  const t = useTranslations("Contact");
  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <PrimaryContact />
        <AssociationDetails />
        <Address />
      </section>
    </section>
  );
}

function Address() {
  const t = useTranslations("Contact.Address");
  return (
    <section className="w-full h-fit flex flex-col space-y-[var(--md-space-y)]">
      <h2>{t("title")}</h2>
      <h3 style={{ color: "#ffffff", fontWeight: 500 }}>{t("address")}</h3>
      <SimpleBox
        borderRadius={2}
        className="p-[1rem]"
      >
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=27.1880%2C45.6975%2C27.1948%2C45.7003&layer=mapnik&marker=45.6980500%2C27.1917244"
          className="border-0 rounded-[1rem] w-full aspect-16/9"
          allowFullScreen
        />
      </SimpleBox>
    </section>
  );
}
