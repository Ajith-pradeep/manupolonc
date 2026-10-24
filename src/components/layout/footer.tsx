import Link from "next/link";
import { getConfiguredSocialLinks, siteConfig } from "@/lib/site-config";

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const social = getConfiguredSocialLinks();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-editorial py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/45">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
            >
              Contact
            </Link>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[0.7rem] uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:justify-between">
          <p>© {COPYRIGHT_YEAR} Manuel Zau Polo</p>
          <p>Dubai · Angola · International</p>
        </div>
      </div>
    </footer>
  );
}
