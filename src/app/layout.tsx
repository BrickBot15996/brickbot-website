import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Anek_Latin } from "next/font/google";
import "./globals.css";
import Navbar from "./components/brickbot-navbar";
import Footer from "./components/brickbot-footer";
import LoadingScreen from "./components/brickbot-loading";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
    >
      <body
        className={`${anekLatin.variable} ${inter.variable} antialiased flex flex-col`}
      >
        <LoadingScreen />
        <Navbar />

        <main className="mt-[3.5rem] lg:mt-[4rem]">
          {children}
          <Analytics />
        </main>

        <Footer />
      </body>
    </html>
  );
}
