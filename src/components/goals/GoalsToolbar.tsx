// src/components/goals/GoalsToolbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
  onCreateGoal: () => void;
}

export function GoalsToolbar({ onCreateGoal }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-[#F8FAFC]">Savings Goals</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">Track your financial milestones</p>
      </div>
      <Button 
        onClick={onCreateGoal}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-[#38BDF8] dark:hover:bg-[#0EA5E9] text-white cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        New Goal
      </Button>
    </div>
  );
}
