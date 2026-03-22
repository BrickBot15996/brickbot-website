import { CSSProperties } from "react";

export default function PageTitle({
  title,
  style,
}: {
  title: string;
  style?: CSSProperties;
}) {
  return (
    <section
      className="relative bg-[linear-gradient(180deg,_transparent,_#201C03)] min-h-[12rem] md:min-h-[15rem] lg:min-h-[18rem] w-[100vw] flex flex-col items-center justify-center overflow-visible"
      style={{ ...style }}
    >
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[2rem]">
        <h1 className="mr-auto max-w-[90vw]">{title}</h1>
      </div>
      <div className="absolute bottom-[-0.1rem] left-0 w-full md:h-[0.075rem] h-[0.1rem] bg-[linear-gradient(90deg,_var(--default-dark)_3%,_#FFF1B3_34%,_var(--default-dark)_78%)] opacity-75" />
    </section>
  );
}
