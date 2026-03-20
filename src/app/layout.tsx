import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: {
    default: "RealEstateAI | Best AI Tools for Real Estate Professionals",
    template: "%s | RealEstateAI",
  },
  description:
    "Compare, review, and discover the best AI-powered tools for real estate agents, brokers, and property managers. Unbiased reviews, side-by-side comparisons, and expert insights.",
  keywords: [
    "AI real estate tools",
    "real estate AI",
    "virtual staging AI",
    "real estate CRM",
    "AI lead generation real estate",
    "AI property valuation",
    "real estate chatbot",
    "AI listing description generator",
    "real estate technology",
    "proptech AI",
    "best AI tools for realtors",
    "real estate automation",
  ],
  authors: [{ name: "RealEstateAI Team" }],
  creator: "RealEstateAI",
  publisher: "RealEstateAI",
  metadataBase: new URL("https://realestate-ai-tools-theta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://realestate-ai-tools-theta.vercel.app",
    siteName: "RealEstateAI",
    title: "RealEstateAI | Best AI Tools for Real Estate Professionals",
    description:
      "Compare, review, and discover the best AI-powered tools for real estate agents, brokers, and property managers. Unbiased reviews and expert insights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RealEstateAI — Best AI Tools for Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RealEstateAI | Best AI Tools for Real Estate Professionals",
    description:
      "Compare, review, and discover the best AI-powered tools for real estate agents, brokers, and property managers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Analytics — replace GA_MEASUREMENT_ID with your actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Google AdSense — replace AD_CLIENT_ID with your actual ca-pub ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-AD_CLIENT_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
