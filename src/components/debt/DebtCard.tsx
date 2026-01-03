// src/components/debt/DebtCard.tsx
"use client";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Edit3, 
  Trash2, 
  ArrowUpRight, 
  ArrowDownRight,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Clock,
  FileText
} from "lucide-react";
import { 
  useUpdateDebtRecord, 
  useDeleteDebtRecord, 
  useDebtRecord 
} from "@/src/hooks/useDebts";
import { cn } from "@/lib/utils";

// ✅ Proper TypeScript types
interface DebtRecord {
  _id: string;
  contactName: string;
  contactEmail?: string;
  contactPhone?: string;
  amount: number;
  direction: "lent" | "borrowed";
  description?: string;
  startDate: string;
  dueDate?: string;
  status: "pending" | "paid" | "overdue";
  amountPaid?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface DebtCardProps {
  debt: DebtRecord;
}

export function DebtCard({ debt }: DebtCardProps) {
  // Fetch full debt data for real-time updates
  const { data: fullDebt } = useDebtRecord(debt._id);
  const debtData: DebtRecord = fullDebt || debt;

  // Mutations
  const updateDebt = useUpdateDebtRecord(debt._id);
  const deleteDebt = useDeleteDebtRecord();

  // Calculations
  const amountPaid = debtData.amountPaid || 0;
  const remainingAmount = Math.max(debtData.amount - amountPaid, 0);
  const isFullyPaid = remainingAmount === 0;
  const progressPercentage = Math.min((amountPaid / debtData.amount) * 100, 100);

  // Date formatting
  const startDate = new Date(debtData.startDate);
  const dueDate = debtData.dueDate ? new Date(debtData.dueDate) : null;
  const isOverdue = dueDate && new Date() > dueDate && debtData.status !== "paid";

  // ✅ Fixed: Use only valid Badge variants
  const statusConfig = {
    pending: { 
      label: "Pending", 
      variant: "secondary" as const,
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    paid: { 
      label: "Paid", 
      variant: "default" as const, // Changed from "success" to "default"
      icon: CheckCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    overdue: { 
      label: "Overdue", 
      variant: "destructive" as const,
      icon: Clock,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
  };

  const directionConfig = {
    lent: { 
      label: "You Lent", 
      icon: ArrowUpRight,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      gradientFrom: "from-emerald-50",
      gradientTo: "to-white"
    },
    borrowed: { 
      label: "You Borrowed", 
      icon: ArrowDownRight,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradientFrom: "from-blue-50",
      gradientTo: "to-white"
    },
  };

  const status = statusConfig[debtData.status];
  const dir = directionConfig[debtData.direction];
  const StatusIcon = status.icon;
  const DirectionIcon = dir.icon;

  // Handlers
  const handleMarkPaid = () => {
    if (confirm("Mark this debt as fully paid?")) {
      updateDebt.mutate({ 
        status: "paid" as const, 
        amountPaid: debtData.amount 
      });
    }
  };

  const handleUpdatePayment = () => {
    const newAmountPaid = prompt(
      `Current paid: ₹${amountPaid.toLocaleString()}\nTotal amount: ₹${debtData.amount.toLocaleString()}\n\nEnter new paid amount:`,
      amountPaid.toString()
    );
    
    if (newAmountPaid !== null && newAmountPaid !== "") {
      const amount = Number(newAmountPaid);
      if (!isNaN(amount) && amount >= 0) {
        const newStatus = amount >= debtData.amount ? "paid" as const : 
                         isOverdue ? "overdue" as const : "pending" as const;
        
        updateDebt.mutate({ 
          amountPaid: amount,
          status: newStatus
        });
      }
    }
  };

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete the debt record for "${debtData.contactName}"?`)) {
      deleteDebt.mutate(debt._id);
    }
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:shadow-lg",
      dir.borderColor,
      "bg-gradient-to-br", // Fixed typo: was "bg-linear-to-br"
      dir.gradientFrom,
      dir.gradientTo
    )}>
      {/* Top header with contact info and status */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <DirectionIcon className={cn("h-5 w-5", dir.color)} />
            <h3 className="text-lg font-bold text-slate-900">
              {debtData.contactName}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-2">
            {debtData.contactPhone && (
              <div className="flex items-center gap-1.5 text-sm text-slate-600">
                <Phone className="h-3.5 w-3.5" />
                <span>{debtData.contactPhone}</span>
              </div>
            )}
            
            {debtData.contactEmail && (
              <div className="flex items-center gap-1.5 text-sm text-slate-600">
                <Mail className="h-3.5 w-3.5" />
                <span className="truncate max-w-[180px]">{debtData.contactEmail}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <Badge 
            variant={status.variant} 
            className={cn(
              "gap-1.5 px-3 py-1",
              // Add custom styling for the "paid" state since we're using "default" variant
              debtData.status === "paid" && "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
            )}
          >
            <StatusIcon className="h-3.5 w-3.5" />
            {status.label}
          </Badge>
          
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Calendar className="h-3.5 w-3.5" />
            <span>{format(startDate, "dd MMM yyyy")}</span>
          </div>
        </div>
      </div>

      {/* Amount and progress section */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-slate-700">
            {dir.label} • Total Amount
          </span>
          <span className="text-xl font-bold text-slate-900">
            ₹{debtData.amount.toLocaleString()}
          </span>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-500">
            <span>Payment Progress</span>
            <span className="font-medium">
              ₹{amountPaid.toLocaleString()} / ₹{debtData.amount.toLocaleString()}
            </span>
          </div>
          <Progress 
            value={progressPercentage} 
            className={cn(
              "h-2",
              debtData.status === "paid" && "bg-emerald-100 [&>div]:bg-emerald-600"
            )}
          />
          
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Paid</span>
            <span className={cn(
              "font-bold",
              isFullyPaid ? "text-emerald-600" : "text-slate-900"
            )}>
              {isFullyPaid ? "✅ Fully Paid" : `₹${remainingAmount.toLocaleString()} remaining`}
            </span>
          </div>
        </div>
      </div>

      {/* Due date warning */}
      {dueDate && (
        <div className={cn(
          "mb-4 rounded-lg p-3 text-sm",
          isOverdue 
            ? "bg-rose-50 text-rose-700 border border-rose-200"
            : "bg-slate-50 text-slate-700 border border-slate-200"
        )}>
          <div className="flex items-center gap-2 font-medium">
            <Calendar className="h-4 w-4" />
            <span>Due Date:</span>
            <span>{format(dueDate, "dd MMM yyyy")}</span>
            {isOverdue && (
              <Badge variant="destructive" className="ml-2">
                Overdue
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Description */}
      {debtData.description && (
        <div className="mb-5 rounded-lg bg-white/50 p-3 border border-slate-200">
          <div className="flex items-center gap-2 mb-1 text-sm font-medium text-slate-700">
            <FileText className="h-4 w-4" />
            Description
          </div>
          <p className="text-sm text-slate-600">{debtData.description}</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
        {!isFullyPaid && (
          <>
            <Button
              size="sm"
              variant="outline"
              onClick={handleUpdatePayment}
              disabled={updateDebt.isPending}
              className="flex-1 min-w-[140px] gap-2"
            >
              <Edit3 className="h-4 w-4" />
              Update Payment
            </Button>

            <Button
              size="sm"
              variant="default"
              onClick={handleMarkPaid}
              disabled={updateDebt.isPending}
              className={cn(
                "flex-1 min-w-[140px] gap-2",
                debtData.status !== "paid" && "bg-emerald-600 hover:bg-emerald-700"
              )}
            >
              <CheckCircle className="h-4 w-4" />
              Mark Paid
            </Button>
          </>
        )}

        <Button
          size="sm"
          variant="destructive"
          onClick={handleDelete}
          disabled={deleteDebt.isPending}
          className="flex-1 min-w-[140px] gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </div>

      {/* Last updated */}
      <div className="mt-4 pt-3 border-t border-slate-200">
        <p className="text-xs text-slate-400 text-center">
          Updated {format(new Date(debtData.updatedAt), "dd MMM yyyy 'at' h:mm a")}
        </p>
      </div>
    </div>
  );
}