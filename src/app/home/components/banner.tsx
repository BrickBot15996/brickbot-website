import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

import Button from "../../components/brick-button";
import { defaultFadeIn, opacityFadeIn } from "@/app/components/animations";

export default function Banner() {
  const router = useRouter();

  return (
    <section className="relative w-full flex flex-col">
      <motion.div
        variants={opacityFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="relative flex h-[var(--banner-height)] w-full"
      >
        <Image
          src="/banner.webp"
          alt="BrickBot Group Photo"
          fill
          priority
          className="object-cover opacity-95 translate-x-[22.5%] select-none aspect-16/9"
        />
        <div className="flex items-center mr-auto h-full w-full bg-[linear-gradient(70deg,_var(--default-dark)_30%,_transparent)] z-2">
          <motion.div
            variants={defaultFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col ml-[var(--lg-space-x)] space-y-[var(--md-space-y)] z-3"
          >
            <h2>
              We build our future
              <br />
              Brick by Brick!
            </h2>
            <Button
              text="BECOME A SPONSOR"
              arrow={true}
              accentColor="var(--default-yellow)"
              gradientColorLight="var(--yellow-gradient-light)"
              gradientColorDark="var(--yellow-gradient-dark)"
              action={() => router.push("/support-us")}
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full h-[var(--separator-thickness)] bg-[linear-gradient(90deg,_var(--default-dark)_10%,_var(--default-yellow)_35%,_var(--default-dark)_85%)] opacity-50" />
    </section>
  );
}
