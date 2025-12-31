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

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    const params = new URLSearchParams(searchParams);
    
    if (value === "all") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  }

  function handleClearFilters() {
    router.push("/transactions", { scroll: false });
    setFilters({ month: "all", type: "all", category: "all" });
  }

  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 text-gray-800">
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
            {/* ... other months */}
            <option value="6">June</option>
            {/* ... */}
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
            <option value="shopping">Shopping</option>
            {/* ... */}
          </select>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={handleClearFilters}
            className="flex-1 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
