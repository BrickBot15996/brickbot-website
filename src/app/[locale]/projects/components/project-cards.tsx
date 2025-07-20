import { useRouter } from "next/navigation";

import Image from "next/image";

import Box from "../../_components/brick-box";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProjectProps } from "../../_data/projects-data";

export function SmallProjectCard({ project }: SmallProjectCardProps) {
  const router = useRouter();

  return (
    <div className="aspect-3/4 w-auto cursor-pointer select-none">
      <Box
        action={() => {
          router.push(project.pagePath);
        }}
        color={project.color}
        gradient={true}
        className="h-full w-full flex flex-col items-center justify-center relative"
        borderRadius="2rem"
        hoverEffect={true}
      >
        <div className="absolute top-auto bottom-auto flex items-center justify-center w-full pointer-events-none translate-y-[-2rem]">
          <Image
            src={project.logoPath}
            alt={project.name + "Logo"}
            width={275}
            height={275}
            className="object-contain w-[70%] h-auto opacity-80"
          />
        </div>
        <div className="flex flex-row w-full h-full items-end justify-start">
          <div className="mb-[1.5rem] xl:mb-[1rem] 2xl:mb-[1.5rem] ml-[1.5rem] xl:ml-[1rem] 2xl:ml-[1.5rem] w-full pointer-events-none">
            <h3
              className=""
              style={{ color: project.textColor }}
            >
              {project.extendedName}
            </h3>
          </div>
          <div className="mb-[1rem] md:mb-[1.2rem] xl:mb-[1rem] 2xl:mb-[1.2rem] mr-[1rem] md:mr-[1.2rem] xl:mr-[1rem] 2xl:mr-[1.2rem] w-fit h-full flex flex-col items-end justify-end pointer-events-none">
            <HiArrowNarrowRight className="z-[10] h-auto w-[1.5rem] lg:w-[2rem] xl:w-[1.5rem] 2xl:w-[2rem] fill-white" />
          </div>
        </div>
      </Box>
    </div>
  );
}

type SmallProjectCardProps = {
  project: ProjectProps;
};

export function LargeProjectCard({ project }: LargeProjectCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(project.pagePath);
      }}
      className="group flex flex-col items-center justify-center cursor-pointer select-none"
    >
      <div className="w-full h-full">
        <Box
          color={project.color}
          gradient={true}
          borderRadius="1.5rem"
          className="w-[80%] aspect-[2/1] inline-flex items-center justify-center mr-auto"
          hoverEffect={true}
        >
          <Image
            src={project.logoPath}
            alt={project.extendedName + " logo"}
            height={200}
            width={200}
            className="object-cover contain-content max-h-[35%] max-w-[80%] h-auto w-auto"
          />
        </Box>
      </div>
      <h3
        className="mr-auto mt-[var(--md-space-y)] transition-all duration-200 group-hover:underline"
        style={{ color: project.textColor }}
      >
        {project.extendedName.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="inline-flex whitespace-nowrap items-center group-hover:underline">
          {project.extendedName.split(" ").slice(-1)}
          <HiArrowNarrowRight className="ml-2 mt-[0.25rem] group-hover:translate-x-[1rem] group-active:translate-x-0 transition-transform duration-200" />
        </span>
      </h3>
      <p className="w-full h-full mt-[var(--sm-space-y)]">
        {project.description}
      </p>
    </div>
  );
}

type LargeProjectCardProps = {
  project: ProjectProps;
};
