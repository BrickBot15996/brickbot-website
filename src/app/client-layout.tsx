"use client";

import { usePageLoad } from "./page-load-context";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/brick-navbar";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFullyLoaded } = usePageLoad();

  return (
    <AnimatePresence>
      {isFullyLoaded && (
        <motion.section
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Navbar />
          <main className="mt-[var(--navbar-height)]">
            {children}
            <Analytics />
          </main>
          <Footer />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
