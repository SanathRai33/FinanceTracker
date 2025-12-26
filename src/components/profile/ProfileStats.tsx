// app/profile/components/ProfileStats.tsx
"use client";

import { TbCurrencyRupee } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Balance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Balance</p>
            <h3 className="text-2xl font-bold text-gray-900">₹45,678.90</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <TbCurrencyRupee className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Monthly Expenses */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Monthly Expenses</p>
            <h3 className="text-2xl font-bold text-gray-900">₹12,345.67</h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <RiBillLine className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Savings Goal Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Savings Goal Progress</p>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">65% of ₹1,00,000</p>
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center ml-4">
            <MdOutlineSecurity className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}