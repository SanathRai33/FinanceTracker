// app/add-transaction/page.tsx

"use client"; // Add this line

import { useRouter } from "next/navigation";
import { AddTransactionForm } from "@/src/components/add-transaction/AddTransactionForm";
import { MonthlySummary } from "@/src/components/add-transaction/MonthlySummary";
import { ArrowLeft } from "lucide-react";

export default function AddTransactionPage() {
  const router = useRouter();

  return (
    <div className="bg-blue-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen dark:bg-[#121214] dark:text-[#F8FAFC]">
      <div className="flex flex-col max-w-6xl gap-4 mx-auto sm:gap-5">
        {/* Back button - fixed to go back instead of to same page */}
        <button
          onClick={() => router.back()} // Changed to router.back() instead of router.push("/add-transaction")
          className="flex items-center gap-2 px-3 py-2 transition-colors rounded-lg shadow-sm cursor-pointer hover:shadow-md dark:shadow-slate-600 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 w-fit hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <ArrowLeft className="w-4 h-4" />
          <p className="text-sm font-medium">Back</p>
        </button>
        
        {/* Page title */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold sm:text-3xl text-slate-900 dark:text-white">
            Add New Transaction
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Record your income or expenses
          </p>
        </div>

        {/* Main layout: form + summary */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          <AddTransactionForm />
          <MonthlySummary />
        </div>
      </div>
    </div>
  );
}