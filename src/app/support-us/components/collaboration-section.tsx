import Button from "@/app/components/brick-button";

export default function CollaborationSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-[var(--lg-space-y)]">
      <h2
        className="mb-[var(--lg-space-y)] text-center"
        style={{ color: "var(--alternate-text)", fontWeight: 700 }}
      >
        Want to help in other ways?
      </h2>
      <Button
        text="CONTACT US"
        arrow={true}
        accentColor="var(--default-yellow)"
        gradientColorLight="var(--yellow-gradient-light)"
        gradientColorDark="var(--yellow-gradient-dark)"
      />
    </div>
  );
}
