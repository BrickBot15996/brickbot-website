import ProjectTitle from "../sections/project-title";
import ImageCarousel, {
  CarouselItem,
} from "@/app/[locale]/_components/image-carousel";
import { ProjectProps, useSparks } from "../../../_data/projects-data";
import { useTranslations } from "next-intl";
import { CDN_LINK } from "@/app/[locale]/constants";

export function SparksPage() {
  const project: ProjectProps = useSparks();
  return (
    <section className="outer-content">
      <ProjectTitle project={project} />
      <section className="inner-content">
        <Sparks1 {...project} />
      </section>
    </section>
  );
}

function Sparks1(project: ProjectProps) {
  const sparks1: CarouselItem[] = [
    {
      imageSrc: CDN_LINK + "/website/projects/sparks/sirius1.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: CDN_LINK + "/website/projects/sparks/sirius2.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: CDN_LINK + "/website/projects/sparks/sirius3.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: CDN_LINK + "/website/projects/sparks/sirius4.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
    {
      imageSrc: CDN_LINK + "/website/projects/sparks/sirius5.webp",
      alt: "Meeting with Moldovan teams",
      aspectRatio: "16/9",
    },
  ];
  const t = useTranslations("Projects.Sparks.Sparks1");

  return (
    <div className="w-full">
      <h2 style={{ color: "var(--sparks-text)" }}>{t("title")}</h2>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--sm-space-y)]">
        {t("text.paragraph0")}
      </p>
      <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[var(--lg-space-y)]">
        {t("text.paragraph1")}
      </p>
      <ImageCarousel
        buttonAccentColor={project.buttonColor}
        buttonGradientLight={project.buttonGradientLight}
        buttonGradientDark={project.buttonGradientDark}
        content={sparks1}
      />
    </div>
  );
}
