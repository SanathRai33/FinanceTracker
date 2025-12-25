// app/page.tsx  (or app/dashboard/page.tsx)
import OverviewHeader from "@/src/components/dashboard/OverviewHeader";
import StatCard from "@/src/components/dashboard/StatCard";
import { QuickActions } from "@/src/components/dashboard/QuickActions";
import { IncomeDistribution } from "@/src/components/dashboard/IncomeDistribution";
import { RecentTransactions } from "@/src/components/dashboard/RecentTransactions";

// you can swap these for react-icons if you installed them
function PlaceholderIcon() {
  return <span className="text-xs">💰</span>;
}

export default function DashboardPage() {
  return (
    <div className="bg-slate-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        <OverviewHeader />

        {/* Stat cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard label="Income" amount="$0" icon={<PlaceholderIcon />} accent="green" />
          <StatCard label="Expenses" amount="$0" icon={<PlaceholderIcon />} accent="red" />
          <StatCard label="Savings" amount="$0" icon={<PlaceholderIcon />} accent="blue" />
          <StatCard label="Debt Given" amount="$0" icon={<PlaceholderIcon />} accent="orange" />
          <StatCard label="Net Balance" amount="$0" icon={<PlaceholderIcon />} accent="purple" />
        </div>

        {/* Middle row */}
        <div className="grid gap-3 lg:grid-cols-2">
          <QuickActions />
          <IncomeDistribution />
        </div>

        {/* Bottom row */}
        <RecentTransactions />
      </div>
    </div>
  );
}
