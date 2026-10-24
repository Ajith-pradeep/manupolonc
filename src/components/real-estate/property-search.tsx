"use client";

import { useCallback, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { PropertyCategory, TransactionType } from "@/types/property";
import { cn } from "@/lib/utils";

const categories: { value: PropertyCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "land", label: "Land" },
  { value: "rental", label: "Rental" },
];

const transactions: { value: TransactionType | "all"; label: string }[] = [
  { value: "all", label: "Any type" },
  { value: "sale", label: "For Sale" },
  { value: "rent", label: "For Rent" },
];

type PropertySearchProps = {
  locations: string[];
};

export function PropertySearch({ locations }: PropertySearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const current = {
    q: searchParams.get("q") ?? "",
    location: searchParams.get("location") ?? "",
    category: searchParams.get("category") ?? "all",
    type: searchParams.get("type") ?? "all",
    minPrice: searchParams.get("minPrice") ?? "",
    maxPrice: searchParams.get("maxPrice") ?? "",
    bedrooms: searchParams.get("bedrooms") ?? "",
  };

  const updateParams = useCallback(
    (updates: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (!value || value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      const qs = params.toString();
      startTransition(() => {
        router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      });
    },
    [pathname, router, searchParams],
  );

  const clearAll = () => {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  };

  const hasFilters = searchParams.toString().length > 0;

  return (
    <div
      className={cn(
        "bg-paper border border-charcoal/10 p-5 md:p-7",
        isPending && "opacity-80",
      )}
    >
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          updateParams({
            q: String(form.get("q") || ""),
            location: String(form.get("location") || ""),
            type: String(form.get("type") || "all"),
            minPrice: String(form.get("minPrice") || ""),
            maxPrice: String(form.get("maxPrice") || ""),
            bedrooms: String(form.get("bedrooms") || ""),
          });
        }}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
              Search
            </span>
            <span className="relative block">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone"
                aria-hidden
              />
              <input
                name="q"
                defaultValue={current.q}
                placeholder="Keyword…"
                className="w-full border border-charcoal/15 bg-ivory pl-10 pr-3 py-2.5 text-sm text-charcoal placeholder:text-stone/70 focus:border-bronze"
              />
            </span>
          </label>

          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
              Location
            </span>
            <select
              name="location"
              defaultValue={current.location}
              className="w-full border border-charcoal/15 bg-ivory px-3 py-2.5 text-sm text-charcoal focus:border-bronze"
            >
              <option value="">Any location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
              Transaction
            </span>
            <select
              name="type"
              defaultValue={current.type}
              className="w-full border border-charcoal/15 bg-ivory px-3 py-2.5 text-sm text-charcoal focus:border-bronze"
            >
              {transactions.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
              Min. bedrooms
            </span>
            <select
              name="bedrooms"
              defaultValue={current.bedrooms}
              className="w-full border border-charcoal/15 bg-ivory px-3 py-2.5 text-sm text-charcoal focus:border-bronze"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-end">
          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
              Min price
            </span>
            <input
              name="minPrice"
              type="number"
              min={0}
              defaultValue={current.minPrice}
              placeholder="0"
              className="w-full border border-charcoal/15 bg-ivory px-3 py-2.5 text-sm text-charcoal placeholder:text-stone/70 focus:border-bronze"
            />
          </label>
          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
              Max price
            </span>
            <input
              name="maxPrice"
              type="number"
              min={0}
              defaultValue={current.maxPrice}
              placeholder="No max"
              className="w-full border border-charcoal/15 bg-ivory px-3 py-2.5 text-sm text-charcoal placeholder:text-stone/70 focus:border-bronze"
            />
          </label>
          <div className="lg:col-span-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-charcoal text-ivory px-6 py-2.5 text-xs uppercase tracking-[0.16em] hover:bg-charcoal-soft transition-colors"
            >
              Apply filters
            </button>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-stone hover:text-charcoal transition-colors px-3 py-2.5"
              >
                <X size={14} /> Clear
              </button>
            ) : null}
          </div>
        </div>
      </form>

      <div
        className="mt-6 pt-5 border-t border-charcoal/10 flex flex-wrap gap-2"
        role="group"
        aria-label="Property category"
      >
        {categories.map((cat) => {
          const active = current.category === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => updateParams({ category: cat.value })}
              className={cn(
                "px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] border transition-colors",
                active
                  ? "border-bronze bg-bronze text-ivory"
                  : "border-charcoal/15 text-stone hover:border-bronze hover:text-bronze",
              )}
              aria-pressed={active}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
