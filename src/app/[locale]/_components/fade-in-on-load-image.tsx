import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function LoadFadeImage(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full relative inline-flex items-center justify-center"
    >
      <Image
        {...props}
        onLoad={(e) => {
          setIsLoaded(true);
          props.onLoad?.(e);
        }}
      />
    </motion.div>
  );
}
