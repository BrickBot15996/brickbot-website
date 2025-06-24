import Button from "@/app/components/brick-button";
import { motion } from "framer-motion";
import { defaultFadeIn } from "@/app/components/animations";

export default function CollaborationSection() {
  return (
    <motion.div
      variants={defaultFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-col items-center justify-center w-full mb-[var(--lg-space-y)]"
    >
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
    </motion.div>
  );
}
