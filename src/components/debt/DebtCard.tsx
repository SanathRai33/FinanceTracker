// src/components/debt/DebtCard.tsx

"use client";

import { format } from "date-fns";

interface DebtCardProps {
  debt: {
    _id: string;
    contactName: string;
    contactEmail?: string;
    contactPhone?: string;
    amount: number;
    direction: "lent" | "borrowed";
    description?: string;
    startDate: string | Date;
    dueDate?: string | Date;
    status: "pending" | "paid" | "overdue";
    amountPaid?: number;
    notes?: string;
  };
}

export function DebtCard({ debt }: DebtCardProps) {
  // Format dates
  const startDate = new Date(debt.startDate);
  const dueDate = debt.dueDate ? new Date(debt.dueDate) : null;
  
  // Calculate remaining amount
  const remainingAmount = Math.max(debt.amount - (debt.amountPaid || 0), 0);
  const isFullyPaid = remainingAmount === 0;
  
  // Status colors
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    paid: "bg-emerald-100 text-emerald-800",
    overdue: "bg-rose-100 text-rose-800",
  };

  // Direction colors and labels
  const directionConfig = {
    lent: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      icon: "↑",
      label: "You lent",
      text: "text-emerald-700",
    },
    borrowed: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "↓",
      label: "You borrowed",
      text: "text-blue-700",
    },
  };

  const dir = directionConfig[debt.direction];

  return (
    <div className={`rounded-lg border ${dir.border} ${dir.bg} p-4`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className={`mt-1 rounded-md p-2 ${dir.text}`}>
            <span className="font-bold">{dir.icon}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900">
                {debt.contactName}
              </h3>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[debt.status]}`}>
                {debt.status.charAt(0).toUpperCase() + debt.status.slice(1)}
              </span>
            </div>
            <div className="mt-1 text-sm text-slate-600">
              {dir.label} <span className="font-bold">₹{debt.amount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {!isFullyPaid && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Progress</span>
            <span>₹{debt.amountPaid || 0} paid of ₹{debt.amount}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{
                width: `${((debt.amountPaid || 0) / debt.amount) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Dates */}
      <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <span>Started:</span>
          <span className="font-medium">
            {format(startDate, "dd MMM yyyy")}
          </span>
        </div>
        
        {dueDate && (
          <div className={`flex items-center gap-1 ${
            debt.status === 'overdue' ? 'text-rose-600 font-medium' : ''
          }`}>
            <span>Due:</span>
            <span className="font-medium">
              {format(dueDate, "dd MMM yyyy")}
            </span>
          </div>
        )}
      </div>

      {/* Contact Info */}
      {(debt.contactEmail || debt.contactPhone) && (
        <div className="mt-3 flex items-center gap-3 text-xs">
          {debt.contactEmail && (
            <div className="text-slate-500">
              {debt.contactEmail}
            </div>
          )}
          {debt.contactPhone && (
            <div className="text-slate-500">
              {debt.contactPhone}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      {debt.description && (
        <div className="mt-3 pt-3 border-t border-slate-200">
          <p className="text-sm text-slate-600">{debt.description}</p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          {isFullyPaid ? (
            <span className="text-emerald-600 font-medium">✅ Fully paid</span>
          ) : (
            <span className={dir.text}>₹{remainingAmount.toLocaleString()} remaining</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
            Add Payment
          </button>
          <button className="text-xs text-slate-600 hover:text-slate-700 font-medium cursor-pointer">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}