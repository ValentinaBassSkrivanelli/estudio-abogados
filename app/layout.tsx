import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Public_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const serif = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const titulo = `${siteConfig.legalName}, abogados en ${siteConfig.city}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titulo,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: titulo,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.legalName,
    locale: "es_AR",
    type: "website",
  },
  robots: siteConfig.demo ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#F2F3EE",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: "Salta",
    addressCountry: "AR",
  },
  areaServed: siteConfig.city,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {!siteConfig.demo && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-tinta focus:px-4 focus:py-2 focus:text-papel"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
