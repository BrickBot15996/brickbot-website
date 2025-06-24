"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/brick-navbar";
import Footer from "./components/brick-footer";
import { Analytics } from "@vercel/analytics/next";
import { GlobalProvider } from "./global-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const originalPush = router.push;
    router.push = (href: string): Promise<boolean> => {
      window.location.href = href;
      return Promise.resolve(true);
    };

    return () => {
      router.push = originalPush;
    };
  }, [router]);
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}
