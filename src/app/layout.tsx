import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IPROJEX | Expert Flocage Coupe-Feu & Protection Incendie",
  description:
    "IPROJEX, expert en flocage coupe-feu et protection incendie. 15+ ans d'expertise, certification garantie. Devis gratuit sous 48h pour vos projets de protection passive incendie.",
  keywords: [
    "flocage coupe-feu",
    "protection incendie",
    "flocage thermique",
    "protection structures métalliques",
    "isolation thermique",
    "sécurité incendie",
  ],
  openGraph: {
    title: "IPROJEX | Expert Flocage Coupe-Feu & Protection Incendie",
    description:
      "Expert en flocage coupe-feu et protection incendie. 15+ ans d'expertise, certification garantie.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
