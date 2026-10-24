export default function Loading() {
  return (
    <div className="min-h-[50svh] flex items-center justify-center bg-bg pt-28">
      <div className="text-center">
        <div className="mx-auto h-px w-24 bg-bronze/60 mb-6 animate-pulse" />
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-stone">
          Loading
        </p>
      </div>
    </div>
  );
}
