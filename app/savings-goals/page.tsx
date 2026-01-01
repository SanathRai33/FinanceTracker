// app/goals/page.tsx
"use client";

import { useState } from "react";
import { GoalsToolbar } from "@/src/components/goals/GoalsToolbar";
import { GoalsList } from "@/src/components/goals/GoalsList";
import { GoalCreateModal } from "@/src/components/goals/GoalCreateModal";
import { GoalsEmptyState } from "@/src/components/goals/GoalsEmptyState";
import { useGoals } from "@/src/hooks/useSavingsGoals";
import { Loader2 } from "lucide-react";

export default function GoalsPage() {
  const { data: goals, isLoading } = useGoals();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-blue-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-500" />
          <p className="mt-2 text-sm text-slate-500">Loading your goals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 px-3 py-4 sm:px-4 sm:py-6 lg:px-6 min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-5">
        <GoalsToolbar onCreateGoal={() => setIsCreateModalOpen(true)} />
        
        {goals && goals.length > 0 ? (
          <GoalsList goals={goals} />
        ) : (
          <GoalsEmptyState onCreateGoal={() => setIsCreateModalOpen(true)} />
        )}
        
        <GoalCreateModal 
          isOpen={isCreateModalOpen} 
          onClose={() => setIsCreateModalOpen(false)} 
        />
      </div>
    </div>
  );
}
