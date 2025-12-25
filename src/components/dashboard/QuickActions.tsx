// app/components/dashboard/QuickActions.tsx
import Card from "./Card";

export function QuickActions() {
  return (
    <Card>
      <h2 className="mb-3 text-sm font-semibold text-slate-800">
        Quick Actions
      </h2>
      <p className="mb-3 text-xs text-slate-500">
        Navigate to different sections.
      </p>
      <div className="space-y-2 text-xs font-medium">
        <button className="flex w-full items-center justify-center rounded-full bg-blue-600 py-2.5 text-white shadow-sm transition hover:bg-blue-700">
          + Add New Transaction
        </button>
        <button className="flex w-full items-center justify-center rounded-full border border-slate-200 py-2.5 text-slate-700 hover:bg-slate-50">
          View All Transactions
        </button>
        <button className="flex w-full items-center justify-center rounded-full border border-slate-200 py-2.5 text-slate-700 hover:bg-slate-50">
          View Analytics &amp; Charts
        </button>
      </div>
    </Card>
  );
}
