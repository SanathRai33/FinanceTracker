// app/components/dashboard/QuickActions.tsx
import { useRouter } from "next/navigation";
import Card from "./Card";

export function QuickActions() {

  const router = useRouter();

  return (
    <Card>
      <h2 className="mb-3 text-sm font-semibold text-slate-800">
        Quick Actions
      </h2>
      <p className="mb-3 text-xs text-slate-500">
        Navigate to different sections.
      </p>
      <div className="space-y-2 text-xs font-medium">
        <button onClick={() => router.push("/add-transaction")} className="flex w-full items-center justify-center rounded-full bg-blue-600 py-2.5 text-white shadow-sm transition hover:bg-blue-700 cursor-pointer">
          + Add New Transaction
        </button>
        <button onClick={() => router.push("/transactions")} className="flex w-full items-center justify-center rounded-full border border-slate-200 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer">
          View All Transactions
        </button>
        <button onClick={() => router.push("/analytics")} className="flex w-full items-center justify-center rounded-full border border-slate-200 py-2.5 text-slate-700 hover:bg-slate-50 cursor-pointer">
          View Analytics &amp; Charts
        </button>
      </div>
    </Card>
  );
}
