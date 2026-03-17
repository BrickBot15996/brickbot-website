import "./globals.css";
import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import { GlobalProvider } from "./global-context";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "./_components/navbar/brick-nav";
import { CDN_LINK } from "./constants";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: CDN_LINK + "/branding/favicon.ico",
  },
  openGraph: {
    url: "https://brickbot.ro/",
    siteName: "BrickBot",
    images: [
      {
        url: CDN_LINK + "/embed.png",
        width: 256,
        height: 256,
        alt: "BrickBot Icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [CDN_LINK + "/embed.png"],
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
          href={CDN_LINK + "/branding/dark-favicon.ico"}
        />
        <link
          rel="preconnect"
          href="https://cdn.brickbot.ro"
        />
      </head>
      <body className={`${anekLatin.variable} antialiased flex flex-col`}>
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
