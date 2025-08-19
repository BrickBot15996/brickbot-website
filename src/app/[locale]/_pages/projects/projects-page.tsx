import PageTitle from "../../_components/page-title";
import { ProjectGrid } from "./sections/project-cards";
import { useTranslations } from "next-intl";

export function ProjectsPage() {
  const t = useTranslations("Projects");
  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <ProjectGrid />
      </section>
    </section>
  );
}
