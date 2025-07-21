import { useTranslations } from "next-intl";
import ComingSoon from "../../_components/coming-soon";

export function BlogPage() {
  const t = useTranslations("Blog");
  return (
    <section>
      <ComingSoon
        pageName="BrickLog"
        pageDescription={t("description")}
      />
    </section>
  );
}
