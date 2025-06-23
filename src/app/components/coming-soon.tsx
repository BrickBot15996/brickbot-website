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
    <section className="flex items-center justify-center bg-[linear-gradient(0deg,_#1E1703,_#0f0f0f_98%)] min-h-[calc(100vh-var(--navbar-height))] w-full select-none">
      <div className="flex flex-col items-center justify-center mt-[calc(0rem-var(--md-space-y))]">
        <h1>{pageName.toUpperCase()}</h1>
        <p className="mt-[var(--md-space-y)] mb-[var(--lg-space-y)]">
          {pageDescription}
        </p>
        <div className="relative h-[1.138rem] md:h-[1.238rem] lg:h-[1.438rem] w-fit">
          <Image
            src="/coming-soon.svg"
            alt="Coming Soon"
            width={400}
            height={400}
            className="contain-content object-cover w-auto h-full"
          />
        </div>
      </div>
    </section>
  );
}
