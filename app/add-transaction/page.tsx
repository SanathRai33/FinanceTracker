// app/add-transaction/page.tsx  (this is your AddTransaction.tsx page)

import { AddTransactionForm } from "@/src/components/add-transaction/AddTransactionForm";
import { MonthlySummary } from "@/src/components/add-transaction/MonthlySummary";

export default function AddTransactionPage() {
  return (
    <div className="bg-slate-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        {/* Page title */}
        <div className="text-xs sm:text-sm">
          <h1 className="font-semibold text-slate-800 lg:text-[28px] md:text-sm text-sm sm:text-sm">
            Add New Transaction
          </h1>
        </div>

        {/* Main layout: form + summary */}
        <div className="grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <AddTransactionForm />
          <MonthlySummary />
        </div>
      </div>
    </div>
  );
}
