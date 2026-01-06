// app/page.tsx
"use client";

import OverviewHeader from "@/src/components/dashboard/OverviewHeader";
import StatCard from "@/src/components/dashboard/StatCard";
import { QuickActions } from "@/src/components/dashboard/QuickActions";
import { IncomeDistribution } from "@/src/components/dashboard/IncomeDistribution";
import { RecentTransactions } from "@/src/components/dashboard/RecentTransactions";
import { useDashboardStats, useTransactions } from "@/src/hooks/useTransactions";

function PlaceholderIcon() {
  return <span className="text-xs">💰</span>;
}

export default function DashboardPage() {
  const { data: stats, isLoading: statsLoading } = useDashboardStats();
  const { data: transactions, isLoading: txLoading } = useTransactions();

  const totalIncome = stats?.totalIncome ?? 0;
  const totalExpenses = stats?.totalExpenses ?? 0;
  const netBalance = stats?.netBalance ?? 0;

  return (
    <div className="px-3 py-4 bg-blue-50 dark:bg-[#121214]  sm:px-4 sm:py-6 lg:px-6">
      <div className="flex flex-col max-w-6xl gap-4 mx-auto sm:gap-5">
        <OverviewHeader isLoading={statsLoading} />

        {/* Stat cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            label="Income"
            amount={statsLoading ? "…" : `$${totalIncome}`}
            icon={<PlaceholderIcon />}
            accent="green"
          />
          <StatCard
            label="Expenses"
            amount={statsLoading ? "…" : `$${totalExpenses}`}
            icon={<PlaceholderIcon />}
            accent="red"
          />
          <StatCard
            label="Savings"
            amount={statsLoading ? "…" : `$${Math.max(totalIncome - totalExpenses, 0)}`}
            icon={<PlaceholderIcon />}
            accent="blue"
          />
          <StatCard
            label="Debt Given"
            amount="$0"
            icon={<PlaceholderIcon />}
            accent="orange"
          />
          <StatCard
            label="Net Balance"
            amount={statsLoading ? "…" : `$${netBalance}`}
            icon={<PlaceholderIcon />}
            accent="purple"
          />
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <QuickActions />
          <IncomeDistribution />
        </div>

        <RecentTransactions
          transactions={transactions ?? []}
          isLoading={txLoading}
        />
      </div>
    </div>
  );
}
