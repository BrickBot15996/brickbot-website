import Button from "@/app/[locale]/_components/brick-button";
import { useTranslations } from "next-intl";

export default function JoinBrickBot() {
  const t = useTranslations("OurTeam.JoinBrickBot");
  return (
    <section className="relative bg-[linear-gradient(180deg,_transparent,_#1E1800)] h-fit w-[100vw] flex flex-col items-center justify-center overflow-visible mb-[calc(0rem-var(--2xl-space-y))] mt-[calc(0rem-var(--2xl-space-y))]">
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[var(--xl-space-y)]">
        <h2>{t("title")}</h2>
        <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--md-space-y)] text-center">
          {t("text")}
        </p>
        <Button
          text={t("buttonText")}
          arrow={false}
          action={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdhuVfh2RyC0MiKmwmsHwoun3WSluxmfESnBfrRO5NKK9T28Q/viewform",
              "_blank"
            );
          }}
        />
      </div>
    </section>
  );
}
