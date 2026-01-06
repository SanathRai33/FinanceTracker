// app/debt-tracker/page.tsx

"use client";

import { DebtToolbar } from "../../src/components/debt/DebtToolbar";
import { DebtEmptyState } from "../../src/components/debt/DebtEmptyState";
import { useDebtRecords } from "../../src/hooks/useDebts";
import { DebtCard } from "@/src/components/debt/DebtCard";

export default function DebtTrackerPage() {
  const { data: debts, isLoading, isError } = useDebtRecords();

  const hasDebts = debts && debts.length > 0;

  return (
    <div className="bg-blue-50  dark:bg-[#121214] dark:text-[#F8FAFC] px-3 py-4 sm:px-4 sm:py-6 lg:p-8 space-y-4 min-h-screen">
      <DebtToolbar />

      {isLoading && (
        <div className="text-sm text-slate-500 dark:text-slate-400">Loading debts...</div>
      )}

      {isError && (
        <div className="text-sm text-red-600 dark:text-red-400">
          Failed to load debts. Please try again.
        </div>
      )}

      {!isLoading && !isError && !hasDebts && <DebtEmptyState />}

      {!isLoading && !isError && hasDebts && (
        <div className="grid grid-cols-1 gap-4 p-0 lg:grid-cols-2 md:grid-cols-2 lg:px-10 lg:py-2">
          {debts!.map((debt, idx) => (
           <DebtCard debt={debt} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
