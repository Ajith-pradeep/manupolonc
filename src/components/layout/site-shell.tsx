import { Suspense } from "react";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/layout/footer";

function HeaderFallback() {
  return <div className="fixed inset-x-0 top-0 z-50 h-14 bg-black md:h-16" />;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Suspense fallback={<HeaderFallback />}>
        <Header />
      </Suspense>
      <main id="main-content" className="flex-1 bg-black text-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
