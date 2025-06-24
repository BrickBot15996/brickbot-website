import { motion } from "framer-motion";
import { defaultFadeIn, opacityFadeIn } from "@/app/components/animations";

export default function PageTitle({ title }: { title: string }) {
  return (
    <motion.section
      variants={opacityFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="relative bg-[linear-gradient(180deg,_transparent,_#201C03)] h-[12rem] md:h-[15rem] lg:h-[18rem] w-[100vw] flex flex-col items-center justify-center overflow-visible"
    >
      <motion.div
        variants={defaultFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="w-[var(--page-width)] h-fit flex flex-col items-center justify-center"
      >
        <h1 className="mr-auto">{title}</h1>
      </motion.div>
      <div className="absolute bottom-[-0.1rem] left-0 w-full md:h-[0.075rem] h-[0.1rem] bg-[linear-gradient(90deg,_var(--default-dark)_3%,_#FFF1B3_34%,_var(--default-dark)_78%)] opacity-75" />
    </motion.section>
  );
}
