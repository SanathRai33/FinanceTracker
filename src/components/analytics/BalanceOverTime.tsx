// app/components/analytics/BalanceOverTime.tsx
export function BalanceOverTime() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
      <h2 className="text-sm font-semibold text-slate-800">
        Balance Over Time
      </h2>
      <p className="mb-6 mt-1 text-xs text-slate-500">
        Track your financial health month by month.
      </p>
      <div className="flex h-56 items-center justify-center text-xs text-slate-400 sm:h-64">
        No data available
      </div>
    </section>
  );
}
