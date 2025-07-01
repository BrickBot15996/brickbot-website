import Button from "@/app/components/brick-button";

export default function JoinBrickBot() {
  return (
    <section className="relative bg-[linear-gradient(180deg,_transparent,_#1E1800)] h-fit w-[100vw] flex flex-col items-center justify-center overflow-visible mb-[calc(0rem-var(--2xl-space-y))] mt-[calc(0rem-var(--2xl-space-y))]">
      <div className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center my-[var(--xl-space-y)]">
        <h2>Join BrickBot</h2>
        <p className="w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mt-[var(--md-space-y)] mb-[var(--md-space-y)] text-center">
          Passionate about robotics? Fill out the form to show your interest in
          joining our team.
        </p>
        <Button
          text="APPLY"
          arrow={false}
          action={() => {
            window.open("/apply", "_blank");
          }}
        />
      </div>
    </section>
  );
}
