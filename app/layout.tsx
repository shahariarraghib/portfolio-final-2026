import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar/Navbar";
import { generateMetadata } from "@/lib/utility/generateMetadata";
import { SeoContent } from "@/SeoContent/SeoContent";
import { Analytics } from "@/lib/analytics/analyticsScript";

const Footer = dynamic(() => import("@/components/common/Footer/Footer"), {
  ssr: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = generateMetadata(SeoContent.baseSeo);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(roboto.className, roboto.variable)}>
      <head>
        <Analytics />
      </head>
      <body className="bg-white text-black min-w-0 overflow-x-clip antialiased">
        <Navbar />
        <main role="main" className="min-h-[82.5vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
