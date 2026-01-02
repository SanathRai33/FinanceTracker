// app/add-transaction/page.tsx

"use client"; // Add this line

import { useRouter } from "next/navigation";
import { AddTransactionForm } from "@/src/components/add-transaction/AddTransactionForm";
import { MonthlySummary } from "@/src/components/add-transaction/MonthlySummary";
import { ArrowLeft } from "lucide-react";

export default function AddTransactionPage() {
  const router = useRouter();

  return (
    <div className="bg-blue-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        {/* Back button - fixed to go back instead of to same page */}
        <button
          onClick={() => router.back()} // Changed to router.back() instead of router.push("/add-transaction")
          className="flex items-center shadow-sm hover:shadow-md gap-2 text-slate-600 hover:text-slate-800 transition-colors w-fit py-2 px-3 rounded-lg hover:bg-white/50 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <p className="text-sm font-medium">Back</p>
        </button>
        
        {/* Page title */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Add New Transaction
          </h1>
          <p className="text-slate-600 mt-2 text-sm">
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