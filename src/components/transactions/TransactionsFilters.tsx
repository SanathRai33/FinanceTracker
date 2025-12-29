// src/components/transactions/TransactionsFilters.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function TransactionsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    month: searchParams.get("month") || "all",
    type: searchParams.get("type") || "all",
    category: searchParams.get("category") || "all",
  });

  function handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    // Update URL params
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow-sm ring-1 text-gray-800 ring-slate-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-slate-700">Month</label>
          <select
            name="month"
            value={filters.month}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-slate-700">Type</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-xs font-medium text-slate-700">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="salary">Salary</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>

        <div className="flex-1 flex gap-2">
          <button className="flex-1 rounded-lg bg-slate-100 p-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
            Clear Filters
          </button>
          <button className="flex-1 rounded-lg bg-emerald-600 p-2 text-sm font-medium text-white hover:bg-emerald-700">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
