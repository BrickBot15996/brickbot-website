"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/brick-navbar";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
}
