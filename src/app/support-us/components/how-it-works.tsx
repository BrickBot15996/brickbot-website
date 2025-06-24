import Image from "next/image";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";

export default function HowItWorksSection() {
  return (
    <motion.section
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="w-full h-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-x-[var(--xl-space-x)] gap-y-[var(--xl-space-y)]"
    >
      <div className="flex flex-col items-start justify-start">
        <h2>How It Works</h2>
        <p className="mt-[var(--lg-space-y)] w-[100%]">
          Our team relies on sponsorships, which are made through sponsorship
          contracts with our official association. Each contribution helps cover
          essential costs and comes with benefits like logo placement or social
          media mentions.
        </p>
      </div>
      <div className="flex flex-col space-y-[var(--md-space-y)] px-[2rem] sm:px-[4rem] md:px-[0rem] xl:px-[3rem] 2xl:px-[5rem]">
        <div className="bg-[linear-gradient(180deg,_var(--carousel-gradient-light),_var(--carousel-gradient-dark))] w-full h-full p-[0.25rem] rounded-[1rem] aspect-16/9">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/support-us/promotional-materials.webp"
              alt="Wall and Roll-up"
              fill
              priority
              className="object-cover rounded-[0.75rem] contain-content h-full w-full"
            />
          </div>
        </div>
        <p className="text-center">
          Our Wall and Roll-Up where we display our sponsors at events
        </p>
      </div>
    </motion.section>
  );
}
