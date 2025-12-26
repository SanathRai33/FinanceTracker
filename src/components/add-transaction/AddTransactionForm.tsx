// app/components/add-transaction/AddTransactionForm.tsx

"use client";

import { useState } from "react";

export function AddTransactionForm() {
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: hook this to backend / server actions
    console.log(form);
  }

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-6">
      <h2 className="mb-4 text-sm font-semibold text-slate-800">
        Transaction Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
        {/* Date + Type */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block font-medium text-slate-600">
              Date<span className="text-red-500"> *</span>
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none ring-0 focus:border-blue-400 focus:bg-white"
              required
            />
          </div>
          <div>
            <label className="mb-1 block font-medium text-slate-600">
              Type<span className="text-red-500"> *</span>
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option>Income</option>
              <option>Expense</option>
              <option>Transfer</option>
            </select>
          </div>
        </div>

        {/* Category + Amount */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block font-medium text-slate-600">
              Category<span className="text-red-500"> *</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option value="">Select category</option>
              <option>Salary</option>
              <option>Food</option>
              <option>Rent</option>
              <option>Shopping</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block font-medium text-slate-600">
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
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="mb-1 block font-medium text-slate-600">
            Description<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief description of transaction"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
            required
          />
        </div>

        {/* Payment method + Recurring + Need/Want */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="mb-1 block font-medium text-slate-600">
              Payment Method<span className="text-red-500"> *</span>
            </label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option value="">Select method</option>
              <option>Cash</option>
              <option>Card</option>
              <option>Bank Transfer</option>
              <option>UPI</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block font-medium text-slate-600">
              Recurring?
            </label>
            <select
              name="recurring"
              value={form.recurring}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block font-medium text-slate-600">
              Need/Want
            </label>
            <select
              name="needWant"
              value={form.needWant}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
            >
              <option>N/A</option>
              <option>Need</option>
              <option>Want</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="mb-1 block font-medium text-slate-600">
            Notes
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Additional notes..."
            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center rounded-full bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm cursor-pointer"
          >
            Save Transaction
          </button>
        </div>
      </form>
    </section>
  );
}
