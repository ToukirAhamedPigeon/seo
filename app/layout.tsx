import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/Loader";
import FloatingNav from "@/components/FloatingNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pigeonic SEO Blog",
    template: "%s | Pigeonic SEO Blog",
  },
  description: "Come and Read My Awesome Articles!",
  twitter: {
    card: "summary_large_image",
    title: "Pigeonic SEO Blog",
    description: "Come and Read My Awesome Articles!",
    creator: "@pigeonic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
