import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quronix Technologies - Innovative Healthcare Solutions",
  description: "Leading provider of cutting-edge healthcare technology solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased relative min-h-screen overflow-x-hidden">
        {/* Animated Background Component */}
        <AnimatedBackground />

        {/* Content */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}