// app/components/analytics/AnalyticsStatCard.tsx
import { ReactNode } from "react";

type Props = {
  label: string;
  amount: string;
  icon?: ReactNode;
  accent?: "green" | "red" | "blue" | "orange" | "purple";
};

const accentMap: Record<NonNullable<Props["accent"]>, string> = {
  green: "text-emerald-500 bg-emerald-50",
  red: "text-rose-500 bg-rose-50",
  blue: "text-blue-500 bg-blue-50",
  orange: "text-orange-500 bg-orange-50",
  purple: "text-indigo-500 bg-indigo-50",
};

export function AnalyticsStatCard({
  label,
  amount,
  icon,
  accent = "blue",
}: Props) {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700 ring-slate-100 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="text-lg font-semibold text-slate-800">{amount}</p>
        </div>
        {icon && (
          <div
            className={
              "flex h-9 w-9 items-center justify-center rounded-full text-sm " +
              accentMap[accent]
            }
          >
            {icon}
          </div>
        )}
      </div>
    </section>
  );
}
