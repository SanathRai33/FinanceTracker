// src/components/transactions/TransactionsTable.tsx
"use client";

import { format } from "date-fns";
import { FiTrash } from "react-icons/fi";
import { FaPen } from "react-icons/fa";

type Transaction = {
  _id: string;
  date: string;
  type: "income" | "expense" | "transfer";
  description: string;
  amount: number;
  paymentMethod: string;
  recurring: boolean;
  needOrWant: string;
  notes?: string;
  runningBalance?: number;
};

interface Props {
  transactions: Transaction[];
  onDelete: (id: string) => void;  // ✅ from parent
  onEdit: (transaction: Transaction) => void;  // ✅ from parent
}

const typeColors: Record<string, string> = {
  income: "text-emerald-600 bg-emerald-50",
  expense: "text-rose-600 bg-rose-50",
  transfer: "text-blue-600 bg-blue-50",
};

const paymentMethodLabels: Record<string, string> = {
  cash: "Cash",
  card: "Card",
  bank: "Bank",
  wallet: "UPI",
  other: "Other",
};

const columns = [
  "Date",
  "Type",
  "Description",
  "Amount",
  "Payment Method",
  "Recurring",
  "Need/Want",
  "Notes",
  "Balance",
  "Actions",
];

export function TransactionsTable({ transactions, onDelete, onEdit }: Props) {
  if (!transactions.length) {
    return (
      <div className="rounded-xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-200">
        <div className="mx-auto h-16 w-16 rounded-full bg-slate-100 p-3">
          <span className="text-2xl">📊</span>
        </div>
        <h3 className="mt-4 text-lg font-medium text-slate-900">No transactions</h3>
        <p className="mt-1 text-sm text-slate-500">
          No transactions match your filters. Add your first transaction to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-r-2"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {transactions.map((tx) => (
              <tr key={tx._id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 border-r-2">
                  {format(new Date(tx.date), "MMM dd, yyyy")}
                </td>
                <td className="px-6 py-4 border-r-2">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${typeColors[tx.type]}`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-900 max-w-xs truncate border-r-2">
                  {tx.description}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900 border-r-2">
                  <span className={tx.type === "income" ? "text-emerald-600" : "text-rose-600"}>
                    {tx.type === "income" ? "+ " : "- "}₹{tx.amount.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700 capitalize border-r-2">
                  {paymentMethodLabels[tx.paymentMethod] || tx.paymentMethod}
                </td>
                <td className="px-6 py-4 border-r-2">
                  {tx.recurring ? (
                    <span className="inline-flex rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                      🔄 Recurring
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">One-time</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm capitalize text-slate-700 border-r-2">
                  {tx.needOrWant === "n/a" ? "-" : tx.needOrWant}
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate border-r-2">
                  {tx.notes || "-"}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700 border-r-2">
                  {tx.runningBalance ? `₹${tx.runningBalance.toLocaleString()}` : "-"}
                </td>
                <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(tx)} 
                      className="text-blue-600 bg-blue-200 hover:bg-blue-300 p-2 rounded-md hover:text-blue-900 flex items-center justify-center gap-1 text-xs"
                      title="Edit transaction"
                    >
                      <FaPen />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => onDelete(tx._id)} 
                      className="text-rose-600 bg-red-200 hover:bg-red-300 p-2 rounded-md hover:text-rose-900 flex items-center justify-center gap-1 text-xs"
                      title="Delete transaction"
                    >
                      <FiTrash />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
