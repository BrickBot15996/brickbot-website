import { Variants } from "framer-motion";

export const defaultFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const opacityFadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const buttonOverlayAnimation: Variants = {
  default: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hovered: {
    opacity: 0.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  clicked: {
    opacity: 0.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const arrowButtonScaleAnimation: Variants = {
  default: {
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hovered: {
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  clicked: {
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const brickButtonScaleAnimation: Variants = {
  default: {
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hovered: {
    scale: 1.0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  clicked: {
    scale: 0.93,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
