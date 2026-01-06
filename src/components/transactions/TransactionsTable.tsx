// src/components/transactions/TransactionsTable.tsx

"use client";

import { format } from "date-fns";
import { Trash2, Edit2, Download, FileText } from "lucide-react";
import { exportToExcel, exportToPDF } from "@/src/utils/export-utils";
import { toast } from "sonner";

const paymentMethodLabels: Record<string, string> = {
  credit_card: "💳 Credit Card",
  debit_card: "🏧 Debit Card",
  upi: "📱 UPI",
  cash: "💵 Cash",
  bank_transfer: "🏦 Bank Transfer",
  wallet: "👛 Wallet",
};

interface Transaction {
  _id: string;
  date: string;
  type: "income" | "expense" | "transfer";
  description: string;
  amount: number;
  paymentMethod: string;
  recurring: boolean;
  needOrWant?: string;
  notes?: string;
  runningBalance?: number;
}

interface TransactionsTableProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  onEdit: (transaction: Transaction) => void;
}

export function TransactionsTable({
  transactions,
  onDelete,
  onEdit,
}: TransactionsTableProps) {
  // ✅ Handle Excel Export
  const handleExportExcel = () => {
    if (transactions.length === 0) {
      toast.warning("No transactions to export");
      return;
    }
    const success = exportToExcel(transactions, "my_transactions");
    if (success) {
      toast.success("✅ Excel file downloaded successfully!");
    } else {
      toast.error("❌ Failed to export Excel file");
    }
  };

  // ✅ Handle PDF Export
  const handleExportPDF = () => {
    if (transactions.length === 0) {
      toast.warning("No transactions to export");
      return;
    }
    const success = exportToPDF(transactions, "my_transactions");
    if (success) {
      toast.success("✅ PDF file downloaded successfully!");
    } else {
      toast.error("❌ Failed to export PDF file");
    }
  };

  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg mb-4">
          No transactions match your filters. Add your first transaction to get
          started.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleExportExcel}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
            disabled
          >
            <Download size={18} />
            Export to Excel
          </button>
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
            disabled
          >
            <FileText size={18} />
            Export to PDF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* ✅ Export Buttons */}
      <div className="flex gap-3 justify-end bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <button
          onClick={handleExportExcel}
          className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition font-medium"
          title="Download as Excel file"
        >
          <Download size={18} />
          Export to Excel
        </button>
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition font-medium"
          title="Download as PDF file"
        >
          <FileText size={18} />
          Export to PDF
        </button>
      </div>

      {/* 📊 Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Date
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Type
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Description
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Amount
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Method
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Recurring
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Need/Want
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300 border text-center">
                Notes
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 border text-center">
                Balance
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 border text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr
                key={tx._id}
                className="border-b border-gray-200 hover:bg-gray-50 transition text-center"
              >
                <td className="px-6 py-4 text-sm text-gray-900 border">
                  {format(new Date(tx.date), "MMM dd, yyyy")}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      tx.type === "income"
                        ? "bg-green-100 text-green-700"
                        : tx.type === "expense"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border">
                  {tx.description}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-semibold border ${
                    tx.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "income" ? "+ " : "- "}₹
                  {tx.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border">
                  {paymentMethodLabels[tx.paymentMethod] || tx.paymentMethod}
                </td>
                <td className="px-6 py-4 text-sm text-center border">
                  {tx.recurring ? (
                    <span className="text-green-600 font-semibold">
                      🔄 Recurring
                    </span>
                  ) : (
                    <span className="text-gray-500">One-time</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border">
                  {tx.needOrWant === "n/a" ? "-" : tx.needOrWant}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border">
                  {tx.notes || "-"}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 border">
                  {tx.runningBalance
                    ? `₹${tx.runningBalance.toLocaleString()}`
                    : "-"}
                </td>
                <td className="px-6 py-4 text-center border">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => onEdit(tx)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Edit transaction"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(tx._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete transaction"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Total Transactions</p>
          <p className="text-2xl font-bold text-gray-900">
            {transactions.length}
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg border border-green-300">
          <p className="text-sm text-green-700 mb-2">Total Income</p>
          <p className="text-2xl font-bold text-green-700">
            ₹
            {transactions
              .filter((tx) => tx.type === "income")
              .reduce((sum, tx) => sum + tx.amount, 0)
              .toLocaleString()}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-sm text-red-700 mb-2">Total Expenses</p>
          <p className="text-2xl font-bold text-red-700">
            ₹
            {transactions
              .filter((tx) => tx.type === "expense")
              .reduce((sum, tx) => sum + tx.amount, 0)
              .toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}