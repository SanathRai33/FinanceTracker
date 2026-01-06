// app/profile/components/ProfileStats.tsx
"use client";

import { TbCurrencyRupee } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Total Balance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">₹45,678.90</h3>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
            <TbCurrencyRupee className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Monthly Expenses */}
      <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Expenses</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">₹12,345.67</h3>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
            <RiBillLine className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Savings Goal Progress */}
      <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Savings Goal Progress</p>
            <div className="mt-2">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-200">65% of ₹1,00,000</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-12 h-12 ml-4 bg-purple-100 rounded-full">
            <MdOutlineSecurity className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}