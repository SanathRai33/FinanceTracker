// app/components/dashboard/IncomeDistribution.tsx
import Card from "@/src/components/dashboard/Card";

export function IncomeDistribution() {
  return (
    <Card>
      <h2 className="mb-1 text-sm font-semibold text-slate-800">
        Income Distribution
      </h2>
      <p className="mb-6 text-xs text-slate-500">
        Where your money goes this month.
      </p>
      <div className="flex h-40 items-center justify-center text-xs text-slate-400">
        No data available for this month.
      </div>
    </Card>
  );
}
