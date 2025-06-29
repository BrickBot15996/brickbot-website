"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/brick-navbar";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";
import { GlobalProvider } from "./global-context";
import { opacityFadeIn } from "./components/animations";
import { motion } from "framer-motion";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <GlobalProvider>
      {!(pathname.length == 0 || pathname.startsWith("/apply")) && (
        <motion.div
          variants={opacityFadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Navbar />
          <main className="mt-[var(--navbar-height)]">
            {children}
            <Analytics />
          </main>
          <Footer />
        </motion.div>
      )}
      {(pathname.length == 0 || pathname.startsWith("/apply")) && (
        <main className="mt-[var(--navbar-height)]">
          {children}
          <Analytics />
        </main>
      )}
    </GlobalProvider>
  );
}
