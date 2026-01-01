// src/components/goals/GoalsListItem.tsx
"use client";

import { format } from "date-fns";
import { Goal } from "@/src/types/goal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, CheckCircle } from "lucide-react";
import { useDeleteGoal } from "@/src/hooks/useSavingsGoals";
import { PRODUCTS } from "@/src/constants/products";

interface Props {
  goal: Goal;
}

export function GoalsListItem({ goal }: Props) {
  const deleteGoal = useDeleteGoal();

  const progress = (goal.currentAmount / goal.targetAmount) * 100;
  const isCompleted = progress >= 100;
  
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
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
            src={PRODUCTS[`${goal.name.toUpperCase()}_IMAGE` as keyof typeof PRODUCTS]}
            alt="Target"
            className="h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="space-y-1">
          <Progress value={Math.min(progress, 100)} className="h-3" />
          <div className="flex justify-between text-xs text-slate-600">
            <span>Saved ₹{goal.currentAmount.toLocaleString()}</span>
            <span>Target ₹{goal.targetAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="h-3 w-3" />
            {format(new Date(goal.deadline), "MMM dd, yyyy")}
          </div>
          {!isCompleted && (
            <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
              {Math.round(progress)}% complete
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2 group-hover:opacity-100 transition-all duration-200">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white hover:text-white transition-all duration-200"
        >
          Add Money
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 transition-all duration-200"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H8a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-2m-6 2h4m-4 0h4m-8 0h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 text-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-all duration-200"
          onClick={() => deleteGoal.mutate(goal._id)}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
