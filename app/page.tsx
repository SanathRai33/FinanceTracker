// app/page.tsx
"use client";

import dynamic from 'next/dynamic';
import { useDashboardStats, useTransactions } from "@/src/hooks/useTransactions";

const OverviewHeader = dynamic(() => import("@/src/components/dashboard/OverviewHeader"));
const StatCard = dynamic(() => import("@/src/components/dashboard/StatCard"));
const QuickActions = dynamic(() => import("@/src/components/dashboard/QuickActions").then(mod => ({ default: mod.QuickActions })));
const IncomeDistribution = dynamic(() => import("@/src/components/dashboard/IncomeDistribution").then(mod => ({ default: mod.IncomeDistribution })));
const RecentTransactions = dynamic(() => import("@/src/components/dashboard/RecentTransactions").then(mod => ({ default: mod.RecentTransactions })));

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
