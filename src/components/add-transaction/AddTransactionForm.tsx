// app/components/add-transaction/AddTransactionForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useAddTransaction } from "@/src/hooks/useTransactions";

const INCOME_CATEGORIES = [
  "Salary",
  "Freelance",
  "Investment",
  "Dividend",
  "Rental Income",
  "Business",
  "Bonus",
  "Gift",
  "Other Income",
];

const EXPENSE_CATEGORIES = [
  "Food & Dining",
  "Rent/Mortgage",
  "Utilities",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Healthcare",
  "Education",
  "Insurance",
  "Subscriptions",
  "Debt Payment",
  "Travel",
  "Grocery",
  "Other Expense",
];

const TRANSFER_CATEGORIES = [
  "Savings Account",
  "Checking Account",
  "Investment Account",
  "Credit Card",
  "Cash Withdrawal",
  "Other Transfer",
];

export function AddTransactionForm() {
  const addTransaction = useAddTransaction();
  const [form, setForm] = useState({
    date: "",
    type: "Income",
    category: "",
    amount: "",
    description: "",
    paymentMethod: "",
    recurring: "No",
    needWant: "N/A",
    notes: "",
  });
  const [categoryOptions, setCategoryOptions] = useState(EXPENSE_CATEGORIES);

  // Update categories when type changes
  useEffect(() => {
    if (form.type === "Income") {
      setCategoryOptions(INCOME_CATEGORIES);
      setForm((prev) => ({ ...prev, category: "" }));
    } else if (form.type === "Expense") {
      setCategoryOptions(EXPENSE_CATEGORIES);
      setForm((prev) => ({ ...prev, category: "" }));
    } else if (form.type === "Transfer") {
      setCategoryOptions(TRANSFER_CATEGORIES);
      setForm((prev) => ({ ...prev, category: "" }));
    }
  }, [form.type]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Transform form data to match backend schema
    const paymentMethodMap: Record<string, string> = {
      "Cash": "cash",
      "Card": "card",
      "Bank Transfer": "bank",
      "UPI": "wallet",
    };

    const needWantMap: Record<string, string> = {
      "N/A": "n/a",
      "Need": "need",
      "Want": "want",
    };

    // Validate and transform amount
    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount < 0) {
      return;
    }

    // Ensure paymentMethod is valid (default to "other" if empty or invalid)
    const paymentMethod = form.paymentMethod 
      ? (paymentMethodMap[form.paymentMethod] || "other")
      : "other";

    const payload: any = {
      date: new Date(form.date).toISOString(),
      type: form.type.toLowerCase(),
      amount: amount,
      description: form.description.trim() || undefined,
      category: form.category || undefined, // Include category if selected
      paymentMethod: paymentMethod,
      recurring: form.recurring === "Yes",
      needOrWant: needWantMap[form.needWant] || "n/a",
    };

    // Only include notes if it has a value
    if (form.notes.trim()) {
      payload.notes = form.notes.trim();
    }

    addTransaction.mutate(payload, {
      onSuccess: () => {
        // Reset form on success
        setForm({
          date: "",
          type: "Income",
          category: "",
          amount: "",
          description: "",
          paymentMethod: "",
          recurring: "No",
          needWant: "N/A",
          notes: "",
        });
      },
    });
  }

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-6 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
      <h2 className="mb-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
        Transaction Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
        {/* Date + Type */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Date<span className="text-red-500"> *</span>
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 ring-0 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Type<span className="text-red-500"> *</span>
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Transfer">Transfer</option>
            </select>
          </div>
        </div>

        {/* Category + Amount */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Category<span className="text-red-500"> *</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
              required
            >
              <option value="">Select {form.type.toLowerCase()} category</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Amount<span className="text-red-500"> *</span>
            </label>
            <input
              type="number"
              min={0}
              step="0.01"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
            Description<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief description of transaction"
            className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
            required
          />
        </div>

        {/* Payment method + Recurring + Need/Want */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Payment Method<span className="text-red-500"> *</span>
            </label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
            >
              <option value="">Select method</option>
              <option>Cash</option>
              <option>Card</option>
              <option>Bank Transfer</option>
              <option>UPI</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Recurring?
            </label>
            <select
              name="recurring"
              value={form.recurring}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
              Need/Want
            </label>
            <select
              name="needWant"
              value={form.needWant}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg outline-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
            >
              <option>N/A</option>
              <option>Need</option>
              <option>Want</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-1 font-medium text-slate-600 dark:text-slate-300">
            Notes
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Additional notes..."
            className="w-full px-3 py-2 border rounded-lg outline-none resize-none border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-400 focus:bg-white dark:focus:ring-0 dark:border-slate-600 dark:bg-[#1e1f20] dark:text-slate-300"
          />
        </div>

        {/* Error Message */}
        {addTransaction.isError && (
          <div className="p-3 text-xs text-red-600 rounded-lg bg-red-50 sm:text-sm">
            Failed to save transaction. Please try again.
          </div>
        )}

        {/* Success Message */}
        {addTransaction.isSuccess && (
          <div className="p-3 text-xs rounded-lg bg-emerald-50 text-emerald-600 sm:text-sm">
            Transaction saved successfully!
          </div>
        )}

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={addTransaction.isPending}
            className="mt-2 flex w-full items-center justify-center rounded-full bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {addTransaction.isPending ? "Saving..." : "Save Transaction"}
          </button>
        </div>
      </form>
    </section>
  );
}
