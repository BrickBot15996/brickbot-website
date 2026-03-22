import React from "react";
import { useTranslations } from "next-intl";
import PageTitle from "../../_components/page-title";

export function TermsAndConditionsPage() {
  const t = useTranslations("TermsAndConditions");
  const contentText = t("content");

  return (
    <section className="outer-content">
      <PageTitle title={t("title")} />
      <section className="inner-content">
        <p>
          {contentText.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>
    </section>
  );
}
