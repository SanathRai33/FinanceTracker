// app/transactions/page.tsx
"use client";

import { useTransactions } from "@/src/hooks/useTransactions";
import { TransactionsFilters } from "@/src/components/transactions/TransactionsFilters";
import { TransactionsTable } from "@/src/components/transactions/TransactionsTable";
import { useDeleteTransaction } from "@/src/hooks/useTransactions";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function TransactionsPage() {
  const { data: allTransactions, isLoading: loadingAll } = useTransactions();
  const deleteTx = useDeleteTransaction();

  // ✅ Delete handler
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this transaction?")) {
      deleteTx.mutate(id, {
        onSuccess: () => {
          toast.success("Transaction deleted successfully!");
        },
        onError: () => {
          toast.error("Failed to delete transaction");
        },
      });
    }
  };

  // ✅ Edit handler (placeholder for now)
  const handleEdit = (transaction: any) => {
    alert("Edit functionality coming soon!");
  };

  if (loadingAll) {
    return (
      <div className="p-8 text-center bg-blue-50 min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-slate-400" />
        <p className="mt-2 text-sm text-slate-500">Loading transactions...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 min-h-full">
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
        {/* ✅ NOW with required props */}
        <TransactionsTable
          transactions={allTransactions || []}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}
