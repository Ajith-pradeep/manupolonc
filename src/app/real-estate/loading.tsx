import { PropertyCardSkeleton } from "@/components/real-estate/property-card";

export default function RealEstateLoading() {
  return (
    <div className="bg-ivory pt-32 pb-20">
      <div className="container-editorial">
        <div className="h-10 w-64 bg-ivory-deep animate-pulse mb-4" />
        <div className="h-5 w-96 max-w-full bg-ivory-deep animate-pulse mb-12" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <PropertyCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
