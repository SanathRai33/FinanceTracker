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
    <div className="group border rounded-xl p-6 hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${
              isCompleted
                ? "bg-emerald-100 text-emerald-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <Target className="h-5 w-5" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">
              {goal.name}
            </h3>
            <p className="text-sm text-slate-500">{goal.category}</p>
          </div>
        </div>
        <div className="h-12 w-12 flex items-center justify-center rounded-md border border-slate-200 p-1 bg-slate-50 shadow-md overflow-hidden">
          <img
            src={
              PRODUCTS[
                `${goal.name.toUpperCase()}_IMAGE` as keyof typeof PRODUCTS
              ]
            }
            alt="Target"
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 text-gray-700">
        <div className="flex justify-between text-sm mb-2">
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
          className="flex items-center gap-1"
        >
          <Plus size={14} />
          Add Progress
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={handleEdit}
          className="flex items-center gap-1"
        >
          <Edit size={14} />
          Edit Goal
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={handleDelete}
          className="flex items-center gap-1"
        >
          Delete
        </Button>
      </div>

      {/* Status Badge */}
      <div className="mt-4 pt-4 border-t">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            isCompleted
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {isCompleted ? "🎉 Completed!" : "In Progress"}
        </span>
      </div>
    </div>
  );
}
