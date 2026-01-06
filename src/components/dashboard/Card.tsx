// app/components/dashboard/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg bg-white dark:bg-[#1e1f20] dark:text-[#94A3B8] dark:ring-slate-700 p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
