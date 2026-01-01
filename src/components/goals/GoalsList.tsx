// src/components/goals/GoalsList.tsx
"use client";

import { GoalsListItem } from "./GoalsListItem";
import { Goal } from "@/src/types/goal";

interface Props {
  goals: Goal[];
}

export function GoalsList({ goals }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {goals.map((goal) => (
        <GoalsListItem key={goal._id} goal={goal} />
      ))}
    </div>
  );
}
