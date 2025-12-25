// app/components/dashboard/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={
        "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 " +
        "sm:p-5 " +
        className
      }
    >
      {children}
    </section>
  );
}
