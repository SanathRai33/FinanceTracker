// app/transactions/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { TransactionsFilters } from "../components/transactions/TransactionsFilters";
import { TransactionsTable } from "../components/transactions/TransactionsTable";

export default function TransactionsPage() {

  const router = useRouter();

  return (
    <div className="bg-slate-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        {/* Title */}
        <div className="lg:text-[28px] md:text-sm text-sm sm:text-sm ">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-slate-800">Transactions</h1>
            <p className="text-xs text-slate-500 indent-3 mt-2">
              Track your income and expenses.
            </p>
          </div>
          <div className="flex justify-end">
            <button onClick={() => router.push("/add-transaction")} className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm">
              <span className="text-base leading-none">+</span>
              <span>Add Transaction</span>
            </button>
          </div>
        </div>

        {/* Filters card */}
        <TransactionsFilters />

        {/* Table */}
        <TransactionsTable />
      </div>
    </div>
  );
}
