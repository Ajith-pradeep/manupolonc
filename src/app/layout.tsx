import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

/** Single professional grotesque — SpaceX-like clarity */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    ...(siteConfig.seo.twitterHandle
      ? { creator: siteConfig.seo.twitterHandle }
      : {}),
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.seo.defaultDescription,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.seo.defaultDescription,
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased bg-black`}
      style={
        {
          colorScheme: "dark",
          backgroundColor: "#000000",
          ["--font-sans-display"]: "var(--font-sans-body)",
        } as CSSProperties
      }
    >
      <body className="flex min-h-full flex-col bg-black font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
