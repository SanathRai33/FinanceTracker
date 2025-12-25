// app/components/dashboard/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg bg-white p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
