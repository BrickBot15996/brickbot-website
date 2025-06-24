import "./globals.css";
import type { Metadata } from "next";
import { Inter, Anek_Latin } from "next/font/google";
import ClientLayout from "./client-layout";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
    >
      <body
        className={`${anekLatin.variable} ${inter.variable} antialiased flex flex-col`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
