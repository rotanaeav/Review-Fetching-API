import type { Metadata } from "next";
import {Inter, Moulpali} from 'next/font/google';
import "./globals.css";
import { Suspense } from "react";
import { LoadingCard } from "@/components/Loading";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const moulpali = Moulpali({
  variable: "--font-moulpali",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Review API App",
  description: "Next.js review about fetching data from API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${moulpali.variable} antialiased`}
      >
        <Suspense fallback={<LoadingCard />}>
          {children}
          </Suspense>
      </body>
    </html>
  );
}
