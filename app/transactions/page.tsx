// app/transactions/page.tsx
"use client";

import { useTransactions, useTransactionsByType, useTransactionsByMonth } from "@/src/hooks/useTransactions";
import { TransactionsFilters } from "@/src/components/transactions/TransactionsFilters";
import { TransactionsTable } from "@/src/components/transactions/TransactionsTable";
import { Loader2 } from "lucide-react";

export default function TransactionsPage() {
  const { data: allTransactions, isLoading: loadingAll } = useTransactions();
  const { data: incomeTx, isLoading: loadingIncome } = useTransactionsByType("income");
  const { data: expenseTx, isLoading: loadingExpense } = useTransactionsByType("expense");

  const currentMonthTx = useTransactionsByMonth(new Date().getFullYear(), new Date().getMonth() + 1);

  if (loadingAll) {
    return (
      <div className="p-8 text-center bg-blue-50 min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-slate-400" />
        <p className="mt-2 text-sm text-slate-500">Loading transactions...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Transactions</h1>
            <p className="text-sm text-slate-500">
              {allTransactions?.length || 0} transactions found
            </p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Export to Excel
            </button>
            <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              Export to PDF
            </button>
          </div>
        </div>

        <TransactionsFilters />

        <TransactionsTable transactions={allTransactions || []} />
      </div>
    </div>
  );
}
