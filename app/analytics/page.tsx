// app/analytics/page.tsx

import AnalyticsStatCard from "../components/analytics/AnalyticsStatCard";
import { BalanceOverTime } from "../components/analytics/BalanceOverTime";
import { ExpenseSavingsBreakdown } from "../components/analytics/ExpenseSavingsBreakdown";
import { NeedWantBreakdown } from "../components/analytics/NeedWantBreakdown";

// replace with react-icons if you like
function MiniIcon() {
  return <span className="text-xs">📈</span>;
}

export default function AnalyticsPage() {
  return (
    <div className="bg-slate-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        {/* Title */}
        <div className="text-xs sm:text-sm">
          <h1 className="font-semibold text-slate-800 lg:text-[28px] md:text-sm text-sm sm:text-sm">
            Analytics &amp; Charts
          </h1>
        </div>

        {/* Top stats row */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <AnalyticsStatCard
            label="Total Income"
            amount="$0"
            icon={<MiniIcon />}
            accent="green"
          />
          <AnalyticsStatCard
            label="Total Expenses"
            amount="$0"
            icon={<MiniIcon />}
            accent="red"
          />
          <AnalyticsStatCard
            label="Total Savings"
            amount="$0"
            icon={<MiniIcon />}
            accent="blue"
          />
          <AnalyticsStatCard
            label="Debt Given"
            amount="$0"
            icon={<MiniIcon />}
            accent="orange"
          />
          <AnalyticsStatCard
            label="Net Balance"
            amount="$0"
            icon={<MiniIcon />}
            accent="purple"
          />
        </div>

        {/* Balance chart */}
        <BalanceOverTime />

        {/* Bottom two charts */}
        <div className="grid gap-4 lg:grid-cols-2">
          <ExpenseSavingsBreakdown />
          <NeedWantBreakdown />
        </div>
      </div>
    </div>
  );
}
