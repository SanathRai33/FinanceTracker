// src/components/goals/GoalsListItem.tsx
"use client";

import { format } from "date-fns";
import { Goal } from "@/src/types/goal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PRODUCTS } from "@/src/constants/products";
import { Target, CheckCircle, Edit, Plus } from "lucide-react";
import {
  useDeleteGoal,
  useUpdateSavingsGoal,
  useUpdateSavingsProgress,
} from "@/src/hooks/useSavingsGoals";

interface Props {
  goal: Goal;
}

export function GoalsListItem({ goal }: Props) {
  const deleteGoal = useDeleteGoal();
  const updateGoal = useUpdateSavingsGoal(goal._id);
  const updateProgress = useUpdateSavingsProgress(goal._id);

  const progress = Math.min(
    (goal.currentAmount / goal.targetAmount) * 100,
    100
  );
  const isCompleted = progress >= 100;

  const handleEdit = () => {
    const newName = prompt("New goal name:", goal.name);
    const newTarget = prompt(
      "New target amount:",
      goal.targetAmount.toString()
    );

    if (newName && newTarget) {
      updateGoal.mutate({
        name: newName,
        targetAmount: Number(newTarget),
      });
    }
  };

  const handleAddProgress = () => {
    const amountStr = prompt(
      `Add amount to "${
        goal.name
      }" (current: ₹${goal.currentAmount.toLocaleString()})?`
    );
    const amount = Number(amountStr);

    if (!isNaN(amount) && amount > 0) {
      updateProgress.mutate({ amountToAdd: amount });
    }
  };

  const handleDelete = () => {
    if (confirm(`Delete "${goal.name}"?`)) {
      deleteGoal.mutate(goal._id);
    }
  };

  return (
    <div className="p-6 transition-all border group rounded-xl hover:shadow-lg bg-linear-to-r from-white to-gray-50 dark:from-[#1e1f20] dark:to-[#232425] border-slate-200 dark:border-slate-700 dark:text-white/40">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${
              isCompleted
                ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Target className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {goal.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-white/60">{goal.category}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 p-1 overflow-hidden border rounded-md shadow-md border-slate-200 bg-slate-50 dark:bg-[#232425] dark:border-slate-700 dark:shadow-white/10">
          <img
            src={
              PRODUCTS[
                `${goal.name.toUpperCase()}_IMAGE` as keyof typeof PRODUCTS
              ]
            }
            alt="Target"
            className="object-cover h-full"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 text-gray-700 dark:text-white/70">
        <div className="flex justify-between mb-2 text-sm">
          <span>Progress: ₹{goal.currentAmount.toLocaleString()}</span>
          <span >{progress.toFixed(0)}%</span>
        </div>
        <Progress
          value={progress}
          className={`h-3 ${isCompleted ? "bg-green-500" : ""}`}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={handleAddProgress}
          disabled={isCompleted}
          className="flex items-center gap-1 bg-green-700 cursor-pointer hover:text-white hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-800 dark:text-white"
        >
          <Plus size={14} />
          Add Progress
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={handleEdit}
          className="flex items-center gap-1 bg-blue-700 cursor-pointer hover:text-white hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white"
        >
          <Edit size={14} />
          Edit Goal
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={handleDelete}
          className="flex items-center gap-1 cursor-pointer hover:bg-red-800"
        >
          Delete
        </Button>
      </div>

      {/* Status Badge */}
      <div className="pt-4 mt-4 border-t">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            isCompleted
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
          }`}
        >
          {isCompleted ? "🎉 Completed!" : "In Progress"}
        </span>
      </div>
    </div>
  );
}
