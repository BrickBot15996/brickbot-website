import "./globals.css";
import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import { GlobalProvider } from "./global-context";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "./_components/navbar/brick-nav";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    url: "https://brickbot.ro/",
    siteName: "BrickBot",
    images: [
      {
        url: "https://brickbot.ro/embed-icon.png",
        width: 256,
        height: 256,
        alt: "BrickBot Icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://brickbot.ro/embed-icon.png"],
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
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/dbb9a2128d94625d-s.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${anekLatin.variable} antialiased flex flex-col`}>
        <NextIntlClientProvider>
          <GlobalProvider>
            <Nav />
            {children}
            <Analytics />
          </GlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
