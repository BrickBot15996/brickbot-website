import { useRouter } from "next/navigation";
import Image from "next/image";

import Button from "../../components/brick-button";
import { motion } from "framer-motion";
import { opacityFadeIn } from "@/app/components/animations";

export default function Banner() {
  const router = useRouter();

  return (
    <section className="relative w-full h-fit flex flex-col">
      <div className="flex flex-row h-[var(--banner-height)] w-full">
        <div className="flex flex-[0_0_100%] items-center mr-auto h-full w-[100vw] bg-[linear-gradient(70deg,_var(--default-dark)_35%,_transparent)] z-2">
          <div className="flex flex-col ml-[var(--lg-space-x)] space-y-[var(--md-space-y)]">
            <h2>
              We build our future
              <br />
              Brick by Brick!
            </h2>
            <Button
              text="BECOME A SPONSOR"
              arrow={true}
              action={() => router.push("/support-us")}
              className="px-[1.35rem] md:px-[1.55rem] lg:px-[1.75rem]"
            />
          </div>
        </div>
        <motion.div
          variants={opacityFadeIn}
          initial="hidden"
          animate="visible"
          className="w-full h-full z-[-1]"
        >
          <Image
            src="/banner.webp"
            alt="BrickBot Group Photo"
            fill
            priority
            className="object-cover translate-x-[22.5%] select-none aspect-16/9 brightness-85"
          />
        </motion.div>
      </div>
      <div className="w-full h-[var(--separator-thickness)] bg-[linear-gradient(90deg,_var(--default-dark)_10%,_var(--default-yellow)_35%,_var(--default-dark)_85%)] brightness-70" />
    </section>
  );
}
