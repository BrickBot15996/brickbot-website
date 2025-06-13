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
    <section className="flex items-center justify-center bg-[linear-gradient(0deg,_#1E1703,_#0f0f0f_98%)] h-[calc(100vh-var(--navbar-height))] lg:h-[calc(100vh-var(--lg-navbar-height))] w-full select-none">
      <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden">
        <Image
          src="/crane.png"
          alt="Coming Soon image"
          fill
          className="opacity-9 translate-y-[67%] pointer-events-none"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-[-1.75rem] lg:mt-[-2rem]">
        <h1 className="text-[var(--default-yellow)] text-[9.375rem] font-bold">
          {pageName}
        </h1>
        <p className="text-[var(--default-text)] text-[2.188rem] font-medium mb-[4rem]">
          {pageDescription}
        </p>
        <h1 className="text-[var(--alternate-text)] text-[3.438rem] tracking-widest">
          COMING SOON
        </h1>
      </div>
    </section>
  );
}
