// app/template.tsx

"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Nav from "./components/brick-nav";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";
import { useEffect } from "react";

const pageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isApplyPage = pathname.startsWith("/apply") || pathname == "";

  useEffect(() => {
    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const isPullingDown = currentY - startY > 0;

      if (window.scrollY === 0 && isPullingDown) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        //exit="exit"
      >
        {!isApplyPage ? (
          <>
            <Nav />
            <main className="mt-[var(--navbar-height)]">
              {children}
              <Analytics />
            </main>
            <Footer />
          </>
        ) : (
          <main>
            {children}
            <Analytics />
          </main>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
