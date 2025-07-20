import "./globals.css";
import type { Metadata } from "next";
import { Inter, Anek_Latin } from "next/font/google";
import { GlobalProvider } from "./global-context";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "./_components/navbar/brick-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrickBot",
  description: "Website of team 15996 BrickBot",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className="overflow-x-hidden"
    >
      <body
        className={`${anekLatin.variable} ${inter.variable} antialiased flex flex-col`}
      >
        <NextIntlClientProvider>
          <GlobalProvider>
            <Nav />
            {children}
          </GlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
