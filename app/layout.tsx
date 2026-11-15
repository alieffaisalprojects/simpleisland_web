import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Island — by Faisal Adriansyah",
  description: "Minimalist Windows utility application by Faisal Adriansyah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f] selection:bg-[#0071e3]/15 selection:text-[#0071e3]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}