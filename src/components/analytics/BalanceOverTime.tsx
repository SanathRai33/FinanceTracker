// app/components/analytics/BalanceOverTime.tsx
export function BalanceOverTime() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <h2 className="text-sm font-semibold text-slate-800">
        Balance Over Time
      </h2>
      <p className="mt-1 mb-6 text-xs text-slate-500">
        Track your financial health month by month.
      </p>
      <div className="flex items-center justify-center h-56 text-xs text-slate-400 sm:h-64">
        No data available
      </div>
    </section>
  );
}
