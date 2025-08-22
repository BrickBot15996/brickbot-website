import { useTranslations } from "next-intl";
import PageTitle from "../../_components/page-title";
import SimpleBox from "../../_components/simple-box";
import { CgFileDocument } from "react-icons/cg";
import Image from "next/image";
import PrimaryContact from "./sections/primary-contact";

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

function AssociationDetails() {
  const t = useTranslations("Contact.Association");
  return (
    <section className="w-full h-fit flex flex-col space-y-[var(--lg-space-y)]">
      <h2>{t("title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch gap-x-[var(--lg-space-x)] gap-y-[var(--md-space-y)]">
        <SimpleBox className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]">
          <div className="relative h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-square">
            <Image
              src="/assets/support-us/sponsors/banca-transilvania.webp"
              alt="Banca Transilvania logo"
              fill
              priority
              fetchPriority="high"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h5>Banca Transilvania</h5>
            <p>{t("subsidiary")}</p>
          </div>
        </SimpleBox>
        <SimpleBox className="flex flex-row p-[calc(var(--sm-space-y)+0.25rem)] md:p-[var(--sm-space-y)] items-center space-x-[var(--sm-space-y)]">
          <CgFileDocument className="h-[2rem] md:h-[2.5rem] lg:h-[3rem] w-auto aspect-square fill-white" />
          <div className="flex flex-col">
            <h5>IBAN</h5>
            <p>{t("iban")}</p>
          </div>
        </SimpleBox>
      </div>
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
