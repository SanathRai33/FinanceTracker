// app/components/transactions/TransactionsFilters.tsx

"use client";

import { useState } from "react";

export function TransactionsFilters() {
  const [filters, setFilters] = useState({
    month: "all",
    type: "all",
    category: "all",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-800">
            Transactions
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          <button className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 cursor-pointer">
            Export to Excel
          </button>
          <button className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 cursor-pointer">
            Export to PDF
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium text-slate-600">
          Filters
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Month
            </label>
            <select
              name="month"
              value={filters.month}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-400 focus:bg-white sm:text-sm"
            >
              <option value="all">All Months</option>
              <option value="jan">January</option>
              <option value="feb">February</option>
              {/* add more */}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Type
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-400 focus:bg-white sm:text-sm"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-600">
              Category
            </label>
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-400 focus:bg-white sm:text-sm"
            >
              <option value="all">All Categories</option>
              <option value="salary">Salary</option>
              <option value="food">Food</option>
              <option value="rent">Rent</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
