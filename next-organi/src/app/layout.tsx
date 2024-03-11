import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/commons/Footer";
import Header from "@/components/commons/Header";
import MetaNav from "@/components/commons/MetaNav";
import HomeBanner from "@/components/commons/HomeBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetaNav />
        <Header />
        <HomeBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
