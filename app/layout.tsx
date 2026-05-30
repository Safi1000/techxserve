import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import PersistentRobot from "@/components/PersistentRobot";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TechxServe — Tomorrow's Reality, Today.",
    template: "%s | TechxServe",
  },
  description:
    "TechxServe builds fast, secure, and scalable digital products — custom-crafted for businesses that refuse to be held back by outdated technology.",
  keywords: [
    "custom software development",
    "cloud transformation",
    "AI analytics",
    "mobile web engineering",
    "automation SaaS",
    "TechxServe",
  ],
  openGraph: {
    siteName: "TechxServe",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <IntroOverlay />
        <Navbar />
        <PersistentRobot />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
