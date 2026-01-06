// app/components/dashboard/StatCard.tsx
import Card from "@/src/components/dashboard/Card";
import { ReactNode } from "react";

type StatCardProps = {
  label: string;
  amount: string;
  icon?: ReactNode;
  accent?: "green" | "red" | "blue" | "orange" | "purple";
};

const accentMap: Record<NonNullable<StatCardProps["accent"]>, string> = {
  green: "text-emerald-500 bg-emerald-50",
  red: "text-rose-500 bg-rose-50",
  blue: "text-blue-500 bg-blue-50",
  orange: "text-orange-500 bg-orange-50",
  purple: "text-indigo-500 bg-indigo-50",
};

export default function StatCard({
  label,
  amount,
  icon,
  accent = "blue",
}: StatCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-300">{label}</p>
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{amount}</p>
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
    </Card>
  );
}
