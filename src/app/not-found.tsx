import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70svh] flex items-center bg-bg pt-28">
      <div className="container-editorial py-16 text-center max-w-lg mx-auto">
        <p className="text-sm font-medium text-bronze mb-3">404</p>
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-charcoal">
          Page not found
        </h1>
        <p className="text-stone mb-8">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">Return home</Button>
          <Button href="/real-estate" variant="outline">
            Explore properties
          </Button>
        </div>
      </div>
    </section>
  );
}
