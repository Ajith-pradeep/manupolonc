import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { AboutDeep } from "@/components/home/about-deep";
import { ScrollPortraits } from "@/components/home/scroll-portraits";
import { MediaGallery } from "@/components/home/media-gallery";
import { QuoteParallax } from "@/components/home/quote-parallax";
import { HomeValues } from "@/components/home/values";
import { RealEstateFeature } from "@/components/home/real-estate-feature";
import { InstagramFollowers } from "@/components/home/instagram-followers";
import { ContactCta } from "@/components/home/contact-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutDeep />
      <ScrollPortraits />
      <MediaGallery />
      <QuoteParallax />
      <HomeValues />
      <InstagramFollowers />
      <RealEstateFeature />
      <ContactCta />
    </>
  );
}
