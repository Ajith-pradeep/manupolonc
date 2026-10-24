"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300",
        scrolled || open
          ? "bg-black/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-editorial flex h-14 items-center justify-between gap-6 md:h-16">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-[0.18em] text-white"
        >
          {siteConfig.shortName}
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {siteConfig.navigation.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-[0.18em] transition-colors",
                  active
                    ? "text-white"
                    : "text-white/55 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.cta.exploreProperties.href} size="sm" variant="outline">
            Explore
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black lg:hidden"
          >
            <nav className="container-editorial flex flex-col py-6" aria-label="Mobile">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.16em] text-white/80"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6" onClick={closeMenu}>
                <Button href={siteConfig.cta.exploreProperties.href} className="w-full">
                  Explore
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
