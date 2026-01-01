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
        <h1 className="text-3xl font-bold text-slate-900">Savings Goals</h1>
        <p className="text-slate-600 mt-1">Track your financial milestones</p>
      </div>
      <Button 
        onClick={onCreateGoal}
        className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2"
      >
        <Plus className="h-4 w-4" />
        New Goal
      </Button>
    </div>
  );
}
