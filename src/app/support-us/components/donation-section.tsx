import Button from "@/app/components/brick-button";

export default function DonationSection() {
  return (
    <section className="flex flex-col items-center justify-center w-[100vw] ml-[calc((-100vw+var(--page-width))/2)] h-auto bg-[linear-gradient(180deg,_var(--default-dark),_#1e1e1e)]">
      <div className="flex flex-col lg:flex-row w-[var(--page-width)] h-full gap-x-[var(--xl-space-x)] gap-y-[var(--xl-space-y)] my-[var(--xl-space-y)]">
        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="mb-[var(--md-space-y)]">Redirect 3.5%</h2>
          <p className="mb-[var(--lg-space-y)]">
            For Romanian citizens, redirecting 3.5% of your income tax through
            Form 230 is a simple way to support the BrickBot Association. It
            costs nothing and helps fund our robotics, education, and outreach
            efforts.
          </p>
          <Button
            text="COMPLETE THE FORM"
            action={() => {
              window.open("https://formular230.ro/", "_blank");
            }}
            arrow={true}
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="mb-[var(--md-space-y)]">Donation</h2>
          <p className="mb-[var(--lg-space-y)]">
            Anyone can support the BrickBot Association by making a secure
            donation through Stripe. Your contribution directly funds our
            robotics development, competition participation, and outreach
            events.
          </p>
          <Button
            text="DONATE HERE"
            action={() => {
              window.open(
                "https://support.stripe.com/questions/how-to-accept-donations-through-stripe",
                "_blank"
              );
            }}
            arrow={true}
            accentColor="var(--default-yellow)"
            gradientColorLight="var(--yellow-gradient-light)"
            gradientColorDark="var(--yellow-gradient-dark)"
          />
        </div>
      </div>
    </section>
  );
}
