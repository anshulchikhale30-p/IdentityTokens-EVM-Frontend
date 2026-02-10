import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mini Decentralized Identity Tokens",
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const atypFont = localFont({
  src: [
    {
      path: "../public/fonts/AtypDisplayTRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-atyp",
  display: "swap",
});

const garamondFont = localFont({
  src: [
    {
      path: "../public/fonts/Garamond.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-garamond",
  display: "swap",
});

const utsahaFont = localFont({
  src: [
    {
      path: "../public/fonts/UtSaHaGumm.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-utsaha",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decentralized Identity Token",
  icons: {
    icon: "/assets/logo.svg",
  },
  description: "Portable, Recoverable and Self-Sovereign Identity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atypFont.variable} ${garamondFont.variable} ${utsahaFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
