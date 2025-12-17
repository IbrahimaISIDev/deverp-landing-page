import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "devERP - Plateforme de gestion pour l'enseignement supérieur au Sénégal",
  description: "La solution ERP complète pour digitaliser et simplifier la gestion de votre établissement d'enseignement supérieur. Inscriptions en ligne, portail étudiant, suivi financier automatisé.",
  keywords: "ERP, gestion école, enseignement supérieur, Sénégal, inscriptions en ligne, portail étudiant",
  authors: [{ name: "devERP Team" }],
  openGraph: {
    title: "devERP - Gestion intelligente pour l'éducation",
    description: "Transformez la gestion de votre établissement avec devERP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-jakarta)' }}
      >
        {children}
      </body>
    </html>
  );
}