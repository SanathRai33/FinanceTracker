// app/components/analytics/ExpenseSavingsBreakdown.tsx
export function ExpenseSavingsBreakdown() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
      <h2 className="text-sm font-semibold text-slate-800">
        Expense &amp; Savings Breakdown
      </h2>
      <p className="mb-6 mt-1 text-xs text-slate-500">
        Compare your spending categories.
      </p>
      <div className="flex h-40 items-center justify-center text-xs text-slate-400 sm:h-48">
        No data available
      </div>
    </section>
  );
}
