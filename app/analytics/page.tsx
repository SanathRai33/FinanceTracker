// app/analytics/page.tsx
"use client";

import { BalanceOverTime } from "@/src/components/analytics/BalanceOverTime";
import { ExpenseSavingsBreakdown } from "@/src/components/analytics/ExpenseSavingsBreakdown";
import { NeedWantBreakdown } from "@/src/components/analytics/NeedWantBreakdown";
import { AnalyticsStatCard } from "@/src/components/analytics/AnalyticsStatCard";
import { 
  useBalanceOverTime, 
  useExpenseSavingsBreakdown, 
  useNeedWantBreakdown, 
  useAnalyticsStats 
} from "@/src/hooks/useAnalytics";
import { Loader2 } from "lucide-react";

export default function AnalyticsPage() {
  const { data: balanceData, isLoading: balanceLoading } = useBalanceOverTime();
  const { data: expenseData, isLoading: expenseLoading } = useExpenseSavingsBreakdown();
  const { data: needWantData, isLoading: needWantLoading } = useNeedWantBreakdown();
  const { data: statsData, isLoading: statsLoading } = useAnalyticsStats();

  const isLoading = balanceLoading || expenseLoading || needWantLoading || statsLoading;

  if (isLoading) {
    return (
      <div className="p-8 text-center bg-blue-50  dark:bg-[#121214] dark:text-[#F8FAFC] min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-slate-400" />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-blue-50 dark:bg-[#121214] dark:text-[#F8FAFC] min-h-full">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Detailed insights into your financial activity</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 mb-8 lg:grid-cols-2 xl:grid-cols-4">
          <AnalyticsStatCard 
            label="Total Income" 
            value={statsData?.find((s: any) => s._id === "income")?.total || 0}
            change="+12.5%"
            trend="up"
          />
          <AnalyticsStatCard 
            label="Total Expenses" 
            value={statsData?.find((s: any) => s._id === "expense")?.total || 0}
            change="-3.2%"
            trend="down"
          />
          <AnalyticsStatCard 
            label="Transactions Count" 
            value={statsData?.reduce((sum: number, s: any) => sum + s.count, 0) || 0}
            change="+5%"
            trend="up"
          />
          <AnalyticsStatCard 
            label="Avg Transaction" 
            value={statsData?.reduce((sum: number, s: any) => sum + s.avg, 0) || 0}
            change="+8.1%"
            trend="up"
          />
        </div>

        {/* Charts */}
        <div className="grid gap-8 lg:grid-cols-2">
          <BalanceOverTime data={balanceData || []} />
          <ExpenseSavingsBreakdown 
            totalIncome={expenseData?.totalIncome || 0}
            totalExpense={expenseData?.totalExpense || 0}
            savings={expenseData?.savings || 0}
          />
          <NeedWantBreakdown data={needWantData || []} />
          <div className="lg:col-span-2">
            {/* Future chart space */}
            <div className="flex items-center justify-center h-64 p-8 bg-white border-2 border-dashed rounded-xl border-slate-200 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700">
              <div className="text-center">
                <span className="mb-2 text-3xl">📈</span>
                <p className="text-slate-500">More charts coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}