"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/brick-navbar";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";
import { GlobalProvider } from "./global-context";
import FrozenRoute from "./frozen-route";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <GlobalProvider>
      <FrozenRoute>
        {!(pathname.length == 0 || pathname.startsWith("/apply")) && (
          <>
            <Navbar />
            <main className="mt-[var(--navbar-height)]">
              {children}
              <Analytics />
            </main>
            <Footer />
          </>
        )}
        {(pathname.length == 0 || pathname.startsWith("/apply")) && (
          <main className="mt-[var(--navbar-height)]">
            {children}
            <Analytics />
          </main>
        )}
      </FrozenRoute>
    </GlobalProvider>
  );
}
