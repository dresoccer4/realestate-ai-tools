import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealEstateAI | Best AI Tools for Real Estate Professionals",
  description:
    "Compare, review, and discover the best AI-powered tools for real estate agents, brokers, and property managers. Unbiased reviews, side-by-side comparisons, and expert insights.",
  keywords:
    "AI real estate tools, real estate AI, virtual staging AI, real estate CRM, AI lead generation real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
