import { useRouter } from "next/navigation";

import Image from "next/image";

import Box from "../../components/brick-box";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProjectProps } from "../projects-data";

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
        className="h-full w-full flex flex-col items-center justify-center"
        borderRadius="2rem"
        hoverEffect={false}
      >
        <div className="flex items-center justify-center w-full pointer-events-none translate-y-[-2rem]">
          <Image
            src={project.logoPath}
            alt={project.name + "Logo"}
            width={275}
            height={275}
            className="object-contain w-[70%] h-auto"
          />
        </div>
        <div className="absolute bottom-[1.4rem] md:bottom-[1.2rem] lg:bottom-[1.2rem] xl:bottom-[1.1rem] 2xl:bottom-[1.15rem] left-[1.2rem] w-[70%] pointer-events-none">
          <h3
            className=""
            style={{ color: project.textColor }}
          >
            {project.extendedName}
          </h3>
        </div>
        <div className="absolute bottom-[1.2rem] left-[85%] w-full pointer-events-none">
          <HiArrowNarrowRight className="z-[10] mb-[-0.25rem] h-auto w-[10%] fill-white" />
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
        className="mr-auto mt-[var(--md-space-y)] group-hover:underline transition-all duration-200"
        style={{ color: project.textColor }}
      >
        {project.extendedName}
        <HiArrowNarrowRight className="inline-flex ml-[0.5rem] group-hover:translate-x-[1rem] group-active:translate-x-[0rem] transition-transform duration-200" />
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
