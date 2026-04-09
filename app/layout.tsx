import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shahariar Bhuiyan",
  description:
    "Creative web developer specializing in modern frameworks, responsive design, and interactive animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(roboto.className, "font-sans", geist.variable)}
    >
      <head>{/* <Analytics /> */}</head>
      <body className="bg-white text-black">
        <Navbar />
        <main role="main" className="min-h-[82.5vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
