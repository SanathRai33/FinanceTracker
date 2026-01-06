// src/components/debt/DebtToolbar.tsx

"use client";

import { useState } from "react";
import { useAddDebtRecord } from "@/src/hooks/useDebts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export function DebtToolbar() {
  const addDebt = useAddDebtRecord();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    amount: "",
    direction: "lent" as "lent" | "borrowed",
    description: "",
    dueDate: "",
    amountPaid: "0",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDebt.mutate(
      {
        contactName: formData.contactName,
        contactEmail: formData.contactEmail || undefined,
        contactPhone: formData.contactPhone || undefined,
        amount: Number(formData.amount),
        direction: formData.direction,
        description: formData.description || undefined,
        startDate: new Date().toISOString(),
        dueDate: formData.dueDate
          ? new Date(formData.dueDate).toISOString()
          : undefined,
        amountPaid: Number(formData.amountPaid),
        notes: formData.notes || undefined,
      },
      {
        onSuccess: () => {
          setFormData({
            contactName: "",
            contactEmail: "",
            contactPhone: "",
            amount: "",
            direction: "lent",
            description: "",
            dueDate: "",
            amountPaid: "0",
            notes: "",
          });
          setIsAdding(false);
        },
      }
    );
  };

  return (
    <div className="flex flex-col justify-between gap-3 lg:px-20 ">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center ">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Debt Tracker</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Track money you have lent or borrowed.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => setIsAdding((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700"
          >
            {isAdding ? "Cancel" : "Add Debt"}
          </Button>
        </div>
      </div>
      <div>
        {isAdding && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-2 p-3 mt-3 text-gray-800 bg-white border rounded-md border-slate-200 dark:bg-[#1e1f20] dark:border-slate-700"
          >
            {/* Required Fields */}
            <div className="flex gap-3">
              <Input
                placeholder="Contact name *"
                value={formData.contactName}
                required
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactName: e.target.value,
                  }))
                }
              />

              <Input
                type="email"
                placeholder="Email (optional)"
                value={formData.contactEmail}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactEmail: e.target.value,
                  }))
                }
              />

              <Input
                type="tel"
                placeholder="Phone (optional)"
                value={formData.contactPhone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactPhone: e.target.value,
                  }))
                }
              />

              <Input
                type="number"
                placeholder="Amount *"
                value={formData.amount}
                required
                min="0"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, amount: e.target.value }))
                }
              />

              <Select
                value={formData.direction}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    direction: value as "lent" | "borrowed",
                  }))
                }
              >
                <SelectTrigger className="text-xs text-gray-900 dark:text-gray-300">
                  <SelectValue placeholder="Direction *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lent">Lent</SelectItem>
                  <SelectItem value="borrowed">Borrowed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3">
              {/* Optional Fields */}
              <Input
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />

              <Input
                type="date"
                placeholder="Due Date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, dueDate: e.target.value }))
                }
                className="dark:text-gray-300"
              />

              <Input
                type="number"
                placeholder="Amount Paid (0)"
                value={formData.amountPaid}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    amountPaid: e.target.value,
                  }))
                }
                min="0"
                className="dark:text-gray-300"
              />

              <Input
                placeholder="Notes"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, notes: e.target.value }))
                }
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="sm"
                disabled={addDebt.isPending}
                className="col-span-2 md:col-span-1 bg-emerald-600 hover:bg-emerald-700"
              >
                {addDebt.isPending ? "Saving..." : "Save Debt"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
