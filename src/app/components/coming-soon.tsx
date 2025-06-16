import Image from "next/image";

type ComingSoonProps = {
  pageName: string;
  pageDescription: string;
};

export default function ComingSoon({
  pageName,
  pageDescription,
}: ComingSoonProps) {
  return (
    <section className="flex items-center justify-center bg-[linear-gradient(0deg,_#1E1703,_#0f0f0f_98%)] h-[calc(100vh-var(--navbar-height))] w-full select-none">
      <div className="flex flex-col items-center justify-center mt-[-2rem]">
        <h1 className="text-[var(--default-yellow)] text-[5.375rem] md:text-[6.375rem] xl:text-[7.875rem] 2xl:text-[9.375rem] font-bold mb-[-1rem]">
          {pageName}
        </h1>
        <p className="text-[var(--default-text)] text-[1.388rem] md:text-[1.688rem] xl:text-[1.988rem] 2xl:text-[2.188rem] font-medium mb-[2rem] md:mb-[3rem] xl-[3rem] 2xl:mb-[4rem]">
          {pageDescription}
        </p>
        <div className="relative h-[1.538rem] md:h-[1.738rem] lg:h-[1.938rem] xl:h-[2.438rem] w-full overflow-hidden">
          <Image
            src="/coming-soon.svg"
            alt="Coming Soon"
            fill
            className="contain-content"
          />
        </div>
      </div>
    </section>
  );
}
