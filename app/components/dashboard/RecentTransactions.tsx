// app/components/dashboard/RecentTransactions.tsx
import Card from "@/app/components/dashboard/Card";

export function RecentTransactions() {
  return (
    <Card>
      <h2 className="mb-1 text-sm font-semibold text-slate-800">
        Recent Transactions
      </h2>
      <p className="mb-6 text-xs text-slate-500">
        Latest 5 transactions.
      </p>
      <div className="flex h-28 items-center justify-center text-xs text-slate-400">
        No transactions yet. Add your first transaction to get started!
      </div>
    </Card>
  );
}
