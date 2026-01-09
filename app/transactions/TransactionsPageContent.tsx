// app/transactions/TransactionsPageContent.tsx

"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  useTransactions,
  useTransactionsByType,
  useTransactionsByMonth,
  useDeleteTransaction,
  useUpdateTransaction,
} from "@/src/hooks/useTransactions";
import { TransactionsFilters } from "@/src/components/transactions/TransactionsFilters";
import { TransactionsTable } from "@/src/components/transactions/TransactionsTable";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import TransactionLoader from "@/src/loader/TransactionsLoader";

type TransactionType = "income" | "expense" | "transfer";

interface Transaction {
  _id: string;
  date: string;
  type: TransactionType;
  description: string;
  amount: number;
  categoryId?: string;
  paymentMethod: string;
  recurring: boolean;
  needOrWant?: string;
  notes?: string;
  runningBalance?: number;
}

export default function TransactionsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const typeFilter = (searchParams.get("type") || "all") as
    | TransactionType
    | "all";
  const monthFilter = searchParams.get("month");
  const categoryFilter = searchParams.get("category");

  const { data: allTransactions, isLoading: loadingAll } = useTransactions();

  const { data: filteredTransactions, isLoading: loadingFiltered } =
    typeFilter !== "all"
      ? useTransactionsByType(typeFilter as TransactionType)
      : monthFilter
      ? useTransactionsByMonth(2025, parseInt(monthFilter, 10))
      : useTransactions();

  const deleteTx = useDeleteTransaction();

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  // Attach mutation for the currently editing transaction
  const updateTx = useUpdateTransaction(editingTransaction?._id || "");

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this transaction?")) {
      deleteTx.mutate(id);
    }
  };

  const handleEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
  };

  const handleEditChange = (
    field: keyof Transaction,
    value: string | number | boolean
  ) => {
    if (!editingTransaction) return;
    setEditingTransaction({
      ...editingTransaction,
      [field]: value,
    });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTransaction?._id) return;

    // Build payload – keep it minimal and aligned with backend
    const payload = {
      date: editingTransaction.date,
      type: editingTransaction.type,
      description: editingTransaction.description,
      amount: editingTransaction.amount,
      categoryId: editingTransaction.categoryId,
      paymentMethod: editingTransaction.paymentMethod,
      recurring: editingTransaction.recurring,
      needOrWant: editingTransaction.needOrWant,
      notes: editingTransaction.notes,
    };

    updateTx.mutate(payload, {
      onSuccess: () => {
        toast.success("Transaction updated successfully");
        setEditingTransaction(null);
      },
      onError: () => {
        toast.error("Failed to update transaction");
      },
    });
  };

  const handleEditCancel = () => {
    setEditingTransaction(null);
  };

  const transactionsToShow = filteredTransactions || allTransactions || [];
  const isLoading = loadingFiltered || loadingAll;

  if (isLoading) {
    return <TransactionLoader />;
  }

  return (
    <div className="p-6 space-y-6 bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            My Transactions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {transactionsToShow.length} transactions found
            {typeFilter !== "all" && ` (${typeFilter})`}
            {monthFilter && ` (Month ${monthFilter})`}
            {categoryFilter && ` (Category ${categoryFilter})`}
          </p>
        </div>
        <div>
          <button
            onClick={() => router.push("/add-transaction")}
            className="flex items-center justify-center p-2 text-white transition bg-blue-600 rounded-md shadow-sm cursor-pointer hover:bg-blue-700"
          >
            + New Transaction
          </button>
        </div>
      </div>

      <TransactionsFilters />

      <TransactionsTable
        transactions={transactionsToShow}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* Edit Modal */}
      {editingTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Edit Transaction
            </h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date
                </label>
                <input
                  type="date"
                  value={editingTransaction.date}
                  onChange={(e) => handleEditChange("date", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Type
                </label>
                <select
                  value={editingTransaction.type}
                  onChange={(e) =>
                    handleEditChange(
                      "type",
                      e.target.value as TransactionType
                    )
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                  <option value="transfer">Transfer</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <input
                  type="text"
                  value={editingTransaction.description}
                  onChange={(e) => handleEditChange("description", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={editingTransaction.amount}
                  onChange={(e) => handleEditChange("amount", parseFloat(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Payment Method
                </label>
                <input
                  type="text"
                  value={editingTransaction.paymentMethod}
                  onChange={(e) => handleEditChange("paymentMethod", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={editingTransaction.recurring}
                  onChange={(e) => handleEditChange("recurring", e.target.checked)}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Recurring
                </label>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Need or Want
                </label>
                <select
                  value={editingTransaction.needOrWant || ""}
                  onChange={(e) => handleEditChange("needOrWant", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select</option>
                  <option value="need">Need</option>
                  <option value="want">Want</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Notes
                </label>
                <textarea
                  value={editingTransaction.notes || ""}
                  onChange={(e) => handleEditChange("notes", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows={3}
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleEditCancel}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                  disabled={updateTx.isPending}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-60 dark:bg-blue-700 dark:hover:bg-blue-800"
                  disabled={updateTx.isPending}
                >
                  {updateTx.isPending ? "Saving..." : "Save changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}