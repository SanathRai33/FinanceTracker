// app/components/analytics/NeedWantBreakdown.tsx
export function NeedWantBreakdown() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <h2 className="text-sm font-semibold text-slate-800">
        Need vs Want Breakdown
      </h2>
      <p className="mt-1 mb-6 text-xs text-slate-500">
        Analyze your spending priorities.
      </p>
      <div className="flex items-center justify-center h-40 text-xs text-slate-400 sm:h-48">
        No data available
      </div>
    </section>
  );
}
