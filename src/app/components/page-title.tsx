export default function PageTitle({ title }: { title: string }) {
  return (
    <section className="relative ml-[calc((-100vw+var(--page-width))/2)] bg-[linear-gradient(180deg,_transparent,_#201C03)] h-[12rem] md:h-[15rem] lg:h-[18rem] w-[100vw] flex flex-col items-center justify-center overflow-visible">
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center">
        <h1 className="mr-auto">{title}</h1>
      </div>
      <div className="absolute bottom-[-0.1rem] left-0 w-full md:h-[0.075rem] h-[0.1rem] bg-[linear-gradient(90deg,_var(--default-dark)_3%,_#FFF1B3_34%,_var(--default-dark)_78%)] opacity-75" />
    </section>
  );
}
