// app/page.tsx
"use client";

import OverviewHeader from "@/src/components/dashboard/OverviewHeader";
import StatCard from "@/src/components/dashboard/StatCard";
import { QuickActions } from "@/src/components/dashboard/QuickActions";
import { IncomeDistribution } from "@/src/components/dashboard/IncomeDistribution";
import { RecentTransactions } from "@/src/components/dashboard/RecentTransactions";
import { 
  useDashboardStats, 
  useTransactions,
  useAnalyticsData 
} from "@/src/hooks/useTransactions";
import { useGoals } from "@/src/hooks/useSavingsGoals";
import { useDebtRecords } from "@/src/hooks/useDebts";
import { useCategories } from "@/src/hooks/useCategories";

function PlaceholderIcon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    income: "💰",
    expense: "💸", 
    goals: "🎯",
    debt: "💳",
  };
  return <span>{icons[type] || "📊"}</span>;
}

export default function DashboardPage() {
  // ✅ Core stats
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  const { data: transactions, isLoading: txLoading } = useTransactions();

  // ✅ Analytics data
  const { data: analytics } = useAnalyticsData();

  // ✅ Cross-feature integration
  const { data: goals } = useGoals();
  const { data: debts } = useDebtRecords();
  const { data: categories } = useCategories();

  const totalIncome = stats?.totalIncome ?? 0;
  const totalExpenses = stats?.totalExpenses ?? 0;
  const netBalance = stats?.netBalance ?? 0;

  // ✅ Analytics insights
  const topCategory = analytics?.byCategory?.[0];
  const needVsWant = analytics?.needWantBreakdown;

  return (
    <div className="space-y-8">
      {/* Header */}
      <OverviewHeader 
        isLoading={statsLoading}
        monthLabel="January 2026"
      />

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="Total Income" 
          amount={`₹${totalIncome.toLocaleString()}`}
          icon={<PlaceholderIcon type="income" />}
          accent="green"
        />
        <StatCard 
          label="Total Expenses" 
          amount={`₹${totalExpenses.toLocaleString()}`}
          icon={<PlaceholderIcon type="expense" />}
          accent="red"
        />
        <StatCard 
          label="Net Balance" 
          amount={`₹${netBalance.toLocaleString()}`}
          icon={<PlaceholderIcon type="income" />}
          accent="blue"
        />
      </div>

      {/* Analytics + Quick Actions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeDistribution 
          analytics={analytics}
          categories={categories}
        />
        <QuickActions />
      </div>

      {/* Cross-feature insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          label="Active Goals"
          amount={goals?.length?.toString() || "0"}
          icon={<PlaceholderIcon type="goals" />}
          accent="purple"
        />
        <StatCard 
          label="Pending Debts" 
          amount={debts?.filter(d => d.status === "pending").length?.toString() || "0"}
          icon={<PlaceholderIcon type="debt" />}
          accent="orange"
        />
        <StatCard 
          label="Top Expense Category"
          amount={topCategory ? `${topCategory.category} (₹${topCategory.total.toLocaleString()})` : "N/A"}
          icon={<PlaceholderIcon type="expense" />}
          accent="orange"
        />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions 
        transactions={transactions || []} 
        isLoading={txLoading}
      />
    </div>
  );
}
