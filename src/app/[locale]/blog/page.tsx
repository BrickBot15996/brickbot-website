import { useTranslations } from "next-intl";
import ComingSoon from "../components/coming-soon";

export default function Blog() {
  const t = useTranslations("BrickLog");
  return (
    <section>
      <ComingSoon
        pageName="BrickLog"
        pageDescription={t("description")}
      />
    </section>
  );
}
