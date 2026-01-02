// app/transactions/page.tsx

"use client";

import { useSearchParams } from "next/navigation";
import { useTransactions, useTransactionsByType, useTransactionsByMonth } from "@/src/hooks/useTransactions";
import { TransactionsFilters } from "@/src/components/transactions/TransactionsFilters";
import { TransactionsTable } from "@/src/components/transactions/TransactionsTable";
import { useDeleteTransaction } from "@/src/hooks/useTransactions";
import { Loader2 } from "lucide-react";

export default function TransactionsPage() {
  const searchParams = useSearchParams();

  // ✅ Read URL params for dynamic filtering
  const typeFilter = searchParams.get("type") || "all";
  const monthFilter = searchParams.get("month");
  const categoryFilter = searchParams.get("category");

  // ✅ Fetch all transactions
  const { data: allTransactions, isLoading: loadingAll } = useTransactions();

  // ✅ Use filtered queries based on active filters
  const { data: filteredTransactions, isLoading: loadingFiltered } =
    typeFilter !== "all"
      ? useTransactionsByType(typeFilter as any)
      : monthFilter
      ? useTransactionsByMonth(2025, parseInt(monthFilter))
      : useTransactions();

  const deleteTx = useDeleteTransaction();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this transaction?")) {
      deleteTx.mutate(id);
    }
  };

  const handleEdit = (transaction: any) => {
    console.log("Edit transaction:", transaction);
    alert("Edit functionality coming soon!");
  };

  // ✅ Decide which transactions to show
  const transactionsToShow = filteredTransactions || allTransactions || [];

  // ✅ Loading state
  const isLoading = loadingFiltered || loadingAll;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading transactions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-blue-50">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          💰 My Transactions
        </h1>
        <p className="text-gray-600">
          {transactionsToShow.length} transactions found
          {typeFilter !== "all" && ` (${typeFilter})`}
          {monthFilter && ` (Month ${monthFilter})`}
        </p>
      </div>

      {/* Filters Section */}
      <TransactionsFilters />

      {/* Table Section - Now includes export buttons */}
      <TransactionsTable
        transactions={transactionsToShow}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
