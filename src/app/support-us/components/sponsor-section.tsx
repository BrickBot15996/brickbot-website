import { defaultFadeIn } from "@/app/components/animations";
import { sponsorList } from "@/app/home/sponsor-data";
import { motion } from "framer-motion";
import { bronze } from "../sponsor-tiers-data";
import SponsorLogo from "@/app/components/sponsor-logo";
import { usePathname } from "next/navigation";

export default function SponsorSection() {
  const isActivePage = usePathname() == "/support-us";
  return (
    <section className="flex flex-col items-start justify-center">
      <h2>Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-stretch w-full gap-x-[var(--md-space-x)] gap-y-[var(--lg-space-y)] mt-[var(--xl-space-y)]">
        {sponsorList
          .filter((sponsor) => {
            return sponsor.tier !== bronze;
          })
          .map((sponsor, indexS) => {
            return (
              <motion.div
                key={indexS}
                variants={defaultFadeIn}
                initial="hidden"
                whileInView={isActivePage ? "visible" : "hidden"}
                viewport={{ once: false, margin: "-10%" }}
              >
                <SponsorLogo sponsor={sponsor} />
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
