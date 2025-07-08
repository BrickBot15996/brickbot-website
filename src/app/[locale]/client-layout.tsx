"use client";

import { usePathname } from "next/navigation";
import Nav from "./components/brick-nav";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";
import { GlobalProvider } from "./global-context";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <GlobalProvider>
      {!(pathname.length == 0 || pathname.startsWith("/apply")) && (
        <>
          <Nav />
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
    </GlobalProvider>
  );
}
